// Interactive semantic point-cloud viewer (three.js r128, global build).
// Markup: <div class="semantic-map" data-map="...bin" data-traj="...bin" data-meta="...json">
(function () {
  "use strict";

  function fetchBuffer(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ": " + r.status);
      return r.arrayBuffer();
    });
  }

  // uint32 N | int16 xyz[3N] | (optional) uint8 label[N]
  function decode(buf, scale, withLabels) {
    var n = new Uint32Array(buf, 0, 1)[0];
    var q = new Int16Array(buf, 4, n * 3);
    var xyz = new Float32Array(n * 3);
    for (var i = 0; i < xyz.length; i++) xyz[i] = q[i] * scale;
    var labels = withLabels ? new Uint8Array(buf, 4 + n * 6, n) : null;
    return { n: n, xyz: xyz, labels: labels };
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function init(root) {
    var stage = root.querySelector(".semantic-map__stage");
    var status = root.querySelector(".semantic-map__status");

    if (!window.WebGLRenderingContext || !window.THREE) {
      status.textContent = "Interactive view needs WebGL.";
      return;
    }

    Promise.all([
      fetch(root.dataset.meta).then(function (r) { return r.json(); }),
      fetchBuffer(root.dataset.map),
      root.dataset.traj ? fetchBuffer(root.dataset.traj) : Promise.resolve(null),
    ]).then(function (res) {
      build(root, stage, status, res[0], res[1], res[2]);
    }).catch(function (err) {
      status.textContent = "Couldn't load the map.";
      console.error(err);
    });
  }

  function build(root, stage, status, meta, mapBuf, trajBuf) {
    var THREE = window.THREE;
    var map = decode(mapBuf, meta.scale_m, true);
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Scene ────────────────────────────────────────────────────────────────
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0b0d12, 1);
    stage.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0d12, 0.0011);

    var camera = new THREE.PerspectiveCamera(45, 1, 1, 5000);
    camera.up.set(0, 0, 1); // data is z-up

    // ── Points ───────────────────────────────────────────────────────────────
    var colors = new Float32Array(map.n * 3);
    var visible = {};
    Object.keys(meta.labels).forEach(function (k) { visible[k] = true; });

    var zMin = Infinity, zMax = -Infinity;
    for (var i = 0; i < map.n; i++) {
      var z = map.xyz[i * 3 + 2];
      if (z < zMin) zMin = z;
      if (z > zMax) zMax = z;
    }

    var geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(map.xyz, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    function recolor() {
      for (var i = 0; i < map.n; i++) {
        var info = meta.labels[map.labels[i]];
        var o = i * 3;
        if (!info || !visible[map.labels[i]]) {
          colors[o] = colors[o + 1] = colors[o + 2] = 0.07; // fade into background
          continue;
        }
        // Subtle height shading keeps structure readable from above.
        var t = (map.xyz[o + 2] - zMin) / (zMax - zMin || 1);
        var shade = 0.72 + 0.38 * t;
        colors[o] = Math.min(1, info.color[0] / 255 * shade);
        colors[o + 1] = Math.min(1, info.color[1] / 255 * shade);
        colors[o + 2] = Math.min(1, info.color[2] / 255 * shade);
      }
      geom.attributes.color.needsUpdate = true;
    }
    recolor();

    var material = new THREE.PointsMaterial({
      size: 1.1, vertexColors: true, sizeAttenuation: true,
    });
    var points = new THREE.Points(geom, material);
    scene.add(points);

    // ── Trajectory + robot marker ────────────────────────────────────────────
    var traj = null, marker = null, trajLine = null, trajLen = 0, cum = null;
    if (trajBuf) {
      traj = decode(trajBuf, meta.scale_m, false);
      var tGeom = new THREE.BufferGeometry();
      tGeom.setAttribute("position", new THREE.BufferAttribute(traj.xyz, 3));
      trajLine = new THREE.Line(tGeom, new THREE.LineBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.85,
      }));
      trajLine.position.z = 0.4;
      scene.add(trajLine);

      cum = new Float32Array(traj.n);
      for (var j = 1; j < traj.n; j++) {
        var dx = traj.xyz[j * 3] - traj.xyz[j * 3 - 3];
        var dy = traj.xyz[j * 3 + 1] - traj.xyz[j * 3 - 2];
        var dz = traj.xyz[j * 3 + 2] - traj.xyz[j * 3 - 1];
        cum[j] = cum[j - 1] + Math.sqrt(dx * dx + dy * dy + dz * dz);
      }
      trajLen = cum[traj.n - 1];

      marker = new THREE.Mesh(
        new THREE.SphereGeometry(2.2, 20, 14),
        new THREE.MeshBasicMaterial({ color: 0xffd166 })
      );
      marker.position.z = 1.5;
      scene.add(marker);
    }

    function placeMarker(dist) {
      // binary search the cumulative arc length
      var lo = 0, hi = traj.n - 1;
      while (lo < hi - 1) {
        var mid = (lo + hi) >> 1;
        if (cum[mid] < dist) lo = mid; else hi = mid;
      }
      var seg = cum[hi] - cum[lo] || 1;
      var f = (dist - cum[lo]) / seg;
      var a = lo * 3, b = hi * 3;
      marker.position.set(
        traj.xyz[a] + f * (traj.xyz[b] - traj.xyz[a]),
        traj.xyz[a + 1] + f * (traj.xyz[b + 1] - traj.xyz[a + 1]),
        traj.xyz[a + 2] + f * (traj.xyz[b + 2] - traj.xyz[a + 2]) + 1.5
      );
    }

    // ── Camera / controls ────────────────────────────────────────────────────
    geom.computeBoundingBox();
    var bb = geom.boundingBox;
    var center = new THREE.Vector3();
    bb.getCenter(center);
    var radius = Math.max(bb.max.x - bb.min.x, bb.max.y - bb.min.y) / 2;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = true;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.minDistance = 20;
    controls.maxDistance = radius * 5;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.35;

    var views = {
      orbit: function () {
        camera.position.set(center.x - radius * 0.45, center.y - radius * 1.0, center.z + radius * 0.62);
      },
      top: function () {
        camera.position.set(center.x, center.y - 0.01, center.z + radius * 1.75);
      },
    };
    function setView(name) {
      controls.target.copy(center);
      views[name]();
      controls.update();
    }
    setView("orbit");

    renderer.domElement.addEventListener("pointerdown", function () {
      controls.autoRotate = false;
      rotateBtn.setAttribute("aria-pressed", "false");
    });

    // ── UI ───────────────────────────────────────────────────────────────────
    var toolbar = root.querySelector(".semantic-map__toolbar");
    function button(label, title, onClick, pressed) {
      var b = el("button", "semantic-map__btn", label);
      b.type = "button";
      b.title = title;
      if (pressed != null) b.setAttribute("aria-pressed", String(pressed));
      b.addEventListener("click", onClick);
      toolbar.appendChild(b);
      return b;
    }
    button("3D", "Perspective view", function () { setView("orbit"); });
    button("Top", "Top-down view", function () { setView("top"); });
    var rotateBtn = button("Rotate", "Toggle auto-rotate", function () {
      controls.autoRotate = !controls.autoRotate;
      rotateBtn.setAttribute("aria-pressed", String(controls.autoRotate));
    }, controls.autoRotate);
    if (trajLine) {
      var trajBtn = button("Path", "Toggle robot trajectory", function () {
        trajLine.visible = marker.visible = !trajLine.visible;
        trajBtn.setAttribute("aria-pressed", String(trajLine.visible));
      }, true);
    }
    if (root.requestFullscreen) {
      button("⤢", "Fullscreen", function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else root.requestFullscreen();
      });
    }

    var legend = root.querySelector(".semantic-map__legend");
    Object.keys(meta.labels)
      .filter(function (k) { return meta.labels[k].count > 0; })
      .sort(function (a, b) { return meta.labels[b].count - meta.labels[a].count; })
      .forEach(function (k) {
        var info = meta.labels[k];
        var chip = el("button", "semantic-map__chip");
        chip.type = "button";
        chip.setAttribute("aria-pressed", "true");
        chip.title = info.count.toLocaleString() + " points — click to toggle";
        var sw = el("span", "semantic-map__swatch");
        sw.style.background = "rgb(" + info.color.join(",") + ")";
        chip.appendChild(sw);
        chip.appendChild(document.createTextNode(info.name));
        chip.addEventListener("click", function () {
          visible[k] = !visible[k];
          chip.setAttribute("aria-pressed", String(visible[k]));
          recolor();
        });
        legend.appendChild(chip);
      });

    var stats = root.querySelector(".semantic-map__stats");
    if (stats) {
      stats.textContent = map.n.toLocaleString() + " points · " +
        meta.keyframes + " keyframes · " + Math.round(trajLen) + " m path";
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
    var speed = trajLen / 40; // full loop in ~40 s
    function tick(now) {
      requestAnimationFrame(tick);
      if (!onScreen) return;
      if (marker && marker.visible) {
        placeMarker(reduceMotion ? 0 : ((now - start) / 1000 * speed) % trajLen);
      }
      controls.update();
      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);

    root.classList.add("is-ready");
    status.textContent = "";
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
