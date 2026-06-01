---
layout: post
title: Matrix recurrence for non-backtracking walks
date: 2025-04-18 11:12:00-0400
description: A matrix recurrence for walks that avoid immediately retracing the last edge.
categories: recreational-mathematics combinatorics graph-theory
tags:
related_posts: false
---

Let $X$ be a simple graph and $A$ its adjacency matrix.
It is well-known that the number of length-$k$ walks from a vertex $x$ to $y$ corresponds to the entry $(x, y)$ of the $k$th power of $A$.
Suppose that we want to count walks of length $k$ in which no edge repeats twice in a row ([see this](https://codeforces.com/problemset/problem/1662/C)).

For $k = 1$, this is still achieved by the adjacency matrix $A$.
For $k = 2$, the matrix $A^2$ ignores the constraint.
All the walks that violate the constraint are of type $xyx$, for some edge $xy\in E(X)$.
For every vertex $x$, the number of such walks is exactly $\deg(x)$ and they are all stored on the diagonal of $A^2$.
Thus, for $k = 2$, we can refine the formula by subtracting $D$, where

$$
D_{xy} =
\begin{cases}
\deg(x) \quad &\text{if $x = y$,}\\
0 \quad &\text{if $x \neq y$}.
\end{cases}
$$

If $B_k$ should be the matrix counting walks of length $k$ in which no edge repeats twice in a row, then we can write

$$
\begin{aligned}
B_1 &= A,\\
B_2 &= A^2 - D.
\end{aligned}
$$

Notice that in the matrix $B_{k-1}A$, for $k\geq 3$, the entry $(x, y)$ stores the number of walks of the form $Wy$, where $W$ is a constraint-satisfying walk of length $k-1$ starting at $x$. We need to subtract those where $W$ ends with $\ldots y z$ (i.e.\ the next-to-last vertex of $W$ is $y$), since appending $y$ retraces the edge $yz$ and violates the constraint.

Each such bad walk $Wy$ corresponds to a constraint-satisfying walk of length $k-2$ from $x$ to $y$, followed by a step to some neighbor $z$ of $y$ different from the penultimate vertex of the $(k-2)$-walk (otherwise the extended $(k-1)$-walk would already violate the constraint), and then back to $y$. There are $\deg(y)-1$ valid choices of $z$ per $(k-2)$-walk, so the number of bad length-$k$ walks from $x$ to $y$ is $(B_{k-2})_{xy}\cdot (\deg(y)-1)$. This leads us to the following formula:

$$B_{k} = B_{k-1}A - B_{k-2}(D - I).$$
