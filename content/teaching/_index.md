---
title: "Teaching"
type: blank
---
<div style="max-width: 900px; margin: 24px 0 40px 0; line-height: 1.6;">
  This page presents my teaching activities and academic outreach, including courses taught
  at the undergraduate and graduate levels, as well as conference and invited presentations.
</div>

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
  <div class="teach-item-title">Data Science for Business II</div>
  <div class="teach-item-univ">Mannheim Business School</div>
  <div class="teach-item-desc">
    Course taught at the MBA level. The course introduces key concepts, tools, and practices of data science from a managerial perspective, focusing on the use of data for
    both operational and strategic decision-making. It emphasizes how data assets generate value within organizations, and how analytical results can be translated into
    actionable business insights to support innovation and productivity.
    Rating: 4.6/5
  </div>
</div>

<div>
  <div class="teach-item-title">Marketing Management - Advanced</div>
  <div class="teach-item-univ">Bocconi University</div>
  <div class="teach-item-desc">
    Course taught at the master’s level. The course examines the evolution of marketing in the
context of digital transformation and sustainability, with a focus on customer value, customer centricity, and the role of marketing in creating business value. It introduces key marketing metrics and analytical frameworks for measuring customer value and satisfaction, and explores strategic and operational approaches to managing customer relationships in the data-driven economy.
    Rating: 4.1/5
  </div>
</div>

<div>
  <div class="teach-item-title">Digital Strategy</div>
  <div class="teach-item-univ">Engage EU</div>
  <div class="teach-item-desc">
    Course taught at the master’s level. The course examines digital transformation as a multidimensional process that reshapes business models, organizational processes, and customer relationships. It focuses on the strategic role of digital technologies and data as key enablers of innovation, platform-based competition, and market disruption, and equips students with the analytical and managerial frameworks needed to design and implement effective digital strategies.
    Rating: 4.9/5
  </div>
</div>

<div>
  <div class="teach-item-title">The Creator Economy: Strategy, Monetization, and Impact</div>
  <div class="teach-item-univ">Bocconi University</div>
  <div class="teach-item-desc">
    Course taught at the bachelor’s level. The course introduces students to the creator economy, examining how digital platforms, content, and online communities generate new business models and reshape traditional industries. It covers platform dynamics, monetization strategies, personal branding, and brand–creator collaborations, while also addressing legal, regulatory, and ethical challenges. The course integrates perspectives from economics, marketing, technology, and law to develop analytical skills and strategic awareness of the evolving digital economy.
    Rating: New
  </div> 
</div>

<div>
  <div class="teach-item-title">Selected Student Comments:</div>
  <div class="teach-item-desc">
    • "I really liked the lecturer's teaching manner and his attitude and how open and approachable he was. The way he picked certain topics from the material covered by the lectures and initiated discussions making giving space to everyone and to participate and contribute."
• "Very accessible and easy-to-follow lessons, with a professor who is very approachable and encourages discussion"
• "The course was very well structured and the topics were very well explained throughout the lectures."
• "Very approachable and kind professor who is passionate about the course"
• "I especially liked the very good structure of the course. It was very easy to follow and you noticed that the teacher prepared extensively for the event. It was also very positive that the feedback after the first part of the block course was taken into account and that there was an even stronger focus on discussion sessions in the second part. It was a lot of fun!"
• "The professor has been very clear, professional and helpful"
• "I really liked the course and the lecturer. Thankful for the opportunity to attend this course."
  </div> 
</div>

<!-- ===================== -->
<!-- CONFERENCES -->
<!-- ===================== -->

<div class="teach-section-title">Conferences and Invited Presentations</div>

<div class="teach-item-desc">
  • Copenhagen Business School; Lisbon; Washington, D.C.; Chicago; Columbia Business School, WU Vienna, 2025  
</div>

<div class="teach-item-desc">
  • Bocconi University; HEC Paris; TU Munich, 2024  
</div>

<div class="teach-item-desc">
  • Columbia Business School; Seattle; INSEAD; ZEW Mannheim; University of Miami; University of Lausanne; SDU Odense; Nashville, 2023  
</div>

<div class="teach-item-desc">
  • Copenhagen Business School; Georgia State University; Jagdish Sheth School of Management (virtual); University of Chicago (virtual); Corvinus University of Budapest, 2022  
</div>

<div class="teach-item-desc">
  • University of Rochester (virtual); ESIC Business & Marketing School (virtual); Technion Israel Institute of Technology (virtual), 2021  
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
