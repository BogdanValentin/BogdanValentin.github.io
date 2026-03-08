// Progressive throttle lines on mobile (standalone function, outside any class)
function updateThrottleLinesOnScroll(panel) {
  const btn = document.getElementById('panelScrollTop');
  if (!btn) return;
  if (window.innerWidth > 768) return;
  const activePanel = panel || document.querySelector('.index-panel.active');
  if (!activePanel) return;
  const maxLines = 8;
  const scroll = activePanel.scrollTop;
  const height = activePanel.scrollHeight - activePanel.clientHeight;
  let lines = 1;
  if (height > 0) {
    // smoother progressive mapping; only reach max at bottom
    const ratio = Math.min(1, Math.max(0, scroll / height));
    lines = 1 + Math.floor(ratio * (maxLines - 1));
  }
  // Apply .visible to the first `lines` rects
  const rects = btn.querySelectorAll('.panel-rect');
  rects.forEach((rect, i) => {
    if (i < lines) rect.classList.add('visible'); else rect.classList.remove('visible');
  });
  btn.setAttribute('data-lines', lines);
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 768) return;

  // Attach scroll listeners to all index panels
  const panels = document.querySelectorAll('.index-panel');
  panels.forEach(p => p.addEventListener('scroll', () => updateThrottleLinesOnScroll(p), { passive: true }));

  // Observe class changes on panels so we can update when one becomes active
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      if (m.type === 'attributes' && m.attributeName === 'class') {
        const target = m.target;
        if (target.classList && target.classList.contains('index-panel') && target.classList.contains('active')) {
          updateThrottleLinesOnScroll(target);
        }
      }
    });
  });
  panels.forEach(p => observer.observe(p, { attributes: true }));

  // Initial update
  updateThrottleLinesOnScroll();
});

// Safeguard: on first touch, mark document to avoid any hover-like CSS
document.addEventListener('touchstart', function onFirstTouch() {
  document.documentElement.classList.add('no-touch-hover');
  document.removeEventListener('touchstart', onFirstTouch);
}, { passive: true });
