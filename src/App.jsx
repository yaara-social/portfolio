import FeatureSection from './components/FeatureSection';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Yaara Social</h1>
        <p>
          A social navigation and engagement platform where only real humans connect — no anonymity, just authentic relationships.
        </p>
        <a href="#join" className="cta">Come Join Us</a>
      </header>
      <FeatureSection />
      <section className="about">
        <h2>About Yaara Social</h2>
        <p>
          Yaara Social redefines online engagement: connect with up to 300 real friends, join communities that matter to you, and discover authentic events and posts nearby. Each community is customizable to fit its members’ needs. Experience a more meaningful digital space — built for real people.
        </p>
      </section>
      <footer>
        <p>&copy; 2025 Yaara Social. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
