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
  },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-orbit-counting",
        
          title: "Orbit counting",
        
        description: "A graph-theoretic proof of the orbit-counting theorem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/orbit-counting/";
          
        },
      },{id: "post-quantum-automorphism-groups-of-connected-graphs",
        
          title: "Quantum automorphism groups of connected graphs",
        
        description: "An exposition of our recent paper about quantum automorphism groups of graphs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/aut-connected/";
          
        },
      },{id: "post-counting-trees",
        
          title: "Counting trees",
        
        description: "Recurrence relations for counting several types of walks.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/counting-trees/";
          
        },
      },{id: "post-counting-walks",
        
          title: "Counting walks",
        
        description: "Recurrence relations for counting several types of walks.",
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
          section: "News",},{id: "projects-quantum-information-theory",
          title: 'Quantum Information Theory',
          description: "Course on quantum information theory.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-permutation-groups",
          title: 'Permutation groups',
          description: "Course on permutation groups.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teaching-introduction-to-the-complexity-of-csps",
          title: 'Introduction to the complexity of CSPs',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/csp/";
            },},{id: "teaching-quantum-information-theory",
          title: 'Quantum Information Theory',
          description: "",
          section: "Teaching",handler: () => {
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
