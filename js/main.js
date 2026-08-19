// Platform detection for smart download buttons
(function () {
  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  document.querySelectorAll('.btn-download').forEach(function (btn) {
    var url = isIOS ? btn.dataset.ios : btn.dataset.android;
    if (url) {
      btn.href = url;
      btn.target = '_blank';
      btn.rel = 'noopener';
    }
  });
})();

// Navbar scroll effect
document.addEventListener('scroll', function () {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Navbar logo: fade in when hero brand scrolls out of view
(function () {
  var heroBrand = document.querySelector('.hero-brand');
  var navbar = document.querySelector('.navbar');
  if (!heroBrand || !navbar) return;

  var logoObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navbar.classList.remove('logo-visible');
      } else {
        navbar.classList.add('logo-visible');
      }
    });
  }, { threshold: 0, rootMargin: '-60px 0px 0px 0px' });

  logoObserver.observe(heroBrand);
})();

// Mobile nav toggle
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active') ? 'true' : 'false');
  });
}

// Close mobile menu when a nav link is clicked
if (navLinks) {
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href === '#') return;

    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for scroll-triggered animations
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var delay = entry.target.dataset.delay || 0;
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

// Observe all animated elements
document.querySelectorAll('.fade-in, .featured-card, .section-header').forEach(function (el) {
  observer.observe(el);
});

// Stagger game cards — trigger earlier with generous rootMargin
var cardObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var delay = entry.target.dataset.delay || 0;
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, delay);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px 150px 0px' });

document.querySelectorAll('.game-card').forEach(function (card, i) {
  card.dataset.delay = i * 80;
  cardObserver.observe(card);
});
