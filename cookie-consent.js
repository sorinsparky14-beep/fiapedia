/*!
 * cookie-consent.js — GDPR/ePrivacy Cookie Consent for Grilgridi
 * Supports: Accept All | Decline | Customize (Analytics + Advertising)
 * Implements Google Consent Mode v2
 * Include this script in ALL pages: index.html + all 4 game pages
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'grilgridi_cookie_consent';
  var CONSENT_VERSION = 1;

  // ── Helpers ────────────────────────────────────────────────────────────────
  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && parsed.v === CONSENT_VERSION) return parsed;
      return null;
    } catch (e) { return null; }
  }

  function saveConsent(analytics, advertising) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        v: CONSENT_VERSION,
        analytics: analytics,
        advertising: advertising,
        ts: Date.now()
      }));
    } catch (e) {}
  }

  // ── Google Consent Mode v2 ──────────────────────────────────────────────────
  function applyGoogleConsent(analytics, advertising) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('consent', 'update', {
      analytics_storage:  analytics   ? 'granted' : 'denied',
      ad_storage:         advertising ? 'granted' : 'denied',
      ad_user_data:       advertising ? 'granted' : 'denied',
      ad_personalization: advertising ? 'granted' : 'denied'
    });
  }

  // ── CSS ────────────────────────────────────────────────────────────────────
  var CSS = `
    :root {
      --cc-void:    #050507;
      --cc-jet:     #111119;
      --cc-slate:   #16161f;
      --cc-gun:     #1c1c28;
      --cc-iron:    #232333;
      --cc-steel:   #2d2d42;
      --cc-bolt:    #3a3a52;
      --cc-dim:     #5a5a7a;
      --cc-chrome:  #8888a8;
      --cc-silver:  #b8b8d0;
      --cc-ivory:   #e8e6e0;
      --cc-white:   #f4f2ec;
      --cc-gDim:    #6a5520;
      --cc-gold:    #a8832a;
      --cc-goldM:   #c9a84c;
      --cc-goldL:   #e8c96a;
      --cc-red:     #e8002d;
      --cc-green:   #00d68f;
    }

    /* ── Backdrop ── */
    #cc-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(5,5,7,.72);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      z-index: 999998;
      opacity: 0;
      animation: cc-fade-in .35s ease forwards;
    }

    /* ── Banner ── */
    #cc-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999999;
      background: linear-gradient(180deg, var(--cc-gun) 0%, var(--cc-jet) 100%);
      border-top: 1px solid var(--cc-bolt);
      box-shadow: 0 -8px 40px rgba(0,0,0,.65), 0 -1px 0 rgba(201,168,76,.18);
      padding: 0;
      transform: translateY(100%);
      animation: cc-slide-up .4s cubic-bezier(.16,1,.3,1) .1s forwards;
      font-family: 'Teko', 'Arial Narrow', sans-serif;
    }

    /* Gold top edge */
    #cc-banner::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, var(--cc-goldM) 30%, var(--cc-goldL) 50%, var(--cc-goldM) 70%, transparent 100%);
    }

    #cc-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 18px 24px 20px;
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    #cc-text {
      flex: 1;
      min-width: 260px;
    }

    #cc-title {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--cc-goldL);
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    #cc-title::before {
      content: '🍪';
      font-size: 1rem;
      letter-spacing: 0;
    }

    #cc-desc {
      font-size: .88rem;
      color: var(--cc-chrome);
      line-height: 1.55;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 400;
      letter-spacing: 0;
    }

    #cc-desc a {
      color: var(--cc-goldM);
      text-decoration: underline;
      text-underline-offset: 2px;
      cursor: pointer;
    }

    #cc-desc a:hover { color: var(--cc-goldL); }

    #cc-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      flex-shrink: 0;
    }

    .cc-btn {
      font-family: 'Teko', 'Arial Narrow', sans-serif;
      font-size: .85rem;
      font-weight: 700;
      letter-spacing: .18em;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      padding: 9px 22px;
      transition: all .18s ease;
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      white-space: nowrap;
      outline: none;
    }

    #cc-btn-accept {
      background: var(--cc-red);
      color: #fff;
      box-shadow: 0 0 18px rgba(232,0,45,.3);
    }

    #cc-btn-accept:hover {
      background: #ff1a45;
      box-shadow: 0 0 28px rgba(232,0,45,.55);
      transform: translateY(-1px);
    }

    #cc-btn-decline {
      background: transparent;
      color: var(--cc-silver);
      border: 1px solid var(--cc-bolt);
    }

    #cc-btn-decline:hover {
      border-color: var(--cc-chrome);
      color: var(--cc-ivory);
      transform: translateY(-1px);
    }

    #cc-btn-custom {
      background: transparent;
      color: var(--cc-goldM);
      border: 1px solid var(--cc-gDim);
      font-size: .78rem;
    }

    #cc-btn-custom:hover {
      border-color: var(--cc-goldM);
      color: var(--cc-goldL);
      transform: translateY(-1px);
    }

    /* ── Customize Modal ── */
    #cc-modal {
      position: fixed;
      inset: 0;
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    #cc-modal-box {
      background: linear-gradient(155deg, var(--cc-gun) 0%, var(--cc-jet) 60%, var(--cc-slate) 100%);
      border: 1px solid var(--cc-bolt);
      width: 100%;
      max-width: 480px;
      font-family: 'Teko', 'Arial Narrow', sans-serif;
      position: relative;
      animation: cc-modal-in .3s cubic-bezier(.16,1,.3,1) both;
      clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
      overflow: hidden;
    }

    /* Gold top accent */
    #cc-modal-box::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--cc-goldM), var(--cc-goldL), var(--cc-goldM), transparent);
    }

    #cc-modal-head {
      padding: 24px 28px 16px;
      border-bottom: 1px solid var(--cc-bolt);
    }

    #cc-modal-title {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--cc-ivory);
    }

    #cc-modal-subtitle {
      font-size: .8rem;
      color: var(--cc-chrome);
      margin-top: 4px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 400;
      letter-spacing: 0;
    }

    #cc-modal-body {
      padding: 20px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .cc-category {
      background: rgba(58,58,82,.22);
      border: 1px solid var(--cc-bolt);
      padding: 14px 16px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .cc-cat-info { flex: 1; }

    .cc-cat-name {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--cc-ivory);
      margin-bottom: 3px;
    }

    .cc-cat-desc {
      font-size: .76rem;
      color: var(--cc-dim);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.45;
    }

    /* Toggle switch */
    .cc-toggle {
      position: relative;
      flex-shrink: 0;
      width: 44px;
      height: 24px;
      margin-top: 2px;
      display: block;
      cursor: pointer;
    }

    .cc-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    .cc-toggle input:disabled ~ .cc-toggle-track {
      cursor: not-allowed;
      opacity: .7;
    }

    .cc-toggle-track {
      position: absolute;
      inset: 0;
      background: var(--cc-steel);
      border: 1px solid var(--cc-bolt);
      border-radius: 12px;
      cursor: pointer;
      transition: background .2s, border-color .2s;
    }

    .cc-toggle-thumb {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      background: var(--cc-chrome);
      border-radius: 50%;
      transition: transform .22s cubic-bezier(.34,1.56,.64,1), background .2s;
      pointer-events: none;
    }

    .cc-toggle input:checked ~ .cc-toggle-track {
      background: rgba(0,214,143,.25);
      border-color: var(--cc-green);
    }

    .cc-toggle input:checked ~ .cc-toggle-thumb {
      transform: translateX(20px);
      background: var(--cc-green);
    }

    /* Required badge */
    .cc-required-badge {
      font-size: .65rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--cc-goldM);
      border: 1px solid var(--cc-gDim);
      padding: 2px 8px;
      margin-top: 2px;
      display: inline-block;
    }

    #cc-modal-foot {
      padding: 16px 28px 24px;
      display: flex;
      gap: 10px;
      border-top: 1px solid var(--cc-bolt);
    }

    #cc-modal-foot .cc-btn { flex: 1; text-align: center; }

    #cc-btn-save {
      background: var(--cc-red);
      color: #fff;
      box-shadow: 0 0 16px rgba(232,0,45,.25);
    }

    #cc-btn-save:hover {
      background: #ff1a45;
      box-shadow: 0 0 26px rgba(232,0,45,.5);
    }

    #cc-btn-back {
      background: transparent;
      color: var(--cc-chrome);
      border: 1px solid var(--cc-bolt);
    }

    #cc-btn-back:hover {
      color: var(--cc-ivory);
      border-color: var(--cc-chrome);
    }

    /* ── Animations ── */
    @keyframes cc-fade-in {
      to { opacity: 1; }
    }

    @keyframes cc-slide-up {
      to { transform: translateY(0); }
    }

    @keyframes cc-modal-in {
      from { opacity: 0; transform: translateY(20px) scale(.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ── Settings link in footer ── */
    .cc-settings-link {
      color: var(--cc-dim);
      cursor: pointer;
      font-size: .72rem;
      letter-spacing: .1em;
      text-transform: uppercase;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color .15s;
    }

    .cc-settings-link:hover { color: var(--cc-goldM); }

    /* ── Responsive ── */
    @media (max-width: 600px) {
      #cc-inner {
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 16px 18px;
        gap: 14px;
      }
      #cc-buttons { width: 100%; }
      .cc-btn { flex: 1; text-align: center; }
      #cc-modal-box {
        clip-path: none;
        border-radius: 2px;
      }
      #cc-modal-head, #cc-modal-foot { padding-left: 18px; padding-right: 18px; }
      #cc-modal-body { padding: 16px 18px; }
    }
  `;

  // ── HTML ────────────────────────────────────────────────────────────────────
  function getPrivacyLink() {
    return '/?page=privacy';
  }

  function getTermsLink() {
    return '/?page=terms';
  }

  function buildBannerHTML() {
    return `
      <div id="cc-backdrop"></div>
      <div id="cc-banner" role="dialog" aria-modal="true" aria-label="Cookie Consent">
        <div id="cc-inner">
          <div id="cc-text">
            <div id="cc-title">Cookies &amp; Privacy Choices</div>
            <p id="cc-desc">
              This website uses cookies and similar technologies. Essential cookies are always active to keep the games running.
              With your consent, we also use analytics and advertising cookies to improve the site and show relevant ads.
              <a href="${getPrivacyLink()}" target="_blank" rel="noopener">Privacy Policy</a> &amp;
              <a href="${getTermsLink()}" target="_blank" rel="noopener">Terms &amp; Conditions</a>
            </p>
          </div>
          <div id="cc-buttons">
            <button class="cc-btn" id="cc-btn-accept">Accept All</button>
            <button class="cc-btn" id="cc-btn-decline">Decline</button>
            <button class="cc-btn" id="cc-btn-custom">⚙ Customize</button>
          </div>
        </div>
      </div>

      <div id="cc-modal" style="display:none;" role="dialog" aria-modal="true" aria-label="Cookie Preferences">
        <div id="cc-modal-box">
          <div id="cc-modal-head">
            <div id="cc-modal-title">Cookie Preferences</div>
            <div id="cc-modal-subtitle">Choose which cookies you allow. Your choice is saved for this browser.</div>
          </div>
          <div id="cc-modal-body">

            <!-- Essential (always on) -->
            <div class="cc-category">
              <div class="cc-cat-info">
                <div class="cc-cat-name">Essential</div>
                <div class="cc-cat-desc">Necessary for the website to function. These keep the games running, save your game state, and enable multiplayer rooms. Cannot be disabled.</div>
                <span class="cc-required-badge">Always Active</span>
              </div>
              <label class="cc-toggle" aria-label="Essential cookies, always active">
                <input type="checkbox" id="cc-chk-essential" checked disabled>
                <div class="cc-toggle-track"></div>
                <div class="cc-toggle-thumb"></div>
              </label>
            </div>

            <!-- Analytics -->
            <div class="cc-category">
              <div class="cc-cat-info">
                <div class="cc-cat-name">Analytics</div>
                <div class="cc-cat-desc">Help us understand how visitors use the site (e.g. pages visited, sessions). Data is anonymised and aggregated — no personal identifiers are tracked.</div>
              </div>
              <label class="cc-toggle" aria-label="Toggle analytics cookies">
                <input type="checkbox" id="cc-chk-analytics">
                <div class="cc-toggle-track"></div>
                <div class="cc-toggle-thumb"></div>
              </label>
            </div>

            <!-- Advertising -->
            <div class="cc-category">
              <div class="cc-cat-info">
                <div class="cc-cat-name">Advertising</div>
                <div class="cc-cat-desc">Allow Google Ads to show relevant advertisements. These cookies may track your activity across websites to personalise ads shown to you.</div>
              </div>
              <label class="cc-toggle" aria-label="Toggle advertising cookies">
                <input type="checkbox" id="cc-chk-advertising">
                <div class="cc-toggle-track"></div>
                <div class="cc-toggle-thumb"></div>
              </label>
            </div>

          </div>
          <div id="cc-modal-foot">
            <button class="cc-btn" id="cc-btn-back">← Back</button>
            <button class="cc-btn" id="cc-btn-save">Save Preferences</button>
          </div>
        </div>
      </div>
    `;
  }

  // ── Mount & Logic ───────────────────────────────────────────────────────────
  function removeBanner() {
    var root     = document.getElementById('cc-root');
    var backdrop = document.getElementById('cc-backdrop');
    var banner   = document.getElementById('cc-banner');
    var modal    = document.getElementById('cc-modal');
    var styles   = document.getElementById('cc-styles');
    if (backdrop) backdrop.remove();
    if (banner)   banner.remove();
    if (modal)    modal.remove();
    if (root)     root.remove();
    if (styles)   styles.remove();
  }

  function openModal() {
    var existing = getConsent();
    var chkA = document.getElementById('cc-chk-analytics');
    var chkAd = document.getElementById('cc-chk-advertising');
    if (chkA)  chkA.checked  = existing ? existing.analytics  : false;
    if (chkAd) chkAd.checked = existing ? existing.advertising : false;

    document.getElementById('cc-banner').style.display = 'none';
    document.getElementById('cc-modal').style.display  = 'flex';
  }

  function closeModal() {
    document.getElementById('cc-modal').style.display  = 'none';
    document.getElementById('cc-banner').style.display = '';
  }

  function acceptAll() {
    saveConsent(true, true);
    applyGoogleConsent(true, true);
    removeBanner();
  }

  function declineAll() {
    saveConsent(false, false);
    applyGoogleConsent(false, false);
    removeBanner();
  }

  function savePreferences() {
    var analytics   = document.getElementById('cc-chk-analytics').checked;
    var advertising = document.getElementById('cc-chk-advertising').checked;
    saveConsent(analytics, advertising);
    applyGoogleConsent(analytics, advertising);
    removeBanner();
  }

  var _escListenerAttached = false;

  function mountBanner() {
    // Inject CSS
    var style = document.createElement('style');
    style.id  = 'cc-styles';
    style.textContent = CSS;
    document.head.appendChild(style);

    // Inject HTML
    var container = document.createElement('div');
    container.id  = 'cc-root';
    container.innerHTML = buildBannerHTML();
    document.body.appendChild(container);

    // Wire buttons
    document.getElementById('cc-btn-accept') .addEventListener('click', acceptAll);
    document.getElementById('cc-btn-decline').addEventListener('click', declineAll);
    document.getElementById('cc-btn-custom') .addEventListener('click', openModal);
    document.getElementById('cc-btn-back')   .addEventListener('click', closeModal);
    document.getElementById('cc-btn-save')   .addEventListener('click', savePreferences);

    // Keyboard: Esc closes modal, goes back to banner — attach only once
    if (!_escListenerAttached) {
      _escListenerAttached = true;
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          var modal = document.getElementById('cc-modal');
          if (modal && modal.style.display !== 'none') closeModal();
        }
      });
    }
  }

  // ── Public API: allow re-opening from settings link ─────────────────────────
  window.ccOpenSettings = function() {
    var existing = document.getElementById('cc-banner');
    if (!existing) {
      mountBanner();
    }
    openModal();
  };

  // ── Init ────────────────────────────────────────────────────────────────────
  function init() {
    var consent = getConsent();

    // Always apply consent mode defaults before any gtag calls
    if (typeof window.gtag === 'function') {
      // Default deny until we know user choice
      window.gtag('consent', 'default', {
        analytics_storage:  'denied',
        ad_storage:         'denied',
        ad_user_data:       'denied',
        ad_personalization: 'denied',
        wait_for_update:    500
      });
    }

    if (consent) {
      // User has already chosen — just apply and done
      applyGoogleConsent(consent.analytics, consent.advertising);
      return;
    }

    // No consent recorded — show the banner
    if (document.body) {
      mountBanner();
    } else {
      document.addEventListener('DOMContentLoaded', mountBanner);
    }
  }

  init();

})();
