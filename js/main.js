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

// Flying logo: hero brand smoothly moves into navbar on scroll
(function () {
  var heroBrand = document.querySelector('.hero-brand');
  var placeholder = document.querySelector('.nav-logo-placeholder');
  if (!heroBrand || !placeholder) return;

  // Cache the hero brand's natural position (before any scroll manipulation)
  var startRect = heroBrand.getBoundingClientRect();
  var startTop = startRect.top + window.scrollY;
  var startLeft = startRect.left + startRect.width / 2; // center x
  var startHeight = 120;
  var endHeight = 38;
  var isDocked = false;

  function getTargetPos() {
    var r = placeholder.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollY = window.scrollY;
        var heroBottom = startTop + startHeight - scrollY;
        var navbarH = 62;

        // Phase 1: shrink in place
        if (heroBottom > navbarH + 20) {
          if (isDocked) {
            heroBrand.classList.remove('is-docked');
            heroBrand.style.cssText = '';
            isDocked = false;
          }
          // Shrink from 120 to ~70 over first 100px scroll
          var shrinkProgress = Math.min(scrollY / 100, 1);
          var h = startHeight - (startHeight - 70) * shrinkProgress;
          heroBrand.style.height = h + 'px';
        }
        // Phase 2: dock to navbar — fly to corner
        else {
          if (!isDocked) {
            isDocked = true;
            heroBrand.classList.add('is-docked');
          }
          var target = getTargetPos();
          heroBrand.style.height = endHeight + 'px';
          heroBrand.style.top = (target.y - endHeight / 2) + 'px';
          heroBrand.style.left = (target.x - endHeight / 2) + 'px';
          heroBrand.style.borderRadius = '10px';
          heroBrand.style.transition = 'top 0.3s ease, left 0.3s ease, height 0.2s ease';
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
