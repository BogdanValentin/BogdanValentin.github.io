// ============================================================
//  Language switcher — RO / EN
//  Translations are mirrored in en.json and ro.json (root).
//  Edit those JSON files to update text; update TRANSLATIONS
//  below to match so the in-page bundle stays in sync.
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
    file1Body: "I work as a backend developer. Student at the Faculty of Automation at UPB Bucharest. Former student at Mihai Eminescu High School in Calarasi. I\u2019ve loved computers from a young age \u2014 my dad was a geek and we had a PC at home since I was born. I work on personal projects in my free time: this website, two Minecraft mods, a music player, a Wordle clone, my thesis project (scan & pay), etc.",
    fileTitle2: "Photography",
    file2Body: "Passionate about photography since high school, I gradually started attending competitions, festivals, and events. I shoot with a Nikon D3400 (18-55mm, 70-300mm, 50mm f/1.8) and a Sony A7 III (16-55mm f/2.8). I mainly photograph animals (I love cats \uD83D\uDC31), landscapes, astronomy, portraits, architecture, and planes.",
    fileTitle3: "Other",
    file3Body: "As hobbies, I enjoy video games (Minecraft, Rimworld, Stardew Valley, etc.), staying active: running, cycling, bouldering, swimming \u2014 and I love wandering around aimlessly. I listen to pretty much any genre, but I prefer electronic music.",
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
    footerCity: "2026 \u2022 Bucharest"
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
    file2Body: "Pasionat de fotografie inca din liceu, am inceput usor usor sa merg la concursuri, festivaluri, evenimente. Fotografiez cu un Nikon D3400 (18-55mm, 70-300mm, 50mm f/1.8) si un Sony A7 III (16-55mm f/2.8). In special fotografiez animale (iubesc pisicile \uD83D\uDC31), peisaje, astronomie, portrete, arhitectura, avioane.",
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
    footerCity: "2026 \u2022 Bucuresti"
  }
};

// Initialise synchronously so gallery scripts (defer) can call window.t()
window.currentLang = localStorage.getItem('lang') || 'ro';
window.t = function(key) {
  return (TRANSLATIONS[window.currentLang] || TRANSLATIONS.ro)[key] || key;
};

// Glitch characters matching the Baffle.js example
const GLITCH_CHARS = "\u2588\u2593\u2588 \u2592\u2591/\u2592\u2591 \u2588\u2591\u2592\u2593/ \u2588\u2592\u2592 \u2593\u2592\u2593/\u2588 \u2591\u2588\u2592/ \u2592\u2593\u2591 \u2588<\u2591\u2592 \u2593/\u2591>";

function applyTranslations(animate) {
  if (animate && typeof baffle !== 'undefined') {
    const b = baffle('[data-i18n]');
    b.set({ characters: GLITCH_CHARS, speed: 120 });
    b.start();
    setTimeout(function() {
      b.text(function(el) { return window.t(el.dataset.i18n); });
      b.reveal(1500);
    }, 400);
  } else {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      el.textContent = window.t(el.dataset.i18n);
      if (el.hasAttribute('data-text')) {
        el.setAttribute('data-text', window.t(el.dataset.i18n));
      }
    });
  }

  // Update active category label (dynamically rendered by gallery)
  var catLabel = document.getElementById('activeCategoryLabel');
  if (catLabel) catLabel.textContent = window.t('allWork');

  // Rebuild category index with translated labels
  if (window.gallery && typeof window.gallery.buildCategoryIndex === 'function') {
    window.gallery.buildCategoryIndex();
  }

  // Update html lang attribute
  document.documentElement.lang = window.currentLang;

  // Update button: show the OTHER language
  var btn = document.getElementById('langToggle');
  if (btn) btn.textContent = window.currentLang === 'en' ? 'RO' : 'EN';
}

window.setLanguage = function(lang) {
  if (lang !== 'en' && lang !== 'ro') return;
  window.currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(true);
};

// Set button text immediately — button is already in DOM above this script
(function() {
  var btn = document.getElementById('langToggle');
  if (btn) btn.textContent = window.currentLang === 'en' ? 'RO' : 'EN';
})();

// Apply initial translations after the DOM is fully ready (no animation on first load)
document.addEventListener('DOMContentLoaded', function() {
  applyTranslations(false);
});
