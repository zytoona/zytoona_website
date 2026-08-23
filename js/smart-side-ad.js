(function () {
  'use strict';

  var rail = document.querySelector('[data-smart-side-ad]');
  var desktop = window.matchMedia('(min-width: 1280px)');
  var requested = false;
  var delayTimer = 0;

  if (!rail || !desktop.matches) return;

  function requestAd() {
    if (requested || !desktop.matches) return;
    requested = true;
    rail.classList.add('is-requested');
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      rail.classList.add('is-empty');
    }
  }

  function scheduleRequest() {
    if (requested || delayTimer) return;
    delayTimer = window.setTimeout(requestAd, 700);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        observer.disconnect();
        scheduleRequest();
      }
    }, { rootMargin: '320px 0px' });
    observer.observe(rail);
  } else {
    scheduleRequest();
  }
}());
