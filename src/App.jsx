import FeatureSection from './components/FeatureSection';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.svg" alt="Yaara Social" />
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#architecture">Tech</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Navigate Socially, Connect Intuitively, Experience Yaara</h1>
          <p className="hero-subtitle">
            Revolutionizing social navigation. Join Yaara for intuitive navigation, meaningful interactions, and vibrant purposefully built communities.
          </p>
          <div className="hero-cta">
            <a href="#waitlist" className="cta-primary">Join the Waitlist</a>
            <a href="#features" className="cta-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="feature-showcase">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Seamless & Simplified Social Navigation</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Meaningful Interactions, Real Connections</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏘️</div>
              <h3>Discover Communities | Effortlessly Engage & Build</h3>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <FeatureSection />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>About Yaara: A Humans Only Social Navigation Platform</h2>
                <p>
                  Designed Intuitively To Foster Genuine Connections Not Just Endless Scrolling
                </p>
                <p>
                  To Explore & Build Communities Effortlessly
                </p>
                <p>
                  Empower Human Potential Not Algorithms/AI
                </p>
              </div>
              <div className="about-visual">
                <div className="about-image">
                  <div className="platform-preview">
                    <div className="preview-text">Navigate. Connect. Thrive. In Society.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section id="architecture" className="architecture-section">
          <div className="container">
            <h2>Technical Architecture</h2>
            <div className="architecture-grid">
              <div className="architecture-item">
                <h3>8 Microservices</h3>
                <p>Independent services for auth, users, posts, communities, messaging, notifications, moderation, and assets</p>
              </div>
              <div className="architecture-item">
                <h3>Hybrid Database</h3>
                <p>PostgreSQL for structured data + MongoDB for flexible content</p>
              </div>
              <div className="architecture-item">
                <h3>Real-time Messaging</h3>
                <p>WebSocket implementation for instant communication</p>
              </div>
              <div className="architecture-item">
                <h3>Location Services</h3>
                <p>PostGIS integration for hyperlocal discovery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <h2>What Our Users Are Saying</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"I've never felt so connected! Yaara's limited friends feature makes interaction accessible with people who really matter. A game-changer!"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Yatharth Ruwatia</strong>
                    <span>Parent - Twins</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Yaara's enhanced privacy controls gave me peace of mind while exploring new connections. I love how I can customize my content streams and stay in control."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Sp Sagar</strong>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Finding relevant communities has never been easier! Yaara's community finder helped me discover groups aligned with my passions and interests."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Aayansh</strong>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Waitlist Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Connect With Us, Explore Yaara</h2>
                <p>We're here to answer your questions and explore collaboration opportunities. Get in touch with us at support@yaara.social</p>

                <div className="contact-features">
                  <div className="contact-feature">
                    <div className="feature-icon">⭐</div>
                    <span>Dedicated Support Team Assistance Available</span>
                  </div>
                  <div className="contact-feature">
                    <div className="feature-icon">🤝</div>
                    <span>Partnership Inquiries and Collaboration Opportunities to Build Communities</span>
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
                  <button type="submit" className="submit-btn">Submit</button>
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
              <p>Yaara is a revolutionary social navigation platform, connecting users through shared experiences and real-time insights, fostering genuine connections and simplifying exploration.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Instagram">📷</a>
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
