// ==========================================================================
// Danie Titus — Portfolio
// Small, dependency-free interactions only. No animation libraries needed.
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Mobile menu open/close
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu after a link is tapped
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the current section link in the nav as the user scrolls
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  const setActiveLink = () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navAnchors.forEach((anchor) => {
      const isActive = anchor.getAttribute("href") === `#${currentId}`;
      anchor.style.color = isActive ? "var(--accent)" : "";
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
});
