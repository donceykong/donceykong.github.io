---
layout: page
title: Projects
permalink: /pages/projects/
nav: true
nav_order: 3
horizontal: false
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

Here you will find various projects I have worked on over the years. I've ordered the projects such that the most recent projects are at the top. Keep in mind that these are still a work in progress, but if you'd like to learn more about any of them, definitely reach out!

If you click a link below, you can find more details about each project. 

<!-- pages/projects.md -->
<div class="projects">
<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "path" | reverse %}

<!-- Generate cards for each project -->

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
