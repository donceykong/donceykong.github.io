---
layout: page
title: Teaching
lede: Courses I've been a teaching assistant for at CU Boulder, across Mechanical Engineering and Computer Science.
permalink: /pages/teaching/
nav: true
nav_order: 3
---

{% assign courses = site.teaching | sort: "path" | reverse %}

<div class="card-grid breakout">
  {%- for course in courses %}
    {% include projects.liquid project=course %}
  {%- endfor %}
</div>
