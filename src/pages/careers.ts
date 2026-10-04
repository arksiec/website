import { PageModule, showSuccessModal } from '../router';
import { COUNTRIES, CountryData } from '../data/countries';

const Careers: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/career-workspace.jpg" alt="ARKS IEC Careers" class="x-page-hero__bg">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"></i>
              <span>Careers</span>
            </div>
            <div class="x-eyebrow reveal" style="color: var(--x-accent);">ARKS INTEGRATED ENGINEERING CONSULTANCY</div>
            <h1 class="x-page-hero__title reveal">
              Engineer the Future<br>
              <em>With ARKS IEC.</em>
            </h1>
            <p class="x-page-hero__text reveal">
              Join our multidisciplinary engineering consultancy and collaborate on mission-critical power, infrastructure, and structural developments globally.
            </p>
          </div>
        </div>
      </section>

      <!-- ── Full-Page Career Application Form ── -->
      <section class="section section--career-form-wrap">
        <div class="container">
          <div class="career-page-card">
            
            <div class="career-intro-header">
              <div class="eyebrow">CANDIDATE REGISTRATION</div>
              <h2 class="heading-lg">Submit Your Application Dossier</h2>
              <p class="text-md">
                We are constantly expanding our talent network of disciplined civil, electrical, MEPF, and PMC engineering specialists. Please complete the candidate registration form below.
              </p>
            </div>

            <!-- Sleek Inline Success Alert (Initially Hidden) -->
            <div class="career-success-banner hidden" id="career-success-banner" style="display: none;">
              <div class="banner-icon"><i class="fa-solid fa-circle-check"></i></div>
              <div class="banner-content">
                <h4>Application Dossier Received Successfully!</h4>
                <p>Thank you for submitting your profile to ARKS Integrated Engineering Consultancy. Our Technical Evaluation & HR Panel will review your credentials and contact you directly.</p>
              </div>
              <button type="button" class="banner-close-btn" id="banner-close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <form id="career-application-form" class="career-bespoke-form">
              <div class="form-sections-grid">
                
                <!-- 1. Your Name (Max 50 Chars - Alphabets) -->
                <div class="form-field-group">
                  <div class="field-label-row">
                    <label for="c-name">Your Name <span class="req-star">*</span></label>
                    <span class="char-counter" id="name-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-user field-icon"></i>
                    <input 
                      type="text" 
                      id="c-name" 
                      name="fullName" 
                      maxlength="50" 
                      placeholder="Enter full name" 
                      required
                    >
                  </div>
                  <span class="field-hint">Max 50 characters (Alphabets only)</span>
                </div>

                <!-- 2. Email ID (Max 50 Chars - Alphabets/Special Chars) -->
                <div class="form-field-group">
                  <div class="field-label-row">
                    <label for="c-email">Email ID <span class="req-star">*</span></label>
                    <span class="char-counter" id="email-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-envelope field-icon"></i>
                    <input 
                      type="email" 
                      id="c-email" 
                      name="email" 
                      maxlength="50" 
                      placeholder="e.g. name@example.com" 
                      required
                    >
                  </div>
                  <span class="field-hint">Max 50 characters</span>
                </div>

                <!-- 3 & 4. Country Code (Searchable Dropdown) & Contact No (Max 12 Numerals) -->
                <div class="form-field-group form-field-group--full">
                  <div class="field-label-row">
                    <label for="c-phone">Contact Number with Country Code <span class="req-star">*</span></label>
                    <span class="char-counter" id="phone-counter">0 / 12</span>
                  </div>
                  
                  <div class="phone-input-combo">
                    <!-- Custom Searchable Country Selector -->
                    <div class="country-picker-wrap" id="country-picker">
                      <button type="button" class="country-picker-btn" id="country-select-btn" aria-expanded="false">
                        <span class="flag-icon" id="selected-flag">🇮🇳</span>
                        <span class="dial-code" id="selected-dial-code">+91</span>
                        <i class="fa-solid fa-chevron-down caret-icon"></i>
                      </button>

                      <!-- Searchable Country Dropdown Panel -->
                      <div class="country-dropdown-panel" id="country-dropdown-panel">
                        <div class="country-search-box">
                          <i class="fa-solid fa-magnifying-glass search-icon"></i>
                          <input 
                            type="text" 
                            id="country-search-input" 
                            placeholder="Search country or dial code..." 
                            autocomplete="off"
                          >
                        </div>
                        <div class="country-options-list" id="country-options-list">
                          <!-- Injected via JavaScript -->
                        </div>
                      </div>
                    </div>

                    <!-- Hidden Input for selected country code -->
                    <input type="hidden" id="selected-country-code" name="countryCode" value="+91">
                    <input type="hidden" id="selected-country-name" name="countryName" value="India">

                    <!-- Phone Number Input (Numerals only, Max 12) -->
                    <div class="phone-num-input-wrap">
                      <input 
                        type="tel" 
                        id="c-phone" 
                        name="contactNo" 
                        maxlength="12" 
                        placeholder="Enter contact number (numerals only)" 
                        required
                      >
                    </div>
                  </div>
                  <span class="field-hint" id="phone-hint">Select country from searchable dropdown & enter up to 12 numerals</span>
                </div>

                <!-- 5. Years of Experience (Dropdown) -->
                <div class="form-field-group">
                  <label for="c-experience">Years of Experience <span class="req-star">*</span></label>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-briefcase field-icon"></i>
                    <select id="c-experience" name="yearsOfExperience" required>
                      <option value="" disabled selected>Select experience range...</option>
                      <option value="Less than 5 Yrs">Less than 5 Years</option>
                      <option value="5 to 10 Yrs">5 to 10 Years</option>
                      <option value="10 to 15 Yrs">10 to 15 Years</option>
                      <option value="15 to 20 Yrs">15 to 20 Years</option>
                      <option value="20+ Yrs">20+ Years</option>
                    </select>
                  </div>
                  <span class="field-hint">Select relevant industry experience</span>
                </div>

                <!-- 6. Nationality (Max 50 Chars - Alphabets) -->
                <div class="form-field-group">
                  <div class="field-label-row">
                    <label for="c-nationality">Nationality <span class="req-star">*</span></label>
                    <span class="char-counter" id="nationality-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-earth-americas field-icon"></i>
                    <input 
                      type="text" 
                      id="c-nationality" 
                      name="nationality" 
                      maxlength="50" 
                      placeholder="e.g. Indian, Emirati, British" 
                      required
                    >
                  </div>
                  <span class="field-hint">Max 50 characters (Alphabets only)</span>
                </div>

                <!-- 7. Highest Educational Qualification (Max 100 Chars) -->
                <div class="form-field-group form-field-group--full">
                  <div class="field-label-row">
                    <label for="c-education">Highest Educational Qualification <span class="req-star">*</span></label>
                    <span class="char-counter" id="education-counter">0 / 100</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-graduation-cap field-icon"></i>
                    <input 
                      type="text" 
                      id="c-education" 
                      name="highestQualification" 
                      maxlength="100" 
                      placeholder="e.g. B.Tech in Civil Engineering / M.Tech in Power Systems" 
                      required
                    >
                  </div>
                  <span class="field-hint">Max 100 characters (Alphabets & special characters)</span>
                </div>

                <!-- Discipline of Interest -->
                <div class="form-field-group form-field-group--full">
                  <label for="c-discipline">Primary Discipline / Domain <span class="req-star">*</span></label>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-layer-group field-icon"></i>
                    <select id="c-discipline" name="primaryDiscipline" required>
                      <option value="" disabled selected>Select primary engineering discipline...</option>
                      <option value="Civil & Structural Engineering">Civil & Structural Engineering</option>
                      <option value="Electrical Transmission & Substations (HV/EHV)">Electrical Transmission & Substations (HV/EHV)</option>
                      <option value="MEPF Building Services">MEPF Building Services (HVAC, Plumbing, Fire Fighting)</option>
                      <option value="Project Management Consultancy (PMC)">Project Management Consultancy (PMC)</option>
                      <option value="BIM & CAD Drafting">BIM & 3D CAD Modeling</option>
                      <option value="Tendering & Cost Estimation">Tendering & Cost Estimation</option>
                    </select>
                  </div>
                </div>

                <!-- 8. Summary of Expertise (Max 500 Chars - Alphabets/Numerals) -->
                <div class="form-field-group form-field-group--full">
                  <div class="field-label-row">
                    <label for="c-summary">Summary of Expertise <span class="req-star">*</span></label>
                    <span class="char-counter" id="summary-counter">0 / 500</span>
                  </div>
                  <div class="textarea-wrap">
                    <textarea 
                      id="c-summary" 
                      name="expertiseSummary" 
                      maxlength="500" 
                      rows="4" 
                      placeholder="Briefly describe your core engineering competencies, key projects handled, software proficiencies (e.g. ETAP, STAAD.Pro, Revit, AutoCAD), and achievements..." 
                      required
                    ></textarea>
                  </div>
                  <span class="field-hint">Max 500 characters (Alphabets & numerals)</span>
                </div>

                <!-- 9. Accessible Link to CV / Portfolio with Public Access Note -->
                <div class="form-field-group form-field-group--full">
                  <div class="field-label-row">
                    <label for="c-cv-link">Link to CV / Resume / Portfolio <span class="req-star">*</span></label>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-link field-icon"></i>
                    <input 
                      type="url" 
                      id="c-cv-link" 
                      name="cvLink" 
                      placeholder="https://drive.google.com/... or https://onedrive.live.com/... or Dropbox / Cloud URL" 
                      required
                    >
                  </div>
                  <div class="cv-access-note">
                    <i class="fa-solid fa-triangle-exclamation note-icon"></i>
                    <span><strong>Access Permission Note:</strong> Please ensure your document sharing permission is set to <strong>"Public"</strong> or <strong>"Anyone with the link can view"</strong> so our HR and Engineering panel can open and review your file.</span>
                  </div>
                </div>

                <!-- 10. LinkedIn Profile URL -->
                <div class="form-field-group form-field-group--full">
                  <div class="field-label-row">
                    <label for="c-linkedin">LinkedIn Profile URL</label>
                    <span class="char-counter" id="linkedin-counter">0 / 150</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-brands fa-linkedin field-icon"></i>
                    <input 
                      type="url" 
                      id="c-linkedin" 
                      name="linkedinUrl" 
                      maxlength="150"
                      placeholder="https://www.linkedin.com/in/your-profile" 
                    >
                  </div>
                  <span class="field-hint">Optional — Direct link to your professional LinkedIn candidate profile</span>
                </div>

              </div>

              <!-- Submit Button -->
              <div class="form-submit-row">
                <button type="submit" class="btn btn--accent btn--submit-career" id="submit-btn">
                  <span>Submit Application Dossier</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div class="submission-privacy-note">
                  <i class="fa-solid fa-lock"></i> All submitted candidate profiles are reviewed confidentially by the ARKS IEC HR Department.
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    `;
  },

  init() {
    // ── 1. Setup Searchable Country Dropdown ──
    const countryPickerBtn = document.getElementById('country-select-btn');
    const dropdownPanel = document.getElementById('country-dropdown-panel');
    const searchInput = document.getElementById('country-search-input') as HTMLInputElement;
    const optionsList = document.getElementById('country-options-list');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedDialCode = document.getElementById('selected-dial-code');
    const hiddenCountryCode = document.getElementById('selected-country-code') as HTMLInputElement;
    const hiddenCountryName = document.getElementById('selected-country-name') as HTMLInputElement;
    const phoneInput = document.getElementById('c-phone') as HTMLInputElement;
    const phoneHint = document.getElementById('phone-hint');

    let currentSelectedCountry: CountryData = COUNTRIES[0]; // India default

    function renderCountryOptions(list: CountryData[]) {
      if (!optionsList) return;
      if (list.length === 0) {
        optionsList.innerHTML = `<div class="country-no-results">No countries found matching search</div>`;
        return;
      }
      optionsList.innerHTML = list.map(c => `
        <div class="country-option ${c.code === currentSelectedCountry.code ? 'active' : ''}" data-code="${c.code}">
          <span class="option-flag">${c.flag}</span>
          <span class="option-name">${c.name}</span>
          <span class="option-dial">${c.dialCode}</span>
        </div>
      `).join('');

      // Add click events to options
      optionsList.querySelectorAll('.country-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const code = opt.getAttribute('data-code');
          const found = COUNTRIES.find(c => c.code === code);
          if (found) {
            selectCountry(found);
            closeDropdown();
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
        if (!target.closest('#country-picker')) {
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

    // Name: Max 50, Alphabets & spaces only
    setupCounter('c-name', 'name-counter', 50, /[^a-zA-Z\s.-]/g);

    // Email: Max 50
    setupCounter('c-email', 'email-counter', 50);

    // Phone: Max 12 Numerals only
    setupCounter('c-phone', 'phone-counter', 12, /[^0-9]/g);

    // Nationality: Max 50, Alphabets only
    setupCounter('c-nationality', 'nationality-counter', 50, /[^a-zA-Z\s]/g);

    // Education: Max 100
    setupCounter('c-education', 'education-counter', 100);

    // Summary: Max 500
    setupCounter('c-summary', 'summary-counter', 500);

    // LinkedIn: Max 150
    setupCounter('c-linkedin', 'linkedin-counter', 150);

    // ── 3. Form Submission & Clean Inline Success ──
    const form = document.getElementById('career-application-form') as HTMLFormElement;
    const successBanner = document.getElementById('career-success-banner');
    const closeBannerBtn = document.getElementById('banner-close-btn');
    const submitBtn = document.getElementById('submit-btn');

    // ── Deployed Career Google Apps Script Web App URL ──
    const CAREER_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbwB0bQtoOTAt4l7kG_XK3dtJ_oAFAP73dmmwL2r0-akc8GcdPPKaRxnUvfPecPdyUko/exec';

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (submitBtn) {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Transmitting Application...`;
        }

        const formData = {
          fullName: (document.getElementById('c-name') as HTMLInputElement)?.value || '',
          email: (document.getElementById('c-email') as HTMLInputElement)?.value || '',
          countryCode: (document.getElementById('selected-country-code') as HTMLInputElement)?.value || '+91',
          contactNo: (document.getElementById('c-phone') as HTMLInputElement)?.value || '',
          yearsOfExperience: (document.getElementById('c-experience') as HTMLSelectElement)?.value || '',
          nationality: (document.getElementById('c-nationality') as HTMLInputElement)?.value || '',
          highestQualification: (document.getElementById('c-education') as HTMLInputElement)?.value || '',
          primaryDiscipline: (document.getElementById('c-discipline') as HTMLSelectElement)?.value || '',
          expertiseSummary: (document.getElementById('c-summary') as HTMLTextAreaElement)?.value || '',
          cvLink: (document.getElementById('c-cv-link') as HTMLInputElement)?.value || '',
          linkedinUrl: (document.getElementById('c-linkedin') as HTMLInputElement)?.value || ''
        };

        try {
          if (CAREER_SCRIPT_URL && CAREER_SCRIPT_URL.trim() !== '') {
            await fetch(CAREER_SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });
          }
        } catch (err) {
          console.error('Career Application Submission Error:', err);
        }

        if (submitBtn) {
          submitBtn.removeAttribute('disabled');
          submitBtn.innerHTML = `<span>Submit Application Dossier</span> <i class="fa-solid fa-arrow-right"></i>`;
        }
        form.reset();
        // Reset counters
        ['name-counter', 'email-counter', 'phone-counter', 'nationality-counter', 'education-counter', 'summary-counter', 'linkedin-counter'].forEach(cId => {
          const el = document.getElementById(cId);
          if (el) {
            const max = el.textContent?.split('/')[1] || '50';
            el.textContent = `0 /${max}`;
          }
        });
        showSuccessModal(
          'Application Dossier Received',
          'Thank you for submitting your candidate profile to ARKS IEC. Our HR Department will review your credentials and respond shortly.'
        );
      });
    }

    if (closeBannerBtn) {
      closeBannerBtn.addEventListener('click', () => {
        successBanner?.classList.add('hidden');
      });
    }
  }
};

export default Careers;
