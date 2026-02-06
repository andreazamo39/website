---
title: "Publications"
url: "/publications/"
view: 0
---

This section presents my research publications, linked to their full texts. Additional information can be accessed by clicking on each publication.

<!-- Start: fix navbar -->
<script>
(function() {
  function applyFix() {
    const el = document.querySelector('.page-header.header--fixed');
    if (!el) return false;

    ['headroom','headroom--pinned','headroom--top','headroom--bottom','headroom--not-bottom','headroom--not-top'].forEach(c => {
      if (el.classList.contains(c)) el.classList.remove(c);
    });

    el.style.setProperty('position', 'fixed', 'important');
    el.style.setProperty('top', '0', 'important');
    el.style.setProperty('left', '0', 'important');
    el.style.setProperty('width', '100%', 'important');
    el.style.setProperty('z-index', '99999', 'important');
    el.style.setProperty('transform', 'none', 'important');

    return true;
  }
  applyFix();
  window.addEventListener('load', applyFix);
  try {
    const mo = new MutationObserver(() => applyFix());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });
  } catch(e){}
})();
</script>
<!-- End: fix navbar -->

<!-- Remove "Last updated" in publications list -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  // cerca tutti gli elementi di testo che contengono "Last updated"
  const walker = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT, null);
  const toRemove = [];
  while (walker.nextNode()) {
    const txt = walker.currentNode.nodeValue;
    if (!txt) continue;
    // cerca frasi tipo: "Last updated on Feb 6, 2026" o "Last updated on Feb 5, 2026"
    if (txt.match(/Last updated on\s+/i)) {
      toRemove.push(walker.currentNode);
    }
  }
  // rimuove i nodi di testo che contengono "Last updated"
  toRemove.forEach(node => {
    // se il nodo è l'unico figlio di un elemento <p> o <div>, rimuove l'intero elemento
    const parent = node.parentElement;
    if (!parent) return;
    // se il parent ha solo questo testo, rimuovilo completamente
    if ((parent.childNodes.length === 1 && parent.firstChild === node) || parent.innerText.trim().toLowerCase().startsWith('last updated')) {
      parent.remove();
    } else {
      // altrimenti rimuove solo la porzione "Last updated on ..."
      parent.innerHTML = parent.innerHTML.replace(/Last updated on\s*[^<]*/i, '');
      // pulisce eventuali spazi vuoti rimanenti
      if (parent.innerText.trim() === '') parent.remove();
    }
  });

  // Forza la comparsa della riga data + journal (se presente nel markup ma nascosta da CSS)
  document.querySelectorAll('.pub-info, .article-metadata, .article-meta, .meta, .pub-meta').forEach(el => {
    el.style.display = 'block';
    el.style.color = '#666';
    el.style.fontSize = '0.95rem';
  });
});
</script>
