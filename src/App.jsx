import FeatureSection from './components/FeatureSection';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">YAARA</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#community">Community</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
            <a href="#contact">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">Humans Only Platform</div>
        <div className="hero-content">
          <h1>Navigate Socially,<br /><span className="highlight">Connect Intuitively,</span><br />Experience Yaara</h1>
          <p className="hero-subtitle">
            Everyone here is real & every word has a name behind it. No bots. No algorithms. No doom scrolling. Just genuine human connections.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-primary">Join the Waitlist</a>
            <a href="#features" className="cta-secondary">See How It Works</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">300</span>
            <span className="stat-label">Max Friends — Quality Over Quantity</span>
          </div>
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Bots, Algorithms & Fake Accounts</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Human, Real & Verified</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <FeatureSection />

        {/* Community Section */}
        <section id="community" className="community-section">
          <div className="container">
            <div className="section-label">Communities</div>
            <h2>Build Bespoke Communities<br /><span className="highlight">Like Never Before</span></h2>
            <p className="section-subtitle">
              The world's first platform purpose-built to create and foster communities with specialized tools for every type of group.
            </p>
            <div className="community-grid">
              <div className="community-item">
                <div className="community-icon">🎓</div>
                <h3>Alumni Networks</h3>
                <p>Connect with former classmates, share opportunities, and maintain lifelong professional relationships.</p>
              </div>
              <div className="community-item">
                <div className="community-icon">📚</div>
                <h3>Study Groups</h3>
                <p>Collaborative learning with built-in flashcards, shared resources, and progress tracking.</p>
              </div>
              <div className="community-item">
                <div className="community-icon">🐦</div>
                <h3>Interest-Based Groups</h3>
                <p>From bird watching with heatmaps to book exchanges with reading lists — tools tailored for every passion.</p>
              </div>
              <div className="community-item">
                <div className="community-icon">📍</div>
                <h3>Neighborhood Communities</h3>
                <p>Hyperlocal groups for your area — share recommendations, organize events, and build real connections.</p>
              </div>
              <div className="community-item">
                <div className="community-icon">💼</div>
                <h3>Professional Networks</h3>
                <p>Job boards, mentorship matching, and industry discussions for career-focused communities.</p>
              </div>
              <div className="community-item">
                <div className="community-icon">🗳️</div>
                <h3>Democratic Governance</h3>
                <p>No more admin-controlled groups. Power to everyone through voting systems and transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="events-section">
          <div className="container">
            <div className="events-layout">
              <div className="events-text">
                <div className="section-label">Events</div>
                <h2>Host Local Events &<br /><span className="highlight">Discover What's Happening</span></h2>
                <p>
                  Create intimate events visible only to your friend network. Discover what's happening in your neighborhood in real-time.
                </p>
                <p>
                  From board game nights to community meetups, fitness sessions to study groups — find and create experiences that matter.
                </p>
              </div>
              <div className="events-features">
                <div className="event-feature">
                  <div className="event-icon">🔒</div>
                  <div>
                    <h3>Friend-Only Events</h3>
                    <p>Create private events visible only to your connections for intimate, meaningful gatherings.</p>
                  </div>
                </div>
                <div className="event-feature">
                  <div className="event-icon">📡</div>
                  <div>
                    <h3>Hyperlocal Discovery</h3>
                    <p>See what's happening around you right now — powered by location-based real-time updates.</p>
                  </div>
                </div>
                <div className="event-feature">
                  <div className="event-icon">📸</div>
                  <div>
                    <h3>Instant Photo Sharing</h3>
                    <p>Share moments from events instantly with attendees through built-in collaborative albums.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Why Yaara Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-label">Why Yaara</div>
            <h2>A Humans Only<br /><span className="highlight">Social Navigation Platform</span></h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-number">01</div>
                <h3>Genuine Connections</h3>
                <p>Designed to foster real relationships — not endless scrolling. Every interaction is meaningful.</p>
              </div>
              <div className="about-card">
                <div className="about-number">02</div>
                <h3>Communities First</h3>
                <p>Explore & build communities effortlessly with purpose-built tools for every group type.</p>
              </div>
              <div className="about-card">
                <div className="about-number">03</div>
                <h3>Human Potential</h3>
                <p>Empower people — not algorithms or AI. You are in control of your social experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Quote */}
        <section className="quote-section">
          <div className="container">
            <blockquote>
              <p>"Navigate. Connect. Thrive. In Society."</p>
              <cite>— The Yaara Promise</cite>
            </blockquote>
          </div>
        </section>

        {/* Contact/Waitlist Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <div className="section-label">Get Early Access</div>
                <h2>Be Among The First<br /><span className="highlight">To Experience Yaara</span></h2>
                <p>Join the waitlist and be part of building the future of authentic social connection.</p>

                <div className="contact-features">
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Early access to the platform before public launch</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Help shape features through direct feedback</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Founding member badge on your profile</span>
                  </div>
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Priority support & collaboration opportunities</span>
                  </div>
                </div>
              </div>

              <div className="waitlist-form">
                <h3>Join the Waitlist</h3>
                <form className="contact-form">
                  <div className="form-row">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                  </div>
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone Number" />
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
              <p>A revolutionary social navigation platform connecting users through shared experiences and real-time insights. Genuine connections, simplified exploration.</p>
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
              <p className="newsletter-desc">Stay updated on our launch and new features.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; Copyright 2025, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
