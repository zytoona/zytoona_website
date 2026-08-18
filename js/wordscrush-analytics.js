(function () {
  'use strict';

  var SOURCE_PAGE = window.location.pathname;
  var SOURCE_GAME = 'words_crush_eng';
  var PAGE_VERSION = 'english_v1';

  function sendEvent(name, parameters) {
    var payload = Object.assign({
      source_page: SOURCE_PAGE,
      source_game: SOURCE_GAME,
      page_version: PAGE_VERSION
    }, parameters || {});

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.__wordsCrushAnalyticsDebug = window.__wordsCrushAnalyticsDebug || [];
      window.__wordsCrushAnalyticsDebug.push({ name: name, parameters: payload });
    }

    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
  }

  function observeVisible(elements, eventName, parametersForElement) {
    if (!('IntersectionObserver' in window)) return;

    var sent = new WeakSet();
    var timers = new Map();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var element = entry.target;
        if (sent.has(element)) {
          observer.unobserve(element);
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && document.visibilityState === 'visible') {
          if (timers.has(element)) return;
          timers.set(element, window.setTimeout(function () {
            timers.delete(element);
            if (document.visibilityState !== 'visible') return;
            sent.add(element);
            observer.unobserve(element);
            sendEvent(eventName, parametersForElement(element));
          }, 750));
          return;
        }

        if (timers.has(element)) {
          window.clearTimeout(timers.get(element));
          timers.delete(element);
        }
      });
    }, { threshold: [0, 0.5, 1] });

    elements.forEach(function (element) { observer.observe(element); });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        elements.forEach(function (element) {
          if (sent.has(element)) return;
          observer.unobserve(element);
          observer.observe(element);
        });
        return;
      }
      timers.forEach(function (timer) { window.clearTimeout(timer); });
      timers.clear();
    });
  }

  var storeLinks = document.querySelectorAll('[data-primary-store]');
  storeLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      sendEvent('primary_store_click', {
        placement_id: link.dataset.placementId,
        target_game: SOURCE_GAME,
        store: link.dataset.primaryStore,
        destination_type: 'primary_store'
      });
    });
  });

  observeVisible(document.querySelectorAll('.badges'), 'store_cta_impression', function (group) {
    var firstLink = group.querySelector('[data-placement-id]');
    return {
      placement_id: firstLink ? firstLink.dataset.placementId : 'unknown',
      target_game: SOURCE_GAME,
      available_stores: 'app_store,google_play'
    };
  });

  observeVisible(document.querySelectorAll('[data-engagement-section]'), 'content_section_view', function (section) {
    return { section_id: section.dataset.engagementSection };
  });

  var videoThumb = document.getElementById('videoThumb');
  if (videoThumb) {
    videoThumb.addEventListener('click', function () {
      sendEvent('gameplay_video_click', {
        placement_id: 'wc_gameplay_video',
        video_id: 'RI_1UyS3StE'
      });
    }, { once: true });
  }
})();
