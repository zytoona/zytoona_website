(function () {
  'use strict';

  document.querySelectorAll('[data-cross-promo-link]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof window.gtag !== 'function') return;

      window.gtag('event', 'cross_promo_click', {
        source_page: window.location.pathname,
        source_game: 'zytoona_website',
        placement_id: link.dataset.placementId,
        creative_version: 'v1',
        target_game: link.dataset.targetGame,
        store: link.dataset.store,
        destination_type: link.dataset.store === 'website' ? 'portfolio_page' : 'cross_promo'
      });
    });
  });
})();
