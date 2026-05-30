---
layout: post
title: "Cumulative XOR via the shift operator on $\\mathbb{F}_2^\\infty$"
date: 2026-05-30 12:00:00+0200
description: A closed form for the prefix XOR $0 \oplus 1 \oplus \cdots \oplus n$, proved by telescoping against the unilateral shift on the sequence space $\mathbb{F}_2^\infty$.
categories: recreational-mathematics number-theory functional-analysis
tags:
related_posts: false
hidden: false
---

Let $\oplus$ denote bitwise XOR and write $f(n)=0\oplus 1\oplus 2\oplus\cdots\oplus n$ for $n\geq 0$.
The following formula is well-known:

$$
f(n)=\begin{cases}
n   & n\equiv 0\pmod 4,\\
1   & n\equiv 1\pmod 4,\\
n+1 & n\equiv 2\pmod 4,\\
0   & n\equiv 3\pmod 4.
\end{cases}
$$

Here is a proof using elementary functional-analysis.

**The sequence space.**{:.paragraph} Let $\mathbb F_2^\infty$ denote the space of eventually-zero $\mathbb F_2$-valued sequences, with standard basis vectors $e_0, e_1, e_2, \ldots$ The *unilateral shift* is the linear operator

$$
\sigma\colon\mathbb{F}_2^\infty\to\mathbb{F}_2^\infty,\qquad \sigma e_i=e_{i+1},
$$

i.e., insert a $0$ in position $0$ and shuffle everything up. Encode each $m\in\mathbb Z_{\geq 0}$ as its bit-vector $v_m\in\mathbb F_2^\infty$ (the $i$-th component of $v_m$ is the $i$-th bit of $m$); bitwise XOR becomes vector-space addition. The cumulative XOR becomes a partial sum,

$$
v_{f(n)}\;=\;\sum_{m=0}^{n} v_m,
$$

and the question is to evaluate this sum in $\mathbb F_2^\infty$.

**Intertwining doubling with the shift.**{:.paragraph} The arithmetic of doubling intertwines cleanly with $\sigma$: multiplying $m$ by $2$ shifts every bit up by one, and adding $1$ to an even number sets the low bit. In operator form,

$$
v_{2m}=\sigma v_m,\qquad v_{2m+1}=\sigma v_m+e_0.
$$

So consecutive pairs collapse to a constant: $v_{2m}+v_{2m+1}=2\sigma v_m+e_0=e_0$ (the $2$ vanishes in $\mathbb F_2$). This is the analogue, over $\mathbb F_2$, of a "$\sigma$-telescoping" identity — pairs of adjacent terms differ only on the range of $\sigma$, and the range of $\sigma$ is annihilated when added to itself.

**Odd $n$.**{:.paragraph} Write $n=2k+1$ and apply the pairing identity:

$$
v_{f(2k+1)}\;=\;\sum_{m=0}^{k}\bigl(v_{2m}+v_{2m+1}\bigr)\;=\;(k+1)\,e_0.
$$

The entire sum lands in the one-dimensional subspace $\langle e_0\rangle=\ker\sigma$ — the "boundary" complement of $\operatorname{im}\sigma$ — with coefficient $(k+1)\bmod 2$. Hence $f(2k+1)=(k+1)\bmod 2$, which is $0$ when $k$ is odd ($n\equiv 3\pmod 4$) and $1$ when $k$ is even ($n\equiv 1\pmod 4$).

**Even $n$.**{:.paragraph} Write $n=2k$ and peel off the last term against the odd case: $v_{f(2k)}=v_{f(2k-1)}+\sigma v_k$. The previous step gives $v_{f(2k-1)}=(k\bmod 2)\,e_0$, so

$$
v_{f(2k)}=\sigma v_k+(k\bmod 2)\,e_0.
$$

This decomposes $v_{f(2k)}$ into its $\operatorname{im}\sigma$-part and its $\ker\sigma$-part:

- $k$ even ($n\equiv 0\pmod 4$): $v_{f(2k)}=\sigma v_k$, so $f(n)=2k=n$.
- $k$ odd ($n\equiv 2\pmod 4$): $v_{f(2k)}=\sigma v_k+e_0$. Since bit $0$ of $2k$ vanishes, adding $e_0$ sets it, giving $f(n)=2k+1=n+1$.

This exhausts all residues.<span style="float:right">$\square$</span>

**Sanity check.**{:.paragraph} The first few values:

$$
\begin{array}{c|cccccccccc}
n      & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9\\\hline
f(n)   & 0 & 1 & 3 & 0 & 4 & 1 & 7 & 0 & 8 & 1
\end{array}
$$

Reading off: $f(0)=0$, $f(4)=4$, $f(8)=8$ ($n$); $f(1)=f(5)=f(9)=1$; $f(2)=3$, $f(6)=7$ ($n+1$); $f(3)=f(7)=0$. The four-periodic pattern is visible immediately.
