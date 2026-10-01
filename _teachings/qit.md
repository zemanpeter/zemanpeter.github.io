---
layout: page
title: Quantum information theory
img: assets/img/qit-logo.svg
img_light: assets/img/qit-logo.svg
img_dark: assets/img/qit-logo-dark.svg
description: NMMB537
importance: 1
category: "26/27: zimný semester (winter term)"
year: "26/27"
term: "winter"
_styles: |
  .post article h4 { margin-top: 2rem; margin-bottom: 1rem; }
  .qit-schedule table { width: 100%; }
  .qit-schedule th:first-child { width: 12%; }
  .qit-schedule th:nth-child(2) { width: 52%; }
  .qit-schedule td:first-child,
  .qit-schedule td a { white-space: nowrap; }
---

<div class="float-right ml-3 mb-3" style="width: 28%; max-width: 220px;">
  <img src="{{ '/assets/img/qit-logo.svg' | relative_url }}" class="theme-img-light img-fluid" alt="Quantum information theory logo">
  <img src="{{ '/assets/img/qit-logo-dark.svg' | relative_url }}" class="theme-img-dark img-fluid" alt="Quantum information theory logo">
</div>

**Lecture:** Wednesday 9:00--10:30 in K432KDM.

**Tutorials:** Wednesday 10:40--11:25 in K432KDM.

<div class="clearfix"></div>

#### What we did

<a href="{{ '/assets/notes/qit.pdf' | relative_url }}" target="_blank">Lecture notes</a>

<div class="table-responsive qit-schedule" markdown="1">

| date   | content | tutorials               | <span class="nohyphen">problems</span> |
| ------ | ------- | ----------------------- | -------------------------------------- |
| 01.10. |         | [Sheet&nbsp;1][sheet-1] |                                        |
| 08.10. |         |                         |                                        |
| 15.10. |         |                         |                                        |
| 22.10. |         |                         |                                        |
| 29.10. |         |                         |                                        |
| 05.11. |         |                         |                                        |
| 12.11. |         |                         |                                        |
| 19.11. |         |                         |                                        |
| 26.11. |         |                         |                                        |
| 03.12. |         |                         |                                        |
| 10.12. |         |                         |                                        |
| 17.12. |         |                         |                                        |
| 07.01. |         |                         |                                        |

</div>

[sheet-1]: {{ '/assets/teaching/qit/sheet01.pdf' | relative_url }}

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
