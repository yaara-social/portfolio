import { useState } from 'react';
import FeatureSection from './components/FeatureSection';

const FORMSPREE_WAITLIST = 'https://formspree.io/f/xnjlbkvw';
const FORMSPREE_NEWSLETTER = 'https://formspree.io/f/mkokvlzz';

function App() {
  const [waitlistStatus, setWaitlistStatus] = useState('idle');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWaitlistStatus('submitting');
    const form = e.target;
    const data = {
      firstName: form.querySelector('[placeholder="First Name"]').value,
      lastName: form.querySelector('[placeholder="Last Name"]').value,
      email: form.querySelector('[type="email"]').value,
      phone: form.querySelector('[type="tel"]').value,
      communityType: form.querySelector('select').value,
      _subject: 'New Waitlist Signup',
    };
    try {
      const res = await fetch(FORMSPREE_WAITLIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setWaitlistStatus('success');
        form.reset();
      } else {
        setWaitlistStatus('error');
      }
    } catch {
      setWaitlistStatus('error');
    }
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setNewsletterStatus('submitting');
    const email = e.target.querySelector('input[type="email"]').value;
    try {
      const res = await fetch(FORMSPREE_NEWSLETTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'Newsletter Signup' }),
      });
      if (res.ok) {
        setNewsletterStatus('success');
        e.target.reset();
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('error');
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">YAARA <span className="logo-tagline">Humans Only</span></div>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#trust">Trust Network</a>
            <a href="#communities">Communities</a>
            <a href="#waitlist">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">Humans Only Platform</div>
        <div className="hero-content">
          <h1>Reclaiming<br /><span className="highlight">Human Connection</span></h1>
          <p className="hero-subtitle">
            The only platform where every person is verified real. No bots. No algorithms. No anonymity. Just 100% verified humans navigating the real world together.
          </p>
          <div className="hero-cta">
            <a href="#waitlist" className="cta-primary">Join the Waitlist</a>
            <a href="#how-it-works" className="cta-secondary">See How It Works</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Bots. Zero Tolerance.</span>
          </div>
          <div className="stat">
            <span className="stat-number">300</span>
            <span className="stat-label">Max Connections. Every One Matters.</span>
          </div>
          <div className="stat">
            <span className="stat-number">90,000</span>
            <span className="stat-label">People In Your Trust Zone</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Proof of Life Protocol */}
        <section id="how-it-works" className="protocol-section">
          <div className="container">
            <div className="section-label">The Proof of Life Protocol</div>
            <h2>How We Guarantee<br /><span className="highlight">Every User Is Real</span></h2>
            <p className="section-subtitle">
              In an age of AI-generated personas and bot farms, Yaara employs a two-tier verification system that makes it impossible to fake your way in.
            </p>
            <div className="protocol-grid">
              <div className="protocol-card">
                <div className="protocol-tier">Tier 1</div>
                <h3>Digital Handshake</h3>
                <p>Every account is bound to one physical device through hardware-level verification. Multi-factor liveness checks confirm you're a real person — not a photo, not a video, not an AI. One human, one device, one account. No exceptions.</p>
              </div>
              <div className="protocol-card protocol-card--highlight">
                <div className="protocol-tier">Tier 2</div>
                <h3>The Seal</h3>
                <p>Your "Confirmed Human" status is unlocked only after a physical, in-person verification with an existing verified member. This creates an unbroken chain of trust — every person on the platform can be traced back to a real human encounter. No remote workarounds, no shortcuts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The 300 Circle & Trust Zone */}
        <section id="trust" className="trust-section">
          <div className="container">
            <div className="section-label">Your Trust Network</div>
            <h2>300 Real Friends.<br /><span className="highlight">90,000 Trusted People.</span></h2>
            <div className="trust-layout">
              <div className="trust-content">
                <div className="trust-block">
                  <h3>The 300 Circle</h3>
                  <p>Your inner circle is capped at 300 members — aligned with Dunbar's Number, the cognitive limit for people you can truly care about. Every connection carries weight and intentionality. No "acquaintance clutter." This is your space for family, close friends, and true mentors.</p>
                </div>
                <div className="trust-block">
                  <h3>The 90,000-Person Trust Zone</h3>
                  <p>300 trusted friends, each with 300 of their own trusted friends, creates a zone of 90,000 highly trusted mutuals. This is where the magic happens — warm business introductions, niche hobby connections, and reliable recommendations from people who are never more than two real relationships away from you.</p>
                </div>
                <div className="trust-block">
                  <h3>The Anti-Spam Gate</h3>
                  <p>Want to reach someone outside your circle? Mutual friend approval is required for all intro requests. No cold DMs, no unsolicited messages, no strangers in your inbox. Every interaction starts with trust.</p>
                </div>
              </div>
              <div className="trust-visual">
                <div className="circle-diagram">
                  <div className="circle-outer">
                    <span className="circle-label-outer">90,000 Trust Zone</span>
                    <div className="circle-inner">
                      <span className="circle-label-inner">300 Circle</span>
                      <div className="circle-you">You</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hyperlocal Navigation */}
        <section className="hyperlocal-section">
          <div className="container">
            <div className="section-label">Social Navigation</div>
            <h2>Navigate Your<br /><span className="highlight">Real World Socially</span></h2>
            <p className="section-subtitle">
              Yaara isn't about passive scrolling. It's about intentional serendipity — discovering real people and real events around you, right now.
            </p>
            <div className="hyperlocal-grid">
              <div className="hyperlocal-card">
                <div className="hyperlocal-icon">📍</div>
                <h3>5km Map View</h3>
                <p>See what's happening within 5 kilometers of you. Events, communities, and people — prioritized by proximity, not algorithms. Your neighborhood comes first.</p>
              </div>
              <div className="hyperlocal-card">
                <div className="hyperlocal-icon">🤝</div>
                <h3>Buddy Match</h3>
                <p>Yaara uses interest-affinity to pair you with a nearby mutual for a "Social Handshake." Found someone who shares your love for chess, birdwatching, or trail running? Meet up — they're 2km away.</p>
              </div>
              <div className="hyperlocal-card">
                <div className="hyperlocal-icon">✈️</div>
                <h3>Traveler's Advantage</h3>
                <p>Arrive in a new city and instantly identify the Trust Zone of mutuals nearby. Need a local recommendation, a riding buddy, or a business contact? Your network travels with you.</p>
              </div>
              <div className="hyperlocal-card">
                <div className="hyperlocal-icon">📅</div>
                <h3>Local Events</h3>
                <p>Create, discover, and join events near you — from board-gaming nights to community cleanup drives. Events can be opened exclusively to friends of friends for intimate, trusted gatherings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Communities & Circles */}
        <FeatureSection />

        {/* Community Types */}
        <section id="communities" className="communities-section">
          <div className="container">
            <div className="section-label">Community Tools</div>
            <h2>Purpose-Built For<br /><span className="highlight">Every Community Type</span></h2>
            <p className="communities-intro">
              Communities on Yaara aren't generic groups. Each one gets its own tailored digital space with modular tools designed for its unique needs. Enable only what you need — from route planning to dues tracking, job boards to pet adoption. Everything your members need, all in one place.
            </p>
            <div className="communities-examples">
              <div className="community-example">
                <span className="community-icon">🎓</span>
                <div>
                  <h3>Alumni Networks</h3>
                  <p>Job boards where alumni post opportunities exclusively for the network, specialized interest groups within the batch, and mentor-mentee matching that connects experienced professionals with fresh graduates.</p>
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
                  <p>Activity planning for age-appropriate outings, playdate coordination with RSVP and location sharing, milestone sharing timelines, and curated resource libraries.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">💼</span>
                <div>
                  <h3>Business Networks</h3>
                  <p>Categorized business directories, exclusive deal sharing among members, networking event management with attendee matching, and democratic decision-making through polls.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">🏢</span>
                <div>
                  <h3>Residential Societies</h3>
                  <p>Common area booking, maintenance dues tracking with payment reminders, digital circulars that replace paper notices, and transparent society elections with verified voting.</p>
                </div>
              </div>
              <div className="community-example">
                <span className="community-icon">🐾</span>
                <div>
                  <h3>Animal Welfare Groups</h3>
                  <p>Pet adoption listings with detailed profiles and photos, fundraising tools for medical emergencies, volunteer coordination for rescue operations, and a directory of pet-friendly services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Yaara — Identity Section */}
        <section className="why-yaara-section">
          <div className="container">
            <div className="section-label">Why Yaara</div>
            <h2>The Antidote To<br /><span className="highlight">The Dead Internet</span></h2>
            <p className="section-subtitle">
              While everyone else is building better bots, we're building the only place where bots aren't allowed.
            </p>
            <div className="why-yaara-grid">
              <div className="why-yaara-card">
                <div className="why-yaara-number">01</div>
                <h3>Humans Only</h3>
                <p>Two-tier verification ensures every person is real. Your device is bound to your identity. A physical meeting with an existing member seals the chain of trust. No bots get through.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">02</div>
                <h3>Intentional Connections</h3>
                <p>300 connections maximum. No follower counts, no vanity metrics. Every relationship is real, every invitation carries weight. Your network is small enough to matter and large enough to be powerful.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">03</div>
                <h3>Democratic By Design</h3>
                <p>No more admin-controlled groups where one person decides everything. Power to everyone through voting, polls, and transparent governance. Every community member has a voice.</p>
              </div>
              <div className="why-yaara-card">
                <div className="why-yaara-number">04</div>
                <h3>Zero Surveillance</h3>
                <p>No ads, no data harvesting, no algorithmic manipulation. End-to-end encrypted messaging — your conversations are mathematically impossible for anyone to read, including us. Your data stays yours.</p>
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
                <p>Human verification, core community creation, member management, encrypted messaging, and the module framework. You're joining at the ground floor.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">02</div>
                <h3>Community Tools</h3>
                <p>Events, polls, voting, circulars, photo albums, and the 300 Circle social graph. The features that make communities come alive.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">03</div>
                <h3>Social Navigation</h3>
                <p>Hyperlocal map view, buddy matching, live tracking, the 90,000-person Trust Zone, and a public discovery map for events and communities near you.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-number">04</div>
                <h3>The Full OS</h3>
                <p>Cross-community features, the Common Space unified view, traveler mode, and advanced modules. The complete social navigation system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container">
            <blockquote>
              <p>"We don't need another social network. We need a platform where 'Social' means 'Human' again."</p>
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
                <h2>Be a Founding Member<br /><span className="highlight">Shape The Human Internet</span></h2>
                <p>We're onboarding community founders and early believers first. If you run a community, want to start one, or simply believe the internet should belong to humans — join the waitlist.</p>

                <div className="contact-features">
                  <div className="contact-feature">
                    <div className="check-icon">✓</div>
                    <span>Be among the first verified humans on the platform</span>
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
                {waitlistStatus === 'success' ? (
                  <div className="form-success">You're on the list! We'll be in touch soon.</div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <input type="text" placeholder="First Name" required />
                      <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone Number" />
                    <label htmlFor="community-type" className="sr-only">Community type</label>
                    <select id="community-type" className="community-select" required>
                      <option value="" disabled selected>What kind of community do you run?</option>
                      <option value="Biker / Riding Club">Biker / Riding Club</option>
                      <option value="Parents / Mothers Group">Parents / Mothers Group</option>
                      <option value="Business Association">Business Association</option>
                      <option value="Apartment / Housing Society">Apartment / Housing Society</option>
                      <option value="School / Alumni Network">School / Alumni Network</option>
                      <option value="Hobby / Interest Group">Hobby / Interest Group</option>
                      <option value="Just a Human Who Cares">Just a Human Who Cares</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="form-checkbox">
                      <input type="checkbox" id="privacy" required />
                      <label htmlFor="privacy">You agree to our friendly privacy policy.</label>
                    </div>
                    <button type="submit" className="submit-btn" disabled={waitlistStatus === 'submitting'}>
                      {waitlistStatus === 'submitting' ? 'Submitting...' : 'Get Early Access'}
                    </button>
                    {waitlistStatus === 'error' && (
                      <p className="form-error">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
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
              <a href="https://forms.gle/dAaeHncAwMeqC1ZV8" target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ marginTop: '1.5rem' }}>Help Us Build Yaara — Take a 2-Min Survey</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <p className="footer-heading">Yaara</p>
              <p>A Humans Only social navigation platform — where every person is verified real, every connection is intentional, and every community gets its own purpose-built digital home.</p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="mailto:support@yaara.social" aria-label="Email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <p className="footer-heading">Help</p>
              <ul>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <p className="footer-heading">Newsletter</p>
              <p>Stay updated on Yaara's journey. No spam, just milestones.</p>
              {newsletterStatus === 'success' ? (
                <p style={{ color: '#10b981', fontSize: '0.9rem' }}>Subscribed!</p>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletter}>
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" disabled={newsletterStatus === 'submitting'}>
                    {newsletterStatus === 'submitting' ? '...' : 'Subscribe'}
                  </button>
                </form>
              )}
              {newsletterStatus === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>Failed. Try again.</p>
              )}
            </div>

            <div className="footer-section">
              <p className="footer-heading">Coming Soon</p>
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
