import { PageModule, showSuccessModal } from '../router';
import { COUNTRIES, CountryData } from '../data/countries';

const Contact: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/contact-atrium.webp" alt="Contact ARKS IEC" class="x-page-hero__bg" width="1920" height="1280" fetchpriority="high">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-chevron-right"></use></svg></i>
              <span>Contact Us</span>
            </div>
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
              <p class="text-sm text-grey">Our senior engineering advisory will review your technical parameters and respond promptly.</p>
              
              <form id="contact-form" class="margin-top-md" novalidate>
                <!-- Form Top Validation Error Banner -->
                <div class="career-error-banner" id="contact-error-banner" style="display: none;">
                  <div class="banner-icon"><i class="fa-solid fa-triangle-exclamation"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg></i></div>
                  <div class="banner-text">Please review and correct the highlighted fields before transmitting.</div>
                </div>

                <div class="form-grid">
                  <!-- First Name & Last Name (Side by side on both Desktop & Mobile) -->
                  <div class="form-group--full">
                    <div class="form-grid-names">
                      <!-- First Name -->
                      <div class="form-field-group" id="group-fname">
                        <div class="field-label-row">
                          <label for="fname">First Name <span class="req-star">*</span></label>
                          <span class="char-counter" id="fname-counter">0 / 40</span>
                        </div>
                        <div class="input-with-icon">
                          <i class="fa-solid fa-user field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-user"></use></svg></i>
                          <input 
                            type="text" 
                            id="fname" 
                            name="fname" 
                            maxlength="40" 
                            placeholder="First Name" 
                            autocomplete="given-name"
                          >
                        </div>
                        <span class="field-error-msg" id="error-fname"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter your first name.</span></span>
                        <span class="field-hint">Letters only</span>
                      </div>

                      <!-- Last Name -->
                      <div class="form-field-group" id="group-lname">
                        <div class="field-label-row">
                          <label for="lname">Last Name <span class="req-star">*</span></label>
                          <span class="char-counter" id="lname-counter">0 / 40</span>
                        </div>
                        <div class="input-with-icon">
                          <i class="fa-solid fa-user field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-user"></use></svg></i>
                          <input 
                            type="text" 
                            id="lname" 
                            name="lname" 
                            maxlength="40" 
                            placeholder="Last Name" 
                            autocomplete="family-name"
                          >
                        </div>
                        <span class="field-error-msg" id="error-lname"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter your last name.</span></span>
                        <span class="field-hint">Letters only</span>
                      </div>
                    </div>
                  </div>

                  <!-- Business Email -->
                  <div class="form-field-group form-group--full" id="group-email">
                    <div class="field-label-row">
                      <label for="email">Business Email <span class="req-star">*</span></label>
                      <span class="char-counter" id="email-counter">0 / 60</span>
                    </div>
                    <div class="input-with-icon">
                      <i class="fa-solid fa-envelope field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-envelope"></use></svg></i>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        maxlength="60" 
                        placeholder="name@company.com" 
                        autocomplete="email"
                      >
                    </div>
                    <span class="field-error-msg" id="error-email"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter a valid email address.</span></span>
                    <span class="field-hint">Work or corporate email address</span>
                  </div>

                  <!-- Phone / WhatsApp Number with Country Code (Side-by-side on Mobile & Desktop) -->
                  <div class="form-field-group form-group--full" id="group-phone">
                    <div class="field-label-row">
                      <label for="phone">Phone / WhatsApp Number <span class="req-star">*</span></label>
                      <span class="char-counter" id="phone-counter">0 / 12</span>
                    </div>
                    
                    <div class="phone-input-combo">
                      <!-- Searchable Country Code Selector -->
                      <div class="country-picker-wrap" id="contact-country-picker">
                        <button type="button" class="country-picker-btn" id="contact-country-select-btn" aria-expanded="false" aria-label="Select country dial code">
                          <span class="flag-icon" id="contact-selected-flag">🇮🇳</span>
                          <span class="dial-code" id="contact-selected-dial-code">+91</span>
                          <i class="fa-solid fa-chevron-down caret-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-chevron-down"></use></svg></i>
                        </button>

                        <!-- Searchable Dropdown Panel -->
                        <div class="country-dropdown-panel" id="contact-country-dropdown-panel">
                          <div class="country-search-box">
                            <i class="fa-solid fa-magnifying-glass search-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-magnifying-glass"></use></svg></i>
                            <input 
                              type="text" 
                              id="contact-country-search-input" 
                              placeholder="Search country or code..." 
                              autocomplete="off"
                            >
                          </div>
                          <div class="country-options-list" id="contact-country-options-list">
                            <!-- Injected via JavaScript -->
                          </div>
                        </div>
                      </div>

                      <!-- Hidden inputs for submission -->
                      <input type="hidden" id="contact-country-code" name="countryCode" value="+91">
                      <input type="hidden" id="contact-country-name" name="countryName" value="India">

                      <!-- Contact Phone Input (Numerals only) -->
                      <div class="phone-num-input-wrap">
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          maxlength="12" 
                          placeholder="Enter contact number" 
                          autocomplete="tel-national"
                        >
                      </div>
                    </div>
                    <span class="field-error-msg" id="error-phone"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Contact number must be between 7 and 12 digits.</span></span>
                    <span class="field-hint" id="contact-phone-hint">Select country from searchable dropdown & enter up to 12 numerals</span>
                  </div>

                  <!-- Project Discipline / Scope -->
                  <div class="form-field-group form-group--full" id="group-subject">
                    <div class="field-label-row">
                      <label for="subject">Project Discipline / Scope <span class="req-star">*</span></label>
                    </div>
                    <div class="input-with-icon">
                      <i class="fa-solid fa-layer-group field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-layer-group"></use></svg></i>
                      <select id="subject" name="subject">
                        <option value="" disabled selected>Select engineering domain...</option>
                        <option value="civil">Civil & Structural Engineering</option>
                        <option value="electrical">Electrical HV/EHV Substations & Grid Interconnection</option>
                        <option value="mepf">MEPF Building Services (HVAC, Fire, Plumbing)</option>
                        <option value="pmc">Project Management Consultancy (PMC)</option>
                        <option value="general">Comprehensive Turnkey Consultancy</option>
                        <option value="other">Other Technical Inquiry</option>
                      </select>
                    </div>
                    <span class="field-error-msg" id="error-subject"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please select an engineering domain.</span></span>
                  </div>

                  <!-- Project Overview & Requirements -->
                  <div class="form-field-group form-group--full" id="group-message">
                    <div class="field-label-row">
                      <label for="message">Project Overview & Requirements <span class="req-star">*</span></label>
                      <span class="char-counter" id="message-counter">0 / 600</span>
                    </div>
                    <div class="textarea-wrap">
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        maxlength="600" 
                        placeholder="Please outline project location, capacity, expected scope, and timeline..."
                      ></textarea>
                    </div>
                    <span class="field-error-msg" id="error-message"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please provide at least 15 characters describing your requirements.</span></span>
                    <span class="field-hint">Max 600 characters</span>
                  </div>

                  <!-- Transmit Button -->
                  <div class="form-group form-group--full">
                    <button type="submit" class="btn btn--accent" id="contact-submit-btn" style="width: 100%; justify-content: center;">
                      <span>Transmit Message</span>
                      <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>
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
                <i class="fa-solid fa-location-dot"><svg class="x-icon" aria-hidden="true"><use href="#fa-location-dot"></use></svg></i>
                <div>
                  <h4>Registered Office</h4>
                  <p>Nagercoil, Tamil Nadu, India</p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-envelope"><svg class="x-icon" aria-hidden="true"><use href="#fa-envelope"></use></svg></i>
                <div>
                  <h4>Official Email Channel</h4>
                  <p>
                    <a href="mailto:info@arksiec.com">info@arksiec.com</a>
                  </p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-phone"><svg class="x-icon" aria-hidden="true"><use href="#fa-phone"></use></svg></i>
                <div>
                  <h4>Telephone & Direct Line</h4>
                  <p><a href="tel:+918754228580">+91 87542 28580</a><br><a href="tel:+919952579147">+91 99525 79147</a></p>
                </div>
              </div>

              <div class="info-block">
                <i class="fa-solid fa-clock"><svg class="x-icon" aria-hidden="true"><use href="#fa-clock"></use></svg></i>
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

    // ── 1. Searchable Country Picker Initialization ──
    const countryPickerBtn = document.getElementById('contact-country-select-btn');
    const dropdownPanel = document.getElementById('contact-country-dropdown-panel');
    const searchInput = document.getElementById('contact-country-search-input') as HTMLInputElement;
    const optionsList = document.getElementById('contact-country-options-list');
    const selectedFlag = document.getElementById('contact-selected-flag');
    const selectedDialCode = document.getElementById('contact-selected-dial-code');
    const hiddenCountryCode = document.getElementById('contact-country-code') as HTMLInputElement;
    const hiddenCountryName = document.getElementById('contact-country-name') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const phoneHint = document.getElementById('contact-phone-hint');

    let currentSelectedCountry: CountryData = COUNTRIES.find(c => c.code === 'IN') || COUNTRIES[0];

    function renderCountryOptions(list: CountryData[]) {
      if (!optionsList) return;
      if (list.length === 0) {
        optionsList.innerHTML = `<div class="country-no-results">No countries found</div>`;
        return;
      }
      optionsList.innerHTML = list.map(c => `
        <div class="country-option ${c.code === currentSelectedCountry.code ? 'selected' : ''}" data-code="${c.code}">
          <span class="flag">${c.flag}</span>
          <span class="name">${c.name}</span>
          <span class="dial">${c.dialCode}</span>
        </div>
      `).join('');

      optionsList.querySelectorAll('.country-option').forEach(el => {
        el.addEventListener('click', () => {
          const code = el.getAttribute('data-code');
          const found = COUNTRIES.find(c => c.code === code);
          if (found) {
            selectCountry(found);
            closeDropdown();
            validateSingleField('phone');
          }
        });
      });
    }

    function selectCountry(country: CountryData) {
      currentSelectedCountry = country;
      if (selectedFlag) selectedFlag.textContent = country.flag;
      if (selectedDialCode) selectedDialCode.textContent = country.dialCode;
      if (hiddenCountryCode) hiddenCountryCode.value = country.dialCode;
      if (hiddenCountryName) hiddenCountryName.value = country.name;
      if (phoneInput) {
        phoneInput.placeholder = `e.g. ${'9'.repeat(Math.min(country.phoneLength, 12))}`;
        phoneInput.setAttribute('maxlength', '12');
      }
      if (phoneHint) {
        phoneHint.textContent = `${country.name} (${country.dialCode}) — Up to 12 numeral digits`;
      }
    }

    function openDropdown() {
      if (!dropdownPanel || !countryPickerBtn) return;
      dropdownPanel.classList.add('open');
      countryPickerBtn.setAttribute('aria-expanded', 'true');
      renderCountryOptions(COUNTRIES);
      if (searchInput) {
        searchInput.value = '';
        setTimeout(() => searchInput.focus(), 50);
      }
    }

    function closeDropdown() {
      if (!dropdownPanel || !countryPickerBtn) return;
      dropdownPanel.classList.remove('open');
      countryPickerBtn.setAttribute('aria-expanded', 'false');
    }

    if (countryPickerBtn) {
      countryPickerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (dropdownPanel?.classList.contains('open')) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = COUNTRIES.filter(c => 
          c.name.toLowerCase().includes(query) || 
          c.dialCode.toLowerCase().includes(query) ||
          c.code.toLowerCase().includes(query)
        );
        renderCountryOptions(filtered);
      });
      searchInput.addEventListener('click', (e) => e.stopPropagation());
    }

    document.addEventListener('click', (e) => {
      if (dropdownPanel?.classList.contains('open')) {
        const target = e.target as HTMLElement;
        if (!target.closest('#contact-country-picker')) {
          closeDropdown();
        }
      }
    });

    // ── 2. Character Counters & Input Filters ──
    const setupCounter = (inputId: string, counterId: string, max: number, allowPattern?: RegExp) => {
      const input = document.getElementById(inputId) as HTMLInputElement | HTMLTextAreaElement;
      const counter = document.getElementById(counterId);
      if (!input || !counter) return;

      const update = () => {
        if (allowPattern) {
          input.value = input.value.replace(allowPattern, '');
        }
        if (input.value.length > max) {
          input.value = input.value.slice(0, max);
        }
        counter.textContent = `${input.value.length} / ${max}`;
      };

      input.addEventListener('input', update);
      input.addEventListener('paste', () => setTimeout(update, 10));
    };

    setupCounter('fname', 'fname-counter', 40, /[^a-zA-Z\s.-]/g);
    setupCounter('lname', 'lname-counter', 40, /[^a-zA-Z\s.-]/g);
    setupCounter('email', 'email-counter', 60);
    setupCounter('phone', 'phone-counter', 12, /[^0-9]/g);
    setupCounter('message', 'message-counter', 600);

    // ── 3. Data Validation Framework ──
    interface FieldValidator {
      id: string;
      groupId: string;
      errorId: string;
      validate: (value: string) => { isValid: boolean; message: string };
    }

    const validators: FieldValidator[] = [
      {
        id: 'fname',
        groupId: 'group-fname',
        errorId: 'error-fname',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'First name is required.' };
          if (trimmed.length < 2) return { isValid: false, message: 'First name must be at least 2 characters.' };
          if (!/^[a-zA-Z\s.-]+$/.test(trimmed)) return { isValid: false, message: 'First name can only contain letters.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'lname',
        groupId: 'group-lname',
        errorId: 'error-lname',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Last name is required.' };
          if (trimmed.length < 1) return { isValid: false, message: 'Last name is required.' };
          if (!/^[a-zA-Z\s.-]+$/.test(trimmed)) return { isValid: false, message: 'Last name can only contain letters.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'email',
        groupId: 'group-email',
        errorId: 'error-email',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Email address is required.' };
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(trimmed)) return { isValid: false, message: 'Please enter a valid email address (e.g. name@domain.com).' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'phone',
        groupId: 'group-phone',
        errorId: 'error-phone',
        validate: (val) => {
          const trimmed = val.replace(/\s+/g, '');
          if (!trimmed) return { isValid: false, message: 'Contact number is required.' };
          if (!/^\d+$/.test(trimmed)) return { isValid: false, message: 'Contact number must contain only numerals.' };
          if (trimmed.length < 7 || trimmed.length > 12) return { isValid: false, message: 'Contact number must be between 7 and 12 digits.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'subject',
        groupId: 'group-subject',
        errorId: 'error-subject',
        validate: (val) => {
          if (!val) return { isValid: false, message: 'Please select an engineering discipline.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'message',
        groupId: 'group-message',
        errorId: 'error-message',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Project overview message is required.' };
          if (trimmed.length < 15) return { isValid: false, message: `Please provide at least 15 characters (${trimmed.length}/15).` };
          return { isValid: true, message: '' };
        }
      }
    ];

    const errorBanner = document.getElementById('contact-error-banner');

    const setFieldError = (v: FieldValidator, msg: string) => {
      const group = document.getElementById(v.groupId);
      const errEl = document.getElementById(v.errorId);
      if (group) group.classList.add('has-error');
      if (errEl) {
        const textSpan = errEl.querySelector('.error-text');
        if (textSpan) textSpan.textContent = msg;
      }
    };

    const clearFieldError = (v: FieldValidator) => {
      const group = document.getElementById(v.groupId);
      if (group) group.classList.remove('has-error');
    };

    const validateSingleField = (fieldId: string): boolean => {
      const validator = validators.find(v => v.id === fieldId);
      if (!validator) return true;
      const el = document.getElementById(fieldId) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (!el) return true;

      const result = validator.validate(el.value);
      if (!result.isValid) {
        setFieldError(validator, result.message);
        return false;
      } else {
        clearFieldError(validator);
        return true;
      }
    };

    validators.forEach(v => {
      const el = document.getElementById(v.id);
      if (!el) return;

      const handler = () => {
        const group = document.getElementById(v.groupId);
        if (group && group.classList.contains('has-error')) {
          validateSingleField(v.id);
        }
      };

      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
      el.addEventListener('blur', () => {
        validateSingleField(v.id);
      });
    });

    // ── 4. Form Submit Handler with Comprehensive Validation ──
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let hasErrors = false;
        let firstInvalidEl: HTMLElement | null = null;

        validators.forEach(v => {
          const el = document.getElementById(v.id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
          if (!el) return;
          const result = v.validate(el.value);
          if (!result.isValid) {
            setFieldError(v, result.message);
            hasErrors = true;
            if (!firstInvalidEl) firstInvalidEl = el;
          } else {
            clearFieldError(v);
          }
        });

        if (hasErrors) {
          if (errorBanner) {
            errorBanner.style.display = 'flex';
            errorBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          if (firstInvalidEl) {
            (firstInvalidEl as HTMLElement).focus();
          }
          return;
        }

        if (errorBanner) errorBanner.style.display = 'none';

        if (submitBtn) {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"><svg class="x-icon" aria-hidden="true"><use href="#fa-spinner"></use></svg></i> Transmitting...`;
        }

        const formData = {
          fname: (document.getElementById('fname') as HTMLInputElement)?.value.trim() || '',
          lname: (document.getElementById('lname') as HTMLInputElement)?.value.trim() || '',
          email: (document.getElementById('email') as HTMLInputElement)?.value.trim() || '',
          countryCode: hiddenCountryCode?.value || '+91',
          countryName: hiddenCountryName?.value || 'India',
          phone: `${hiddenCountryCode?.value || '+91'} ${(document.getElementById('phone') as HTMLInputElement)?.value.trim() || ''}`,
          subject: (document.getElementById('subject') as HTMLSelectElement)?.value || '',
          message: (document.getElementById('message') as HTMLTextAreaElement)?.value.trim() || ''
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
        } finally {
          if (submitBtn) {
            submitBtn.removeAttribute('disabled');
            submitBtn.innerHTML = `<span>Transmit Message</span> <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>`;
          }
        }

        showSuccessModal(
          'Inquiry Transmitted Successfully',
          'Thank you for reaching out to ARKS IEC. Our senior engineering leads will review your parameters and respond shortly.'
        );
        form.reset();
        selectCountry(COUNTRIES.find(c => c.code === 'IN') || COUNTRIES[0]);

        // Reset counters & errors
        ['fname', 'lname', 'email', 'phone', 'message'].forEach(id => {
          const counter = document.getElementById(`${id}-counter`);
          if (counter) {
            const max = id === 'fname' || id === 'lname' ? 40 : id === 'email' ? 60 : id === 'phone' ? 12 : 600;
            counter.textContent = `0 / ${max}`;
          }
        });
        validators.forEach(v => clearFieldError(v));
      });
    }
  }
};

export default Contact;

