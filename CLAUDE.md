# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is Peter Zeman's personal academic website at [zemanpeter.github.io](https://zemanpeter.github.io), built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

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

# Serve with drafts
bundle exec jekyll serve --drafts
```

## Updating from Upstream

The `main` branch is based on `upstream/main` (https://github.com/alshedivat/al-folio), so merging upstream updates is straightforward:

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
- `display_categories: ["combinatorics", "group-theory", "number-theory"]`
- `display_tags: []`

### `_includes/header.liquid`
Upstream removed `nav_title` support. Restored with `{{- p.nav_title | default: p.title }}` in both navbar link locations.

### `_includes/teachings.liquid` (custom, not upstream)
Based on `projects.liquid`. Supports `img_light`/`img_dark` front matter fields on teaching entries, rendered with CSS classes `theme-img-light`/`theme-img-dark` for dark/light mode switching.

### `assets/css/_custom.scss` (custom, not upstream)
- LaTeX-like typography (justified text, hyphenation, ligatures)
- `.nobreak`, `.nohyphen` utility classes
- `.responsive-img` with breakpoint at 1400px
- `h2.category` forced to `--global-text-color` (upstream renders it grey)
- `mjx-container` display math: `overflow-x: visible` (removes unwanted scrollbar)
- `html[data-theme] .theme-img-light/dark` rules for teaching card images

### `_sass/_themes.scss`
Light mode `--global-theme-color` changed from `$purple-color` to `$blue-color`.

## Content Structure

| Directory | Purpose |
|---|---|
| `_pages/` | Static pages (about, teaching, publications, blog, notes, reading, qucsps26, papers) |
| `_posts/` | Blog posts (combinatorics, group theory, number theory) |
| `_teachings/` | Teaching collection entries (csp1, csp2, pg, qi, qit) |
| `_news/` | News items shown on about page |
| `_bibliography/papers.bib` | Publications (rendered by jekyll-scholar) |
| `assets/img/` | SVG images for teaching cards (light/dark variants named `foo.svg`/`foo-dark.svg`) |
| `assets/teaching/` | PDF handouts organized by course |
