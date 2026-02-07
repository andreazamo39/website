---
title: "Publications"
url: "/publications/"
view: 0
---

This section presents my research publications, linked to their full texts. Additional information can be accessed by clicking on each publication.



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

  // 2) For each publication item, extract any existing date+journal text (first occurrence),
  //    remove duplicates and then insert a single, styled line after the authors.
  document.querySelectorAll('.stream-item, .media.stream-item').forEach(item => {
    // remove any previously added helper node
    const prev = item.querySelector('.added-pub-info');
    if (prev) prev.remove();

    // try to find an element inside this item that contains a date (e.g. "November 16, 2023")
    let foundText = null;
    const possibleEls = item.querySelectorAll('p, div, span');
    const dateRegex = /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}\b/;
    possibleEls.forEach(el => {
      if (foundText) return;
      const t = el.innerText || '';
      const m = t.match(dateRegex);
      if (m) {
        // capture whole text of this element (trim)
        foundText = t.trim();
      }
    });

    // if nothing found, skip (we don't create wrong info)
    if (!foundText) return;

    // Remove any existing elements that exactly contain the foundText (to avoid duplicates)
    possibleEls.forEach(el => {
      if (!el || !el.innerText) return;
      if (el.innerText.trim() === foundText || el.innerText.trim().includes(foundText)) {
        // but do not remove the entire authors block: only remove metadata elements (approx heuristic)
        if (!el.classList.contains('pub-authors') && !el.closest('a')) {
          el.remove();
        }
      }
    });

    // Find authors block to insert after; fallback to inserting at end of item
    const authorsEl = item.querySelector('.pub-authors') || item.querySelector('.article-meta, .article-metadata, .media-body') || item;

    // Create the single info node
    const info = document.createElement('div');
    info.className = 'added-pub-info';
    info.innerHTML = '<strong>' + foundText + '</strong>';
    info.style.marginTop = '0.35rem';
    info.style.color = '#666';
    info.style.fontSize = '0.95rem';
    info.style.lineHeight = '1.25';

    // Insert after authorsEl (if authorsEl is the container, append; otherwise insert after)
    if (authorsEl && authorsEl.parentNode && authorsEl !== item) {
      authorsEl.parentNode.insertBefore(info, authorsEl.nextSibling);
    } else {
      item.appendChild(info);
    }
  });

});
</script>
