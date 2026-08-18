(function () {
  'use strict';

  var games = [
    {
      id: 'words_crush',
      name: 'Words Crush',
      description: 'Relax with a quick Arabic word puzzle.',
      icon: '/images/icon_wc.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.wordscrush',
      ios: 'https://apps.apple.com/us/app/words-crush-word-puzzle-game/id1530922357'
    },
    {
      id: 'uncrossed',
      name: 'Uncrossed',
      description: 'A fresh Arabic crossword challenge.',
      icon: '/images/icon_uncrossed.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.uncrossed',
      ios: 'https://apps.apple.com/app/id6477771169'
    },
    {
      id: 'lost_word',
      name: 'Lost Word',
      description: 'Solve clues and uncover the hidden word.',
      icon: '/images/icon_lostword.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.lostword2',
      ios: 'https://apps.apple.com/app/id1063063902'
    },
    {
      id: 'one_hit',
      name: 'One Hit',
      description: 'Test your knowledge one clue at a time.',
      icon: '/images/icon_oh.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.onehit',
      ios: 'https://apps.apple.com/app/id1108811184'
    },
    {
      id: 'rashfa',
      name: 'Rashfa',
      description: 'Enjoy a clever Arabic word challenge.',
      icon: '/images/icon_rashfa.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.rashfa',
      ios: 'https://apps.apple.com/app/id1050833737'
    },
    {
      id: 'robonza',
      name: 'Robonza',
      description: 'Play a fast, colorful Arabic puzzle.',
      icon: '/images/icon_bb.png',
      android: 'https://play.google.com/store/apps/details?id=com.zytoona.robonza',
      ios: 'https://apps.apple.com/app/id1150867693'
    }
  ];

  var promo = document.getElementById('privacyGamePromo');
  if (!promo) return;

  var index = Math.floor(Math.random() * games.length);
  try {
    var stored = window.sessionStorage.getItem('zytoona_privacy_ar_game');
    if (stored !== null && Number(stored) >= 0 && Number(stored) < games.length) {
      index = Number(stored);
    } else {
      window.sessionStorage.setItem('zytoona_privacy_ar_game', String(index));
    }
  } catch (error) {
    // The random selection still works when first-party storage is unavailable.
  }

  var game = games[index];
  var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var storeLink = promo.querySelector('[data-promo-store]');

  promo.querySelector('[data-promo-icon]').src = game.icon;
  promo.querySelector('[data-promo-icon]').alt = game.name + ' game icon';
  promo.querySelector('[data-promo-name]').textContent = game.name;
  promo.querySelector('[data-promo-description]').textContent = game.description;
  storeLink.href = isIOS ? game.ios : game.android;
  storeLink.dataset.targetGame = game.id;
  storeLink.dataset.store = isIOS ? 'app_store' : 'google_play';
  storeLink.textContent = isIOS ? 'App Store' : 'Google Play';

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) return;
        observer.disconnect();
        if (typeof window.gtag !== 'function') return;
        window.gtag('event', 'cross_promo_impression', {
          source_page: window.location.pathname,
          source_game: 'zytoona_website',
          placement_id: 'privacy_ar_game',
          creative_version: 'v1',
          target_game: game.id,
          store: storeLink.dataset.store
        });
      });
    }, { threshold: [0.5] });
    observer.observe(promo);
  }
})();
