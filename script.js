/* ==========================================================================
   Portfolio — Interactivity
   ========================================================================== */

(() => {
  "use strict";

  const root = document.documentElement;

  // Wait for Lucide to load, then initialize
  function waitForLucide(callback) {
    if (window.lucide) {
      callback();
    } else {
      setTimeout(() => waitForLucide(callback), 100);
    }
  }

  function initIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /* -------------------- Theme toggle -------------------- */
  const THEME_KEY = "portfolio-theme";
  const themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }

  // Default to dark unless the user previously chose light.
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    root.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    // Re-render so icons pick up theme-aware colors (e.g. dark-mode SVG colors).
    initIcons();
  });

  /* -------------------- Mobile menu -------------------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuToggle.querySelector("i");

  function setMenuIcon(open) {
    const name = open ? "x" : "menu";
    menuIcon.setAttribute("data-lucide", name);
    initIcons();
  }

  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", open);
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    setMenuIcon(open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  menuToggle.addEventListener("click", () => toggleMenu());
  mobileMenu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => toggleMenu(false))
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) toggleMenu(false);
  });

  /* -------------------- Navbar scroll state + active link -------------------- */
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [...document.querySelectorAll("main section[id]")];

  function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }

  function setActiveLink() {
    const pos = window.scrollY + 120;
    let currentId = "";
    sections.forEach((section) => {
      if (pos >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`
      );
    });
  }

  function onScroll() {
    updateNavbar();
    setActiveLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* -------------------- Typed effect -------------------- */
  const typedEl = document.getElementById("typed");
  const roles = [
    "QA Engineer at SUSE",
    "Test Automation Specialist",
    "SDET",
    "API & System Testing Expert",
    "Performance Testing (JMeter)",
    "Quality Advocate",
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    typedEl.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeLoop, 55);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeLoop, 1800);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 30);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 350);
    }
  }
  typeLoop();

  /* -------------------- Scroll reveal -------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* -------------------- Footer year -------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* -------------------- Init - Wait for Lucide then run -------------------- */
  waitForLucide(() => {
    initIcons();
    updateNavbar();
    setActiveLink();
  });
})();
