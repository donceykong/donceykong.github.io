// Interactive semantic point-cloud viewer (three.js r128, global build).
// Markup: <figure class="semantic-map" data-envs="main_campus:Main Campus,kittredge_loop:Kittredge Loop"
//                 data-base="dir/" data-version="123" data-default="all">
// Each environment has a manifest <dir><env>_map.json (see _scripts/make_cu_multi_map.py)
// listing one dataset per robot plus "all".
(function () {
  "use strict";

  var PLAYBACK_SECONDS = 45; // the longest run replays in this many seconds

  function fetchBuffer(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ": " + r.status);
      return r.arrayBuffer();
    });
  }

  function fetchJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ": " + r.status);
      return r.json();
    });
  }

  // uint32 N | int16 xyz[3N] | uint8 label[N] [| uint8 robot[N]]      (map)
  // uint32 N | int16 xyz[3N] | float32 t[N] | float32 quat[4N]        (trajectory)
  function decode(buf, scale, tail, withRobots) {
    var n = new Uint32Array(buf, 0, 1)[0];
    var q = new Int16Array(buf, 4, n * 3);
    var xyz = new Float32Array(n * 3);
    for (var i = 0; i < xyz.length; i++) xyz[i] = q[i] * scale;
    var off = 4 + n * 6;
    var out = { n: n, xyz: xyz };
    if (tail === "labels") {
      out.labels = new Uint8Array(buf, off, n);
      if (withRobots) out.robots = new Uint8Array(buf, off + n, n);
    }
    // float32 needs 4-byte alignment, so copy the tail out.
    if (tail === "times") {
      out.t = new Float32Array(buf.slice(off, off + n * 4));
      out.q = new Float32Array(buf.slice(off + n * 4, off + n * 20));
    }
    return out;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function rgb(c) { return "rgb(" + c.join(",") + ")"; }

  // Show the reason on screen too; there is no console on a phone.
  function fail(status, what, err) {
    status.textContent = "Couldn't load " + what + (err && err.message ? " (" + err.message + ")" : "") + ".";
    console.error(err);
  }

  function init(root) {
    var status = root.querySelector(".semantic-map__status");
    if (!window.WebGLRenderingContext || !window.THREE) {
      status.textContent = "Interactive view needs WebGL.";
      return;
    }
    try {
      build(root);
    } catch (err) {
      fail(status, "the map", err);
    }
  }

  function build(root) {
    var THREE = window.THREE;
    var base = root.dataset.base || "";
    // Versioned URLs so a new deploy never mixes with cached data files.
    var version = root.dataset.version ? "?v=" + root.dataset.version : "";
    var envList = (root.dataset.envs || "").split(",").map(function (s) {
      var parts = s.split(":");
      return { id: parts[0].trim(), name: (parts[1] || parts[0]).trim() };
    }).filter(function (e) { return e.id; });
    var stage = root.querySelector(".semantic-map__stage");
    var status = root.querySelector(".semantic-map__status");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Scene ────────────────────────────────────────────────────────────────
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0b0d12, 1);
    stage.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0d12, 0.0009);

    var camera = new THREE.PerspectiveCamera(45, 1, 1, 6000);
    camera.up.set(0, 0, 1); // data is z-up

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = true;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.minDistance = 20;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.35;

    var material = new THREE.PointsMaterial({ size: 1.1, vertexColors: true, sizeAttenuation: true });

    // ── Colouring ────────────────────────────────────────────────────────────
    // colorMode: "semantic" (class colours) or "robot" (which robot saw it).
    var colorMode = "semantic";
    var visible = {};
    var colorVersion = 0; // bumped whenever colours need recomputing

    function recolor(env, entry) {
      var map = entry.map, colors = entry.colors, labels = env.manifest.labels;
      var robotColors = (env.datasets.all && env.datasets.all.robots || []).map(function (id) {
        return env.datasets[id].color;
      });
      var fixed = entry.dataset.color; // single-robot map
      for (var i = 0; i < map.n; i++) {
        var lid = map.labels[i];
        var info = labels[lid];
        var o = i * 3;
        if (!info || visible[lid] === false) {
          colors[o] = colors[o + 1] = colors[o + 2] = 0.07; // fade into background
          continue;
        }
        var c = colorMode === "robot"
          ? (fixed || (map.robots ? robotColors[map.robots[i]] : null) || info.color)
          : info.color;
        // Subtle height shading keeps structure readable from above.
        var t = (map.xyz[o + 2] - entry.zMin) / (entry.zMax - entry.zMin || 1);
        var shade = 0.72 + 0.38 * t;
        colors[o] = Math.min(1, c[0] / 255 * shade);
        colors[o + 1] = Math.min(1, c[1] / 255 * shade);
        colors[o + 2] = Math.min(1, c[2] / 255 * shade);
      }
      entry.geom.attributes.color.needsUpdate = true;
      entry.colorVersion = colorVersion;
    }

    // ── Environments (manifest, maps and tracks loaded on demand, cached) ────
    var envs = {};
    function getEnv(id) {
      if (envs[id]) return envs[id];
      envs[id] = fetchJSON(base + id + "_map.json" + version).then(function (manifest) {
        var env = { id: id, manifest: manifest, datasets: {}, maps: {}, tracks: {},
                    trajGroup: new THREE.Group(), maxDuration: 0 };
        manifest.datasets.forEach(function (d) { env.datasets[d.id] = d; });
        return loadTracks(env).then(function () { return env; });
      });
      envs[id].catch(function () { delete envs[id]; }); // allow a retry
      return envs[id];
    }

    function loadMap(env, id) {
      if (env.maps[id]) return env.maps[id];
      var d = env.datasets[id];
      env.maps[id] = fetchBuffer(base + d.map + version).then(function (buf) {
        var map = decode(buf, env.manifest.scale_m, "labels", d.robot_ids);
        var zMin = Infinity, zMax = -Infinity;
        for (var i = 2; i < map.xyz.length; i += 3) {
          if (map.xyz[i] < zMin) zMin = map.xyz[i];
          if (map.xyz[i] > zMax) zMax = map.xyz[i];
        }
        var geom = new THREE.BufferGeometry();
        var colors = new Float32Array(map.n * 3);
        geom.setAttribute("position", new THREE.BufferAttribute(map.xyz, 3));
        geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geom.computeBoundingBox();
        var entry = { dataset: d, map: map, geom: geom, colors: colors, zMin: zMin, zMax: zMax,
                      points: new THREE.Points(geom, material) };
        recolor(env, entry);
        return entry;
      });
      env.maps[id].catch(function () { delete env.maps[id]; });
      return env.maps[id];
    }

    // RViz-style pose axes: X red, Y green, Z blue, built from cylinders so they
    // stay visible (WebGL ignores line widths).
    var AXIS_LENGTH = 9, AXIS_RADIUS = 0.55;
    var axisMats = [0xff3b30, 0x34c759, 0x3d7bff].map(function (c) {
      return new THREE.MeshBasicMaterial({ color: c, fog: false });
    });
    function makeAxes(len, r) {
      var group = new THREE.Group();
      var cyl = new THREE.CylinderGeometry(r, r, len, 12);
      cyl.translate(0, len / 2, 0); // cylinder runs along +Y from the origin
      var x = new THREE.Mesh(cyl, axisMats[0]); x.rotation.z = -Math.PI / 2;
      var y = new THREE.Mesh(cyl, axisMats[1]);
      var z = new THREE.Mesh(cyl, axisMats[2]); z.rotation.x = Math.PI / 2;
      group.add(x, y, z);
      return group;
    }

    function loadTracks(env) {
      var robotSets = env.manifest.datasets.filter(function (d) { return d.traj; });
      return Promise.all(robotSets.map(function (d) {
        return fetchBuffer(base + d.traj + version).then(function (buf) {
          var tr = decode(buf, env.manifest.scale_m, "times");
          var color = new THREE.Color(rgb(d.color));
          var g = new THREE.BufferGeometry();
          g.setAttribute("position", new THREE.BufferAttribute(tr.xyz, 3));
          var line = new THREE.Line(g, new THREE.LineBasicMaterial({ color: color.clone().lerp(new THREE.Color(0xffffff), 0.3) }));
          line.position.z = 0.4;
          var marker = makeAxes(AXIS_LENGTH, AXIS_RADIUS);
          env.trajGroup.add(line);
          env.trajGroup.add(marker);
          env.maxDuration = Math.max(env.maxDuration, tr.t[tr.n - 1]);
          env.tracks[d.id] = { data: tr, line: line, marker: marker };
        });
      }));
    }

    var qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
    function placeMarker(track, time) {
      var tr = track.data, t = tr.t;
      if (time <= t[0]) time = t[0];
      if (time >= t[tr.n - 1]) time = t[tr.n - 1];
      var lo = 0, hi = tr.n - 1;
      while (lo < hi - 1) {
        var mid = (lo + hi) >> 1;
        if (t[mid] < time) lo = mid; else hi = mid;
      }
      var f = (time - t[lo]) / ((t[hi] - t[lo]) || 1);
      var a = lo * 3, b = hi * 3, p = tr.xyz;
      track.marker.position.set(
        p[a] + f * (p[b] - p[a]),
        p[a + 1] + f * (p[b + 1] - p[a + 1]),
        p[a + 2] + f * (p[b + 2] - p[a + 2])
      );
      var q = tr.q;
      qa.set(q[lo * 4], q[lo * 4 + 1], q[lo * 4 + 2], q[lo * 4 + 3]);
      qb.set(q[hi * 4], q[hi * 4 + 1], q[hi * 4 + 2], q[hi * 4 + 3]);
      track.marker.quaternion.copy(qa).slerp(qb, f);
    }

    // ── Camera framing ───────────────────────────────────────────────────────
    var center = new THREE.Vector3(), radius = 200, currentView = "orbit";
    function frame(bb) {
      bb.getCenter(center);
      radius = Math.max(bb.max.x - bb.min.x, bb.max.y - bb.min.y) / 2;
      controls.maxDistance = radius * 5;
    }
    var views = {
      orbit: function () {
        camera.position.set(center.x - radius * 0.45, center.y - radius * 1.0, center.z + radius * 0.62);
      },
      top: function () {
        camera.position.set(center.x, center.y - 0.01, center.z + radius * 1.75);
      },
    };
    function setView(name) {
      currentView = name;
      controls.target.copy(center);
      views[name]();
      controls.update();
    }

    // ── UI ───────────────────────────────────────────────────────────────────
    function button(parent, label, title, onClick, pressed) {
      var b = el("button", "semantic-map__btn", label);
      b.type = "button";
      b.title = title;
      if (pressed != null) b.setAttribute("aria-pressed", String(pressed));
      b.addEventListener("click", onClick);
      parent.appendChild(b);
      return b;
    }
    function group(parent, label) {
      var g = el("div", "semantic-map__group");
      g.setAttribute("role", "group");
      g.setAttribute("aria-label", label);
      parent.appendChild(g);
      return g;
    }

    // Environment picker (top-left)
    var envPicker = root.querySelector(".semantic-map__envs");
    var envBtns = {};
    envList.forEach(function (e) {
      envBtns[e.id] = button(envPicker, e.name, "Show " + e.name, function () { showEnv(e.id); }, false);
    });

    // Toolbar (top-right)
    var toolbar = root.querySelector(".semantic-map__toolbar");
    var colorGroup = group(toolbar, "Colour points by");
    var modeBtns = {
      semantic: button(colorGroup, "Semantic", "Colour points by semantic class", function () { setColorMode("semantic"); }, true),
      robot: button(colorGroup, "Robot", "Colour points by the robot that observed them", function () { setColorMode("robot"); }, false),
    };
    var viewGroup = group(toolbar, "View");
    button(viewGroup, "3D", "Perspective view", function () { setView("orbit"); });
    button(viewGroup, "Top", "Top-down view", function () { setView("top"); });
    var rotateBtn = button(toolbar, "Rotate", "Toggle auto-rotate", function () {
      controls.autoRotate = !controls.autoRotate;
      rotateBtn.setAttribute("aria-pressed", String(controls.autoRotate));
    }, controls.autoRotate);
    var showPaths = true;
    var pathBtn = button(toolbar, "Paths", "Toggle robot trajectories", function () {
      showPaths = !showPaths;
      if (currentEnv) currentEnv.trajGroup.visible = showPaths;
      pathBtn.setAttribute("aria-pressed", String(showPaths));
    }, true);
    if (root.requestFullscreen) {
      button(toolbar, "⤢", "Fullscreen", function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else root.requestFullscreen();
      });
    }
    renderer.domElement.addEventListener("pointerdown", function () {
      controls.autoRotate = false;
      rotateBtn.setAttribute("aria-pressed", "false");
    });

    function setColorMode(mode) {
      colorMode = mode;
      colorVersion++;
      Object.keys(modeBtns).forEach(function (k) { modeBtns[k].setAttribute("aria-pressed", String(k === mode)); });
      root.classList.toggle("is-robot-colors", mode === "robot");
      if (active) recolor(currentEnv, active);
    }

    // Robot picker (bottom-left), rebuilt per environment
    var picker = root.querySelector(".semantic-map__robots");
    var pickerBtns = {};
    function buildPicker(env) {
      picker.textContent = "";
      pickerBtns = {};
      env.manifest.datasets.forEach(function (d) {
        var b = el("button", "semantic-map__btn semantic-map__robot");
        b.type = "button";
        b.setAttribute("aria-pressed", "false");
        if (d.color) {
          var dot = el("span", "semantic-map__dot");
          dot.style.background = rgb(d.color);
          b.appendChild(dot);
        }
        b.appendChild(document.createTextNode(d.name));
        b.addEventListener("click", function () { select(d.id); });
        picker.appendChild(b);
        pickerBtns[d.id] = b;
      });
    }

    // Legend (class chips). The class list is shared by every environment; chips
    // for classes an environment doesn't contain are hidden in updateStats.
    var legend = root.querySelector(".semantic-map__legend");
    var chips = {};
    function buildLegend(env) {
      var labels = env.manifest.labels;
      var counts = (env.datasets.all || env.manifest.datasets[0]).label_counts;
      Object.keys(labels)
        .sort(function (a, b) { return (counts[b] || 0) - (counts[a] || 0); })
        .forEach(function (k) {
          visible[k] = true;
          var chip = el("button", "semantic-map__chip");
          chip.type = "button";
          chip.setAttribute("aria-pressed", "true");
          var sw = el("span", "semantic-map__swatch");
          sw.style.background = rgb(labels[k].color);
          chip.appendChild(sw);
          chip.appendChild(document.createTextNode(labels[k].name));
          chip.addEventListener("click", function () {
            visible[k] = !visible[k];
            colorVersion++;
            chip.setAttribute("aria-pressed", String(visible[k]));
            if (active) recolor(currentEnv, active);
          });
          legend.appendChild(chip);
          chips[k] = chip;
        });
    }

    var stats = root.querySelector(".semantic-map__stats");
    function updateStats(env, d) {
      var ids = d.traj ? [d.id] : (d.robots || []);
      var path = ids.reduce(function (s, id) { return s + (env.datasets[id].path_m || 0); }, 0);
      stats.textContent = d.points.toLocaleString() + " points · " + d.keyframes + " keyframes · " +
        (path >= 1000 ? (path / 1000).toFixed(1) + " km" : Math.round(path) + " m") +
        (ids.length > 1 ? " of paths" : " path");
      var envCounts = (env.datasets.all || d).label_counts;
      Object.keys(chips).forEach(function (k) {
        var c = d.label_counts[k] || 0;
        chips[k].title = c.toLocaleString() + " points — click to toggle";
        chips[k].disabled = c === 0;
        chips[k].hidden = !envCounts[k];
      });
    }

    // ── Switching ────────────────────────────────────────────────────────────
    var currentEnv = null, active = null, activeId = null, selecting = 0, loopSpan = 1;

    function showPoints(entry) {
      if (active) scene.remove(active.points);
      if (entry.colorVersion !== colorVersion) recolor(currentEnv, entry);
      active = entry;
      scene.add(entry.points);
    }

    function select(id) {
      var env = currentEnv;
      var token = ++selecting;
      activeId = id;
      Object.keys(pickerBtns).forEach(function (k) {
        pickerBtns[k].setAttribute("aria-pressed", String(k === id));
      });
      var d = env.datasets[id];
      updateStats(env, d);

      // Show only the selected robot's track (all of them for "all").
      var shown = d.traj ? [id] : Object.keys(env.tracks);
      loopSpan = 0;
      Object.keys(env.tracks).forEach(function (k) {
        var tr = env.tracks[k], on = shown.indexOf(k) >= 0;
        tr.line.visible = tr.marker.visible = on;
        if (on) loopSpan = Math.max(loopSpan, tr.data.t[tr.data.n - 1]);
      });

      var slow = setTimeout(function () { if (token === selecting) status.textContent = "Loading " + d.name + "…"; }, 150);
      loadMap(env, id).then(function (entry) {
        clearTimeout(slow);
        if (token !== selecting) return;
        showPoints(entry);
        status.textContent = "";
      }).catch(function (err) {
        clearTimeout(slow);
        if (token === selecting) fail(status, d.name, err);
      });
    }

    var defaultId = root.dataset.default || "all";
    function showEnv(id) {
      var token = ++selecting;
      Object.keys(envBtns).forEach(function (k) { envBtns[k].setAttribute("aria-pressed", String(k === id)); });
      var name = envBtns[id] ? envBtns[id].textContent : id;
      var slow = setTimeout(function () { if (token === selecting) status.textContent = "Loading " + name + "…"; }, 150);

      getEnv(id).then(function (env) {
        var frameId = env.datasets.all ? "all" : env.manifest.datasets[0].id;
        return loadMap(env, frameId).then(function (entry) { return [env, entry]; });
      }).then(function (res) {
        clearTimeout(slow);
        if (token !== selecting) return;
        var env = res[0], entry = res[1];
        if (currentEnv) scene.remove(currentEnv.trajGroup);
        currentEnv = env;
        scene.add(env.trajGroup);
        env.trajGroup.visible = showPaths;
        // Points slightly larger than the voxel spacing so surfaces read as solid.
        material.size = 1.1 * (env.manifest.map_voxel_m || 1);
        if (!legend.childNodes.length) buildLegend(env);
        buildPicker(env);
        frame(entry.geom.boundingBox);
        setView(currentView);
        var want = env.datasets[activeId] ? activeId : (env.datasets[defaultId] ? defaultId : env.manifest.datasets[0].id);
        showPoints(entry); // the framing map is already here; select() swaps if needed
        status.textContent = "";
        select(want);
        root.classList.add("is-ready");
      }).catch(function (err) {
        clearTimeout(slow);
        if (token === selecting) fail(status, name, err);
      });
    }

    // ── Render loop ──────────────────────────────────────────────────────────
    function resize() {
      var w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);
    else window.addEventListener("resize", resize);

    var onScreen = true;
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
      }).observe(root);
    }

    var start = performance.now();
    function tick(now) {
      requestAnimationFrame(tick);
      if (!onScreen) return;
      var env = currentEnv;
      if (env && showPaths && env.maxDuration > 0) {
        // Robots share a clock, so markers replay the runs in sync.
        var rate = env.maxDuration / PLAYBACK_SECONDS;
        var time = reduceMotion ? 0 : ((now - start) / 1000 * rate) % (loopSpan + 2 * rate);
        Object.keys(env.tracks).forEach(function (k) {
          if (env.tracks[k].marker.visible) placeMarker(env.tracks[k], time);
        });
      }
      controls.update();
      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);

    if (!envList.length) throw new Error("no environments configured");
    showEnv(envList[0].id);
  }

  function boot() {
    var roots = document.querySelectorAll(".semantic-map");
    Array.prototype.forEach.call(roots, function (root) {
      if (!window.IntersectionObserver) return init(root);
      // Defer downloading the map until it is close to the viewport.
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { io.disconnect(); init(root); }
      }, { rootMargin: "300px" });
      io.observe(root);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
