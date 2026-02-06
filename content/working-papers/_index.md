---
title: "Working Papers"
type: landing
sections:
  - block: markdown
    content:
      title: "Working Papers"
      text: "Coming soon."
---
This section presents my working papers and ongoing research projects.

## Current Manuscripts
<div id="wp-current"></div>
---
title: "Influencer Selection Using a Multi-Task Learning Model"
authors:
  - Maximilian Beichert
  - Magie Cheng
  - Shunyuan Zhang
  - Xitong Li

tags:
  - Current Manuscripts

image:
  filename: featured.jpg
  preview_only: true

draft: false
## Projects in development
<div id="wp-development"></div>


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
