(function () {
  'use strict';

  var EXPERIMENT_ID = 'wc_crosspromo_2026_v1';
  var VARIANT_NAME = 'wc_crosspromo_v1';
  var CONTROL_NAME = 'control';
  var STORAGE_KEY = 'zytoona_' + EXPERIMENT_ID;
  var SOURCE_PAGE = '/wordscrush/';

  function randomVariant() {
    if (window.crypto && window.crypto.getRandomValues) {
      var sample = new Uint32Array(1);
      window.crypto.getRandomValues(sample);
      return sample[0] % 2 === 0 ? CONTROL_NAME : VARIANT_NAME;
    }
    return Math.random() < 0.5 ? CONTROL_NAME : VARIANT_NAME;
  }

  function readStoredVariant(storage) {
    var value = storage.getItem(STORAGE_KEY);
    return value === CONTROL_NAME || value === VARIANT_NAME ? value : null;
  }

  function previewVariant() {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return null;
    }
    var value = new URLSearchParams(window.location.search).get('wc_experiment');
    return value === CONTROL_NAME || value === VARIANT_NAME ? value : null;
  }

  function selectVariant() {
    var stores = [];
    var selected = null;

    selected = previewVariant();
    if (selected) return selected;

    try {
      stores.push(window.localStorage);
    } catch (error) {
      // Some privacy modes block access to localStorage itself.
    }
    try {
      stores.push(window.sessionStorage);
    } catch (error) {
      // Continue with any available store or the per-page fallback.
    }

    for (var i = 0; i < stores.length; i += 1) {
      try {
        selected = readStoredVariant(stores[i]);
        if (selected) return selected;
      } catch (error) {
        // Storage can be blocked. Try the next first-party storage surface.
      }
    }

    selected = randomVariant();
    for (var j = 0; j < stores.length; j += 1) {
      try {
        stores[j].setItem(STORAGE_KEY, selected);
        break;
      } catch (error) {
        // A per-page random assignment remains the documented final fallback.
      }
    }
    return selected;
  }

  function sendEvent(name, parameters) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.__wcExperimentDebugEvents = window.__wcExperimentDebugEvents || [];
      window.__wcExperimentDebugEvents.push({ name: name, parameters: parameters });
      document.documentElement.dataset.wcDebugEventCount = String(window.__wcExperimentDebugEvents.length);
      document.documentElement.dataset.wcDebugLastEvent = name;
    }
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, parameters);
  }

  function baseParameters(variant) {
    return {
      experiment_id: EXPERIMENT_ID,
      variant: variant,
      source_page: SOURCE_PAGE,
      source_game: 'words_crush'
    };
  }

  function sendExposureWhenVisible(variant) {
    var sent = false;
    function send() {
      if (sent || document.visibilityState !== 'visible') return;
      sent = true;
      sendEvent('experiment_exposure', baseParameters(variant));
      document.removeEventListener('visibilitychange', send);
    }
    document.addEventListener('visibilitychange', send);
    send();
    window.setTimeout(send, 250);
    window.setTimeout(send, 1000);
  }

  function preferredStore() {
    var userAgent = navigator.userAgent || '';
    var isTouchMac = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    return (/iPad|iPhone|iPod/i.test(userAgent) || isTouchMac)
      ? 'app_store'
      : 'google_play';
  }

  function configureCrossPromoLinks(section, variant) {
    var store = preferredStore();
    var links = section.querySelectorAll('.cross-promo-action');
    links.forEach(function (link) {
      var card = link.closest('.cross-promo-card');
      var destination = store === 'app_store'
        ? link.dataset.iosUrl
        : link.dataset.androidUrl;

      if (destination) link.href = destination;
      link.textContent = store === 'app_store' ? 'View on the App Store' : 'View on Google Play';
      link.setAttribute('aria-label', link.textContent + ' for ' + card.querySelector('h3').textContent);
      link.dataset.store = store;

      link.addEventListener('click', function () {
        var parameters = baseParameters(variant);
        parameters.placement_id = 'wc_more_games_v1';
        parameters.creative_version = 'v1';
        parameters.target_game = card.dataset.targetGame;
        parameters.card_position = Number(card.dataset.cardPosition);
        parameters.store = link.dataset.store;
        parameters.destination_type = 'cross_promo';
        sendEvent('cross_promo_click', parameters);
      });
    });
  }

  function observeCrossPromoCards(section, variant) {
    if (!('IntersectionObserver' in window)) return;

    var timers = new Map();
    var sent = new Set();
    var cards = section.querySelectorAll('.cross-promo-card');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var card = entry.target;
        var targetGame = card.dataset.targetGame;

        if (sent.has(targetGame)) {
          observer.unobserve(card);
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && document.visibilityState === 'visible') {
          if (timers.has(card)) return;
          timers.set(card, window.setTimeout(function () {
            timers.delete(card);
            if (document.visibilityState !== 'visible') return;
            sent.add(targetGame);
            observer.unobserve(card);
            var parameters = baseParameters(variant);
            parameters.placement_id = 'wc_more_games_v1';
            parameters.creative_version = 'v1';
            parameters.target_game = targetGame;
            parameters.card_position = Number(card.dataset.cardPosition);
            sendEvent('cross_promo_impression', parameters);
          }, 1000));
        } else if (timers.has(card)) {
          window.clearTimeout(timers.get(card));
          timers.delete(card);
        }
      });
    }, { threshold: [0, 0.5, 1] });

    cards.forEach(function (card) {
      observer.observe(card);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        cards.forEach(function (card) {
          if (sent.has(card.dataset.targetGame)) return;
          observer.unobserve(card);
          observer.observe(card);
        });
        return;
      }
      timers.forEach(function (timer) {
        window.clearTimeout(timer);
      });
      timers.clear();
    });
  }

  function trackPrimaryStoreLinks(variant) {
    document.querySelectorAll('[data-primary-store]').forEach(function (link) {
      link.addEventListener('click', function () {
        var parameters = baseParameters(variant);
        parameters.placement_id = link.dataset.placementId;
        parameters.target_game = 'words_crush';
        parameters.store = link.dataset.primaryStore;
        parameters.destination_type = 'primary';
        sendEvent('primary_store_click', parameters);
      });
    });
  }

  var variant = selectVariant();
  var crossPromo = document.getElementById('crossPromoExperiment');

  if (!crossPromo) return;

  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    document.documentElement.dataset.wcCrossPromoVariant = variant;
  }
  sendExposureWhenVisible(variant);
  trackPrimaryStoreLinks(variant);

  if (variant === VARIANT_NAME && crossPromo) {
    crossPromo.hidden = false;
    configureCrossPromoLinks(crossPromo, variant);
    observeCrossPromoCards(crossPromo, variant);
  }
})();
