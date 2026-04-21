const modules = [
  { emoji: "🗺️", label: "Routes & Maps" },
  { emoji: "📍", label: "Live Tracking" },
  { emoji: "🔥", label: "Heatmaps" },
  { emoji: "📋", label: "Member Directory" },
  { emoji: "📢", label: "Circulars" },
  { emoji: "🗳️", label: "Voting & Polls" },
  { emoji: "📅", label: "Events & RSVP" },
  { emoji: "💬", label: "Messaging" },
  { emoji: "📸", label: "Photo Albums" },
  { emoji: "🏠", label: "Booking" },
  { emoji: "💰", label: "Dues & Payments" },
  { emoji: "📊", label: "Analytics" },
  { emoji: "🎯", label: "Activity Tracker" },
  { emoji: "🤝", label: "Networking" },
  { emoji: "📖", label: "Content Feed" },
  { emoji: "🔔", label: "Announcements" },
];

function FeatureSection() {
  return (
    <section className="circles-section">
      <div className="container">
        <div className="section-label">Communities vs Circles</div>
        <h2>Two Layers Of<br /><span className="highlight">Social Architecture</span></h2>
        <p className="section-subtitle">
          Yaara separates your public and private social life. Communities are your utility layer — open, modular, purpose-built. Circles are your trust layer — intimate, transparent, and capped at 300.
        </p>
        <div className="circles-grid">
          <div className="circles-card">
            <div className="circles-card-header">
              <span className="circles-card-icon">🌐</span>
              <h3>Communities</h3>
              <span className="circles-badge">Unlimited Members</span>
            </div>
            <p className="circles-card-description">
              The public utility layer. Neighborhoods, workplaces, hobby groups, alumni networks, riding clubs. Each community gets modular tools tailored to its needs — route planning for bikers, dues tracking for housing societies, job boards for alumni. High utility, verification-ready, but your private life stays hidden.
            </p>
            <p className="circles-card-role">Communities act as the "waiting room" for potential Circle members. You get to know people in context before inviting them into your inner trust network.</p>
          </div>
          <div className="circles-card circles-card--primary">
            <div className="circles-card-header">
              <span className="circles-card-icon">🔒</span>
              <h3>Circles</h3>
              <span className="circles-badge circles-badge--primary">Max 300 Members</span>
            </div>
            <p className="circles-card-description">
              The deep trust layer. Your family, closest friends, real mentors. Full transparency, private updates, genuine connection. Every invite carries weight and prestige. This is the space where "social" means something — where every person has earned their place through real-world trust.
            </p>
            <p className="circles-card-role">Your Circle generates your 90,000-person Trust Zone — the multiplier that makes warm introductions, reliable recommendations, and safe local events possible.</p>
          </div>
        </div>
        <div className="module-shelf-wrapper">
          <h3 className="module-shelf-title">Available Community Modules</h3>
          <div className="module-shelf">
            {modules.map((m, i) => (
              <div className="module-chip" key={i}>
                <span>{m.emoji}</span>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
