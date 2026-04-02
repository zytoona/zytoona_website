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

// Logo scroll effect: hero brand shrinks on scroll, then appears in navbar
(function () {
  var heroBrand = document.querySelector('.hero-brand');
  var navbar = document.querySelector('.navbar');
  if (!heroBrand || !navbar) return;

  var startHeight = 120;
  var endHeight = 50;
  var scrollRange = 150; // px of scroll over which shrink happens

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollY = window.scrollY;
        var progress = Math.min(scrollY / scrollRange, 1);
        var newHeight = startHeight - (startHeight - endHeight) * progress;
        heroBrand.style.height = newHeight + 'px';

        // Show nav logo once hero brand is near top of viewport
        var rect = heroBrand.getBoundingClientRect();
        if (rect.bottom < 60) {
          navbar.classList.add('logo-visible');
        } else {
          navbar.classList.remove('logo-visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// Mobile nav toggle
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when a nav link is clicked
if (navLinks) {
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
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

// Intersection Observer for fade-in animations
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function (el) {
  observer.observe(el);
});
