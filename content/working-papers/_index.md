--- 
title: "Working Papers" 
url: "/working-papers/" 
--- 
This section presents my working papers and ongoing research projects.





<!-- Start: fix navbar (inserted manually) -->
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

    const nav = document.getElementById('navbar-main') || el.querySelector('nav, #navbar-main');
    if (nav) {
      nav.style.setProperty('position', 'relative', 'important');
      nav.style.setProperty('z-index', '99999', 'important');
    }

    return true;
  }

  // esegui subito e anche al load (ridondanza utile)
  applyFix();
  window.addEventListener('load', applyFix);
  try {
    const mo = new MutationObserver(() => applyFix());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });
  } catch(e){}
})();
</script>
<!-- End: fix navbar -->

<!-- Consolidate publication info: remove duplicates, remove "Last updated" and add single date+journal after authors -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  // 1) remove any text nodes containing "Last updated"
  (function removeLastUpdated() {
    const walker = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT, null);
    const toRemove = [];
    while (walker.nextNode()) {
      const txt = walker.currentNode.nodeValue;
      if (!txt) continue;
      if (txt.match(/Last updated on\s+/i)) toRemove.push(walker.currentNode);
    }
    toRemove.forEach(node => {
      const parent = node.parentElement;
      if (!parent) return;
      if ((parent.childNodes.length === 1 && parent.firstChild === node) || parent.innerText.trim().toLowerCase().startsWith('last updated')) {
        parent.remove();
      } else {
        parent.innerHTML = parent.innerHTML.replace(/Last updated on\s*[^<]*/i, '');
        if (parent.innerText.trim() === '') parent.remove();
      }
    });
  })();


