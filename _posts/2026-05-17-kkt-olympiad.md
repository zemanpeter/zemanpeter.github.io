---
layout: post
title: SKMO 2026/1 via KKT conditions
date: 2026-04-05 12:00:00+0200
description: Solving a problem from SKMO with the Karush–Kuhn–Tucker conditions.
categories: recreational-mathematics optimization
tags:
related_posts: false
hidden: false
---


**Problem (SKMO 2026, Problem 1).** Let $x,y,z$ be positive real numbers such that

$$
x^2+y^2+z^2=75.
$$

Suppose that two of the three sums $x+y$, $y+z$, $z+x$ are at least $10$. Determine the smallest and largest possible value of the remaining sum.

The natural toolkit is Lagrange multipliers with inequality constraints — the Karush–Kuhn–Tucker conditions. A purely algebraic argument also works (and we give one below), but KKT makes the structure transparent.

By symmetry we may assume

$$
x+y\geq 10,\qquad y+z\geq 10,
$$

and ask for the smallest and largest possible value of $x+z$.

**KKT conditions.** For a minimization problem $\min f$ subject to an equality constraint $h=0$ and inequality constraints $g_i\leq 0$, a (regular) local minimum admits multipliers $\lambda\in\mathbb{R}$ and $\mu_i\geq 0$ such that

$$
\nabla f + \lambda\,\nabla h + \sum_i \mu_i\,\nabla g_i = 0,
\qquad \mu_i\, g_i = 0 \text{ for each } i.
$$

The slackness condition $\mu_i g_i = 0$ says that each inequality is either *active* ($g_i=0$) or has zero multiplier. The sign requirement $\mu_i\geq 0$ singles out minima; maxima satisfy the same equations with $\mu_i\leq 0$ (equivalently, replace $f$ by $-f$).

**KKT formulation.**
We optimize $f(x,y,z)=x+z$ subject to the equality constraint $x^2+y^2+z^2=75$ and the inequality constraints

$$
10-x-y\leq 0,\qquad 10-y-z\leq 0.
$$

For the minimization, the Lagrangian is

$$
\mathcal L
= x+z
+\lambda(x^2+y^2+z^2-75)
+\mu(10-x-y)
+\nu(10-y-z),
\qquad \mu,\nu\geq 0.
$$

The KKT stationarity conditions read

$$
1+2\lambda x=\mu,\qquad
2\lambda y=\mu+\nu,\qquad
1+2\lambda z=\nu,
$$

together with the complementary slackness conditions $\mu(10-x-y)=0$ and $\nu(10-y-z)=0$.

**Both inequality constraints are active.**
If both were inactive then $\mu=\nu=0$ and the middle equation forces $2\lambda y=0$; since $y>0$ this gives $\lambda=0$, but then the first equation becomes $1=0$. If only $x+y=10$ is active, then $\nu=0$, the third equation gives $\lambda=-\tfrac{1}{2z}<0$, and substituting into the middle equation yields $\mu=2\lambda y=-\tfrac{y}{z}<0$, contradicting $\mu\geq 0$. The other one-active case is symmetric.

Therefore $x+y=10$ and $y+z=10$, so $x=z$. Writing $x=z=a$ and $y=10-a$, the sphere condition becomes

$$
2a^2 + (10-a)^2 = 75.
$$

Expanding,

$$
2a^2 + 100 - 20a + a^2 = 75
\quad\Longleftrightarrow\quad
3a^2 - 20a + 25 = 0
\quad\Longleftrightarrow\quad
(3a-5)(a-5)=0.
$$

So $a=5$ or $a=\tfrac{5}{3}$, giving two candidate triples

$$
P_1 = (5,5,5), \qquad P_2 = \bigl(\tfrac{5}{3},\,\tfrac{25}{3},\,\tfrac{5}{3}\bigr),
$$

with $x+z=10$ at $P_1$ and $x+z=\tfrac{10}{3}$ at $P_2$.

**Sign of the multipliers.** Plugging each candidate into the KKT system,

$$
P_1:\ \lambda=-\tfrac{1}{5},\ \mu=\nu=-1,
\qquad
P_2:\ \lambda=\tfrac{1}{5},\ \mu=\nu=\tfrac{5}{3}.
$$

Only $P_2$ has $\mu,\nu\geq 0$, so $P_2$ is the KKT point for the minimization. At $P_1$ the multipliers are reversed in sign — exactly the pattern required by the KKT system for the *maximization* (which has the right-hand sides of the stationarity conditions negated). Hence

$$
\min(x+z) = \tfrac{10}{3}, \qquad \max(x+z) = 10,
$$

attained at $P_2$ and $P_1$ respectively.

**A purely algebraic argument.**
KKT singles out the two candidates but, strictly speaking, only certifies that they are stationary; one still has to rule out the values outside $[\tfrac{10}{3},10]$. Here is a self-contained inequality proof. Write $s=x+z$. From $x\geq 10-y$ and $z\geq 10-y$,

$$
\min(x,z)\geq 10-y,
$$

and since $\min(x,z)\leq \tfrac{s}{2}$,

$$
y \geq 10-\tfrac{s}{2}.
$$

On the other hand $x^2+z^2\geq \tfrac{(x+z)^2}{2}=\tfrac{s^2}{2}$, so

$$
y^2 \leq 75-\tfrac{s^2}{2}.
$$

Combining,

$$
\left(10-\tfrac{s}{2}\right)^2 \leq 75-\tfrac{s^2}{2},
$$

which after expansion and multiplication by $4$ becomes

$$
3s^2-40s+100 \leq 0,
\quad\text{i.e.}\quad
(3s-10)(s-10)\leq 0.
$$

Therefore $\tfrac{10}{3}\leq s\leq 10$, as KKT predicted.

**The bounds are attained.**
The lower bound is attained at $x=z=\tfrac{5}{3}$, $y=\tfrac{25}{3}$: indeed

$$
x^2+y^2+z^2 = \tfrac{25}{9}+\tfrac{625}{9}+\tfrac{25}{9} = \tfrac{675}{9} = 75,
$$

and $x+y = y+z = 10$, while $x+z = \tfrac{10}{3}$. The upper bound is attained at $x=y=z=5$, where all three pairwise sums equal $10$.

The smallest possible value of the remaining sum is $\tfrac{10}{3}$ and the largest is $10$.
