import { PageModule, showSuccessModal } from '../router';
import { COUNTRIES, CountryData } from '../data/countries';

const Careers: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/career-workspace.webp" alt="ARKS IEC Careers" class="x-page-hero__bg" width="1920" height="1282" fetchpriority="high">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-chevron-right"></use></svg></i>
              <span>Careers</span>
            </div>
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
              <div class="banner-icon"><i class="fa-solid fa-circle-check"><svg class="x-icon" aria-hidden="true"><use href="#fa-circle-check"></use></svg></i></div>
              <div class="banner-content">
                <h4>Application Dossier Received Successfully!</h4>
                <p>Thank you for submitting your profile to ARKS Integrated Engineering Consultancy. Our Technical Evaluation & HR Panel will review your credentials and contact you directly.</p>
              </div>
              <button type="button" class="banner-close-btn" id="banner-close-btn"><i class="fa-solid fa-xmark"><svg class="x-icon" aria-hidden="true"><use href="#fa-xmark"></use></svg></i></button>
            </div>

            <form id="career-application-form" class="career-bespoke-form" novalidate>
              <!-- Form Top Validation Error Banner -->
              <div class="career-error-banner" id="career-error-banner" style="display: none;">
                <div class="banner-icon"><i class="fa-solid fa-triangle-exclamation"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg></i></div>
                <div class="banner-text">Please review and correct the highlighted fields before submitting.</div>
              </div>

              <div class="form-sections-grid">
                
                <!-- 1. Your Name (Max 50 Chars - Alphabets) -->
                <div class="form-field-group" id="group-c-name">
                  <div class="field-label-row">
                    <label for="c-name">Your Name <span class="req-star">*</span></label>
                    <span class="char-counter" id="name-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-user field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-user"></use></svg></i>
                    <input 
                      type="text" 
                      id="c-name" 
                      name="fullName" 
                      maxlength="50" 
                      placeholder="Enter full name" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-name"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Your full name is required.</span></span>
                  <span class="field-hint">Max 50 characters (Alphabets only)</span>
                </div>

                <!-- 2. Email ID (Max 50 Chars - Alphabets/Special Chars) -->
                <div class="form-field-group" id="group-c-email">
                  <div class="field-label-row">
                    <label for="c-email">Email ID <span class="req-star">*</span></label>
                    <span class="char-counter" id="email-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-envelope field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-envelope"></use></svg></i>
                    <input 
                      type="email" 
                      id="c-email" 
                      name="email" 
                      maxlength="50" 
                      placeholder="e.g. name@example.com" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-email"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter a valid email address.</span></span>
                  <span class="field-hint">Max 50 characters</span>
                </div>

                <!-- 3 & 4. Country Code (Searchable Dropdown) & Contact No (Max 12 Numerals) -->
                <div class="form-field-group form-field-group--full" id="group-c-phone">
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
                        <i class="fa-solid fa-chevron-down caret-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-chevron-down"></use></svg></i>
                      </button>

                      <!-- Searchable Country Dropdown Panel -->
                      <div class="country-dropdown-panel" id="country-dropdown-panel">
                        <div class="country-search-box">
                          <i class="fa-solid fa-magnifying-glass search-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-magnifying-glass"></use></svg></i>
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
                      >
                    </div>
                  </div>
                  <span class="field-error-msg" id="error-c-phone"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Contact number must be between 7 and 12 digits.</span></span>
                  <span class="field-hint" id="phone-hint">Select country from searchable dropdown & enter up to 12 numerals</span>
                </div>

                <!-- 5. Years of Experience (Dropdown) -->
                <div class="form-field-group" id="group-c-experience">
                  <div class="field-label-row">
                    <label for="c-experience">Years of Experience <span class="req-star">*</span></label>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-briefcase field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-briefcase"></use></svg></i>
                    <select id="c-experience" name="yearsOfExperience">
                      <option value="" disabled selected>Select experience range...</option>
                      <option value="Less than 5 Yrs">Less than 5 Years</option>
                      <option value="5 to 10 Yrs">5 to 10 Years</option>
                      <option value="10 to 15 Yrs">10 to 15 Years</option>
                      <option value="15 to 20 Yrs">15 to 20 Years</option>
                      <option value="20+ Yrs">20+ Years</option>
                    </select>
                  </div>
                  <span class="field-error-msg" id="error-c-experience"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please select your years of experience.</span></span>
                  <span class="field-hint">Select relevant industry experience</span>
                </div>

                <!-- 6. Nationality (Max 50 Chars - Alphabets) -->
                <div class="form-field-group" id="group-c-nationality">
                  <div class="field-label-row">
                    <label for="c-nationality">Nationality <span class="req-star">*</span></label>
                    <span class="char-counter" id="nationality-counter">0 / 50</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-earth-americas field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-earth-americas"></use></svg></i>
                    <input 
                      type="text" 
                      id="c-nationality" 
                      name="nationality" 
                      maxlength="50" 
                      placeholder="e.g. Indian, Emirati, British" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-nationality"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter a valid nationality.</span></span>
                  <span class="field-hint">Max 50 characters (Alphabets only)</span>
                </div>

                <!-- 7. Highest Educational Qualification (Max 100 Chars) -->
                <div class="form-field-group form-field-group--full" id="group-c-education">
                  <div class="field-label-row">
                    <label for="c-education">Highest Educational Qualification <span class="req-star">*</span></label>
                    <span class="char-counter" id="education-counter">0 / 100</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-graduation-cap field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-graduation-cap"></use></svg></i>
                    <input 
                      type="text" 
                      id="c-education" 
                      name="highestQualification" 
                      maxlength="100" 
                      placeholder="e.g. B.Tech in Civil Engineering / M.Tech in Power Systems" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-education"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter your highest educational qualification.</span></span>
                  <span class="field-hint">Max 100 characters (Alphabets & special characters)</span>
                </div>

                <!-- Discipline of Interest -->
                <div class="form-field-group form-field-group--full" id="group-c-discipline">
                  <div class="field-label-row">
                    <label for="c-discipline">Primary Discipline / Domain <span class="req-star">*</span></label>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-layer-group field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-layer-group"></use></svg></i>
                    <select id="c-discipline" name="primaryDiscipline">
                      <option value="" disabled selected>Select primary engineering discipline...</option>
                      <option value="Civil & Structural Engineering">Civil & Structural Engineering</option>
                      <option value="Electrical Transmission & Substations (HV/EHV)">Electrical Transmission & Substations (HV/EHV)</option>
                      <option value="MEPF Building Services">MEPF Building Services (HVAC, Plumbing, Fire Fighting)</option>
                      <option value="Project Management Consultancy (PMC)">Project Management Consultancy (PMC)</option>
                      <option value="BIM & CAD Drafting">BIM & 3D CAD Modeling</option>
                      <option value="Tendering & Cost Estimation">Tendering & Cost Estimation</option>
                    </select>
                  </div>
                  <span class="field-error-msg" id="error-c-discipline"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please select your primary engineering discipline.</span></span>
                </div>

                <!-- 8. Summary of Expertise (Max 500 Chars - Alphabets/Numerals) -->
                <div class="form-field-group form-field-group--full" id="group-c-summary">
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
                    ></textarea>
                  </div>
                  <span class="field-error-msg" id="error-c-summary"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please provide at least 20 characters summarizing your competencies.</span></span>
                  <span class="field-hint">Max 500 characters (Alphabets & numerals)</span>
                </div>

                <!-- 9. Accessible Link to CV / Portfolio with Public Access Note -->
                <div class="form-field-group form-field-group--full" id="group-c-cv-link">
                  <div class="field-label-row">
                    <label for="c-cv-link">Link to CV / Resume / Portfolio <span class="req-star">*</span></label>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-solid fa-link field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-link"></use></svg></i>
                    <input 
                      type="url" 
                      id="c-cv-link" 
                      name="cvLink" 
                      placeholder="https://drive.google.com/... or https://onedrive.live.com/... or Dropbox / Cloud URL" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-cv-link"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please provide a valid web URL starting with http:// or https://</span></span>
                  <div class="cv-access-note">
                    <i class="fa-solid fa-triangle-exclamation note-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg></i>
                    <span><strong>Access Permission Note:</strong> Please ensure your document sharing permission is set to <strong>"Public"</strong> or <strong>"Anyone with the link can view"</strong> so our HR and Engineering panel can open and review your file.</span>
                  </div>
                </div>

                <!-- 10. LinkedIn Profile URL -->
                <div class="form-field-group form-field-group--full" id="group-c-linkedin">
                  <div class="field-label-row">
                    <label for="c-linkedin">LinkedIn Profile URL</label>
                    <span class="char-counter" id="linkedin-counter">0 / 150</span>
                  </div>
                  <div class="input-with-icon">
                    <i class="fa-brands fa-linkedin field-icon"><svg class="x-icon" aria-hidden="true"><use href="#fa-linkedin"></use></svg></i>
                    <input 
                      type="url" 
                      id="c-linkedin" 
                      name="linkedinUrl" 
                      maxlength="150"
                      placeholder="https://www.linkedin.com/in/your-profile" 
                    >
                  </div>
                  <span class="field-error-msg" id="error-c-linkedin"><svg class="x-icon" aria-hidden="true"><use href="#fa-triangle-exclamation"></use></svg><span class="error-text">Please enter a valid LinkedIn URL (e.g. https://www.linkedin.com/in/...).</span></span>
                  <span class="field-hint">Optional — Direct link to your professional LinkedIn candidate profile</span>
                </div>

              </div>

              <!-- Submit Button -->
              <div class="form-submit-row">
                <button type="submit" class="btn btn--accent btn--submit-career" id="submit-btn">
                  <span>Submit Application Dossier</span>
                  <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>
                </button>
                <div class="submission-privacy-note">
                  <i class="fa-solid fa-lock"><svg class="x-icon" aria-hidden="true"><use href="#fa-lock"></use></svg></i> All submitted candidate profiles are reviewed confidentially by the ARKS IEC HR Department.
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

    // ── 3. Data Validation Engine ──
    interface FieldValidator {
      id: string;
      groupId: string;
      errorId: string;
      validate: (val: string) => { isValid: boolean; message: string };
    }

    const fieldValidators: FieldValidator[] = [
      {
        id: 'c-name',
        groupId: 'group-c-name',
        errorId: 'error-c-name',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Your full name is required.' };
          if (trimmed.length < 2) return { isValid: false, message: 'Name must be at least 2 characters.' };
          if (!/^[a-zA-Z\s.-]+$/.test(trimmed)) return { isValid: false, message: 'Name must contain only letters, dots, and hyphens.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-email',
        groupId: 'group-c-email',
        errorId: 'error-c-email',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Email address is required.' };
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(trimmed)) return { isValid: false, message: 'Please enter a valid email address (e.g. name@example.com).' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-phone',
        groupId: 'group-c-phone',
        errorId: 'error-c-phone',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Contact number is required.' };
          if (!/^\d{7,12}$/.test(trimmed)) return { isValid: false, message: 'Contact number must be between 7 and 12 digits.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-experience',
        groupId: 'group-c-experience',
        errorId: 'error-c-experience',
        validate: (val) => {
          if (!val) return { isValid: false, message: 'Please select your years of experience.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-nationality',
        groupId: 'group-c-nationality',
        errorId: 'error-c-nationality',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Nationality is required.' };
          if (trimmed.length < 2 || !/^[a-zA-Z\s]+$/.test(trimmed)) return { isValid: false, message: 'Please enter a valid nationality (letters only).' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-education',
        groupId: 'group-c-education',
        errorId: 'error-c-education',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Highest educational qualification is required.' };
          if (trimmed.length < 2) return { isValid: false, message: 'Please specify your qualification details.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-discipline',
        groupId: 'group-c-discipline',
        errorId: 'error-c-discipline',
        validate: (val) => {
          if (!val) return { isValid: false, message: 'Please select your primary engineering discipline.' };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-summary',
        groupId: 'group-c-summary',
        errorId: 'error-c-summary',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Summary of expertise is required.' };
          if (trimmed.length < 20) return { isValid: false, message: `Please provide at least 20 characters (${trimmed.length}/20).` };
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-cv-link',
        groupId: 'group-c-cv-link',
        errorId: 'error-c-cv-link',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: false, message: 'Link to your CV / Resume / Portfolio is required.' };
          try {
            const url = new URL(trimmed);
            if (!['http:', 'https:'].includes(url.protocol)) {
              return { isValid: false, message: 'URL must begin with http:// or https://' };
            }
          } catch {
            return { isValid: false, message: 'Please provide a valid URL (e.g. Google Drive, OneDrive link).' };
          }
          return { isValid: true, message: '' };
        }
      },
      {
        id: 'c-linkedin',
        groupId: 'group-c-linkedin',
        errorId: 'error-c-linkedin',
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return { isValid: true, message: '' }; // optional
          try {
            const url = new URL(trimmed);
            if (!['http:', 'https:'].includes(url.protocol)) {
              return { isValid: false, message: 'URL must begin with http:// or https://' };
            }
          } catch {
            return { isValid: false, message: 'Please enter a valid LinkedIn URL (e.g. https://www.linkedin.com/in/...).' };
          }
          return { isValid: true, message: '' };
        }
      }
    ];

    const errorBanner = document.getElementById('career-error-banner');

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

    // Live validation listeners
    fieldValidators.forEach(v => {
      const el = document.getElementById(v.id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (!el) return;

      const handleValidate = () => {
        const res = v.validate(el.value);
        if (res.isValid) {
          clearFieldError(v);
          const remainingErrors = document.querySelectorAll('.form-field-group.has-error');
          if (remainingErrors.length === 0 && errorBanner) {
            errorBanner.style.display = 'none';
          }
        } else {
          const group = document.getElementById(v.groupId);
          if (group?.classList.contains('has-error')) {
            setFieldError(v, res.message);
          }
        }
      };

      el.addEventListener('input', handleValidate);
      el.addEventListener('change', handleValidate);
      el.addEventListener('blur', () => {
        const val = el.value.trim();
        if (val || v.id !== 'c-linkedin') {
          const res = v.validate(el.value);
          if (!res.isValid) {
            setFieldError(v, res.message);
          } else {
            clearFieldError(v);
          }
        }
      });
    });

    // ── 4. Form Submission & Clean Inline Feedback ──
    const form = document.getElementById('career-application-form') as HTMLFormElement;
    const successBanner = document.getElementById('career-success-banner');
    const closeBannerBtn = document.getElementById('banner-close-btn');
    const submitBtn = document.getElementById('submit-btn');

    // ── Deployed Career Google Apps Script Web App URL ──
    const CAREER_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbwB0bQtoOTAt4l7kG_XK3dtJ_oAFAP73dmmwL2r0-akc8GcdPPKaRxnUvfPecPdyUko/exec';

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Run validation across all fields
        let hasError = false;
        let firstInvalidGroup: HTMLElement | null = null;

        fieldValidators.forEach(v => {
          const el = document.getElementById(v.id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
          const val = el?.value || '';
          const res = v.validate(val);
          if (!res.isValid) {
            hasError = true;
            setFieldError(v, res.message);
            if (!firstInvalidGroup) {
              firstInvalidGroup = document.getElementById(v.groupId);
            }
          } else {
            clearFieldError(v);
          }
        });

        if (hasError) {
          if (errorBanner) errorBanner.style.display = 'flex';
          if (firstInvalidGroup) {
            (firstInvalidGroup as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
            const focusTarget = (firstInvalidGroup as HTMLElement).querySelector('input, select, textarea') as HTMLElement | null;
            setTimeout(() => focusTarget?.focus(), 250);
          }
          return;
        }

        if (errorBanner) errorBanner.style.display = 'none';

        if (submitBtn) {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"><svg class="x-icon" aria-hidden="true"><use href="#fa-spinner"></use></svg></i> Transmitting Application...`;
        }

        const formData = {
          fullName: (document.getElementById('c-name') as HTMLInputElement)?.value.trim() || '',
          email: (document.getElementById('c-email') as HTMLInputElement)?.value.trim() || '',
          countryCode: (document.getElementById('selected-country-code') as HTMLInputElement)?.value || '+91',
          contactNo: (document.getElementById('c-phone') as HTMLInputElement)?.value.trim() || '',
          yearsOfExperience: (document.getElementById('c-experience') as HTMLSelectElement)?.value || '',
          nationality: (document.getElementById('c-nationality') as HTMLInputElement)?.value.trim() || '',
          highestQualification: (document.getElementById('c-education') as HTMLInputElement)?.value.trim() || '',
          primaryDiscipline: (document.getElementById('c-discipline') as HTMLSelectElement)?.value || '',
          expertiseSummary: (document.getElementById('c-summary') as HTMLTextAreaElement)?.value.trim() || '',
          cvLink: (document.getElementById('c-cv-link') as HTMLInputElement)?.value.trim() || '',
          linkedinUrl: (document.getElementById('c-linkedin') as HTMLInputElement)?.value.trim() || ''
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
        } finally {
          if (submitBtn) {
            submitBtn.removeAttribute('disabled');
            submitBtn.innerHTML = `<span>Submit Application Dossier</span> <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>`;
          }
        }

        form.reset();
        fieldValidators.forEach(clearFieldError);
        if (errorBanner) errorBanner.style.display = 'none';

        // Reset counters
        ['name-counter', 'email-counter', 'phone-counter', 'nationality-counter', 'education-counter', 'summary-counter', 'linkedin-counter'].forEach(cId => {
          const el = document.getElementById(cId);
          if (el) {
            const max = el.textContent?.split('/')[1]?.trim() || '50';
            el.textContent = `0 / ${max}`;
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
