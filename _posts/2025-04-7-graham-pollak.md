---
layout: post
title: Graham-Pollak determinant formula
date: 2025-04-7 11:12:00-0400
description: A beautiful formula for the determinant of the distance matrix of a tree.
tags: trees determinant
categories: combinatorics
related_posts: false
---

**Theorem** (Graham, Pollak; 1971):
Let $D_n$ be the distance matrix of a tree, i.e.,

$$ (D_n)_{x,y} = d(x,y). $$

Then

$$\det(D_n) = (-1)^{n-1}(n-1)2^{n-2}.$$

Thus, surprisingly, the the determinant of $D_n$ dopends solely on on the number of the vertices of a tree and not at all on its structure.

**Is there some good combinatorial explanation of this formula?**
