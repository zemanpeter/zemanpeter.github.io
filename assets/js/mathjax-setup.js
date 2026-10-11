window.MathJax = {
  startup: {
    pageReady() {
      return MathJax.startup.defaultPageReady().then(() => {
        // Keep sentence punctuation attached to inline math at line breaks.
        for (const math of document.querySelectorAll('mjx-container:not([display="true"])')) {
          if (math.parentElement.classList.contains("math-punctuation")) continue;

          const before = math.previousSibling;
          const after = math.nextSibling;
          const opening = before?.nodeType === Node.TEXT_NODE ? before.textContent.match(/[([{“‘«‹"']+$/u)?.[0] : "";
          const closing = after?.nodeType === Node.TEXT_NODE ? after.textContent.match(/^[.,;:!?\])}”’»›"'…]+/u)?.[0] : "";
          if (!opening && !closing) continue;

          const group = document.createElement("span");
          group.className = "math-punctuation";
          math.before(group);
          if (opening) {
            group.appendChild(before.splitText(before.length - opening.length));
          }
          group.appendChild(math);
          if (closing) {
            after.splitText(closing.length);
            group.appendChild(after);
          }
        }
      });
    },
  },
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
