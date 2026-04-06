// ============================================================
//  Language switcher — RO / EN
//  All translations live in the TRANSLATIONS object below.
// ============================================================

const TRANSLATIONS = {
  en: {
    allWork: "All Work",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    throttleUp: "Throttle up",

    aboutHeading: "About",
    aboutLine1: "backend developer,",
    aboutLine2: "photographer,",
    aboutLine3: "Bucharest.",
    fileTitle1: "Professional",
    file1Body: "I work as a backend developer. Student at the Faculty of Automation at UPB Bucharest. Former student at Mihai Eminescu High School in Calarasi. I\u2019ve loved computers from a young age as my dad was a geek and we had a PC at home since I was born. I work on personal projects in my free time: this website, two Minecraft mods, a music player, a Wordle clone, my thesis project (scan & pay), etc.",
    fileTitle2: "Photography",
    file2Body: "Passionate about photography since high school, I gradually started attending competitions, festivals, and events. I shoot with a Nikon D3400 (18-55mm, 70-300mm, 50mm f/1.8). I mainly photograph animals (I love cats \uD83D\uDC31), landscapes, astronomy, portraits, architecture, and planes.",
    fileTitle3: "Other",
    file3Body: "As hobbies, I enjoy video games (Minecraft, Rimworld, Stardew Valley, etc.), staying active: running, cycling, bouldering, swimming and I love wandering around aimlessly. I listen to pretty much any genre, but I prefer electronic music.",
    archiveTitle: "Previous version",
    archiveDesc: "First version, back when LLMs didn\u2019t exist.",
    archiveLink: "Visit \u2197",

    contactHeading: "Contact",
    ctIntro: "If you want to get in touch, find me below:",

    cat_animals: "Animals",
    cat_architecture: "Architecture",
    cat_portraits: "Portraits",
    cat_sport: "Sport",
    cat_landscapes: "Landscapes",
    cat_astronomy: "Astronomy",
    cat_flowers: "Flowers",
    cat_events: "Events",
    cat_art: "Art",
    cat_autoportret: "Autoportraits",
    cat_vehicles: "Vehicles",

    ctSectorName: "Bucharest\u00a0·\u00a0Romania",
    ctTransmission: "END_TRANSMISSION",
    footerCity: "2026 \u2022 Bucharest",

    tooltipSplitView: "Split view",
    tooltipTheatreMode: "Theatre mode",
    tooltipFullscreen: "Fullscreen"
  },
  ro: {
    allWork: "Categorii",
    gallery: "Galerie",
    about: "Despre",
    contact: "Contact",
    throttleUp: "Inapoi sus",

    aboutHeading: "Despre",
    aboutLine1: "backend developer,",
    aboutLine2: "fotograf,",
    aboutLine3: "Bucuresti.",
    fileTitle1: "Profesional",
    file1Body: "Lucrez ca backend developer. Student la facultatea de Automatica din cadrul UPB Bucuresti. Fost elev la Liceul Teoretic \u201cMihai Eminescu\u201d Calarasi. Mi-au placut calculatoarele inca de mic, de unde si tata a fost un geek si am avut PC acasa de cand m-am nascut. Lucrez la proiecte personale in timpul liber: site-ul asta, doua moduri de Minecraft, un music player, o clona wordle, licenta mea (scan & pay) etc.",
    fileTitle2: "Fotografie",
    file2Body: "Pasionat de fotografie inca din liceu, am inceput usor usor sa merg la concursuri, festivaluri, evenimente. Fotografiez cu un Nikon D3400 (18-55mm, 70-300mm, 50mm f/1.8). In special fotografiez animale (iubesc pisicile \uD83D\uDC31), peisaje, astronomie, portrete, arhitectura, avioane.",
    fileTitle3: "Altele",
    file3Body: "Ca pasiuni, in timpul liber imi place sa joc jocuri video (Minecraft, Rimworld, Stardew Valley etc.), sa fiu activ: alergat, bicicleta, bouldering, inot si ador sa ma plimb de nebun. Ascult cam orice gen muzical, dar prefer muzica electronica.",
    archiveTitle: "Versiunea anterioara",
    archiveDesc: "Prima versiune, pe vremea cand nu existau LLM-uri.",
    archiveLink: "Viziteaza \u2197",

    contactHeading: "Contact",
    ctIntro: "Daca vrei sa luam legatura ma gasesti mai jos:",

    cat_animals: "Animale",
    cat_architecture: "Arhitectura",
    cat_portraits: "Portrete",
    cat_sport: "Sport",
    cat_landscapes: "Peisaje",
    cat_astronomy: "Astronomie",
    cat_flowers: "Flori",
    cat_events: "Evenimente",
    cat_art: "Arta",
    cat_autoportret: "Autoportrete",
    cat_vehicles: "Vehicule",

    ctSectorName: "Bucuresti\u00a0·\u00a0Romania",
    ctTransmission: "SFARSIT_TRANSMISIE",
    footerCity: "2026 \u2022 Bucuresti",

    tooltipSplitView: "Mod split",
    tooltipTheatreMode: "Mod teatru",
    tooltipFullscreen: "Ecran complet"
  }
};

// Initialise synchronously so gallery scripts (defer) can call window.t()
window.currentLang = localStorage.getItem('lang') || 'ro';
window.t = function(key) {
  return (TRANSLATIONS[window.currentLang] || TRANSLATIONS.ro)[key] || key;
};

var GLITCH_CHARS = "\u2588\u2593\u2588 \u2592\u2591/\u2592\u2591 \u2588\u2591\u2592\u2593/ \u2588\u2592\u2592 \u2593\u2592\u2593/\u2588 \u2591\u2588\u2592/ \u2592\u2593\u2591 \u2588<\u2591\u2592 \u2593/\u2591>";

function glitchReveal(elements, getNewText, onDone) {
  var SPEED      = 25;   // ms per frame
  var SCRAMBLE   = 120;  // ms of pure scramble before reveal
  var REVEAL     = 450;  // ms to progressively show new text
  var start      = Date.now();

  var items = Array.from(elements).map(function(el) {
    return { el: el, target: getNewText(el) };
  });

  function tick() {
    var elapsed  = Date.now() - start;
    var progress = Math.max(0, (elapsed - SCRAMBLE) / REVEAL);
    var done     = elapsed >= SCRAMBLE + REVEAL;

    items.forEach(function(item) {
      var t      = item.target;
      var reveal = done ? t.length : Math.floor(progress * t.length);
      var text   = t.slice(0, reveal);
      for (var i = reveal; i < t.length; i++) {
        text += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      }
      item.el.textContent = text;
    });

    if (done) {
      items.forEach(function(item) {
        item.el.textContent = item.target;
        if (item.el.hasAttribute('data-text')) {
          item.el.setAttribute('data-text', item.target);
        }
      });
      if (onDone) onDone();
    } else {
      setTimeout(tick, SPEED);
    }
  }

  tick();
}

function updateTooltips() {
  var vmKeys = ['tooltipSplitView', 'tooltipTheatreMode', 'tooltipFullscreen'];
  [0, 1, 2].forEach(function(i) {
    var btn = document.getElementById('vmBtn' + i);
    if (btn) btn.setAttribute('aria-label', window.t(vmKeys[i]));
  });
}

window.updateTooltips = updateTooltips;

function updateButton() {
  var flag = window.currentLang === 'en' ? '\uD83C\uDDEC\uD83C\uDDE7' : '\uD83C\uDDF7\uD83C\uDDF4';
  var code = window.currentLang === 'en' ? 'EN' : 'RO';
  var html = '<span class="lang-flag">' + flag + '</span> ' + code;
  document.querySelectorAll('.lang-toggle').forEach(function(btn) {
    btn.innerHTML = html;
  });
}

function getCatFromEl(el) {
  var row = el.parentElement;
  var id  = row && row.dataset && row.dataset.category;
  if (!id || id === 'all') return null;
  if (typeof GALLERY_CATEGORIES === 'undefined') return null;
  return GALLERY_CATEGORIES.find(function(c) { return c.id === id; }) || null;
}

function getCategoryLabelText() {
  if (!window.gallery) return window.t('allWork');
  var id = window.gallery.activeCategory;
  if (!id || id === 'all') return window.t('allWork');
  var cat = (typeof GALLERY_CATEGORIES !== 'undefined')
    ? GALLERY_CATEGORIES.find(function(c) { return c.id === id; })
    : null;
  if (!cat) return window.t('allWork');
  return (window.currentLang === 'ro' && cat.labelRo) ? cat.labelRo : cat.label;
}

function applyTranslations(animate) {
  var staticEls  = Array.from(document.querySelectorAll('[data-i18n]'));
  var catLabel   = document.getElementById('activeCategoryLabel');
  var catNameEls = Array.from(document.querySelectorAll('#categoryList .category-name'));

  function getText(el) {
    if (el === catLabel) return getCategoryLabelText();
    if (el.classList.contains('category-name')) {
      var row = el.parentElement;
      var id  = row && row.dataset && row.dataset.category;
      if (!id || id === 'all') return '\u2726 ' + window.t('allWork');
      var cat = getCatFromEl(el);
      return cat ? ((window.currentLang === 'ro' && cat.labelRo) ? cat.labelRo : cat.label) : el.textContent;
    }
    return window.t(el.dataset.i18n);
  }

  if (animate) {
    var allEls = staticEls.concat(catNameEls);
    if (catLabel) allEls.push(catLabel);

    glitchReveal(allEls, getText, function() {
      // Rebuild properly after animation so event listeners are re-attached
      if (window.gallery && typeof window.gallery.buildCategoryIndex === 'function') {
        window.gallery.buildCategoryIndex();
      }
    });
  } else {
    staticEls.forEach(function(el) {
      el.textContent = window.t(el.dataset.i18n);
      if (el.hasAttribute('data-text')) {
        el.setAttribute('data-text', window.t(el.dataset.i18n));
      }
    });
    if (catLabel) catLabel.textContent = getCategoryLabelText();
    if (window.gallery && typeof window.gallery.buildCategoryIndex === 'function') {
      window.gallery.buildCategoryIndex();
    }
  }

  document.documentElement.lang = window.currentLang;
  updateButton();
  updateTooltips();
}

window.setLanguage = function(lang) {
  if (lang !== 'en' && lang !== 'ro') return;
  window.currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(true);
};

// Set button immediately — already in DOM above this script
updateButton();

// Apply initial translations after DOM + gallery scripts are ready
document.addEventListener('DOMContentLoaded', function() {
  applyTranslations(false);
});
