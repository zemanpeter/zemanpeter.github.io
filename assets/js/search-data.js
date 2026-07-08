// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-výuka-teaching",
          title: "výuka (teaching)",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-cumulative-xor-via-the-shift-operator-on-mathbb-f-2-infty",
        
          title: "Cumulative XOR via the shift operator on $\mathbb{F}_2^\infty$",
        
        description: "A closed form for the prefix bitwise XOR, proved by telescoping against the unilateral shift on the sequence space $\mathbb{F}_2^\infty$.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cumulative-xor/";
          
        },
      },{id: "post-imo-1981-2-via-generating-functions",
        
          title: "IMO 1981/2 via generating functions",
        
        description: "A generating-functions proof that the average minimum of an r-subset of {1,...,n} is (n+1)/(r+1).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/imo-1981-subset-minima/";
          
        },
      },{id: "post-skmo-2026-1-via-kkt-conditions",
        
          title: "SKMO 2026/1 via KKT conditions",
        
        description: "Solving a problem from SKMO with the Karush–Kuhn–Tucker conditions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/kkt-olympiad/";
          
        },
      },{id: "post-infinity-of-primes",
        
          title: "Infinity of primes",
        
        description: "A group-theoretic proof of infinity of primes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/infinity-of-primes/";
          
        },
      },{id: "post-orbit-counting-lemma",
        
          title: "Orbit counting lemma",
        
        description: "A graph-theoretic proof of the orbit-counting theorem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/orbit-counting/";
          
        },
      },{id: "post-matrix-recurrence-for-non-backtracking-walks",
        
          title: "Matrix recurrence for non-backtracking walks",
        
        description: "A matrix recurrence for walks that avoid immediately retracing the last edge.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/counting-walks/";
          
        },
      },{id: "post-graham-pollak-determinant-formula",
        
          title: "Graham-Pollak determinant formula",
        
        description: "A beautiful formula for the determinant of the distance matrix of a tree.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/graham-pollak/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-got-accepted-to-icalp-2025",
          title: 'Our paper NPA Hierarchy for Quantum Isomorphism and Homomorphism Indistinguishability got accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-free-inhomogeneous-wreath-product-of-quantum-groups-just-appeared-on-arxiv",
          title: 'Our paper Free Inhomogeneous Wreath Product of Quantum Groups just appeared on arXiv....',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-algebra-colloqium-about-our-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-paper-see-the-slides",
          title: 'I gave a talk at the Algebra colloqium about our NPA Hierarchy for...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-ottawa-quantum-algebraic-security-group-virtual-seminar-about-our-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-paper-see-the-slides",
          title: 'I gave a talk at the Ottawa QUantum Algebraic SecuRity Group virtual seminar...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-summer-school-on-noncommutative-analysis-about-our-paper-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-paper-see-the-slides",
          title: 'I gave a talk at the Summer school on noncommutative analysis about our...',
          description: "",
          section: "News",},{id: "news-our-paper-existence-and-nonexistence-of-commutativity-gadgets-for-entangled-csps-just-appeared-on-arxiv",
          title: 'Our paper Existence and nonexistence of commutativity gadgets for entangled CSPs just appeared...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-a-poster-at-the-conference-theory-of-quantum-computation-communication-and-cryptography-2025-tqc-about-our-paper-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability",
          title: 'I am presenting a poster at the conference Theory of Quantum Computation, Communication...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-noncommutative-geometry-and-topology-seminar-about-our-paper-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-paper-see-the-slides-and-video",
          title: 'I gave a talk at the Noncommutative geometry and topology seminar about our...',
          description: "",
          section: "News",},{id: "news-our-paper-npa-hierarchy-for-quantum-isomorphism-and-homomorphism-indistinguishability-got-published-in-the-journal-quantum",
          title: 'Our paper NPA Hierarchy for Quantum Isomorphism and Homomorphism Indistinguishability got published in...',
          description: "",
          section: "News",},{id: "news-from-10-20-february-i-am-attending-the-operator-algebras-and-quantum-information-programme-at-the-mittag-leffler-institute",
          title: 'From 10–20 February I am attending the Operator Algebras and Quantum Information programme...',
          description: "",
          section: "News",},{id: "news-together-with-samson-abramsky-amin-karamlou-and-nihil-shah-we-will-be-organizing-an-icalp-2026-satellite-workshop-on-quantum-csps",
          title: 'Together with Samson Abramsky, Amin Karamlou and Nihil Shah, we will be organizing...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-a-primus-grant-from-charles-university-to-study-the-power-of-quantum-entanglement-in-the-context-of-constraint-satisfaction-problems",
          title: 'I was awarded a PRIMUS grant from Charles University to study the power...',
          description: "",
          section: "News",},{id: "news-today-we-are-organizing-the-icalp-2026-satellite-workshop-on-quantum-csps",
          title: 'Today we are organizing the ICALP 2026 satellite workshop on quantum CSPs.',
          description: "",
          section: "News",},{id: "teachings-introduction-to-the-complexity-of-csp",
          title: 'Introduction to the complexity of CSP',
          description: "NMAG563",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/csp1/";
            },},{id: "teachings-seminar-on-csp",
          title: 'Seminar on CSP',
          description: "NMAG573",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/csp2/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/introduction-to-machine-learning/";
            },},{id: "teachings-mathematical-analysis-2-practicals",
          title: 'Mathematical analysis 2 (practicals)',
          description: "NMAI055",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/ma2/";
            },},{id: "teachings-quantum-entanglement-and-nonlocal-games",
          title: 'Quantum entanglement and nonlocal games',
          description: "NMMB470",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/nonloc/";
            },},{id: "teachings-permutation-groups",
          title: 'Permutation groups',
          description: "NMAL432",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/pg/";
            },},{id: "teachings-quantum-information-practicals",
          title: 'Quantum information (practicals)',
          description: "NMMB534",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/qi/";
            },},{id: "teachings-quantum-information-theory",
          title: 'Quantum information theory',
          description: "NMMB537",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/qit/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%74%65%72.%7A%65%6D%61%6E@%6D%61%74%66%79%7A.%63%75%6E%69.%63%7A", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/zemanpe", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0071-9149", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fljgbUIAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/149/2225-1.html", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
