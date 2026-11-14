---
layout: page
permalink: /publications/
title: papers
nav: true
nav_order: 3
---

{%- capture preprint_bib %}{% bibliography -q @*[category=preprint]* %}{% endcapture -%}
{%- capture journal_bib %}{% bibliography -q @*[category=journal]* %}{% endcapture -%}
{%- capture conference_bib %}{% bibliography -q @*[category=conference]* %}{% endcapture -%}
{%- assign preprint_count = preprint_bib | split: "<li" | size | minus: 1 -%}
{%- assign journal_count = journal_bib | split: "<li" | size | minus: 1 -%}
{%- assign conference_count = conference_bib | split: "<li" | size | minus: 1 -%}

<div id="publication-filters" class="publication-filters" hidden>
  <div class="publication-filter-label" id="publication-filter-label">filter by category</div>
  <div class="publication-filter-buttons" role="group" aria-labelledby="publication-filter-label">
    <button type="button" data-topic="all" aria-pressed="true">all<span class="count" aria-hidden="true"></span></button>
    {% for topic in site.data.publication_topics %}
      <button type="button" data-topic="{{ topic[0] | escape }}" aria-pressed="false">
        {{ topic[1] | escape }}<span class="count" aria-hidden="true"></span>
      </button>
    {% endfor %}
  </div>
  <p id="publication-filter-status" class="publication-filter-status" role="status" aria-live="polite" aria-atomic="true"></p>
</div>

<nav class="papers-nav" aria-label="Publication types">
  <a href="#preprints">preprints<span class="count">{{ preprint_count }}</span></a>
  <a href="#journal">journal<span class="count">{{ journal_count }}</span></a>
  <a href="#conference">conference<span class="count">{{ conference_count }}</span></a>
</nav>

### preprints {#preprints}

<div class="publications" data-publication-section="preprints">

{{ preprint_bib }}

</div>

### journal papers {#journal}

<div class="publications" data-publication-section="journal">

{{ journal_bib }}

</div>

### conference proceedings {#conference}

<div class="publications" data-publication-section="conference">

{{ conference_bib }}

</div>

<script src="{{ '/assets/js/publication-filters.js' | relative_url }}" defer></script>
