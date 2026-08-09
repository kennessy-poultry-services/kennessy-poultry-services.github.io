// Kennessy Poultry Services — shared behaviour
document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Footer year
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Product filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('[data-category]');
  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        productCards.forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  // Contact form — validates, emails Kenneth via FormSubmit, and offers a WhatsApp continue link
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const name = form.querySelector('#name')?.value.trim();
      const phone = form.querySelector('#phone')?.value.trim();
      const message = form.querySelector('#message')?.value.trim();
      const interest = form.querySelector('#interest')?.value || 'General enquiry';

      if (!name || !phone || !message) {
        status.textContent = 'Please fill in your name, phone number, and message before sending.';
        status.className = 'form-status err show';
        return;
      }

      const waText = encodeURIComponent(
        `Hello Kennessy Poultry Services,\n\nMy name is ${name}.\nPhone: ${phone}\nInterest: ${interest}\n\nMessage: ${message}`
      );
      const waLink = document.querySelector('#wa-continue');

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      try {
        const res = await fetch('https://formsubmit.co/ajax/kennethchiakwa@gmail.com', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });

        if (res.ok) {
          status.textContent = 'Thank you, ' + name + '. Your message has been emailed to us. For the fastest reply, tap "Continue on WhatsApp" below too.';
          status.className = 'form-status ok show';
          form.reset();
        } else {
          throw new Error('Email send failed');
        }
      } catch (err) {
        status.textContent = 'We could not confirm your email sent (this happens on the very first submission while FormSubmit verifies our inbox — please try again in a moment). Meanwhile, tap "Continue on WhatsApp" to reach us instantly.';
        status.className = 'form-status err show';
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
        if (waLink) {
          waLink.href = `https://wa.me/2347038635933?text=${waText}`;
          waLink.style.display = 'inline-flex';
        }
      }
    });
  }
});
