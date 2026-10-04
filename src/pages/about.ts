import { PageModule } from '../router';

const About: PageModule = {
  render() {
    return `
      <!-- Page Hero -->
      <section class="page-hero dark-section">
        <div class="container">
          <div class="eyebrow">About ARKS IEC</div>
          <h1 class="heading-xl">Engineering<br>redefined.</h1>
          <p>We are an integrated engineering consultancy built for the challenges of modern infrastructure.</p>
        </div>
      </section>

      <!-- Company Story -->
      <section class="section">
        <div class="container">
          <div class="about-split">
            <div class="about-img-wrap reveal">
              <img src="/Photos/about-modern-tower.jpg" alt="ARKS Engineering">
            </div>
            <div class="about-content">
              <div class="eyebrow reveal">Our Story</div>
              <h2 class="heading-lg reveal">Built on expertise.<br>Driven by innovation.</h2>
              <p class="reveal">
                ARKS Integrated Engineering Consultancy LLP was founded by a group of seasoned professionals who recognized a gap in the market — the need for a truly integrated engineering consultancy that handles Civil, Electrical, MEPF, and Project Management under a single, unified platform. Over the years, we have scaled our operations from local structural assessments to massive infrastructure developments across multiple states.
              </p>
              <p class="reveal" style="margin-bottom: 0;">
                We assemble multi-disciplinary teams for every engagement, ensuring that design synergies are captured early and carried through to execution. Our approach eliminates the traditional silos between engineering disciplines, resulting in faster delivery, reduced errors, and superior design quality. Whether it's a 30-story commercial tower or a 132kV transmission substation, we engineer with the future in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="section" style="background: var(--grey-50);">
        <div class="container">
          <div class="eyebrow reveal">Mission & Vision</div>
          <h2 class="heading-lg reveal" style="margin-bottom: 48px;">What drives us forward.</h2>
          <div class="mv-grid">
            <div class="mv-card reveal">
              <h3><i class="fa-solid fa-bullseye" style="color: var(--accent); margin-right: 12px;"></i>Our Mission</h3>
              <p>To deliver world-class, integrated engineering solutions that are innovative, reliable, and efficient — empowering our clients to build infrastructure that stands the test of time.</p>
            </div>
            <div class="mv-card reveal">
              <h3><i class="fa-solid fa-eye" style="color: var(--accent); margin-right: 12px;"></i>Our Vision</h3>
              <p>To become the most trusted multi-disciplinary engineering consultancy in India, recognized for our technical excellence, collaborative approach, and commitment to sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="section">
        <div class="container">
          <div class="eyebrow reveal">Core Values</div>
          <h2 class="heading-lg reveal" style="margin-bottom: 48px;">Principles that guide every decision.</h2>
          <div class="values-grid">
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-shield-halved"></i></div>
              <h3>Integrity</h3>
              <p>Honesty and transparency in every client interaction and design output.</p>
            </div>
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-medal"></i></div>
              <h3>Excellence</h3>
              <p>Uncompromising quality standards across all disciplines and deliverables.</p>
            </div>
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-handshake"></i></div>
              <h3>Collaboration</h3>
              <p>True partnership with clients, architects, and contractors at every stage.</p>
            </div>
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-leaf"></i></div>
              <h3>Sustainability</h3>
              <p>Engineering solutions that respect the environment and conserve resources.</p>
            </div>
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-lightbulb"></i></div>
              <h3>Innovation</h3>
              <p>Embracing the latest tools, technologies, and design methodologies.</p>
            </div>
            <div class="value-card reveal">
              <div class="service-icon"><i class="fa-solid fa-users"></i></div>
              <h3>People First</h3>
              <p>Investing in our engineers and creating a culture of continuous growth.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership -->
      <section class="section" style="background: var(--grey-50);">
        <div class="container">
          <div class="eyebrow reveal">Leadership</div>
          <h2 class="heading-lg reveal" style="margin-bottom: 48px;">Meet the minds behind ARKS.</h2>
          <div class="leaders-grid">
            <div class="leader-card reveal">
              <div class="leader-avatar"><i class="fa-solid fa-user"></i></div>
              <h4>Rahul Sharma</h4>
              <p>Founding Partner & Managing Director</p>
            </div>
            <div class="leader-card reveal">
              <div class="leader-avatar"><i class="fa-solid fa-user"></i></div>
              <h4>Arvind Patel</h4>
              <p>Co-Founder & Technical Director</p>
            </div>
            <div class="leader-card reveal">
              <div class="leader-avatar"><i class="fa-solid fa-user"></i></div>
              <h4>Karan Singh</h4>
              <p>Senior Partner, Head of Electrical</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section blend-to-dark">
        <div class="container">
          <h2 class="heading-lg reveal">Want to work with us?</h2>
          <p class="reveal">Let's collaborate on your next infrastructure project.</p>
          <div class="cta-actions reveal">
            <a href="/contact" class="btn btn--accent" data-nav>Get in Touch <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>
    `;
  },

  init() {}
};

export default About;
