import { PageModule } from '../router';

const Projects: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/projects-hero-complex.jpg" alt="ARKS IEC Project Showcase" class="x-page-hero__bg">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"></i>
              <span>Project Portfolio</span>
            </div>

            <div class="x-eyebrow reveal" style="color: var(--x-accent);">ARKS INTEGRATED ENGINEERING CONSULTANCY</div>
            <h1 class="x-page-hero__title reveal">
              Engineering Landmark<br>
              <em>Infrastructure Assets.</em>
            </h1>
            <p class="x-page-hero__text reveal">
              From high-voltage substation interconnections to commercial superstructures and industrial plants, explore our multidisciplinary project execution across global regions.
            </p>

            <div class="x-page-hero__actions reveal">
              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Request Project Credentials</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#sectors" class="x-btn x-btn--light">
                <span>View Sectors</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Project Sectors Grid -->
      <section class="x-section" id="sectors">
        <div class="x-container">
          <div class="x-head reveal">
            <div class="x-eyebrow">PORTFOLIO DOMAINS</div>
            <h2 class="x-h2">Core infrastructure sectors <em>engineered to last.</em></h2>
            <p class="x-lead">
              Our multidisciplinary directors have overseen critical infrastructure developments across Asia, the Middle East, and India.
            </p>
          </div>

          <div class="x-sectors">
            <!-- Sector 1: Power & Grid -->
            <div class="x-sector reveal">
              <img src="/Photos/project-substation.jpg" alt="EHV Substation and Power Grid Infrastructure">
              <div class="x-sector__body">
                <span>SECTOR 01</span>
                <h3>Power Transmission &amp; EHV Substations</h3>
              </div>
            </div>

            <!-- Sector 2: Civil & Structural -->
            <div class="x-sector reveal">
              <img src="/Photos/project-civil.jpg" alt="Civil Infrastructure & Heavy Engineering">
              <div class="x-sector__body">
                <span>SECTOR 02</span>
                <h3>Civil &amp; Heavy Industrial Infrastructure</h3>
              </div>
            </div>

            <!-- Sector 3: MEPF High-Rises -->
            <div class="x-sector reveal">
              <img src="/Photos/project-commercial-tower.jpg" alt="Commercial Towers & High Rise MEPF">
              <div class="x-sector__body">
                <span>SECTOR 03</span>
                <h3>Commercial Towers &amp; Institutional MEPF</h3>
              </div>
            </div>

            <!-- Sector 4: Solar & Renewables -->
            <div class="x-sector reveal">
              <img src="/Photos/project-solar.jpg" alt="Solar Photovoltaic Grid Interconnection">
              <div class="x-sector__body">
                <span>SECTOR 04</span>
                <h3>Renewables &amp; Solar Grid Interconnections</h3>
              </div>
            </div>
          </div>

          <!-- Portfolio Expansion Dossier Notice -->
          <div class="x-notice reveal">
            <i class="fa-solid fa-folder-open"></i>
            <div>
              <strong>Comprehensive Project Dossier Available on Request:</strong> We are currently updating our public digital case study archive with detailed blueprints, BOQ metrics, and single-line schematics. To receive our formal qualifications dossier for developer or tender qualification, please contact our partner desk directly at <a href="mailto:info@arksiec.com" style="color: var(--x-accent); font-weight: 600; text-decoration: underline;">info@arksiec.com</a>.
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Consultation Band -->
      <section class="x-section x-section--tight-top">
        <div class="x-container">
          <div class="x-cta reveal">
            <div>
              <div class="x-eyebrow" style="color: var(--x-accent);">PARTNER WITH ARKS IEC</div>
              <h2 class="x-h2">Have a project requiring multidisciplinary leadership?</h2>
              <p>
                Our senior engineering team is directly available for technical feasibility discussions, tender specifications review, and comprehensive project execution.
              </p>
            </div>
            <div class="x-cta__actions">
              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Initiate Project Inquiry</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="/" class="x-btn x-btn--light" data-nav>
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  init() {}
};

export default Projects;
