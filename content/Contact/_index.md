---
title: "Contact"
type: blank
---

<style>
.contact-wrap{max-width: 900px; margin: 40px auto 0 auto;}
.contact-title{font-size:56px; font-weight:700; margin:0 0 12px 0;}
.contact-lead{font-size:18px; line-height:1.6; margin:0 0 28px 0; opacity:.9;}

.contact-label{display:block; font-weight:600; margin:18px 0 8px 0;}
.contact-input{
  width:100%; padding:12px 14px; border:1px solid rgba(0,0,0,.2);
  border-radius:10px; font-size:16px;
}
.contact-textarea{min-height:180px; resize:vertical;}

.contact-btn{
  margin-top:18px; padding:12px 18px; border-radius:12px;
  border:1px solid rgba(0,0,0,.2); background:#fff; cursor:pointer;
}
</style>

<div class="contact-wrap">
  <div class="contact-title">Contact</div>

  <div class="contact-lead">
    I am happy to hear from you, whether it is about research, potential collaborations,
    or just to connect. Use the form below and I will get back to you as soon as I can.
  </div>

  <form action="https://formspree.io/f/mjgevoej" method="POST">
    <label class="contact-label">Name</label>
    <input class="contact-input" type="text" name="name" required>

    <label class="contact-label">Email</label>
    <input class="contact-input" type="email" name="email" required>

    <label class="contact-label">Message</label>
    <textarea class="contact-input contact-textarea" name="message" required></textarea>

    <!-- opzionale: oggetto email -->
    <input type="hidden" name="_subject" value="New message from website contact form">

    <button class="contact-btn" type="submit">Send</button>
  </form>
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
