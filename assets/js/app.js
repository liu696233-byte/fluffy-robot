/* ============================================================
   FLUFFY ROBOT · 交互脚本
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Preloader ---------- */
  window.addEventListener("load", function () {
    var pre = document.getElementById("preloader");
    if (pre) {
      setTimeout(function () {
        pre.classList.add("is-done");
      }, 600);
    }
  });

  /* ---------- Year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav scroll state ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile burger ---------- */
  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Theme toggle ---------- */
  var toggle = document.getElementById("themeToggle");
  var root = document.documentElement;
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.querySelector(".theme-toggle__icon").textContent = theme === "dark" ? "🌙" : "☀️";
    }
    try { localStorage.setItem("fr-theme", theme); } catch (e) {}
  }
  var saved = "dark";
  try { saved = localStorage.getItem("fr-theme") || "dark"; } catch (e) {}
  applyTheme(saved);
  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Cursor glow ---------- */
  var glow = document.getElementById("cursorGlow");
  if (glow && window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }, { passive: true });
  }

  /* ---------- Typing effect ---------- */
  var typedEl = document.getElementById("typed");
  if (typedEl) {
    var phrases = ["有温度的产品", "顺滑的体验", "会发光的交互", "温柔的科技"];
    var pi = 0, ci = 0, deleting = false;
    function tick() {
      var word = phrases[pi];
      ci += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, ci);
      var delay = deleting ? 55 : 95;
      if (!deleting && ci === word.length) { delay = 1500; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }
      setTimeout(tick, delay);
    }
    tick();
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Count up ---------- */
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var start = 0, dur = 1400, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- Skill bars ---------- */
  var bars = document.querySelectorAll(".bar span[data-w]");
  function fillBars() {
    bars.forEach(function (b) { b.style.width = b.getAttribute("data-w"); });
  }
  if ("IntersectionObserver" in window && bars.length) {
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { fillBars(); bo.disconnect(); }
      });
    }, { threshold: 0.3 });
    bo.observe(document.querySelector(".skills"));
  } else {
    fillBars();
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window && sections.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.getAttribute("id");
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: "-20% 0px -40% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- Project tilt ---------- */
  var tiltEls = document.querySelectorAll("[data-tilt]");
  if (window.matchMedia("(hover: hover)").matches) {
    tiltEls.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(800px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Contact form (mailto) ---------- */
  var form = document.getElementById("contactForm");
  var hint = document.getElementById("formHint");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var msg = form.msg.value.trim();
      if (!name || !email || !msg) {
        hint.style.color = "var(--accent-3)";
        hint.textContent = "请把上面的三项都填一下 🙏";
        return;
      }
      var subject = encodeURIComponent("来自主页的留言 · " + name);
      var body = encodeURIComponent("称呼：" + name + "\n邮箱：" + email + "\n\n" + msg);
      window.location.href = "mailto:hi@fluffyrobot.dev?subject=" + subject + "&body=" + body;
      hint.style.color = "var(--accent-2)";
      hint.textContent = "已为你打开邮件客户端 ✉️ 没弹出来？直接发到 hi@fluffyrobot.dev 就行。";
      form.reset();
    });
  }
})();
