// static/js/fix-navbar.js
// Fix definitivo: forza la navbar sopra il banner e rimuove classi headroom
(function() {
  function applyFix() {
    const el = document.querySelector('.page-header.header--fixed');
    if (!el) return false;

    // rimuovi classi headroom
    ['headroom','headroom--pinned','headroom--top','headroom--bottom','headroom--not-bottom','headroom--not-top'].forEach(c => {
      if (el.classList.contains(c)) el.classList.remove(c);
    });

    // forziamo lo stile con !important (usando setProperty)
    el.style.setProperty('position', 'fixed', 'important');
    el.style.setProperty('top', '0', 'important');
    el.style.setProperty('left', '0', 'important');
    el.style.setProperty('width', '100%', 'important');
    el.style.setProperty('z-index', '99999', 'important');
    el.style.setProperty('transform', 'none', 'important');

    // anche il nav interno
    const nav = document.getElementById('navbar-main') || el.querySelector('nav, #navbar-main');
    if (nav) {
      nav.style.setProperty('position', 'relative', 'important');
      nav.style.setProperty('z-index', '99999', 'important');
    }

    return true;
  }

  // esegui subito
  applyFix();

  // anche al load (se il tema applica cambi dopo il caricamento)
  window.addEventListener('load', applyFix);

  // e osserva modifiche sul body (se il tema riapplica classi via JS)
  try {
    const mo = new MutationObserver(() => applyFix());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });
  } catch (e) {
    // se l'ambiente non consente observer, non blocchiamo
  }
})();

