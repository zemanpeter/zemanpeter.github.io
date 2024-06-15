---
layout: post
title: A group theoretic proof of the infinitude of the primes
date: 2024-06-14
description:
tags: number-theory
categories:
related_posts: false
---

For contradiction suppose that the set of all primes is finite and let $p$ be the largest prime.
Let $q$ be a prime factor $2^p-1$, i.e.,
$$2^p\equiv 1 \pmod{q}.$$
This implies that $2$ has order $p$ in $G = \mathbb{Z}_q\setminus\{0\}$.
By Lagrange's theorem, $p | |G| = q-1$, which implies that $p\leq q-1 < q$.
