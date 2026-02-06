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



<!-- Fetch each publication page and insert one "date · journal" line after authors -->
<script>
document.addEventListener('DOMContentLoaded', async function () {
  const items = Array.from(document.querySelectorAll('.stream-item, .media.stream-item'));
  if (!items.length) return;

  // helper: fetch page and return text
  async function fetchPage(url) {
    try {
      const res = await fetch(url, {credentials: 'same-origin'});
      if (!res.ok) return null;
      return await res.text();
    } catch (e) { return null; }
  }

  // regex to find date like "November 16, 2023"
  const dateRegex = /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}\b/;
  // regex to find common publication labels or the journal name line
  const pubRegex = /Published at[:\s]*([^<\n\r]{3,120})|publication[:\s]*"([^"]+)"|Journal of [A-Za-z0-9 &()\-]+/i;

  for (const item of items) {
    // skip if we already added it
    if (item.querySelector('.added-pub-info')) continue;

    // find link to single page
    const a = item.querySelector('a[href]');
    const href = a ? a.getAttribute('href') : null;
    if (!href) continue;

    const html = await fetchPage(href);
    if (!html) continue;

    // try to extract date
    let dateMatch = html.match(dateRegex);
    let dateText = dateMatch ? dateMatch[0].trim() : '';

    // try to extract publication/journal
    let pubMatch = html.match(pubRegex);
    let pubText = '';
    if (pubMatch) {
      // prefer captured groups if present
      pubText = (pubMatch[1] || pubMatch[2] || pubMatch[0] || '').trim();
    } else {
      // fallback: look for "publication" label in front matter rendered as text
      const fallback = html.match(/Publication[:\s]*<\/.*?>([^<\n\r]{3,120})/i);
      if (fallback) pubText = fallback[1].trim();
    }

    // if neither found, skip
    if (!dateText && !pubText) continue;

    // build final string
    let final = dateText;
    if (dateText && pubText) final = dateText + ' · ' + pubText;
    else if (!dateText) final = pubText;

    // remove any existing identical nodes in this item (dedupe)
    item.querySelectorAll('.added-pub-info, .pub-info, .article-metadata, .article-meta').forEach(n => {
      const t = (n.innerText || '').trim();
      if (t && (t.includes(final) || t.toLowerCase().includes('last updated'))) {
        n.remove();
      }
    });

    // find position (after authors)
    const authorsEl = item.querySelector('.pub-authors') || item.querySelector('.article-meta, .article-metadata, .media-body') || item;

    const info = document.createElement('div');
    info.className = 'added-pub-info';
    info.innerHTML = '<strong>' + final + '</strong>';
    info.style.marginTop = '0.35rem';
    info.style.color = '#666';
    info.style.fontSize = '0.95rem';
    info.style.lineHeight = '1.25';

    if (authorsEl && authorsEl.parentNode && authorsEl !== item) {
      authorsEl.parentNode.insertBefore(info, authorsEl.nextSibling);
    } else {
      item.appendChild(info);
    }
  } // for
});
</script>
