---
layout: post
title: Graham-Pollak determinant formula
date: 2025-04-07 11:12:00-0400
description: A beautiful formula for the determinant of the distance matrix of a tree.
categories: combinatorics graph-theory
tags:
related_posts: false
---

**Theorem**{:.paragraph} (Graham, Pollak; 1971):
Let $D_n$ be the distance matrix of a tree, i.e.,

$$ (D*n)*{xy} = d(x,y). $$

Then

$$\det(D_n) = (-1)^{n-1}(n-1)2^{n-2}.$$

Thus, surprisingly, the determinant of $D_n$ depends solely on the number of vertices of a tree and not at all on its structure.

**Proof.**{:.paragraph} Pick a leaf $\ell$ with neighbor $v$, and let $T'=T-\ell$ be the tree on $n-1$ vertices obtained by deleting $\ell$. Order the vertices so that $\ell$ is last. Since $\ell$ is a leaf, every path from $\ell$ to a vertex $i\neq\ell$ passes through $v$, hence $d_T(i,\ell)=d_{T'}(i,v)+1$. The operations $R_\ell\leftarrow R_\ell - R_v$ and $C_\ell\leftarrow C_\ell - C_v$ leave the determinant invariant and bring $D_n$ to

$$
\widetilde D = \begin{pmatrix} D_{n-1} & \mathbf 1 \\ \mathbf 1^T & -2 \end{pmatrix},
$$

where $D_{n-1}$ is the distance matrix of $T'$ and $\mathbf 1$ is the all-ones column. By the Schur complement,

$$
\det(D_n) \;=\; \det(D_{n-1})\cdot\bigl(-2 - \mathbf 1^T D_{n-1}^{-1}\mathbf 1\bigr). \qquad (\star)
$$

The remaining quantity has a clean closed form.

**Lemma.**{:.paragraph} _For any tree $T$ on $n\geq 2$ vertices, $D_T\,\tau = (n-1)\,\mathbf 1$, where $\tau_w := 2-\deg(w)$._

_Proof._ Induction on $n$. For $n=2$, $\tau=(1,1)^T$ and $D\tau=\mathbf 1$. For $n\geq 3$, take $\ell, v, T'$ as above. The only degrees that change between $T$ and $T'$ are at $v$ (loses one neighbor) and at $\ell$ (absent in $T'$), so

$$
(\tau_T)_w = (\tau_{T'})_w \text{ for } w\neq v,\ell, \qquad (\tau_T)_v = (\tau_{T'})_v - 1, \qquad (\tau_T)_\ell = 1.
$$

For $i\in T'$, using $d_T(i,\ell)=d_{T'}(i,v)+1$,

$$
(D_T\tau_T)_i
= \underbrace{\sum_{j\in T'} d_{T'}(i,j)(\tau_{T'})_j}_{=(D_{T'}\tau_{T'})_i\,=\,n-2}
\;-\; d_{T'}(i,v) \;+\; \bigl(d_{T'}(i,v)+1\bigr)\cdot 1
\;=\; n-1.
$$

For $i=\ell$, splitting $d_T(\ell,j) = d_{T'}(v,j)+1$ and using $\sum_{j\in T'}\tau_{T'}(j) = 2(n-1) - 2(n-2) = 2$,

$$
(D_T\tau_T)_\ell
= \sum_{j\in T'}\bigl(d_{T'}(v,j)+1\bigr)(\tau_T)_j
= \bigl[(D_{T'}\tau_{T'})_v - 0\bigr] + \bigl[2 - 1\bigr]
= n-1. \qquad\square
$$

Returning to $(\star)$: by the lemma $D_{n-1}^{-1}\mathbf 1 = \tfrac{1}{n-2}\,\tau_{T'}$ for $n\geq 3$, so

$$
\mathbf 1^T D_{n-1}^{-1}\mathbf 1 = \tfrac{1}{n-2}\sum_{j\in T'}\tau_{T'}(j) = \tfrac{2}{n-2},
$$

and $(\star)$ becomes

$$
\det(D_n) = \det(D_{n-1})\cdot\left(-2 - \tfrac{2}{n-2}\right) = -\tfrac{2(n-1)}{n-2}\,\det(D_{n-1}).
$$

The base case $n=2$ gives $\det(D_2) = -1 = (-1)^1\cdot 1\cdot 2^0$. Inductively for $n\geq 3$,

$$
\det(D_n) = -\tfrac{2(n-1)}{n-2}\cdot(-1)^{n-2}(n-2)\,2^{n-3} = (-1)^{n-1}(n-1)\,2^{n-2}. \qquad\square
$$
