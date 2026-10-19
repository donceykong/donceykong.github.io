---
layout: page
title: Projects
lede: Research, coursework, and things I've built at home, newest first. Most are still in progress. If you want to know more about any of them, reach out.
permalink: /pages/projects/
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "path" | reverse %}

<div class="card-grid breakout">
  {%- for project in sorted_projects %}
    {% include projects.liquid project=project featured=forloop.first %}
  {%- endfor %}
</div>
