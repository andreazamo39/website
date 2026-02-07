---
title: "Teaching"
type: blank
---

<style>
/* Section titles */
.teach-section-title{
  font-size: 32px;
  font-weight: 700;
  margin: 48px 0 20px 0;
}

/* Course title */
.teach-item-title{
  font-size: 22px;
  font-weight: 600;
  color: #b21f2d; /* rosso simile al tema */
  margin: 0;
}

/* University */
.teach-item-univ{
  color: #777;
  margin: 2px 0 6px 0;
}

/* Description */
.teach-item-desc{
  line-height: 1.6;
  margin-bottom: 28px;
}
</style>

<!-- ===================== -->
<!-- TEACHING -->
<!-- ===================== -->

<div class="teach-section-title">Teaching</div>

<div>
  <div class="teach-item-title">Applied Social Psychology</div>
  <div class="teach-item-univ">University of Milano-Bicocca</div>
  <div class="teach-item-desc">
    Course taught within the Bachelor's program in Psychological Sciences (2023/2024 – present).
    The course explores how social psychology can be applied to real-world issues such as
    misinformation, sustainability, and dehumanization.
  </div>
</div>

<div>
  <div class="teach-item-title">Social Psychology</div>
  <div class="teach-item-univ">Pegaso University</div>
  <div class="teach-item-desc">
    Course taught within the Master's program in Modern Linguistics (2024/2025).
    The course provides a comprehensive introduction to foundational theories in social psychology,
    focusing on group processes, social influence, and attitudes.
  </div>
</div>

<div>
  <div class="teach-item-title">Psychology of Social Communications</div>
  <div class="teach-item-univ">Pegaso University</div>
  <div class="teach-item-desc">
    Course taught within the Master's program in Modern Linguistics (2024/2025).
  </div>
</div>

<!-- ===================== -->
<!-- CONFERENCES -->
<!-- ===================== -->

<div class="teach-section-title">Conferences and Invited Presentations</div>

<div class="teach-item-desc">
  • “Influencer Selection Using Machine Learning” — INFORMS Annual Meeting, 2025  
</div>

<div class="teach-item-desc">
  • “Gender Pay Gap in Influencer Marketing” — Marketing Science Conference, 2024  
</div>

<div class="teach-item-desc">
  • Invited seminar, University of XYZ, 2023  
</div>




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
