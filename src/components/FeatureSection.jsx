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
    <section id="modules" className="module-section">
      <div className="container">
        <div className="section-label">How It Works</div>
        <h2>A Smartphone<br /><span className="highlight">For Your Community</span></h2>
        <p className="section-subtitle">
          Just like you install apps on your phone, communities on Yaara enable only the modules they need. A biker club gets routes and ride tracking. A mothers group gets activity planning. Same platform, completely different experience.
        </p>
        <div className="module-shelf">
          {modules.map((m, i) => (
            <div className="module-chip" key={i}>
              <span>{m.emoji}</span>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
