(function () {
  'use strict';

  var rails = document.querySelectorAll('[data-smart-side-ad]');

  if (!rails.length) return;

  rails.forEach(function (rail) {
    var minWidth = parseInt(rail.getAttribute('data-min-width'), 10) || 1280;
    var desktop = window.matchMedia('(min-width: ' + minWidth + 'px)');
    var requested = false;
    var delayTimer = 0;

    if (!desktop.matches) return;

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
  });
}());
