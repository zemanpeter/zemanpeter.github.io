---
layout: page
title: "Quantum Constraint Satisfaction Problems 2026"
nav_title: "qucsps26"
permalink: /qucsps2026/
description: Sattelite workshop of ICALP 2026.
nav: true
nav_order: 1
horizontal: false
---

* [Aim and scope](#background)
* [Call for talks](/qucsps2026/cfp/)
* [Programme](#programme)
* [Organizers](#organizers)

<hr>

### Aim and scope {#background}

The theme of this workshop lies at the intersection of two topics which have recently achieved breakthrough results that have enriched our understanding of computational complexity.

**Nonlocal games.**
The first result, succinctly summarized as $$\textsf{MIP}^{*} = \textsf{RE}$$, concerns *non-local games* (also known as Bell inequalities in the physics literature, or multi-party verifier-prover games). These games provide a mathematical framework to study how information can be communicated with two parties that have access limited to shared resources.
In a typical non-local game, we have two players, Alice and Bob which receive questions from a Verifier who is deciding a predicate. The players respond with answers aiming to convince the verifier that the predicate is true. 
Classical players can only use shared randomness for formulating their answers, whereas quantum players may share some quantum resource, e.g. an entangled pair of particles.
Using quantum resources allows them to exhibit correlations that surpass classical limits.
Roughly speaking, the result $$\textsf{MIP}^{*} = \textsf{RE}$$ demonstrates that multiple provers with access to quantum resources are powerful enough to verify solutions to even uncomputable problems.
Besides proving equality between two ostensibly different complexity classes, the work also refuted an open conjecture in functional analysis called Connes embedding problem. 
Thus, this result draws an important bridge between computability, quantum information, and mathematical physics.

**Constraint satisfaction problems.**
The second result is the Bulatov-Zhuk dichotomy (2017) and concerns *constraint satisfaction problems (CSPs)*, which capture some of the most fundamental computational problems, including linear equations, graph colourings, and variants and generalizations of satisfiability. Informally, an *instance* of a CSP consists of a set of variables and a set of constraints, each depending on constantly many variables. Given an instance, the goal is to find an assignment of values to all the variables in such a way that all the constraints are satisfied. The Bulatov-Zhuk dichotomy theorem states that every constraint satisfaction problem is either tractable, i.e. solvable in polynomial time, or $$\textsf{NP}$$-complete. This is in stark contrast to the general class of decision problems, where it is known that if $$\textsf{P} \neq \textsf{NP}$$, then there is an infinite hierarchy of problems between $$\textsf{P}$$ and $$\textsf{NP}$$ which are not polynomially-reducible to one another (Ladner's classical theorem). This contrast conveys the fruitfulness of studying CSPs in order for us to understand the full complexity picture.

**Quantum CSPs.**
Every CSP can be formulated as a non-local game, opening a path to studying quantum advantage for these problems. For example, consider the Mermin-Peres magic square.
This is a Boolean CSP instance, consisting of variables $$x_1,\dots, x_9$$ over the Boolean domain $$\{\pm 1\}$$ and the following linear constraints written in the multiplicative notation:

$$
\begin{align*}
  x_1x_2x_3 &= +1,\qquad x_1x_4x_7 = +1,\\
  x_4x_5x_6 &= +1,\qquad x_2x_5x_8 = +1,\\
  x_7x_8x_9 &= +1,\qquad x_3x_6x_9 = -1.\\
\end{align*}
$$

This can be represented by a square, where the first three equations correspond to the rows and the remaining to the columns, depicted in the figure on the left.

<div class="only-light"> {% include figure.liquid 
      loading="eager"
      path="assets/img/magic_square_light.svg"
      class="img-fluid mx-auto d-block responsive-img"
  %}
</div>

<div class="only-dark">
  {% include figure.liquid 
      loading="eager"
      path="assets/img/magic_square_dark.svg"
      class="img-fluid mx-auto d-block responsive-img"
  %}
</div>

The system of equations has no solution over the domain $$\{\pm 1\}$$.
Mermin showed that the system has an *operator solution* consisting of linear operators on a four-dimensional Hilbert space, depicted on the right; the matrices $$X, Y, Z$$ are the well-known Pauli matrices.
Mermin used this construction to prove the Bell-Kochen-Specker theorem on the impossibility to explain quantum mechanics via hidden variables. The solution exhibited in the figure can be used to construct a quantum strategy in the corresponding non-local game. Informally, this is achieved by performing the measurements that correspond to the operators in the table on an entangled quantum state shared between Alice and Bob.

<hr>

### Programme {#programme}

The workshop takes place on **July 6, 2026** at Royal Holloway, University of London. All times are local UK time (BST, UTC+1).

| Time | Speaker | Title |
|:---|:---|:---|
| 09:00 – 10:00 | *Arrival* | |
| 10:00 – 10:30 | *Coffee break* | |
| 10:30 – 11:30 | **Lorenzo Ciardo** *(invited)* | Quantum Polymorphisms and the Complexity of Quantum Constraint Satisfaction |
| 11:30 – 12:00 | Prem Nigam Kar | NPA Hierarchy for Quantum Isomorphism and Homomorphism Indistinguishability |
| 12:00 – 12:30 | Jianwen Chen | Operator Satisfiability under Commutation-Group Constraints |
| 12:30 – 14:00 | *Lunch* | |
| 14:00 – 14:30 | **Stanislav Živný** *(invited)* | Satisfiability of commutative vs. non-commutative CSPs |
| 14:30 – 15:00 | Bert Lindenhovius | The category of quantum graphs is closed |
| 15:00 – 15:30 | *Coffee break* | |
| 15:30 – 16:30 | **Tom Gur** *(invited)* | TBD |
| 16:30 – 17:00 | Nadish de Silva | Three-qubit nonlocality paradoxes: beyond GHZ |
| 17:00 – 18:00 | Freeform discussion | |

*Programme subject to change.*

<hr>

### Organizers {#organizers}

* **[Samson Abramsky](https://profiles.ucl.ac.uk/86621-samson-abramsky)**,
Department of Computer Science,
University College London
* **[Amin Karamlou](https://aminkaramlou.github.io)**, 
Department of Computer Science,
University College London
* **[Nihil Shah](https://www.cst.cam.ac.uk/people/nas54)**,
Department of Computer Science and Technology,
University of Cambridge
* **[Peter Zeman](https://zemanpeter.github.io)**,
Department of Algebra,
Faculty of Mathematics and Physics,
Charles University
