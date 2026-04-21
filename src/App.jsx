import FeatureSection from './components/FeatureSection';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.querySelector('[placeholder="First Name"]').value;
    const lastName = form.querySelector('[placeholder="Last Name"]').value;
    const email = form.querySelector('[type="email"]').value;
    const phone = form.querySelector('[type="tel"]').value;
    const communityType = form.querySelector('select').value;

    const subject = encodeURIComponent(`Waitlist: ${firstName} ${lastName} — ${communityType}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCommunity Type: ${communityType}`
    );
    window.location.href = `mailto:support@yaara.social?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">YAARA <span className="logo-tagline">Community OS</span></div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#communities">Communities</a>
            <a href="#events">Events</a>
            <a href="#waitlist">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">Community Operating System</div>
        <div className="hero-content">
          <h1>Your Community's<br /><span className="highlight">Digital Home</span></h1>
          <p className="hero-subtitle">
            Yaara gives every real-world community its own digital space — with exactly the tools it needs. From riding clubs to parent groups, business networks to housing societies.
          </p>
          <div className="hero-cta">
            <a href="#waitlist" className="cta-primary">Join the Waitlist</a>
            <a href="#features" className="cta-secondary">See How It Works</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">Platform, Infinite Community Types</span>
          </div>
          <div className="stat">
            <span className="stat-number">Modular</span>
            <span className="stat-label">Enable Only What You Need</span>
          </div>
          <div className="stat">
            <span className="stat-number">India First</span>
            <span className="stat-label">Built for Real Indian Communities</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Key Features */}
        <FeatureSection />

        {/* Communities Section */}
        <section id="communities" className="communities-section">
          <div className="container">
            <div className="section-label">Communities</div>
            <h2>Build Bespoke Communities<br /><span className="highlight">Like Never Before</span></h2>
            <p className="communities-intro">
              Yaara empowers every community with its own tailored digital space. Instead of forcing your community into a generic group chat or social media page, Yaara provides specific tools designed for your community's unique needs — everything your members need, all in one place. No more juggling between five different apps to manage your community.
            </p>
            <div className="communities-examples">
              <div className="community-example">
                <span className="community-icon">🎓</span>
                <div>
                  <h3>Alumni Communities</h3>
                  <p>Job boards where alumni post opportunities exclusively for the network, specialized interest groups within the batch, and mentor-mentee matching that connects experienced professionals with fresh graduates.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">📚</span>
                <div>
                  <h3>Study Groups</h3>
                  <p>Collaborative flashcards, shared note repositories organized by subject, past question paper archives with discussion threads, and study session scheduling with automatic reminders.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">📖</span>
                <div>
                  <h3>Book Exchange Communities</h3>
                  <p>A hyperlocal cataloguing system where members list books they own and want to share, request books from nearby members, and track lending history — building a community library without a building.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">🐾</span>
                <div>
                  <h3>Animal Welfare Groups</h3>
                  <p>Pet adoption listings with detailed profiles and photos, fundraising tools for medical emergencies, volunteer coordination for rescue operations, and a directory of pet-friendly services in your area.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">🏍️</span>
                <div>
                  <h3>Riding Clubs</h3>
                  <p>Route planning with turn-by-turn maps, live GPS tracking during group rides so no one gets left behind, member directories with bike details and blood groups, and photo albums from every ride.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">👩‍👧‍👦</span>
                <div>
                  <h3>Parent Groups</h3>
                  <p>Activity planning for age-appropriate outings, playdate coordination with RSVP and location sharing, milestone sharing timelines, and curated resource libraries — all without the chaos of an overflowing group chat.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">💼</span>
                <div>
                  <h3>Business Networks</h3>
                  <p>Categorized business directories, exclusive deal sharing among members, networking event management with attendee matching, and community announcements with democratic decision-making through polls.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">🏢</span>
                <div>
                  <h3>Residential Societies</h3>
                  <p>Common area booking, maintenance dues tracking with payment reminders, digital circulars that replace paper notices, and transparent society elections with verified voting — everything your RWA needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="events-section">
          <div className="container">
            <div className="section-label">Events</div>
            <h2>Host Local Events &<br /><span className="highlight">Discover What's Happening Around You</span></h2>
            <div className="events-layout">
              <div className="events-content">
                <p>
                  Create, Host & Discover events Nearby — from board-gaming nights to community cleanup drives, poker evenings or coding sessions. Your neighbors and nearby residents can easily discover & join in. Whether it's a weekend cycling meetup or a neighborhood potluck, Yaara makes it effortless to bring people together.
                </p>
                <p>
                  To make it more intimate, events can be opened exclusively to friends of friends, with each person limited to a maximum of 300 connections. Discover your reliable trust network where participants have genuine social connections to you. No strangers, no spam — just real people you can trust showing up at your events.
                </p>
                <p>
                  Share photos from your event instantly by posting them in the dedicated event space, enabling everyone to capture, share & relive memories together. No more hunting through group chats for that one photo someone took — everything lives in one place, organized and accessible to all attendees.
                </p>
              </div>
              <div className="events-features">
                <div className="event-feature-card">
                  <div className="event-feature-icon">👥</div>
                  <h3>Friend-Only Events</h3>
                  <p>Host intimate gatherings open only to friends of friends. Every attendee has a genuine connection to you through your trust network.</p>
                </div>
                <div className="event-feature-card">
                  <div className="event-feature-icon">📍</div>
                  <h3>Hyperlocal Discovery</h3>
                  <p>Find events happening near you right now. From your apartment complex to your neighborhood — discover what's going on around the corner.</p>
                </div>
                <div className="event-feature-card">
                  <div className="event-feature-icon">📸</div>
                  <h3>Instant Photo Sharing</h3>
                  <p>Every event gets its own dedicated photo space. Attendees share moments in real-time, creating a collective album everyone can access.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Yaara Section */}
        <section id="why-yaara" className="why-yaara-section">
          <div className="container">
            <div className="section-label">Why Yaara</div>
            <h2>Not Another Social App.<br /><span className="highlight">A Community Operating System.</span></h2>
            <div className="why-yaara-grid">
              <div className="why-yaara-card">
                <div className="why-yaara-number">01</div>
                <h3>Humans Only</h3>
                <p>Every person is real, every word has a name behind it. No bots, no fake accounts, no anonymous trolling. Yaara verifies every user so your community stays authentic and trustworthy.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">02</div>
                <h3>Community First</h3>
                <p>Purpose-built tools for every community type. Not a one-size-fits-all platform. Your riding club gets route maps, your housing society gets dues tracking — each community gets exactly what it needs.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">03</div>
                <h3>Democratic By Design</h3>
                <p>No more admin-controlled groups where one person decides everything. Power to everyone through voting, polls, and transparent governance. Every member has a voice.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">04</div>
                <h3>Privacy Respecting</h3>
                <p>No ads, no data harvesting, no algorithmic manipulation. You control your experience. Your conversations stay private, your data stays yours, and no algorithm decides what you see.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="roadmap-section">
          <div className="container">
            <div className="section-label">Roadmap</div>
            <h2>Built In Phases,<br /><span className="highlight">Shaped By You</span></h2>
            <p className="section-subtitle">
              We're building Yaara in public. Early adopters help shape every phase.
            </p>
            <div className="roadmap-grid">
              <div className="roadmap-card">
                <div className="roadmap-number">01</div>
                <div className="phase-badge">YOU ARE HERE</div>
                <h3>Foundation</h3>
                <p>Core community creation, member management, messaging, and the module framework. You're joining at the ground floor.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">02</div>
                <h3>Community Tools</h3>
                <p>Events, polls, voting, circulars, photo albums. The features that make communities come alive.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">03</div>
                <h3>Maps & Discovery</h3>
                <p>Routes, heatmaps, live tracking, and a public discovery map to find events and communities near you.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">04</div>
                <h3>Growth & Polish</h3>
                <p>Analytics, advanced modules, cross-community features, and the Common Space unified view.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container">
            <blockquote>
              <p>"Navigate. Connect. Experience. — Every community deserves a home built for its unique needs. Yaara is that home."</p>
              <cite>— The Yaara Thesis</cite>
            </blockquote>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <div className="section-label">Early Access</div>
                <h2>Be a Founding Member<br /><span className="highlight">Shape How Communities Work</span></h2>
                <p>We're onboarding community founders first. If you run a community — or want to start one — join the waitlist.</p>

                <div className="contact-features">
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Found your community on Yaara before public launch</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Direct access to the product team — your feedback shapes features</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Founding Member badge — permanently on your profile</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Free access to premium modules during beta</span>
                  </div>
                </div>
              </div>

              <div className="waitlist-form">
                <h3>Join the Waitlist</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                  </div>
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone Number" />
                  <select className="community-select" required>
                    <option value="" disabled selected>What kind of community do you run?</option>
                    <option value="Biker / Riding Club">Biker / Riding Club</option>
                    <option value="Parents / Mothers Group">Parents / Mothers Group</option>
                    <option value="Business Association">Business Association</option>
                    <option value="Apartment / Housing Society">Apartment / Housing Society</option>
                    <option value="School / Alumni Network">School / Alumni Network</option>
                    <option value="Hobby / Interest Group">Hobby / Interest Group</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="form-checkbox">
                    <input type="checkbox" id="privacy" required />
                    <label htmlFor="privacy">You agree to our friendly privacy policy.</label>
                  </div>
                  <button type="submit" className="submit-btn">Get Early Access</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-content">
              <h2>Connect With Us,<br /><span className="highlight">Explore Yaara</span></h2>
              <p>We're here to answer your questions and explore collaboration opportunities. Get in touch with us at <a href="mailto:support@yaara.social">support@yaara.social</a></p>
              <p className="contact-partnership">Partnership Inquiries and Collaboration Opportunities to Build Communities</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Yaara</h4>
              <p>A Community Operating System — giving every real-world community its own digital home with modular, purpose-built tools.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Help</h4>
              <ul>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Stay updated on Yaara's journey. No spam, just milestones.</p>
              <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); }}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <div className="footer-section">
              <h4>Coming Soon</h4>
              <p className="coming-soon">📱 iOS & Android — launching 2026</p>
              <p className="coming-soon">Built with love in India</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Yaara Social. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
