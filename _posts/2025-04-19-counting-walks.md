---
layout: post
title: Couting walks
date: 2025-04-19 11:12:00-0400
description: Recurrence relations for counting several types of walks.
tags: combinatorics
categories: mathematics
related_posts: false
---

Let $X$ be a simple graph and $A$ its adjacency matrix.
It is well-known that the number of length-$k$ walks from a vertex $x$ to $y$ corresponds to the entry $(x, y)$ of the $k$th power of $A$.

What if we impose some constraints on the walks? For instance, suppose that we want to count walks of length $k$ in which no edge repeats twice in a row; see for example [this](https://codeforces.com/problemset/problem/1662/C). It turns out that there is a nice formula to count such walks, although, it is a bit more involved.

For $k = 1$, this is still achieved by the adjacency matrix $A$.
For $k = 2$, the matrix $A^2$ ignores the constraint. However, this is not difficult to fix.
All the walks that violate the constraint are of type $xyx$, for some edge $xy\in E(X)$.
For every vertex $x$, the number of such walks is exactly $\deg(x)$ and they are all stored on the diagonal of $A^2$.
Thus, for $k = 2$, we can refine the formula by substracting $D$, where

$$
(D)_{xy} = 
\begin{cases}
\deg(x) \quad &\text{if $x = y$,}\\
0 \quad &\text{if $x \neq y$}.
\end{cases}
$$

If $B_k$ should be the matrix counting walks of length $k$ in which no edge repeats twice in a row, then we can write

$$
\begin{align*}
B_1 &= A,\\
B_2 &= A - D.
\end{align*}
$$

Notice that in the matrix $B_{k-1}A$, for $k\geq 3$, the entry $(x, y)$ stores the numbers of walks that are of the form $Wy$, where $W$ is some walk of length $k-1$ that starts at $x$ and satisfies the constraint.
We need to substract all the constraint-satisfying walks of length $k-1$ that end with $yz$ since all these walks yield a walk of length $k$ that violates the constraint.

Each such walk can be obtained by taking a constraint-satisfying walk of length $k-2$ from $x$ to $y$ and then choosing one of $\deg(y)-1$ possible edges from $y$.
Thus, the number of such walks from $x$ to $z$ is $(B_{k-2})_{xy}\cdot (\deg(y)-1)$.
This leads us to the following formula:

$$B_{k-1} = B_{k-1}A - B_{k-2}(D - I).$$

**Are there some simple formulas for counting walks with some other constraints?**
**For example, what if every edge can appear only at most once in every subwalk of length $\ell$?**.
