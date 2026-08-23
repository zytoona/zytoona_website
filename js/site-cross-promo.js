(function () {
  'use strict';

  var SOURCE = 'zytoona_website';
  var MEDIUM = 'cross_promo';
  var IS_LOCAL = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

  if (IS_LOCAL) window.__zytoonaAnalyticsDebug = [];

  function clean(value, fallback) {
    var normalized = String(value || fallback || '')
      .toLowerCase()
      .replace(/[^a-z0-9_]+/g, '_')
      .replace(/^_+|_+$/g, '');
    return normalized || fallback || 'unknown';
  }

  function inferStore(url) {
    if (/play\.google\.com$/i.test(url.hostname)) return 'google_play';
    if (/apps\.apple\.com$/i.test(url.hostname)) return 'app_store';
    return 'website';
  }

  function campaignId(link) {
    return [
      clean(link.dataset.placementId, 'unknown_placement'),
      clean(link.dataset.targetGame, 'unknown_game'),
      clean(link.dataset.store, 'website'),
      clean(link.dataset.creativeVersion, 'v1')
    ].join('_');
  }

  function applyGooglePlayAttribution(link, url) {
    var placement = clean(link.dataset.placementId, 'unknown_placement');
    var target = clean(link.dataset.targetGame, 'unknown_game');
    var creative = clean(link.dataset.creativeVersion, 'v1');
    var content = target + '_' + creative;
    var referrer = new URLSearchParams({
      utm_source: SOURCE,
      utm_medium: MEDIUM,
      utm_campaign: placement,
      utm_content: content
    });

    url.searchParams.set('utm_source', SOURCE);
    url.searchParams.set('utm_medium', MEDIUM);
    url.searchParams.set('utm_campaign', placement);
    url.searchParams.set('utm_content', content);
    // Play Console can use the UTM values. Target apps that later adopt the
    // Install Referrer API can read the same non-personal campaign fields.
    url.searchParams.set('referrer', referrer.toString());
    link.href = url.toString();
  }

  function prepareLink(link) {
    var url;
    if (link.getAttribute('href') === '#') return false;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return false;
    }

    var store = link.dataset.store || inferStore(url);
    link.dataset.store = store;
    link.dataset.creativeVersion = link.dataset.creativeVersion || 'v1';

    if (store === 'google_play') applyGooglePlayAttribution(link, url);
    return true;
  }

  function eventParameters(link) {
    var store = link.dataset.store || 'website';
    return {
      source_page: window.location.pathname,
      source_game: SOURCE,
      placement_id: link.dataset.placementId || 'unknown_placement',
      creative_version: link.dataset.creativeVersion || 'v1',
      target_game: link.dataset.targetGame || 'unknown_game',
      store: store,
      destination_type: store === 'website' ? 'portfolio_page' : 'cross_promo',
      campaign_id: campaignId(link),
      transport_type: 'beacon'
    };
  }

  function sendEvent(name, parameters) {
    if (IS_LOCAL) {
      window.__zytoonaAnalyticsDebug.push({ event: name, parameters: parameters });
    }

    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, parameters);
  }

  function trackImpressions(links) {
    if (!('IntersectionObserver' in window)) return;

    var sent = {};
    var timers = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var key = campaignId(entry.target);
        if (sent[key]) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && document.visibilityState === 'visible') {
          if (!timers[key]) {
            timers[key] = window.setTimeout(function () {
              delete timers[key];
              if (document.visibilityState !== 'visible' || sent[key]) return;
              sent[key] = true;
              observer.unobserve(entry.target);
              sendEvent('cross_promo_impression', eventParameters(entry.target));
            }, 1000);
          }
          return;
        }

        if (timers[key]) {
          window.clearTimeout(timers[key]);
          delete timers[key];
        }
      });
    }, { threshold: [0.5] });

    links.forEach(function (link) { observer.observe(link); });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') return;
      Object.keys(timers).forEach(function (key) {
        window.clearTimeout(timers[key]);
        delete timers[key];
      });
    });
  }

  var impressionLinks = [];
  document.querySelectorAll('[data-cross-promo-link]').forEach(function (link) {
    if (!prepareLink(link)) return;

    // The privacy card already measures the whole creative after qualified
    // visibility, so its icon and button must not create duplicate impressions.
    if (!link.closest('#privacyGamePromo')) impressionLinks.push(link);

    link.addEventListener('click', function () {
      var parameters = eventParameters(link);
      sendEvent('cross_promo_click', parameters);
    });
  });

  trackImpressions(impressionLinks);
})();
