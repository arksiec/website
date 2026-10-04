import { PageModule } from '../router';

const Services: PageModule = {
  render() {
    return `
      <!-- Corporate Premium Page Hero -->
      <section class="x-page-hero">
        <img src="/Photos/services-hero-bim.jpg" alt="Engineering Disciplines" class="x-page-hero__bg">
        <div class="x-container">
          <div class="x-page-hero__inner">
            <div class="x-crumb">
              <a href="/" data-nav>Home</a>
              <i class="fa-solid fa-chevron-right"></i>
              <span>Engineering Disciplines</span>
            </div>

            <div class="x-eyebrow reveal" style="color: var(--x-accent);">ARKS INTEGRATED ENGINEERING CONSULTANCY</div>
            <h1 class="x-page-hero__title reveal">
              Multidisciplinary Capabilities.<br>
              <em>Engineered for Scale.</em>
            </h1>
            <p class="x-page-hero__text reveal">
              From feasibility and front-end engineering design to detailed drawings and on-site PMC supervision, ARKS IEC delivers single-window accountability across all major engineering practices.
            </p>

            <div class="x-page-hero__actions reveal">
              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Request Technical Proposal</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#civil" class="x-btn x-btn--light">
                <span>View Disciplines</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Discipline Anchor Bar -->
      <nav class="x-subnav" aria-label="Discipline Navigation">
        <div class="x-container x-subnav__inner">
          <a href="#civil"><b>01</b> Civil &amp; Structural</a>
          <a href="#electrical"><b>02</b> Electrical HV / LV / EHV</a>
          <a href="#mepf"><b>03</b> MEPF Building Services</a>
          <a href="#pmc"><b>04</b> Project Management (PMC)</a>
        </div>
      </nav>

      <!-- Detailed Disciplines Showcase -->
      <section class="x-section">
        <div class="x-container">
          
          <!-- Discipline 01: Civil & Structural -->
          <div class="x-svc-row" id="civil">
            <div class="x-svc-row__content reveal">
              <div class="x-eyebrow">DISCIPLINE 01</div>
              <h2 class="x-h2">Civil &amp; Structural <em>Engineering</em></h2>
              <p class="x-lead">
                Comprehensive foundation design, load-bearing calculations, and structural steel framing engineered in full compliance with international building codes.
              </p>

              <ul class="x-checklist">
                <li><i class="fa-solid fa-check"></i> Industrial heavy machinery foundation design &amp; dynamic analysis</li>
                <li><i class="fa-solid fa-check"></i> Structural steel framing, pipe racks, and space frame engineering</li>
                <li><i class="fa-solid fa-check"></i> Reinforced concrete (RCC) structural modeling &amp; rebar detailing</li>
                <li><i class="fa-solid fa-check"></i> Commercial &amp; institutional architectural layout space planning</li>
                <li><i class="fa-solid fa-check"></i> Value-engineered BOQ calculation for material &amp; cost optimization</li>
              </ul>

              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Consult Civil Engineering Leads</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div class="x-svc-row__media reveal">
              <img src="/Photos/service-civil-structural.jpg" alt="Civil & Structural Engineering ARKS IEC">
              <div class="x-svc-row__tag">
                <i class="fa-solid fa-building-user"></i>
                <span>Structural Integrity Guaranteed</span>
              </div>
            </div>
          </div>

          <!-- Discipline 02: Electrical Transmission & Substations -->
          <div class="x-svc-row x-svc-row--rev" id="electrical">
            <div class="x-svc-row__content reveal">
              <div class="x-eyebrow">DISCIPLINE 02</div>
              <h2 class="x-h2">Electrical HV / LV / EHV <em>Power Grids</em></h2>
              <p class="x-lead">
                End-to-end design for Air-Insulated (AIS) and Gas-Insulated (GIS) substations up to 400kV, transmission line structures, and grid power integration.
              </p>

              <ul class="x-checklist">
                <li><i class="fa-solid fa-check"></i> Substation layouts, single-line schematics, &amp; busbar configuration</li>
                <li><i class="fa-solid fa-check"></i> High-voltage transmission line tower design &amp; route profiling</li>
                <li><i class="fa-solid fa-check"></i> Short-circuit fault calculations, grounding, &amp; lightning protection</li>
                <li><i class="fa-solid fa-check"></i> Relay protection, coordination curves, &amp; SCADA automation</li>
                <li><i class="fa-solid fa-check"></i> Solar photovoltaic (PV) generation grid interconnection studies</li>
              </ul>

              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Consult Electrical Leads</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div class="x-svc-row__media reveal">
              <img src="/Photos/project-electrical.jpg" alt="Electrical Transmission and Substations ARKS IEC">
              <div class="x-svc-row__tag">
                <i class="fa-solid fa-bolt"></i>
                <span>Up to 400kV EHV Substation Design</span>
              </div>
            </div>
          </div>

          <!-- Discipline 03: MEPF Building Services -->
          <div class="x-svc-row" id="mepf">
            <div class="x-svc-row__content reveal">
              <div class="x-eyebrow">DISCIPLINE 03</div>
              <h2 class="x-h2">MEPF <em>Building Systems</em></h2>
              <p class="x-lead">
                Synchronized Mechanical, Electrical, Plumbing, and Fire Protection engineering designed for optimum lifecycle efficiency and occupant safety.
              </p>

              <ul class="x-checklist">
                <li><i class="fa-solid fa-check"></i> HVAC thermal load calculations, chiller systems, &amp; ductwork layout</li>
                <li><i class="fa-solid fa-check"></i> Fire detection, sprinkler arrays, hydrants, &amp; clean-agent suppression</li>
                <li><i class="fa-solid fa-check"></i> Water supply networks, drainage, sewage treatment, &amp; rainwater harvesting</li>
                <li><i class="fa-solid fa-check"></i> Low-voltage electrical distribution, lighting, &amp; emergency backup</li>
                <li><i class="fa-solid fa-check"></i> Building Management Systems (BMS) &amp; computational energy modeling</li>
              </ul>

              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Consult MEPF Leads</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div class="x-svc-row__media reveal">
              <img src="/Photos/project-mepf.jpg" alt="MEPF Building Services ARKS IEC">
              <div class="x-svc-row__tag">
                <i class="fa-solid fa-gears"></i>
                <span>Synchronized Mechanical & Electrical</span>
              </div>
            </div>
          </div>

          <!-- Discipline 04: Project Management Consultancy -->
          <div class="x-svc-row x-svc-row--rev" id="pmc">
            <div class="x-svc-row__content reveal">
              <div class="x-eyebrow">DISCIPLINE 04</div>
              <h2 class="x-h2">Project Management <em>Consultancy (PMC)</em></h2>
              <p class="x-lead">
                Single-point accountability from project award to final commissioning, ensuring schedule adherence, cost certainty, and zero interface conflicts.
              </p>

              <ul class="x-checklist">
                <li><i class="fa-solid fa-check"></i> Vendor bid technical evaluation &amp; contract administration</li>
                <li><i class="fa-solid fa-check"></i> Primavera / MS Project milestone scheduling &amp; critical path audits</li>
                <li><i class="fa-solid fa-check"></i> Site QA/QC inspection protocols &amp; HSE compliance supervision</li>
                <li><i class="fa-solid fa-check"></i> Statutory authority approvals &amp; design compliance liaison</li>
                <li><i class="fa-solid fa-check"></i> Pre-commissioning validation, punch-list closure, &amp; handover</li>
              </ul>

              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Discuss PMC Engagement</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div class="x-svc-row__media reveal">
              <img src="/Photos/project-pmc.jpg" alt="Project Management Consultancy ARKS IEC">
              <div class="x-svc-row__tag">
                <i class="fa-solid fa-chart-line"></i>
                <span>Zero-Interface Friction PMC</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Bottom Consultation Band -->
      <section class="x-section x-section--tight-top">
        <div class="x-container">
          <div class="x-cta reveal">
            <div>
              <div class="x-eyebrow" style="color: var(--x-accent);">INTEGRATED CAPABILITIES</div>
              <h2 class="x-h2">Ready to engineer your infrastructure?</h2>
              <p>
                Speak directly with our senior engineering directors to define technical scope, eliminate design interfaces, and accelerate regulatory sign-offs.
              </p>
            </div>
            <div class="x-cta__actions">
              <a href="/contact" class="x-btn x-btn--primary" data-nav>
                <span>Request Technical Proposal</span> <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="/projects" class="x-btn x-btn--light" data-nav>
                <span>Explore Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  init() {}
};

export default Services;
