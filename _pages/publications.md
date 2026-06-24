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
{%- capture exposition_bib %}{% bibliography -q @*[category=exposition]* %}{% endcapture -%}
{%- assign preprint_count = preprint_bib | split: "<li" | size | minus: 1 -%}
{%- assign journal_count = journal_bib | split: "<li" | size | minus: 1 -%}
{%- assign conference_count = conference_bib | split: "<li" | size | minus: 1 -%}
{%- assign exposition_count = exposition_bib | split: "<li" | size | minus: 1 -%}

<style>
  .papers-nav {
    position: sticky;
    top: 57px; /* height of fixed navbar */
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.6rem 0;
    margin-bottom: 1.5rem;
    background-color: var(--global-bg-color);
    border-bottom: 1px solid var(--global-divider-color);
  }
  .papers-nav a {
    display: inline-block;
    padding: 0.3rem 0.9rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    font-size: 0.85rem;
    line-height: 1.2;
    color: var(--global-text-color);
    text-decoration: none;
    white-space: nowrap;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }
  .papers-nav a:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .papers-nav a.active {
    background-color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: #fff;
  }
  .papers-nav a .count {
    opacity: 0.65;
    font-size: 0.78em;
    margin-left: 0.25rem;
  }
  #preprints,
  #journal,
  #conference,
  #exposition {
    scroll-margin-top: 120px; /* navbar + sticky pills */
    margin-top: 1.8rem;
  }
</style>

<nav class="papers-nav">
  <a href="#preprints">preprints<span class="count">{{ preprint_count }}</span></a>
  <a href="#journal">journal<span class="count">{{ journal_count }}</span></a>
  <a href="#conference">conference<span class="count">{{ conference_count }}</span></a>
  <a href="#exposition">exposition<span class="count">{{ exposition_count }}</span></a>
</nav>

### preprints {#preprints}

<div class="publications">

{{ preprint_bib }}

</div>

### journal papers {#journal}

<div class="publications">

{{ journal_bib }}

</div>

### conference proceedings {#conference}

<div class="publications">

{{ conference_bib }}

</div>

### exposition {#exposition}

<div class="publications">

{{ exposition_bib }}

</div>

<script>
  (function () {
    const links = Array.from(document.querySelectorAll(".papers-nav a"));
    const byId = {};
    links.forEach((l) => (byId[l.getAttribute("href").slice(1)] = l));
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const active = byId[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  })();
</script>
