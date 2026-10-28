/* ==========================================================================
   NEXUS COMPANY — main.js
   Entrada única, patrón IIFE (sin módulos ES: funciona en file://, FTP, CDN).
   ========================================================================== */
(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ------------------------------------------------------------------
     Enriquecer enlaces de contacto (Instagram / Email) con los datos de
     lib/manifest.js. El HTML ya trae un href funcional por defecto;
     esto solo lo mantiene sincronizado si editás manifest.js.
     ------------------------------------------------------------------ */
  function mountContactLinks() {
    var c = data.contact;
    if (!c) return;

    var igLink = $('[data-contact-link="instagram"]');
    if (igLink && c.instagramUrl) igLink.setAttribute("href", c.instagramUrl);
    var igText = $('[data-contact="instagram"]');
    if (igText && c.instagramHandle) igText.textContent = c.instagramHandle;

    var emailLink = $('[data-contact-link="email"]');
    if (emailLink && c.email) emailLink.setAttribute("href", "mailto:" + c.email);
    var emailText = $('[data-contact="email"]');
    if (emailText && c.email) emailText.textContent = c.email;
  }

  /* --- Nav: solidifica al hacer scroll + menú móvil --- */
  function initNav() {
    var nav = $("[data-nav]");
    if (!nav) return;

    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $("[data-nav-toggle]");
    var menu = $("[data-mobile-menu]");
    if (!toggle || !menu) return;

    var closeMenu = function () {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* --- Reveal on scroll --- */
  function initReveals() {
    var items = $$(".reveal");
    if (!items.length) return;

    if (typeof IntersectionObserver === "undefined") {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });

    items.forEach(function (el, i) {
      el.style.transitionDelay = reduced ? "0s" : Math.min(i % 4 * 0.06, 0.18) + "s";
      io.observe(el);
    });

    // Red de seguridad: revela lo que quede oculto a los 6s.
    setTimeout(function () {
      items.forEach(function (el) {
        if (!el.classList.contains("is-visible") && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-visible");
        }
      });
    }, 6000);
  }

  /* --- Tilt sutil en tarjetas de servicio --- */
  function initTilt() {
    if (!fineHover) return;
    var cards = $$("[data-tilt]");
    cards.forEach(function (card) {
      var rect;
      card.addEventListener("mouseover", function (e) {
        if (card.contains(e.relatedTarget)) return;
        rect = card.getBoundingClientRect();
      });
      card.addEventListener("mousemove", function (e) {
        if (!rect) rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(700px) rotateX(" + (py * -6) + "deg) rotateY(" + (px * 6) + "deg) translateY(-6px)";
      });
      card.addEventListener("mouseout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.style.transform = "";
      });
    });
  }

  /* --- Gradiente que sigue el cursor en el hero --- */
  function initMouseMesh() {
    var meshes = $$("[data-mouse-mesh]");
    if (!meshes.length || !fineHover) return;

    var ticking = false;
    var mx = 28, my = 32;

    window.addEventListener("mousemove", function (e) {
      var hero = $(".hero");
      if (!hero) return;
      var rect = hero.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      mx = (e.clientX / window.innerWidth) * 100;
      my = ((e.clientY - rect.top) / rect.height) * 100;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function () {
          meshes.forEach(function (m) {
            m.style.setProperty("--mx", mx + "%");
            m.style.setProperty("--my", my + "%");
          });
          ticking = false;
        });
      }
    }, { passive: true });
  }

  function initFooterYear() {
    var el = $("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* --- Cierra el menú móvil si se agranda la ventana --- */
  function initResizeGuard() {
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 720) {
        var toggle = $("[data-nav-toggle]");
        var menu = $("[data-mobile-menu]");
        if (toggle && menu) {
          toggle.setAttribute("aria-expanded", "false");
          menu.classList.remove("is-open");
        }
      }
    });
  }

  function boot() {
    safe(mountContactLinks, "mountContactLinks");
    safe(initNav, "initNav");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initMouseMesh, "initMouseMesh");
    safe(initFooterYear, "initFooterYear");
    safe(initResizeGuard, "initResizeGuard");

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
