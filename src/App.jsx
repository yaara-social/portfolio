import FeatureSection from './components/FeatureSection';

const showcases = [
  {
    icon: "🏍️",
    name: "Royal Riders Biker Club",
    scale: "250 chapters, 12,000+ members",
    description: "Coordinate rides across chapters, share routes with turn-by-turn maps, track riders live during group rides, maintain a member directory with bike details and blood groups.",
    modules: ["Routes & Maps", "Live Tracking", "Directory", "Events", "Photo Albums"],
    accent: "#a78bfa",
  },
  {
    icon: "👩‍👧‍👦",
    name: "Alpha Beta Mothers Group",
    scale: "5,000+ members across cities",
    description: "Plan playdates and activities, share milestone moments, coordinate carpools, find age-appropriate resources — all without the noise of a WhatsApp group.",
    modules: ["Activity Tracker", "Events", "Photo Albums", "Directory", "Messaging"],
    accent: "#f472b6",
  },
  {
    icon: "💼",
    name: "Agarwal Samaj Business Network",
    scale: "2,000+ members, networking-focused",
    description: "Business directory with categories, networking events, deal sharing among members, community announcements, and democratic decision-making through polls.",
    modules: ["Directory", "Networking", "Events", "Voting & Polls", "Announcements"],
    accent: "#60a5fa",
  },
  {
    icon: "🏢",
    name: "Lakeside Apartments",
    scale: "Resident community management",
    description: "Book common areas, track maintenance dues, distribute circulars, run society elections — replace paper notices with a purpose-built digital space.",
    modules: ["Booking", "Dues & Payments", "Circulars", "Voting & Polls", "Announcements"],
    accent: "#34d399",
  },
];

const compareRows = [
  { feature: "Modular tools per community type", others: false, yaara: true },
  { feature: "Custom member fields per community", others: false, yaara: true },
  { feature: "Maps, routes & heatmaps built-in", others: false, yaara: true },
  { feature: "Democratic governance (voting)", others: false, yaara: true },
  { feature: "Ad-free, no data harvesting", others: false, yaara: true },
  { feature: "Scales from 50 to 50,000 members", others: false, yaara: true },
];

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
            <a href="#modules">How It Works</a>
            <a href="#communities">Communities</a>
            <a href="#compare">Compare</a>
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
            Every real-world community deserves more than a WhatsApp group. Yaara gives your biker club, mothers group, business association, or apartment society its own digital space — with exactly the tools it needs.
          </p>
          <div className="hero-cta">
            <a href="#waitlist" className="cta-primary">Join the Waitlist</a>
            <a href="#modules" className="cta-secondary">See How It Works</a>
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
        {/* The Problem Section */}
        <section className="problem-section">
          <div className="container">
            <div className="section-label">The Problem</div>
            <h2>Your Community Deserves<br /><span className="highlight">Better Than This</span></h2>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">💬</div>
                <h3>WhatsApp Groups</h3>
                <p>Chats get buried. No structure, no member directory, no events, no polls. Groups beyond 50 people become unmanageable chaos.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">👥</div>
                <h3>Facebook Groups</h3>
                <p>Algorithmic feeds decide what you see. Your data gets harvested. Same generic UI for every group. No specialized tools.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">🔧</div>
                <h3>Custom Apps</h3>
                <p>Costs lakhs to build. Takes months of development. Needs constant maintenance. Most communities simply can't afford one.</p>
              </div>
            </div>
            <p className="problem-answer">
              <strong>Yaara is the answer.</strong> A platform where every community gets its own digital home with purpose-built tools — instantly, for free.
            </p>
          </div>
        </section>

        {/* Module System */}
        <FeatureSection />

        {/* Community Showcases */}
        <section id="communities" className="showcase-section">
          <div className="container">
            <div className="section-label">Communities</div>
            <h2>One Platform,<br /><span className="highlight">Endless Possibilities</span></h2>
            <p className="section-subtitle">
              Real communities. Real use cases. Each enables exactly the modules they need.
            </p>
            <div className="showcase-grid">
              {showcases.map((s, i) => (
                <div className="showcase-card" key={i} style={{ borderLeftColor: s.accent }}>
                  <div className="showcase-header">
                    <span className="showcase-icon">{s.icon}</span>
                    <div>
                      <h3>{s.name}</h3>
                      <span className="showcase-scale">{s.scale}</span>
                    </div>
                  </div>
                  <p>{s.description}</p>
                  <div className="showcase-modules">
                    {s.modules.map((m, j) => (
                      <span className="module-chip module-chip--sm" key={j}>{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="compare" className="compare-section">
          <div className="container">
            <div className="section-label">Why Yaara</div>
            <h2>Not Another Social App.<br /><span className="highlight">A Community Operating System.</span></h2>
            <div className="compare-grid">
              <div className="compare-row compare-header">
                <span>Feature</span>
                <span>WhatsApp / Facebook</span>
                <span>Yaara</span>
              </div>
              {compareRows.map((row, i) => (
                <div className="compare-row" key={i}>
                  <span>{row.feature}</span>
                  <span className="compare-cross">✗</span>
                  <span className="compare-check">✓</span>
                </div>
              ))}
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
              <p>"We don't need another social network. We need a platform that understands that a biker club and a mothers group have nothing in common — except the need for a digital home."</p>
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
