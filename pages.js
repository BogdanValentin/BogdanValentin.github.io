// ===== Ruler scroll percentages =====
function updateScroller() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
  const bottom = Math.round(
    ((scrollY + viewportHeight - documentHeight) /
      (documentHeight - viewportHeight)) *
      100
  );

  const maskOne = document.querySelector(".one");
  const maskTwo = document.querySelector(".two");
  if (maskOne) maskOne.textContent = `${top}%`;
  if (maskTwo) maskTwo.textContent = `${bottom}%`;

  // Show scroll-to-top button after scrolling past 1.2× viewport
  const scrollBtn = document.querySelector(".scroll");
  if (scrollBtn) {
    scrollBtn.style.opacity = (viewportHeight + window.pageYOffset > 1.2 * viewportHeight) ? "1" : "0";
  }
}

window.addEventListener("scroll", updateScroller, { passive: true });
window.addEventListener("resize", updateScroller);
updateScroller();

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("article p, article h2, article h3, .contact-block").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Class to reveal
document.addEventListener("DOMContentLoaded", () => {
  // Small delay to allow CSS to initialise
  requestAnimationFrame(() => {
    document.querySelectorAll("article p, article h2, article h3, .contact-block").forEach((el, i) => {
      el.style.transitionDelay = (i * 0.06) + "s";
    });
  });
});

// .visible sets opacity and transform
const style = document.createElement("style");
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===== Sound System for Pages =====
const pageSounds = (() => {
  const _lastPlay = {};

  function debounce(name, ms) {
    const now = Date.now();
    if (now - (_lastPlay[name] || 0) < ms) return false;
    _lastPlay[name] = now;
    return true;
  }

  // Audio file sounds
  const buttonSound = new Audio('sounds/BUTTON.WAV');
  const liftoffSound = new Audio('sounds/liftoff.wav');
  buttonSound.preload = 'auto';
  liftoffSound.preload = 'auto';
  buttonSound.volume = 0.3;
  liftoffSound.volume = 0.3;

  return {
    button() {
      if (!debounce('button', 200)) return;
      try { buttonSound.currentTime = 0; buttonSound.play().catch(() => {}); } catch(e) {}
    },
    liftoff() {
      if (!debounce('liftoff', 300)) return;
      try { liftoffSound.currentTime = 0; liftoffSound.play().catch(() => {}); } catch(e) {}
    }
  };
})();

// Wire up sounds to page elements — nav links change page = liftoff
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    pageSounds.liftoff();
    setTimeout(() => { window.location.href = href; }, 300);
  });
});

// Scroll button = regular button click
const scrollBtn2 = document.querySelector('.scroll');
if (scrollBtn2) {
  scrollBtn2.addEventListener('click', () => pageSounds.button());
}

// Contact page links = regular button click
document.querySelectorAll('.contact-link-big').forEach(link => {
  link.addEventListener('click', () => pageSounds.button());
});
