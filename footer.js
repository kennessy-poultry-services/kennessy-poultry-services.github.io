// Injects the shared site footer into any element with id="footer-include"
document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('footer-include');
  if (!mount) return;

  mount.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="footer-logo"><img src="images/kps-logo-mark.jpg" alt="Kennessy Poultry Services shield logo"></div>
          <h4>Kennessy Poultry Services</h4>
          <p style="font-family:'JetBrains Mono', monospace; font-size:0.7rem; letter-spacing:0.06em; text-transform:uppercase; color:#D8A23B; margin-bottom:0.8rem;">Raising Farmers, Building Wealth</p>
          <p>Live birds, feeds, manure and hands-on consultancy from a working poultry farm in Enugu State, Nigeria.</p>
          <div class="footer-social">
            <a href="https://wa.me/2347038635933" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A8.9 8.9 0 0 0 3.7 17l-1.2 4.4 4.5-1.2a8.9 8.9 0 0 0 4.3 1.1 8.9 8.9 0 0 0 8.9-8.9c0-2.4-.9-4.6-2.6-6.1Z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/17wUYZRCdw/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.2H7.5v3H10V21h3.5Z"/></svg>
            </a>
            <a href="https://tiktok.com/@kpspoultry" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 1.9 1.5 3.3 3.5 3.5v2.7c-1.3 0-2.5-.4-3.5-1.1v6.4a5.3 5.3 0 1 1-4.6-5.3v2.8a2.5 2.5 0 1 0 1.9 2.5V3h2.7Z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="consultancy.html">Consultancy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="products.html#birds">Live Birds</a></li>
            <li><a href="products.html#feeds">Poultry Feeds</a></li>
            <li><a href="products.html#manure">Manure</a></li>
            <li><a href="consultancy.html">Consultancy Packages</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+2347038635933">0703 863 5933</a></li>
            <li><a href="mailto:kennethchiakwa@gmail.com">kennethchiakwa@gmail.com</a></li>
            <li><a href="contact.html">Contact form →</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span class="js-year"></span> Kennessy Poultry Services. All rights reserved.</span>
        <span>Also visit <a href="https://kennessyebooks.github.io" target="_blank" rel="noopener">Kennessy eBooks</a> for practical farming guides</span>
      </div>
    </div>
  `;
  const yearEl = mount.querySelector('.js-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
