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

<!-- Improved: fetch single pages, extract date + journal, insert nicely after authors -->
<script>
document.addEventListener('DOMContentLoaded', async function () {
  const items = Array.from(document.querySelectorAll('.stream-item, .media.stream-item'));
  if (!items.length) return;

  const dateRegex = /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}\b/;
  const journalRegex1 = /Published at[:\s]*([^<\n\r]{3,120})/i;
  const journalRegex2 = /publication:\s*"([^"]+)"/i;
  const journalRegex3 = /\b(Journal of [A-Za-z0-9 &()\-]{3,120})\b/i;

  async function fetchHtml(url) {
    try {
      const res = await fetch(url, { credentials: 'same-origin' });
      if (!res.ok) return null;
      return await res.text();
    } catch (e) { return null; }
  }

  for (const item of items) {
    // remove any earlier added node
    const prev = item.querySelector('.added-pub-info');
    if (prev) prev.remove();

    const a = item.querySelector('a[href]');
    const href = a ? a.getAttribute('href') : null;
    if (!href) continue;

    const html = await fetchHtml(href);
    if (!html) continue;

    // parse textContent for date and potential journal
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bodyText = (doc.body && doc.body.innerText) ? doc.body.innerText : html;

    // find date
    const dateMatch = bodyText.match(dateRegex);
    const dateText = dateMatch ? dateMatch[0].trim() : '';

    // find journal: try multiple strategies on parsed text and raw html
    let journal = '';
    let m = bodyText.match(journalRegex1);
    if (m && m[1]) journal = m[1].trim();
    if (!journal) {
      m = html.match(journalRegex2);
      if (m && m[1]) journal = m[1].trim();
    }
    if (!journal) {
      m = bodyText.match(journalRegex3);
      if (m && m[1]) journal = m[1].trim();
    }

    // fallback: try to find short "Publication" label near the date
    if (!journal && dateText) {
      const idx = bodyText.indexOf(dateText);
      if (idx > -1) {
        const around = bodyText.slice(Math.max(0, idx - 200), idx + 200);
        const nearMatch = around.match(/(Journal of [A-Za-z0-9 &()\-]{3,120})/i);
        if (nearMatch && nearMatch[1]) journal = nearMatch[1].trim();
      }
    }

    // if nothing found at all, skip
    if (!dateText && !journal) continue;

    // build final string
    let final = dateText || '';
    if (final && journal) final = final + ' · ' + journal;
    else if (!final) final = journal;

    // remove any nodes that already contain this final text (dedupe)
    item.querySelectorAll('.added-pub-info, .pub-info, .article-metadata, .article-meta').forEach(n => {
      const t = (n.innerText || '').trim();
      if (!t) return;
      if (t === final || t.includes(final) || /Last updated/i.test(t)) n.remove();
    });

    // find insertion point (prefer .media-body > .pub-authors)
    let authorsEl = item.querySelector('.media-body .pub-authors');
    if (!authorsEl) authorsEl = item.querySelector('.media-body .article-meta, .media-body .article-metadata, .media-body .media-body, .media-body');
    if (!authorsEl) authorsEl = item.querySelector('.pub-authors') || item;

    // create node
    const info = document.createElement('div');
    info.className = 'added-pub-info';
    info.innerHTML = '<strong>' + final + '</strong>';
    // styling to force block positioning under authors (not float right)
    info.style.display = 'block';
    info.style.clear = 'both';
    info.style.marginTop = '0.35rem';
    info.style.color = '#666';
    info.style.fontSize = '0.95rem';
    info.style.lineHeight = '1.25';

    // insert after authorsEl
    if (authorsEl && authorsEl.parentNode && authorsEl !== item) {
      authorsEl.parentNode.insertBefore(info, authorsEl.nextSibling);
    } else {
      item.appendChild(info);
    }
  } // for
});
</script>
