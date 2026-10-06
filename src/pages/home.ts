import { PageModule } from '../router';

const Home: PageModule = {
  render() {
    return `
      <!-- ULTRA-MODERN ASYMMETRICAL HERO SECTION -->
      <section class="x-hero-reborn" id="hero-section">
        
        <!-- Right Side Visuals (Geometric Glass Pane Effect) -->
        <div class="x-hero-reborn__visual">
          <div class="x-hero-reborn__visual-bg">
            <img src="/Photos/project-electrical.webp" alt="Engineering Background" width="1200" height="896" fetchpriority="high">
          </div>
          <!-- Geometric Glass Panels & Orange Accents to emulate reference -->
          <div class="glass-pane glass-pane-1"></div>
          <div class="glass-pane glass-pane-2"></div>
          <div class="glass-pane glass-pane-3"></div>
          <div class="accent-square accent-square-1"></div>
          <div class="accent-square accent-square-2"></div>
          <div class="accent-square accent-square-3"></div>
          <div class="x-hero-reborn__vignette"></div>
        </div>

        <!-- Far Right Edge Text -->
        <div class="x-hero-reborn__edge-text">
          <span>IDEAS</span>
          <span>ENGINEERED</span>
          <span>FOR A</span>
          <span>STRONGER</span>
          <span>TOMORROW</span>
          <div class="edge-line"></div>
        </div>

        <div class="x-container x-hero-reborn__container">
          
          <!-- Left Content -->
          <div class="x-hero-reborn__content">
            <div class="x-hero-reborn__pill">
              <span class="pill-dot"></span>
              MULTIDISCIPLINARY ENGINEERING CONSULTANCY
            </div>

            <h1 class="x-hero-reborn__title">
              <span class="title-arks">ARKS</span>
              <span class="title-integrated">INTEGRATED</span>
              <span class="title-engineering">ENGINEERING CONSULTANTS</span>
            </h1>
            
            <div class="x-hero-reborn__divider"></div>

            <p class="x-hero-reborn__desc">
              Single-window engineering consultancy delivering resilient infrastructure from concept to commissioning across 
              <strong>Civil &amp; Structural</strong>, <strong>Electrical HV/LV/EHV</strong>, 
              <strong>MEPF Systems</strong>, and <strong>Turnkey PMC</strong>.
            </p>

            <div class="x-hero-reborn__actions">
              <a href="/contact" class="x-btn-reborn x-btn-reborn--primary" data-nav>
                <span>Initiate Consultation</span>
                <span class="x-btn-icon"><i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i></span>
              </a>
              <a href="/services" class="x-btn-reborn x-btn-reborn--outline" data-nav>
                <span>Explore Technical Scope</span>
              </a>
            </div>
            
            <!-- Bottom Left Metrics Grid -->
            <div class="x-hero-reborn__metrics">
              <div class="metric">
                <div class="metric-icon-wrap">
                  <i class="fa-solid fa-cube"><svg class="x-icon" aria-hidden="true"><use href="#fa-cube"></use></svg></i>
                </div>
                <div class="metric-text">
                  <span class="metric-val">25+</span>
                  <span class="metric-lbl">Years Leadership</span>
                </div>
              </div>
              <div class="metric">
                <div class="metric-icon-wrap">
                  <i class="fa-solid fa-shield-halved"><svg class="x-icon" aria-hidden="true"><use href="#fa-shield-halved"></use></svg></i>
                </div>
                <div class="metric-text">
                  <span class="metric-val">100%</span>
                  <span class="metric-lbl">Code Compliance</span>
                </div>
              </div>
              <div class="metric">
                <div class="metric-icon-wrap">
                  <i class="fa-solid fa-gear"><svg class="x-icon" aria-hidden="true"><use href="#fa-gear"></use></svg></i>
                </div>
                <div class="metric-text">
                  <span class="metric-val">Global Conformance</span>
                  <span class="metric-lbl">IEC • IEEE • NBC Codes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Right Circular Discover -->
          <div class="x-hero-reborn__discover">
            <div class="discover-circles">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
            <a href="/#about" class="discover-link" data-nav-scroll="#about">
              DISCOVER ARKS <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>
            </a>
          </div>

        </div>
      </section>

      <!-- ── SECTION: ABOUT ARKS IEC ── -->
      <section id="about" class="x-section">
        <div class="x-container">
          <div class="x-about">
            <div class="x-about__media reveal">
              <img src="/Photos/about-modern-tower.webp" alt="ARKS Engineering Leadership Review" class="x-about__img-main" width="1080" height="720" loading="lazy" decoding="async">
              <img src="/Photos/about-blueprint-review.webp" alt="ARKS Infrastructure Project Execution" class="x-about__img-sub" width="1080" height="608" loading="lazy" decoding="async">
              <div class="x-about__badge">
                <strong>25+</strong>
                <span>Years of Leadership Experience</span>
              </div>
            </div>

            <div class="x-about__body">
              <div class="x-eyebrow reveal">ABOUT ARKS IEC</div>
              <h2 class="x-h2 reveal">Engineering excellence built on <em>experience</em> &amp; precision.</h2>
              
              <p class="reveal">
                <strong>ARKS Integrated Engineering Consultancy LLP</strong> was founded by seasoned directors with over 25 years of combined international experience across power transmission, large-scale civil infrastructure, and advanced commercial developments.
              </p>
              <p class="reveal">
                Recognizing that project sponsors require one accountable partner rather than disconnected subcontractors, we integrate Civil, Electrical (HV/LV/EHV), MEPF, and Project Management into a seamless, unified delivery platform.
              </p>

              <div class="x-quote reveal">
                "When precision matters and reliability is non-negotiable, ARKS IEC delivers certainty."
              </div>

              <div class="margin-top-md reveal" style="margin-top: 28px;">
                <a href="/contact" class="x-btn x-btn--dark" data-nav>
                  <span>Connect With Our Directors</span> <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Mission & Vision Cards -->
          <div class="x-mv">
            <div class="x-mv__card reveal">
              <div class="x-mv__icon"><i class="fa-solid fa-eye"><svg class="x-icon" aria-hidden="true"><use href="#fa-eye"></use></svg></i></div>
              <h3>Our Vision</h3>
              <p>
                To be a globally trusted multidisciplinary engineering partner, delivering integrated solutions that power infrastructure, shape communities, and set new benchmarks in technical excellence, reliability, and sustainable development.
              </p>
            </div>

            <div class="x-mv__card x-mv__card--dark reveal">
              <div class="x-mv__icon"><i class="fa-solid fa-bullseye"><svg class="x-icon" aria-hidden="true"><use href="#fa-bullseye"></use></svg></i></div>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class, integrated engineering solutions that are innovative, reliable, and efficient — empowering our clients to build infrastructure that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: CORE DISCIPLINES ── -->
      <section class="x-section x-section--surface">
        <div class="x-container">
          <div class="x-head x-head--split reveal">
            <div>
              <div class="x-eyebrow">WHAT WE DELIVER</div>
              <h2 class="x-h2">Comprehensive engineering disciplines <em>under one roof.</em></h2>
            </div>
            <div>
              <p class="x-lead">
                Every calculation, single-line diagram, and structural blueprint is coordinated under a single engineering management team to prevent clashes and eliminate rework.
              </p>
            </div>
          </div>

          <div class="x-services">
            <!-- Civil & Structural -->
            <div class="x-svc reveal">
              <div class="x-svc__img">
                <img src="/Photos/service-civil-structural.webp" alt="Civil & Structural Engineering" width="1080" height="608" loading="lazy" decoding="async">
              </div>
              <div class="x-svc__body">
                <span class="x-svc__num">DISCIPLINE 01</span>
                <h3>Civil &amp; Structural</h3>
                <p>Industrial foundations, heavy steel structures, geotechnical stability, commercial layouts, and 3D BIM structural detailing.</p>
                <a href="/services#civil" class="x-link" data-nav>Explore Civil Scope <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i></a>
              </div>
            </div>

            <!-- Electrical HV / LV / EHV -->
            <div class="x-svc reveal">
              <div class="x-svc__img">
                <img src="/Photos/project-electrical.webp" alt="Electrical Transmission & Substations" width="1200" height="896" loading="lazy" decoding="async">
              </div>
              <div class="x-svc__body">
                <span class="x-svc__num">DISCIPLINE 02</span>
                <h3>Electrical HV / LV / EHV</h3>
                <p>Substation design up to 400kV, transmission towers, grid interconnections, switchyards, relay protection, and renewable integration.</p>
                <a href="/services#electrical" class="x-link" data-nav>Explore Electrical Scope <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i></a>
              </div>
            </div>

            <!-- MEPF Building Services -->
            <div class="x-svc reveal">
              <div class="x-svc__img">
                <img src="/Photos/project-mepf.webp" alt="MEPF Building Services" width="1024" height="1024" loading="lazy" decoding="async">
              </div>
              <div class="x-svc__body">
                <span class="x-svc__num">DISCIPLINE 03</span>
                <h3>MEPF Systems</h3>
                <p>Synchronized HVAC cooling/heating loads, fire detection and suppression, plumbing hydraulics, and building automation (BMS).</p>
                <a href="/services#mepf" class="x-link" data-nav>Explore MEPF Scope <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i></a>
              </div>
            </div>

            <!-- Project Management Consultancy (PMC) -->
            <div class="x-svc reveal">
              <div class="x-svc__img">
                <img src="/Photos/project-pmc.webp" alt="Project Management Consultancy" width="1024" height="1024" loading="lazy" decoding="async">
              </div>
              <div class="x-svc__body">
                <span class="x-svc__num">DISCIPLINE 04</span>
                <h3>Project Management (PMC)</h3>
                <p>Milestone baseline planning, vendor bid evaluations, on-site QA/QC audits, HSE inspections, and final commissioning handover.</p>
                <a href="/services#pmc" class="x-link" data-nav>Explore PMC Scope <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: PROJECT LIFECYCLE ── -->
      <section class="x-section x-section--navy">
        <div class="x-container">
          <div class="x-head x-head--center reveal">
            <div class="x-eyebrow">PROJECT LIFECYCLE</div>
            <h2 class="x-h2">From Concept to <em>Commissioning.</em></h2>
            <p class="x-lead">
              Our structured 5-phase engineering lifecycle guarantees milestone certainty and technical compliance across every project stage.
            </p>
          </div>

          <div class="x-steps reveal">
            <div class="x-step">
              <div class="x-step__num">01</div>
              <h4>FEED & Feasibility</h4>
              <p>Preliminary engineering, site evaluation, concept design, and techno-economic validation.</p>
            </div>

            <div class="x-step">
              <div class="x-step__num">02</div>
              <h4>Technical Studies</h4>
              <p>Geotechnical, structural load analysis, short-circuit, and power system grid studies.</p>
            </div>

            <div class="x-step">
              <div class="x-step__num">03</div>
              <h4>Detailed Design</h4>
              <p>Full construction drawings, 3D BIM integration, BOQ generation, and design authority sign-off.</p>
            </div>

            <div class="x-step">
              <div class="x-step__num">04</div>
              <h4>Tendering & Procurement</h4>
              <p>Vendor bid evaluations, specification compliance checks, and procurement advisory.</p>
            </div>

            <div class="x-step">
              <div class="x-step__num">05</div>
              <h4>PMC & Handover</h4>
              <p>On-site quality supervision, pre-commissioning testing, punch-list closure, and certification.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: CORE VALUES (Light Blue Background & Dark Obsidian Cards) ── -->
      <section class="x-section x-section--ice-blue" id="principles">
        <div class="x-container">
          <div class="x-head x-head--center reveal">
            <div class="x-eyebrow">CORE PRINCIPLES</div>
            <h2 class="x-h2">Standards that guide every <em>calculation.</em></h2>
            <p class="x-lead">
              Our engineering philosophy is anchored in strict ethical integrity, technical rigor, and founder-level accountability.
            </p>
          </div>

          <div class="x-values reveal">
            <div class="x-value">
              <img src="/Photos/value-integrity.webp" alt="Integrity" class="x-value__img" width="800" height="530" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-shield-halved"><svg class="x-icon" aria-hidden="true"><use href="#fa-shield-halved"></use></svg></i></div>
                <h4>Integrity</h4>
                <div class="x-value__writeup">
                  <p>Uncompromising honesty, transparent technical advisory, and ethical compliance in every client engagement and design calculation.</p>
                </div>
              </div>
            </div>

            <div class="x-value">
              <img src="/Photos/value-excellence.webp" alt="Excellence" class="x-value__img" width="800" height="534" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-medal"><svg class="x-icon" aria-hidden="true"><use href="#fa-medal"></use></svg></i></div>
                <h4>Excellence</h4>
                <div class="x-value__writeup">
                  <p>Adherence to premier international engineering standards (IEC, IEEE, NBC, BS, IS) with multi-tier quality assurance audits.</p>
                </div>
              </div>
            </div>

            <div class="x-value">
              <img src="/Photos/value-collaboration.webp" alt="Collaboration" class="x-value__img" width="800" height="534" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-handshake"><svg class="x-icon" aria-hidden="true"><use href="#fa-handshake"></use></svg></i></div>
                <h4>Collaboration</h4>
                <div class="x-value__writeup">
                  <p>Frictionless alignment across Civil, Electrical, MEPF, and client teams under a single accountable engineering management platform.</p>
                </div>
              </div>
            </div>

            <div class="x-value">
              <img src="/Photos/value-sustainability.webp" alt="Sustainability" class="x-value__img" width="800" height="533" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-leaf"><svg class="x-icon" aria-hidden="true"><use href="#fa-leaf"></use></svg></i></div>
                <h4>Sustainability</h4>
                <div class="x-value__writeup">
                  <p>Future-focused designs optimizing energy consumption, resource efficiency, and environmental resilience across the infrastructure lifecycle.</p>
                </div>
              </div>
            </div>

            <div class="x-value">
              <img src="/Photos/value-innovation.webp" alt="Innovation" class="x-value__img" width="800" height="534" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-lightbulb"><svg class="x-icon" aria-hidden="true"><use href="#fa-lightbulb"></use></svg></i></div>
                <h4>Innovation</h4>
                <div class="x-value__writeup">
                  <p>Leveraging advanced BIM modeling, computational simulation, and value engineering to resolve complex infrastructure bottlenecks.</p>
                </div>
              </div>
            </div>

            <div class="x-value">
              <img src="/Photos/value-safety.webp" alt="Founder Involvement" class="x-value__img" width="800" height="1200" loading="lazy" decoding="async">
              <div class="x-value__overlay"></div>
              <div class="x-value__content">
                <div class="x-value__icon"><i class="fa-solid fa-user-tie"><svg class="x-icon" aria-hidden="true"><use href="#fa-user-tie"></use></svg></i></div>
                <h4>Founder Involvement</h4>
                <div class="x-value__writeup">
                  <p>Direct leadership participation from preliminary calculations through site audits and final pre-commissioning verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: WHY CHOOSE ARKS IEC ── -->
      <section class="x-section x-section--surface">
        <div class="x-container">
          <div class="x-why">
            <div class="x-why__media reveal">
              <img src="/Photos/about-modern-tower.webp" alt="ARKS IEC Quality & Engineering Standards" width="1080" height="720" loading="lazy" decoding="async">
              <div class="x-why__codes">
                <span>International Codes Conformance</span>
                <div>
                  <b>IEC</b>
                  <b>IEEE</b>
                  <b>IS CODES</b>
                  <b>BS</b>
                  <b>NFPA</b>
                  <b>NBC</b>
                </div>
              </div>
            </div>

            <div class="x-why__content reveal">
              <div class="x-eyebrow">WHY CHOOSE US</div>
              <h2 class="x-h2">Multidisciplinary precision. <em>Proven certainty.</em></h2>
              <p class="x-lead">
                Infrastructure developers, industrial facilities, and public authorities choose ARKS IEC because we eliminate multi-vendor friction and deliver projects on schedule.
              </p>

              <div class="x-why__list">
                <div class="x-why__item">
                  <div class="x-why__icon"><i class="fa-solid fa-user-gear"><svg class="x-icon" aria-hidden="true"><use href="#fa-user-gear"></use></svg></i></div>
                  <div>
                    <h4>Founder-Led Senior Expertise</h4>
                    <p>Over 25 years of hands-on leadership directing major power transmission networks, civil structures, and industrial hubs.</p>
                  </div>
                </div>

                <div class="x-why__item">
                  <div class="x-why__icon"><i class="fa-solid fa-circle-check"><svg class="x-icon" aria-hidden="true"><use href="#fa-circle-check"></use></svg></i></div>
                  <div>
                    <h4>Rigorous Code Conformance</h4>
                    <p>All designs and calculations strictly adhere to IEC, IEEE, NBC, BS, and IS standards with zero compromise on safety margins.</p>
                  </div>
                </div>

                <div class="x-why__item">
                  <div class="x-why__icon"><i class="fa-solid fa-stopwatch"><svg class="x-icon" aria-hidden="true"><use href="#fa-stopwatch"></use></svg></i></div>
                  <div>
                    <h4>Milestone-Driven Execution</h4>
                    <p>Proactive scheduling and fast-track coordination that reduce interface delays and keep project milestones strictly on track.</p>
                  </div>
                </div>

                <div class="x-why__item">
                  <div class="x-why__icon"><i class="fa-solid fa-chart-pie"><svg class="x-icon" aria-hidden="true"><use href="#fa-chart-pie"></use></svg></i></div>
                  <div>
                    <h4>Smart Value Engineering</h4>
                    <p>Systematic optimization of material quantities and equipment sizing to lower capital expenditure without sacrificing longevity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: LEADERSHIP (Dark Theme & Obsidian Boxes) ── -->
      <section class="x-section x-section--navy" id="leadership">
        <div class="x-container">
          <div class="x-head x-head--center reveal">
            <div class="x-eyebrow">GOVERNANCE & LEADERSHIP</div>
            <h2 class="x-h2">Founders &amp; <em>Partners</em></h2>
            <p class="x-lead">
              Direct accountability by industry veterans committed to engineering excellence.
            </p>
          </div>

          <div class="x-leaders reveal">
            <div class="x-leader">
              <div class="x-leader__avatar">SR</div>
              <div>
                <h3>Suresh Rajan</h3>
                <p>Founder &amp; Managing Director</p>
              </div>
            </div>

            <div class="x-leader">
              <div class="x-leader__avatar">SK</div>
              <div>
                <h3>Sree Krishna Kumar</h3>
                <p>Co-Founder &amp; Technical Director</p>
              </div>
            </div>

            <div class="x-leader">
              <div class="x-leader__avatar">SC</div>
              <div>
                <h3>Sundaram Chandra</h3>
                <p>Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION: CTA CALLOUT BAND ── -->
      <section class="x-section x-section--tight-top">
        <div class="x-container">
          <div class="x-cta reveal">
            <div>
              <div class="x-eyebrow" style="color: var(--x-accent);">START A COLLABORATION</div>
              <h2 class="x-h2">Let's discuss your next engineering development.</h2>
              <p>
                Our multidisciplinary leads are ready to review your parameters, conduct technical evaluations, and formulate an integrated scope of work.
              </p>
            </div>
            <div class="x-cta__actions">
              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Get in Touch</span> <i class="fa-solid fa-arrow-right"><svg class="x-icon" aria-hidden="true"><use href="#fa-arrow-right"></use></svg></i>
              </a>
              <a href="/services" class="x-btn x-btn--light" data-nav>
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  init() {
    // Page init
  },

  destroy() {
    // Page cleanup
  }
};

export default Home;
