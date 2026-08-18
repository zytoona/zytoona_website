(function () {
  'use strict';

  var games = [
    { id: 'words_crush', name: 'كلمات كراش', description: 'استكشف خريطة العالم العربي وحل ألغاز الكلمات الممتعة.', icon: '/images/icon_wc.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.wordscrush', ios: 'https://apps.apple.com/us/app/words-crush-word-puzzle-game/id1530922357' },
    { id: 'uncrossed', name: 'متقاطعة كراش', description: 'تحدٍ جديد للكلمات المتقاطعة من زيتونة.', icon: '/images/icon_uncrossed.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.uncrossed', ios: 'https://apps.apple.com/app/id6477771169' },
    { id: 'lost_word', name: 'كلمة السر - الجزء الثاني', description: 'اكتشف الكلمة المفقودة وتجاوز المراحل المشوقة.', icon: '/images/icon_lostword.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.lostword2', ios: 'https://apps.apple.com/app/id1063063902' },
    { id: 'one_hit', name: 'ضربة معلم', description: 'اختبر معلوماتك مع ألغاز متنوعة وممتعة.', icon: '/images/icon_oh.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.onehit', ios: 'https://apps.apple.com/app/id1108811184' },
    { id: 'rashfa', name: 'رشفة', description: 'كلمات متقاطعة عربية لعشاق المعرفة والتحدي.', icon: '/images/icon_rashfa.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.rashfa', ios: 'https://apps.apple.com/app/id1050833737' },
    { id: 'ashbekha', name: 'اشبكها', description: 'اربط الأفكار والصور في لعبة ذهنية سريعة.', icon: '/images/icon_ashbekha.png', android: 'https://play.google.com/store/apps/details?id=com.zytoona.robonza', ios: 'https://apps.apple.com/app/id1150867693' },
    { id: 'brain_battle', name: 'حرب العقول', description: 'تحدَّ أصدقاءك في ألعاب ذكاء عربية.', icon: '/images/icon_bb.png', ios: 'https://apps.apple.com/us/app/%D8%AA%D8%AD%D8%AF%D9%8A-%D8%A7%D9%84%D8%B9%D9%82%D9%88%D9%84-%D8%A7%D9%84%D8%B9%D8%A8-%D9%85%D8%B9-%D8%A7%D9%84%D8%A7%D8%B5%D8%AF%D9%82%D8%A7%D8%A1/id1197870807' }
  ];

  var promo = document.getElementById('privacyGamePromo');
  if (!promo) return;

  var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var store = isIOS ? 'ios' : 'android';
  var eligibleGames = games.filter(function (game) { return Boolean(game[store]); });
  var storageKey = 'zytoona_privacy_ar_previous_game_' + store;
  var previousId = '';

  try { previousId = window.localStorage.getItem(storageKey) || ''; } catch (error) {}

  // Exclude the previous selection so a normal refresh always presents a new game.
  var candidates = eligibleGames.filter(function (candidate) { return candidate.id !== previousId; });
  if (!candidates.length) candidates = eligibleGames;
  var game = candidates[Math.floor(Math.random() * candidates.length)];
  try { window.localStorage.setItem(storageKey, game.id); } catch (error) {}

  var storeLink = promo.querySelector('[data-promo-store]');
  var iconLink = promo.querySelector('[data-promo-icon-link]');
  var placementId = promo.dataset.placementId || 'privacy_ar_game';
  var storeName = isIOS ? 'app_store' : 'google_play';
  var destination = game[store];
  var creativeVersion = 'v2_arabic_compact';

  promo.querySelector('[data-promo-icon]').src = game.icon;
  promo.querySelector('[data-promo-icon]').alt = 'أيقونة لعبة ' + game.name;
  promo.querySelector('[data-promo-name]').textContent = game.name;
  promo.querySelector('[data-promo-description]').textContent = game.description;

  [storeLink, iconLink].forEach(function (link) {
    if (!link) return;
    link.href = destination;
    link.dataset.targetGame = game.id;
    link.dataset.store = storeName;
    link.dataset.placementId = placementId;
    link.dataset.creativeVersion = creativeVersion;
  });
  storeLink.setAttribute('aria-label', 'حمّل ' + game.name + ' مجاناً');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) return;
        observer.disconnect();
        if (typeof window.gtag !== 'function') return;
        window.gtag('event', 'cross_promo_impression', {
          source_page: window.location.pathname,
          source_game: 'zytoona_website',
          placement_id: placementId,
          creative_version: creativeVersion,
          target_game: game.id,
          store: storeName
        });
      });
    }, { threshold: [0.5] });
    observer.observe(promo);
  }
})();
