---
layout: page
title: Quantum information theory
img: assets/img/qit-logo.svg
img_light: assets/img/qit-logo.svg
img_dark: assets/img/qit-logo-dark.svg
description: NMMB537
importance: 1
category: "25/26: zimný semester (winter term)"
year: "25/26"
term: "winter"
---

<!-- --- -->
<!-- layout: page -->
<!-- title: Quantum Information Theory -->
<!-- img: assets/img/bloch.svg -->
<!-- importance: 1 -->
<!-- category: current -->
<!-- related_publications: false -->
<!-- --- -->

**Lecture:** Friday 12:20--13:50 in K334KA.

**Practicals:** Friday 14:00--14:45 in K334KA.

#### What we did

<a href="{{ '/assets/teaching/qit/qit.pdf' | relative_url }}" target="_blank">Lecture notes</a>

| date | content | quiz | <span class="nohyphen">problems</span> | <span class="nohyphen">solutions</span> |
| | | | | |
|------|---------|------|-------------|---------|
| 03.10. | **1. Quantum states.** Density matrix, quantum states, classical states, pure states, Bloch ball, positive operator valued measure (POVM), projective measurement (PVM), basis measurement.&nbsp;[1.1--1.4] | [Quiz&nbsp;1]({{ '/assets/teaching/qit/quiz01.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;1]({{ '/assets/teaching/qit/problems01.pdf' | relative_url }})</span> | <span class="nohyphen">[Solutions&nbsp;1]({{ '/assets/teaching/qit/solutions01.pdf' | relative_url }})</span> |
| 10.10. | Basis measurement on the Bloch sphere, observables correspond to projective measurements, basic uncertainty relation.&nbsp;[1.5--1.7]<br>**2. Multiple quantum systems.** Tensor products and multiple quantum systems, measurement of Bob's part of a shared state, partial trace, reduced state on Alice's system.&nbsp;[2.1--2.2] | [Quiz&nbsp;2]({{ '/assets/teaching/qit/quiz02.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;2]({{ '/assets/teaching/qit/problems02.pdf' | relative_url }})</span> | <span class="nohyphen">[Solutions&nbsp;2]({{ '/assets/teaching/qit/solutions02.pdf' | relative_url }})</span> |
| 17.10. | Purification of a quantum state, Schmidt decomposition as SVD applied to a pure bipartite state, entanglement for pure states, separable states, entanglement for general states.&nbsp;[2.3--2.5]<br>**3. Non-local games and quantum foundations.** Definition of a non-local game, classical (local hidden variable) strategy, quantum strategy.&nbsp;[3.1] | | | |
| 24.10. | CHSH game, optimal classical strategy, quantum strategy and a proof of its optimality (Tsirelson's bound), Bell inequality, Mermin-Peris magic square game, non-existance of a perfect classical strategy, perfect quantum strategy, contextuality and Kochen-Specker theorem.&nbsp;[3.2--3.3] | [Quiz&nbsp;3]({{ '/assets/teaching/qit/quiz03.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;3]({{ '/assets/teaching/qit/problems03.pdf' | relative_url }})</span> | |
| 31.10. | **4. Quantum-channels.** Unitary operations on quantum states, superoperators, positivity is not enough to model dynamics of quantum states, completely positive (CP) maps, quantum channels as completely positive trace preserving (CPTP) maps, examples of quantum channels.&nbsp;[4.1--4.3] | [Quiz&nbsp;4]({{ '/assets/teaching/qit/quiz04.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;4]({{ '/assets/teaching/qit/problems04.pdf' | relative_url }})</span> | |
| 07.11. | Three equivalent characterizations of CP maps (Choi operator, Kraus representation, Stinespring representation), characterization of quantum channels, physical realizability of quantum channels, measurements as quantum channels, POVMs can be realized as PVMs (Naimark's theorem), non-destructive measurements, quantum instrument.&nbsp;[4.3--4.5] | | | |
| 14.11. | _No lecture._ | | | |
| 21.11. | **5. Basic quantum information protocols.** Superdense coding, teleportation, decoupling. | [Quiz&nbsp;5]({{ '/assets/teaching/qit/quiz05.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;5]({{ '/assets/teaching/qit/problems05.pdf' | relative_url }})</span>| |
| 28.11. | **6. Distance measures.** Trace dinstance, fidelity, entanglement fidelity. | [Quiz&nbsp;6]({{ '/assets/teaching/qit/quiz06.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;6]({{ '/assets/teaching/qit/problems06.pdf' | relative_url }})</span> | |
| 05.12. | _No lecture._ | | | |
| 12.12. | **7. Quantum compression and entropy.** | [Quiz&nbsp;7]({{ '/assets/teaching/qit/quiz07.pdf' | relative_url }}) | <span class="nohyphen">[Problems&nbsp;7]({{ '/assets/teaching/qit/problems07.pdf' | relative_url }})</span> | |
| 19.12. | **8. Bounds on Quantum Information Processing** | [Quiz&nbsp;8]({{ '/assets/teaching/qit/quiz08.pdf' | relative_url }}) | | |
| 09.01. | **9. Quantum Key Distribution** | | | |

<br>

#### Literature

##### General quantum information theory resources

- [Quantum Information](https://dl1.cuni.cz/course/view.php?id=9517) by Štepán Holub at MFF UK that can be considered a prequel to this course.
- [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) by John Watrous.
- [The Theory of Quantum Information](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf) by John Watrous; quite encyclopedic, does not use the Dirac notation.
- [Advanced topics in quantum information theory](https://cs.uwaterloo.ca/~watrous/QIT-notes/), a course by John Watrous, also accompanied by a [YouTube playlist](https://www.youtube.com/watch?v=Teu1ZR-eW2A&list=PLidiQIHRzpXKAdOSPljFb4mapxM0ViRMX).
- [Symmetry and Quantum Information](https://qi.rub.de/courses/qit18/), a course by Michael Walter at The Ruhr University Bochum about applications of representation theory in quantum information.
- [Introduction to Quantum Information Processing](https://cleve.iqc.uwaterloo.ca/qic710/index.html), a course by Richard Cleve at University of Waterloo.
- [Mathematics of Quantum Information](https://elliptic.space/book.html), a course by William Slofstra at University of Waterloo.

##### Non-local games and quantum foundations

- <a href="{{ '/assets/teaching/qit/Vidick.pdf' | relative_url }}" target="_blank">Mathematics of entanglement via nonlocal games</a> by Thomas Vidick; gives an overview of the recent landmark result $$\mathsf{MIP}^* = \mathsf{RE}$$.
- <a href="{{ '/assets/teaching/qit/harris_paulsen.pdf' | relative_url }}" target="_blank">Games and Algebras</a> by Sam Harris and Vern Paulsen. A great survey of the theory of nonlocal games and how they induce algebras.
- [Entanglement and Nonlocal Effects](https://cleve.iqc.uwaterloo.ca/course-57/styled-22/index.html), a course by Richard Cleve at University of Waterloo.
- [On the Einstein Podolsky Rosen Paradox](https://cds.cern.ch/record/111654/files/vol1p195-200_001.pdf), the original paper by Bell.
- [Hidden variables and the two theorerns of John Bell](https://journals.aps.org/rmp/pdf/10.1103/RevModPhys.65.803), a very readable paper by Mermin.
- [A simple demonstration of Bell's theorem involving two observers and no probabilities or inequalities](https://arxiv.org/abs/quant-ph/0206070), a paper by Aravind that was first to reformulate Bell's inequalities in terms of games.
- [Kochen-Specker contextuality](https://journals.aps.org/rmp/pdf/10.1103/RevModPhys.94.045007), a more modern survey about Kochen-Specker contextuality, including some applications in quantum cryptography and quantum computing.

##### Self-testing

- [Self-testing of quantum systems: a review](https://quantum-journal.org/papers/q-2020-09-30-337/), very nice survey of self-testing. Should be understandable after the first three chapters of this course.

##### Quantum Computing

- [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) by Ronald de Wolf.

##### Quantum Mechanics

- Quantum Mechanics by Leonard Susskind; a part of his "The theoretical minimum" series written for non-physicits with a solid mathematical background, it reads really well.
