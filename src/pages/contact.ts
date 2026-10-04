import { PageModule, showSuccessModal } from '../router';

const Contact: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/contact-atrium.jpg" alt="Contact ARKS IEC" class="x-page-hero__bg">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"></i>
              <span>Contact Us</span>
            </div>
            <div class="x-eyebrow reveal" style="color: var(--x-accent);">ARKS INTEGRATED ENGINEERING CONSULTANCY</div>
            <h1 class="x-page-hero__title reveal">
              Let's Build<br>
              <em>Together.</em>
            </h1>
            <p class="x-page-hero__text reveal">
              Whether initiating a greenfield infrastructure development or seeking specialized design review, our multidisciplinary partners are ready to collaborate.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="section">
        <div class="container">
          <div class="contact-grid">
            
            <!-- Form Card -->
            <div class="contact-form-card reveal">
              <div class="eyebrow">INQUIRY FORM</div>
              <h2 class="heading-md">Send Us a Direct Message</h2>
              <p class="text-sm text-grey">Our senior engineering advisory will review your technical parameters and respond shortly.</p>
              
              <form id="contact-form" class="margin-top-md">
                <div class="form-grid">
                  <div class="form-group">
                    <label for="fname">First Name <span class="req-star">*</span></label>
                    <input type="text" id="fname" placeholder="First Name" required>
                  </div>
                  <div class="form-group">
                    <label for="lname">Last Name <span class="req-star">*</span></label>
                    <input type="text" id="lname" placeholder="Last Name" required>
                  </div>
                  <div class="form-group form-group--full">
                    <label for="email">Business Email <span class="req-star">*</span></label>
                    <input type="email" id="email" placeholder="name@company.com" required>
                  </div>
                  <div class="form-group form-group--full">
                    <label for="phone">Phone / WhatsApp Number</label>
                    <input type="tel" id="phone" placeholder="+91 98765 43210">
                  </div>
                  <div class="form-group form-group--full">
                    <label for="subject">Project Discipline / Scope <span class="req-star">*</span></label>
                    <select id="subject" required>
                      <option value="" disabled selected>Select engineering domain...</option>
                      <option value="civil">Civil & Structural Engineering</option>
                      <option value="electrical">Electrical HV/EHV Substations & Grid Interconnection</option>
                      <option value="mepf">MEPF Building Services (HVAC, Fire, Plumbing)</option>
                      <option value="pmc">Project Management Consultancy (PMC)</option>
                      <option value="general">Comprehensive Turnkey Consultancy</option>
                      <option value="other">Other Technical Inquiry</option>
                    </select>
                  </div>
                  <div class="form-group form-group--full">
                    <label for="message">Project Overview & Requirements <span class="req-star">*</span></label>
                    <textarea id="message" rows="4" placeholder="Please outline project location, capacity, expected scope, and timeline..." required></textarea>
                  </div>
                  <div class="form-group form-group--full">
                    <button type="submit" class="btn btn--accent" id="contact-submit-btn" style="width: 100%; justify-content: center;">
                      <span>Transmit Message</span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Info Card -->
            <div class="contact-info-card reveal" style="transition-delay: 0.1s;">
              <div>
                <div class="eyebrow eyebrow--gold">HEADQUARTERS</div>
                <h3 class="heading-sm text-white">ARKS Integrated Engineering Consultancy LLP</h3>
                <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; margin-top: 8px;">
                  Delivering multidisciplinary engineering excellence globally.
                </p>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Registered Office</h4>
                  <p>Nagercoil, Tamil Nadu, India</p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <h4>Official Email Channel</h4>
                  <p>
                    <a href="mailto:info@arksiec.com">info@arksiec.com</a>
                  </p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h4>Telephone & Direct Line</h4>
                  <p><a href="tel:+918754228580">+91 87542 28580</a><br><a href="tel:+919952579147">+91 99525 79147</a></p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-clock"></i>
                <div>
                  <h4>Operating Hours</h4>
                  <p>Mon – Fri: 09:00 – 18:00 IST<br>Sat: 09:00 – 14:00 IST</p>
                </div>
              </div>

              <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <h4 style="color: var(--white); margin-bottom: 12px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em;">Direct Connect</h4>
                <p style="color: rgba(255,255,255,0.65); font-size: 0.88rem;">
                  For urgent tender deadlines or major developer partnerships, contact our partner desk directly at <a href="mailto:info@arksiec.com" style="color: #f9570c; text-decoration: underline;">info@arksiec.com</a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  },

  init() {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const submitBtn = document.getElementById('contact-submit-btn');

    // ── Deployed Contact Google Apps Script Web App URL ──
    const CONTACT_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycby7CYo77UixX3cqwsS5onYnF0zdbDKVvJJrTTC_3Cah85stleldhVToa8aET6QLNWam/exec'; 

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn) {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...`;
        }

        const formData = {
          fname: (document.getElementById('fname') as HTMLInputElement)?.value || '',
          lname: (document.getElementById('lname') as HTMLInputElement)?.value || '',
          email: (document.getElementById('email') as HTMLInputElement)?.value || '',
          phone: (document.getElementById('phone') as HTMLInputElement)?.value || '',
          subject: (document.getElementById('subject') as HTMLSelectElement)?.value || '',
          message: (document.getElementById('message') as HTMLTextAreaElement)?.value || ''
        };

        try {
          if (CONTACT_SCRIPT_URL && CONTACT_SCRIPT_URL.trim() !== '') {
            await fetch(CONTACT_SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });
          }
        } catch (err) {
          console.error('Contact Form Submission Error:', err);
        }

        showSuccessModal(
          'Inquiry Transmitted Successfully',
          'Thank you for reaching out to ARKS IEC. Our senior engineering leads will review your parameters and respond shortly.'
        );
        form.reset();
      });
    }
  }
};

export default Contact;
