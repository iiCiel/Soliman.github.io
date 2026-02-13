const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearEl = document.querySelector('#year');
const lastUpdatedEl = document.querySelector('#last-updated');

const now = new Date();
if (yearEl) yearEl.textContent = String(now.getFullYear());
if (lastUpdatedEl) {
  lastUpdatedEl.textContent = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(now);
}
