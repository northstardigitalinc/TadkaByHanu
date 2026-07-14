(function () {
  'use strict';

  var burger  = document.getElementById('navBurger');
  var overlay = document.getElementById('navOverlay');
  var body    = document.body;

  if (!burger || !overlay) return;

  function openNav() {
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeNav() {
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    burger.getAttribute('aria-expanded') === 'true' ? closeNav() : openNav();
  });

  /* Close when any overlay link is tapped */
  overlay.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* Close if viewport resizes to desktop width */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeNav();
  }, { passive: true });

})();
