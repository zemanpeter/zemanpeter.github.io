---
layout: page
permalink: /teaching/
title: "výuka (teaching)"
description:
nav: true
nav_order: 2
display_categories: ["25/26: letný semester (summer term)",
                     "25/26: zimný semester (winter term)",
                     "budúce (upcoming)",
                     ]
horizontal: false
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_teaching = site.teachings | where: "category", category %}
  {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_teaching %}
      {% include teachings.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_teaching %}
      {% include teachings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
    <hr>
    <br>
  {% endfor %}
{% else %}
{% assign sorted_teaching = site.teachings | sort: "importance" %}
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_teaching %}
      {% include teachings.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_teaching %}
      {% include teachings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
