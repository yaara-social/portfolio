const features = [
  {
    title: "No Bots | No Multiple Accounts | No Algorithms",
    description:
      "Every user on Yaara is a verified real person. No fake accounts, no bot-driven engagement, no algorithmic feeds deciding what you see. Your community stays authentic, and every interaction is with a real human being.",
  },
  {
    title: "Maximum 300 Friend Connections",
    description:
      "Inspired by Dunbar's number, Yaara limits each person to 300 connections. This isn't a limitation — it's a feature. It ensures your network is made up of people you actually know and trust, creating a genuine social graph.",
  },
  {
    title: "Modular Community Tools",
    description:
      "Just like apps on a smartphone, communities enable only the modules they need. A riding club gets routes and live tracking. A housing society gets dues and booking. Same platform, completely different experience.",
  },
  {
    title: "Democratic Governance & Voting",
    description:
      "Every community member has a voice. Run transparent elections, conduct polls on important decisions, and ensure no single admin holds all the power. Yaara brings democracy to community management.",
  },
  {
    title: "End-to-End Encrypted Messaging",
    description:
      "Your conversations are yours. Yaara uses AES-256-GCM encryption with per-conversation keys, ensuring that private messages stay private. No one — not even Yaara — can read your messages.",
  },
  {
    title: "Hyperlocal Events & Discovery",
    description:
      "Create, discover, and join events happening around you. From board-gaming nights to community cleanup drives — find what's happening in your neighborhood and bring people together effortlessly.",
  },
  {
    title: "Custom Member Directories",
    description:
      "Every community can create custom fields for their member directory. A biker club tracks bike details and blood groups. A business network tracks company and industry. The directory adapts to your community's needs.",
  },
  {
    title: "Routes, Maps & Live Tracking",
    description:
      "Purpose-built for communities that move together. Plan routes with turn-by-turn directions, share them with your group, and track members live during group rides, treks, or runs — so no one gets left behind.",
  },
  {
    title: "Photo Albums & Shared Memories",
    description:
      "Every event and ride gets its own dedicated photo space. Members share moments in real-time, creating collective albums that everyone can access, download, and relive together.",
  },
  {
    title: "Zero Ads, Zero Data Harvesting",
    description:
      "Yaara will never show you ads or sell your data. Your attention isn't a product. The platform is funded by the value it creates for communities, not by exploiting your personal information.",
  },
];

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
    <section id="features" className="feature-section">
      <div className="container">
        <div className="section-label">Key Yaara Features</div>
        <h2>A Smartphone<br /><span className="highlight">For Your Community</span></h2>
        <p className="section-subtitle">
          Just like you install apps on your phone, communities on Yaara enable only the modules they need. Every feature is purpose-built to help your community thrive — not just communicate, but truly organize, govern, and grow together.
        </p>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
        <div className="module-shelf-wrapper">
          <h3 className="module-shelf-title">Available Modules</h3>
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
