---
layout: default
title: About
permalink: /
---

<div class="container">
  <section class="hero">
    <div>
      <p class="eyebrow">PhD Candidate · ARPG · CU Boulder</p>
      <h1>Doncey Albin</h1>
      <p class="hero__lede">
        I'm a PhD candidate in the <strong>Autonomous Robotics and Perception Group</strong> at the University of Colorado Boulder, advised by Professor Christoffer Heckman. My research focuses on perception and navigation, most recently <strong>multi-robot mapping and navigation</strong>.
      </p>
      <p class="hero__lede">
        I care about real-world robotics, so I prioritize work that is validated on physical systems, despite the frustrating bottlenecks that often come with it.
      </p>
      <div class="button-row">
        <a class="btn btn--primary" href="{{ '/pages/projects/' | relative_url }}">View projects</a>
        <a class="btn" href="{{ '/cv/' | relative_url }}">CV</a>
        <a class="btn" href="https://github.com/{{ site.github_username }}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          GitHub
        </a>
      </div>
      <ul class="interests" aria-label="Research interests">
        <li>Multi-robot SLAM</li>
        <li>Semantic mapping</li>
        <li>LiDAR perception</li>
        <li>Field robotics</li>
      </ul>
    </div>
    <figure class="hero__photo">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Doncey Albin">
    </figure>
  </section>

  <section class="section">
    <div class="section__head">
      <h2>Selected work</h2>
      <a href="{{ '/pages/projects/' | relative_url }}">All projects →</a>
    </div>
    {% assign featured = site.projects | sort: "path" | reverse %}
    <div class="card-grid">
      {%- for project in featured limit: 3 %}
        {% include projects.liquid project=project %}
      {%- endfor %}
    </div>
  </section>

  <section class="section">
    <div class="split">
      <div class="prose">
        <h2 style="margin-top: 0;">Community</h2>
        <p>In 2017 I was selected as the keynote speaker at the Denver Kids' Annual Breakfast Gala. Denver Kids' mission is to make sure every student in Denver graduates, and its counselors truly make that happen. Denver Kids made an incredible impact on my life and my siblings' lives, so giving back to them at that level was an honor.</p>
        <p>Public speaking was new to me, and speaking in front of such a large crowd was intimidating. It took months to prepare, and I'm glad I did, because in the end it all worked out.</p>
        <p>If you're interested in the work Denver Kids does, <a href="https://www.denverkids.org/about-us">check them out here</a>.</p>
        <p style="color: var(--muted); font-size: 0.95rem;">Outside of my PhD, I work on projects at home when I can find the time, and I have major interests in art, skateboarding, and community.</p>
      </div>
      <div class="embed">
        <iframe src="https://www.youtube-nocookie.com/embed/wJMUvAT-uEM" title="Denver Kids keynote speech" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</div>
