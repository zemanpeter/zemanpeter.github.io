# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is Peter Zeman's personal academic website at [zemanpeter.github.io](https://zemanpeter.github.io), built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. For upstream-level details (full tech stack, CI workflows, common pitfalls) see `AGENTS.md` and `.github/copilot-instructions.md` — this file focuses on site-specific deviations.

## Local Development

This repo uses rbenv with Ruby 3.3.5 (set via `.ruby-version`) and Bundler 4.0.4.

```bash
# First time setup
rbenv install 3.3.5
rbenv local 3.3.5
gem install bundler:4.0.4
bundle install

# Serve locally (http://localhost:4000)
bundle exec jekyll serve

# Serve with drafts (use --future for future-dated posts)
bundle exec jekyll serve --drafts
```

**Pushes to `main` auto-deploy** via `.github/workflows/deploy.yml`. Test locally before pushing.

Jupyter notebook embedding is disabled (`jekyll-jupyter-notebook` commented out in `Gemfile`).

Upstream mandates `npx prettier . --write` before commits (per `AGENTS.md`); this fork does not enforce it — do not run Prettier unless asked.

## Updating from Upstream

The `main` branch is based on `upstream/main` (https://github.com/alshedivat/al-folio). First time, register the remote:

```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
```

Then merging upstream updates is straightforward:

```bash
git fetch upstream
git merge upstream/main
# Resolve conflicts in _config.yml, _includes/header.liquid, etc.
```

## Site-Specific Customizations

These are deviations from stock al-folio that must be preserved when merging upstream:

### `_config.yml`
- `theme_color: blue` (light mode; dark mode stays cyan — set in `_sass/_themes.scss`)
- `enable_publication_thumbnails: false` (widens publication list to col-sm-10)
- `max_author_limit:` (blank — show all authors)
- `group_by: none` (publications not grouped by year)
- `display_categories: []` / `display_tags: []` — unused; `_pages/blog.md` auto-derives from `site.categories` / `site.tags` so no manual curation is needed.

### `_includes/header.liquid`
Upstream removed `nav_title` support. Restored with `{{- p.nav_title | default: p.title }}` in both navbar link locations.

### `_pages/blog.md`
Category list at the top of the blog index iterates `site.categories` (sorted) instead of `site.display_categories`, so every category in front matter shows up automatically. Tags are deliberately not listed at the top — they still appear under individual posts.

### `_includes/teachings.liquid` (custom, not upstream)
Based on `projects.liquid`. Supports `img_light`/`img_dark` front matter fields on teaching entries, rendered with CSS classes `theme-img-light`/`theme-img-dark` for dark/light mode switching.

### `assets/css/_custom.scss` (custom, not upstream)
- LaTeX-like typography (justified text, hyphenation, ligatures)
- `.nobreak`, `.nohyphen` utility classes
- `.responsive-img` with breakpoint at 1400px
- `h2.category` forced to `--global-text-color` (upstream renders it grey)
- `mjx-container` display math: `overflow-x: visible` (removes unwanted scrollbar — don't reintroduce)
- `html[data-theme] .theme-img-light/dark` rules for teaching card images

### `_sass/_themes.scss`
Light mode `--global-theme-color` changed from `$purple-color` to `$blue-color`.

### `_layouts/bib.liquid`
The journal/year periodical line is suppressed for `category = {preprint}` entries (`{% unless entry.category == 'preprint' %}`) — preprints show only title, authors, the `note` field (e.g. "Under review, …"), and the arXiv button, not a "arXiv, YYYY" line. `year` is still kept in the bib for sorting. Journal/conference entries are unaffected.

## Content Structure

| Directory | Purpose |
|---|---|
| `_pages/` | Static pages (about, teaching, publications, blog, notes, reading, qucsps26, papers) |
| `_posts/` | Blog posts (combinatorics, group theory, number theory) |
| `_teachings/` | Teaching collection entries (csp1, csp2, pg, qi, qit, data-science-fundamentals, introduction-to-machine-learning) |
| `_news/` | News items shown on about page |
| `_bibliography/papers.bib` | Publications (rendered by jekyll-scholar) |
| `_projects/`, `_books/` | Empty — upstream stubs kept for compatibility |
| `assets/img/` | SVG images for teaching cards (light/dark variants named `foo.svg`/`foo-dark.svg`) |
| `assets/teaching/` | PDF handouts organized by course |

### Blog posts (`_posts/`)

Filename: `YYYY-MM-DD-slug.md`. Future-dated posts only render with `--future` or `--drafts`. Math is MathJax: `$...$` inline, `$$...$$` display.

```yaml
---
layout: post
title: Infinity of primes
date: 2026-02-03 01:12:00-0400
description: A group-theoretic proof of infinity of primes.
tags:
categories: number-theory group-theory   # space-separated subset of display_categories
related_posts: false
hidden: false
---
```

### Teaching entries (`_teachings/`)

`img_light`/`img_dark` are required by the custom `teachings.liquid` for dark-mode SVG switching.

```yaml
---
layout: page
title: Introduction to the complexity of CSP
img: assets/img/csplogo.svg
img_light: assets/img/csplogo.svg
img_dark:  assets/img/csplogo-dark.svg
description: NMAG563
importance: 1
category: "25/26: zimný semester (winter term)"
year: "25/26"
term: "winter"
related_publications: false
---
```
