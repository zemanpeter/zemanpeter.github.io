---
layout: post
title: IMO 1981/2 via generating functions
date: 2026-05-17 12:00:00+0200
description: A generating-functions proof that the average minimum of an r-subset of {1,...,n} is (n+1)/(r+1).
categories: recreational-mathematics combinatorics
tags:
related_posts: false
hidden: false
---

**Problem (IMO 1981, Problem 2).**{:.paragraph} Let $1\leq r\leq n$ and consider all $r$-element subsets of $\lbrace 1,2,\dots,n \rbrace$. Each such subset has a smallest element. Let $F(n,r)$ be the arithmetic mean of these smallest elements. Prove that

$$
F(n,r)=\frac{n+1}{r+1}.
$$

**Reformulation.**{:.paragraph} Write $S(n,r)$ for the _sum_ of the smallest elements over all $r$-subsets of $\lbrace 1,\dots,n \rbrace$, so that

$$
F(n,r)=\frac{S(n,r)}{\binom{n}{r}}.
$$

If we fix the smallest element to be $k$, the remaining $r-1$ elements are chosen from $\lbrace k+1,\dots,n \rbrace$, which has $n-k$ elements. Hence

$$
S(n,r)=\sum_{k=1}^{n-r+1} k\binom{n-k}{r-1}.
$$

The claim $F(n,r)=\frac{n+1}{r+1}$ is equivalent to

$$
S(n,r)=\binom{n+1}{r+1},
$$

because $\frac{n+1}{r+1}\binom{n}{r}=\binom{n+1}{r+1}$.

**Generating functions.**{:.paragraph} Recognize $S(n,r)$ as the $n$-th coefficient of a product of two familiar series. From

$$
\sum_{k\geq 1} k\,x^k = \frac{x}{(1-x)^2},
\qquad
\sum_{m\geq 0}\binom{m}{r-1}x^{m}=\frac{x^{r-1}}{(1-x)^{r}},
$$

the Cauchy product is

$$
\frac{x}{(1-x)^2}\cdot \frac{x^{r-1}}{(1-x)^{r}}
=\frac{x^{r}}{(1-x)^{r+2}}
=\sum_{n\geq 0}\left(\sum_{k+m=n} k\binom{m}{r-1}\right)x^{n}.
$$

The inner sum is precisely $S(n,r)$ (terms with $k=0$ or $m<r-1$ contribute nothing), so

$$
S(n,r)=[x^{n}]\,\frac{x^{r}}{(1-x)^{r+2}}=[x^{\,n-r}]\,\frac{1}{(1-x)^{r+2}}.
$$

The negative binomial expansion $\frac{1}{(1-x)^{r+2}}=\sum_{j\geq 0}\binom{j+r+1}{r+1}x^{j}$ then gives

$$
S(n,r)=\binom{(n-r)+r+1}{r+1}=\binom{n+1}{r+1}.
$$

Dividing by $\binom{n}{r}$,

$$
F(n,r)=\frac{\binom{n+1}{r+1}}{\binom{n}{r}}=\frac{(n+1)!/((r+1)!(n-r)!)}{n!/(r!(n-r)!)}=\frac{n+1}{r+1}.
$$

**A bijective proof.**{:.paragraph} The identity $S(n,r)=\binom{n+1}{r+1}$ also admits a simple bijective argument. To choose an $(r+1)$-subset of $\lbrace 1,\dots,n+1 \rbrace$, pick the second-smallest element $k+1\in\lbrace 2,\dots,n-r+2 \rbrace$, then choose the smallest element from $\lbrace 1,\dots,k \rbrace$ (giving $k$ options), and finally pick the remaining $r-1$ elements from $\lbrace k+2,\dots,n+1 \rbrace$ (giving $\binom{n-k}{r-1}$ options). Summing over $k$ recovers exactly $\sum_{k\geq 1}k\binom{n-k}{r-1}=S(n,r)$. The generating-functions calculation is the algebraic shadow of this bijection: the factor $\tfrac{x}{(1-x)^2}=\sum k x^k$ encodes the choice of the smallest element together with its label $k$, and $\tfrac{x^{r-1}}{(1-x)^r}=\sum\binom{m}{r-1}x^m$ encodes the choice of the upper $r-1$ elements.

**Small cases.**{:.paragraph} For $n=4$, $r=2$ the six $2$-subsets of $\lbrace 1,2,3,4 \rbrace$ have minima $1,1,1,2,2,3$, summing to $10=\binom{5}{3}$ and averaging $\tfrac{10}{6}=\tfrac{5}{3}=\tfrac{n+1}{r+1}$. For $r=1$ the formula gives $F(n,1)=\tfrac{n+1}{2}$, which is just the average of $\lbrace 1,\dots,n \rbrace$. For $r=n$ there is a unique subset with minimum $1$, and indeed $\tfrac{n+1}{n+1}=1$.
