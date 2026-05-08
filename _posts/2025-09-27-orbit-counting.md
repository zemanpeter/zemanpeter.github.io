---
layout: post
title: Orbit counting lemma
date: 2025-09-27 01:12:00-0400
description: A graph-theoretic proof of the orbit-counting theorem.
tags:
categories: combinatorics group-theory
related_posts: false
hidden: false
---

**Theorem.** Let $G\leq \mathrm{Sym}(X)$. Then the number of orbits of $G$ on $X$ is

$$
\frac{1}{|G|}\sum_{g\in G}\mathrm{fix}(g).
$$

*Proof.* We form a bipartite graph with the vertex set $G\cup X$.
There is an edge from $x \in X$ to $g\in G$ if $x^g = x$.
Recall that the Orbit-stabilizer theorem implies that

$$
|G| = |G_x|\cdot |\Delta|,
$$

where $x \in X$ and $\Delta$ is the orbit of $x$.
We can count the edges of this graph in two ways.

The number of edges incident to $x$ is $|G_x|$.
Thus, the number of edges incident to all points in $\Delta$ is $|G|$ and the number of edges incident to all points in $X$ is $k|G|$, where $k$ is the number of orbits.
On the other hand, the number of edges is exactly

$$
\sum_{g\in G}\mathrm{fix}(g).
$$

This completes the proof.
