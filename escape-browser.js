// ============================================================
//  In-app browser escape (Instagram / Facebook / TikTok ...)
//  ------------------------------------------------------------
//  Embedded WebViews render the compositor-heavy gallery poorly
//  (image flicker), so nudge visitors to their real browser.
//  There is no official API for this: Android uses an intent://
//  URL, iOS the x-safari- scheme. Both are only reliable from a
//  real user tap, so an automatic attempt is paired with a
//  dismissible banner.
// ============================================================
(function () {
  var ua = navigator.userAgent || '';
  var isInApp = /Instagram|FBAN|FBAV|FB_IAB|MicroMessenger|Line\/|TikTok|musical_ly/i.test(ua);
  if (!isInApp) return;

  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua);

  function escapeUrl() {
    var href = location.href;
    if (isAndroid) {
      // Asks Android itself (not the app) to open the URL — resolves to the
      // user's default browser. Fallback returns to this same page.
      return 'intent://' + href.replace(/^https?:\/\//, '') +
        '#Intent;scheme=https;action=android.intent.action.VIEW;' +
        'category=android.intent.category.BROWSABLE;' +
        'S.browser_fallback_url=' + encodeURIComponent(href) + ';end';
    }
    if (isIOS) {
      return 'x-safari-https://' + href.replace(/^https?:\/\//, '');
    }
    return href;
  }

  // One automatic attempt per session, Android only (iOS always needs a tap).
  // The sessionStorage guard prevents a reload loop if the intent resolves to
  // browser_fallback_url instead of an external browser.
  try {
    if (isAndroid && !sessionStorage.getItem('iabAutoEscape')) {
      sessionStorage.setItem('iabAutoEscape', '1');
      location.href = escapeUrl();
    }
  } catch (e) { /* sessionStorage unavailable — banner still offers the tap */ }

  document.addEventListener('DOMContentLoaded', function () {
    try {
      if (sessionStorage.getItem('iabBannerDismissed')) return;
    } catch (e) {}

    var t = window.t || function (k) { return k; };

    var banner = document.createElement('div');
    banner.className = 'iab-banner';

    var link = document.createElement('a');
    link.className = 'iab-banner-link';
    link.href = escapeUrl();

    var hint = document.createElement('span');
    hint.className = 'iab-banner-hint';
    hint.setAttribute('data-i18n', 'iabHint');
    hint.textContent = t('iabHint');

    var action = document.createElement('span');
    action.className = 'iab-banner-action';
    action.setAttribute('data-i18n', 'iabOpen');
    action.textContent = t('iabOpen');

    link.appendChild(hint);
    link.appendChild(action);

    var close = document.createElement('button');
    close.className = 'iab-banner-close';
    close.setAttribute('aria-label', 'Dismiss');
    close.textContent = '×';
    close.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      banner.remove();
      try { sessionStorage.setItem('iabBannerDismissed', '1'); } catch (err) {}
    });

    banner.appendChild(link);
    banner.appendChild(close);
    document.body.appendChild(banner);
  });
})();
