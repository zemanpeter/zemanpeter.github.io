(function () {
  const filters = document.getElementById("publication-filters");
  if (!filters) return;

  const buttons = Array.from(filters.querySelectorAll("button[data-topic]"));
  const labels = new Map(buttons.map((button) => [button.dataset.topic, button.textContent.trim()]));
  const status = document.getElementById("publication-filter-status");
  const sections = Array.from(document.querySelectorAll("[data-publication-section]")).map((container) => {
    const id = container.dataset.publicationSection;
    return {
      container,
      heading: document.getElementById(id),
      link: document.querySelector(`.papers-nav a[href="#${id}"]`),
      papers: Array.from(container.querySelectorAll("ol.bibliography > li")).map((element) => ({
        element,
        tags: (element.querySelector("[data-publication-tags]")?.dataset.publicationTags || "").split(",").map((tag) => tag.trim()),
      })),
    };
  });
  const papers = sections.flatMap((section) => section.papers);
  const tags = Array.from(document.querySelectorAll("[data-publication-section] .publication-tag"));
  const matches = (paper, topic) => topic === "all" || paper.tags.includes(topic);

  function setActiveSection(activeSection) {
    sections.forEach((section) => {
      const active = section === activeSection;
      section.link.classList.toggle("active", active);
      if (active) section.link.setAttribute("aria-current", "location");
      else section.link.removeAttribute("aria-current");
    });
  }

  function applyFilter(requestedTopic) {
    const topic = labels.has(requestedTopic) ? requestedTopic : "all";
    let total = 0;
    sections.forEach((section) => {
      let count = 0;
      section.papers.forEach((paper) => {
        const visible = matches(paper, topic);
        paper.element.hidden = !visible;
        if (visible) count++;
      });
      section.container.hidden = count === 0;
      section.heading.hidden = count === 0;
      section.link.hidden = count === 0;
      section.link.querySelector(".count").textContent = count;
      total += count;
    });
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.topic === topic)));
    tags.forEach((tag) => tag.classList.toggle("is-active", tag.dataset.topic === topic));
    status.textContent = topic === "all" ? `Showing all ${total} entries.` : `Showing ${total} of ${papers.length} entries · ${labels.get(topic)}.`;
    setActiveSection(sections.find((section) => !section.container.hidden));
  }

  function selectTopic(topic) {
    const url = new URL(window.location.href);
    if (topic === "all") url.searchParams.delete("topic");
    else url.searchParams.set("topic", topic);
    url.hash = "";
    if (url.href !== window.location.href) window.history.pushState(null, "", url);
    applyFilter(topic);
  }

  buttons.forEach((button) => {
    button.querySelector(".count").textContent = papers.filter((paper) => matches(paper, button.dataset.topic)).length;
    button.addEventListener("click", () => selectTopic(button.dataset.topic));
  });
  tags.forEach((tag) => {
    tag.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      selectTopic(tag.dataset.topic);
      buttons.find((button) => button.dataset.topic === tag.dataset.topic).focus({ preventScroll: true });
      filters.scrollIntoView({ block: "start" });
    });
  });

  const readLocation = () => applyFilter(new URL(window.location.href).searchParams.get("topic"));
  window.addEventListener("popstate", readLocation);
  readLocation();
  filters.hidden = false;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.hidden) {
            setActiveSection(sections.find((section) => section.heading === entry.target));
          }
        });
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section.heading));
  }
})();
