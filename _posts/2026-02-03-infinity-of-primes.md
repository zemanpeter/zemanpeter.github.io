---
layout: post
title: Infinity of primes
date: 2026-02-03 01:12:00-0400
description: A group-theoretic proof of infinity of primes.
tags:
categories: number-theory group-theory
related_posts: false
hidden: false
---

Suppose that $p$ is the largest prime.
Then $2^p-1$ is composite and let $q$ be some prime dividing $2^p-1$.
Since $p$ is a prime, the order of $2$ in the multiplicative group $\mathbb{Z}_q^{\times}$ is $p$.
Since $q$ is a prime, the order of $\mathbb{Z}_q^\times$ is exactly $q-1$.
By Lagrange's theorem, $p \mid (q-1)$, which implies that $p < q$.
