function FeatureSection() {
  const features = [
    {
      icon: "🚫",
      title: "No Bots, No Algorithms, No Doom Scrolling",
      desc: "A clean, authentic space free from manipulation, fake accounts, and addictive design patterns",
    },
    {
      icon: "🤝",
      title: "Maximum 300 Friend Connections",
      desc: "Quality over quantity — build meaningful relationships with a curated network of real people",
    },
    {
      icon: "✊",
      title: "No Followers, No Clout, No Influencers — Be Real",
      desc: "Authentic human connections without social media games or artificial engagement",
    },
    {
      icon: "📍",
      title: "Hyperlocal Content, Events & Discovery",
      desc: "Find what's happening in your neighborhood with location-based content and events",
    },
    {
      icon: "👀",
      title: "Nearby — See What's Happening Around You",
      desc: "Real-time discovery of local events, from board games to community meetups",
    },
    {
      icon: "🏘️",
      title: "Create, Discover & Grow Communities",
      desc: "Build purpose-driven communities with specialized tools for different group needs",
    },
    {
      icon: "🗳️",
      title: "Truly Democratic Ecosystem For Communities",
      desc: "No more admin-controlled groups — power to everyone through voting systems",
    },
    {
      icon: "🌍",
      title: "World's First Community-First Platform",
      desc: "Purpose-built tools for community creation, engagement, and democratic governance",
    },
    {
      icon: "🛠️",
      title: "Community Specific Tools",
      desc: "Flashcards for study groups, heatmaps for bird watching, job boards for alumni — tailored for each type",
    },
    {
      icon: "🔐",
      title: "Enhanced Privacy Controls",
      desc: "You decide who sees what. Granular privacy settings give you full control over your digital presence",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2>Everything You Need For<br /><span className="highlight">Authentic Social Life</span></h2>
        <p className="features-subtitle">
          Yaara offers intuitive navigation and robust community tools — built for meaningful connections, not vanity metrics.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon-wrapper">{f.icon}</div>
              <div className="feature-text">
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
