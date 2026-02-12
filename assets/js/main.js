/**
 * Soliman Alktaifan — Portfolio JavaScript
 * Handles navigation, scroll effects, and dynamic content
 */

(function () {
  'use strict';

  // ========== DOM Elements ==========
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const lastUpdatedEl = document.getElementById('last-updated');

  // ========== Navbar Scroll Effect ==========
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========== Mobile Navigation Toggle ==========
  function toggleNav() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  }

  navToggle.addEventListener('click', toggleNav);

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleNav();
      }
    });
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleNav();
    }
  });

  // ========== Active Nav Link on Scroll ==========
  const sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // ========== Last Updated Date ==========
  function setLastUpdated() {
    if (lastUpdatedEl) {
      const now = new Date();
      const options = { year: 'numeric', month: 'long' };
      lastUpdatedEl.textContent = now.toLocaleDateString('en-US', options);
      lastUpdatedEl.setAttribute('datetime', now.toISOString().split('T')[0]);
    }
  }

  setLastUpdated();

  // ========== Smooth Scroll for Safari ==========
  // Modern browsers support scroll-behavior: smooth in CSS,
  // but this provides a fallback for older Safari versions
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ========== Intersection Observer for Animations ==========
  // Fade-in sections on scroll (optional enhancement)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for fade-in effect
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

})();
