/* ==========================================================================
   Soliman Alktaifan — Portfolio JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- DOM Elements ---------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section, .hero');
  const lastUpdatedEl = document.getElementById('last-updated');

  /* ---------- Mobile Navigation ---------- */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu on link click
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  /* ---------- Navbar scroll effect ---------- */
  var lastScrollY = 0;

  function handleScroll() {
    var scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ---------- Active nav link on scroll ---------- */
  function updateActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) return;

      var top = section.offsetTop;
      var height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ---------- Scroll animations ---------- */
  function initScrollAnimations() {
    var animateElements = document.querySelectorAll(
      '.timeline-item, .project-card, .skill-group, .cert-card, .leadership-card, .next-card, .detail-card'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      animateElements.forEach(function (el) {
        el.style.opacity = '1';
      });
      return;
    }

    // Set initial state
    animateElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animateElements.forEach(function (el, index) {
      el.style.transitionDelay = (index % 3) * 0.1 + 's';
      observer.observe(el);
    });
  }

  /* ---------- Last updated date ---------- */
  if (lastUpdatedEl) {
    var now = new Date();
    var options = { year: 'numeric', month: 'long' };
    lastUpdatedEl.textContent = now.toLocaleDateString('en-US', options);
    lastUpdatedEl.setAttribute('datetime', now.toISOString().slice(0, 7));
  }

  /* ---------- Smooth scroll for anchor links (fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update URL without triggering scroll
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* ---------- Init ---------- */
  handleScroll();
  updateActiveLink();
  initScrollAnimations();
})();
