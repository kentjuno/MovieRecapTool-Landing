const navLinks = document.querySelectorAll("[data-nav]");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!active) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${active.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -55%", threshold: [0.16, 0.35, 0.6] }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    await navigator.clipboard.writeText(value);
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

// Switch CLI installer tabs
document.querySelectorAll("[data-tab-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".cli-installer-tabs");
    if (!parent) return;
    parent.querySelectorAll(".cli-tab-btn").forEach((b) => b.classList.remove("active"));
    parent.querySelectorAll(".cli-tab-content").forEach((c) => c.classList.remove("active"));
    
    button.classList.add("active");
    const target = parent.querySelector(button.getAttribute("data-tab-target"));
    if (target) {
      target.classList.add("active");
    }
  });
});
