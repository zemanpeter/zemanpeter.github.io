---
layout: post
title: Orbit counting lemma
date: 2025-09-27 01:12:00-0400
description: A graph-theoretic proof of the orbit-counting theorem.
categories: combinatorics group-theory
tags:
related_posts: false
hidden: false
---

**Theorem.**{:.paragraph} Let $G\leq \mathrm{Sym}(X)$. Then the number of orbits of $G$ on $X$ is

$$
\frac{1}{|G|}\sum_{g\in G}\mathrm{fix}(g).
$$

*Proof.* Form a bipartite graph with parts $X$ and $G$, putting an edge between $x \in X$ and $g\in G$ whenever $x^g = x$. We count its edges two ways.

From the $G$-side, vertex $g$ is incident to exactly $\mathrm{fix}(g)$ edges, so the total is

$$
\sum_{g\in G}\mathrm{fix}(g).
$$

From the $X$-side, vertex $x$ is incident to $\lvert G_x\rvert$ edges, where $G_x$ is the stabilizer of $x$. By the orbit–stabilizer theorem, $\lvert G_x\rvert\cdot\lvert\Delta\rvert = \lvert G\rvert$, where $\Delta$ is the orbit of $x$. Summing over a single orbit $\Delta$,

$$
\sum_{x\in\Delta}|G_x| = |\Delta|\cdot\frac{|G|}{|\Delta|} = |G|,
$$

so each orbit contributes $\lvert G\rvert$ to the edge count, and the total is $k\,\lvert G\rvert$ where $k$ is the number of orbits. Equating the two counts gives $k\,\lvert G\rvert = \sum_{g\in G}\mathrm{fix}(g)$.<span style="float:right">$\square$</span>
