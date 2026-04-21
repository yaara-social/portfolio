# Yaara — Humans Only Social Platform

The marketing site for Yaara, a Humans Only social navigation platform where every person is verified real, every connection is intentional, and every community gets its own purpose-built digital home.

**Live at:** [yaara.social](https://yaara.social)

## Site Sections

- **Hero** — "Reclaiming Human Connection" with 0 bots / 300 connections / 90k trust zone stats
- **Proof of Life Protocol** — Two-tier human verification (device binding + in-person seal)
- **Trust Network** — 300 Circle, 90,000-person Trust Zone, Anti-Spam Gate
- **Social Navigation** — Hyperlocal map, buddy matching, traveler mode, local events
- **Communities vs Circles** — Two-layer social architecture with modular community tools
- **Community Types** — Alumni, riding clubs, parent groups, business networks, housing societies, animal welfare
- **Why Yaara** — Humans Only, Intentional Connections, Democratic By Design, Zero Surveillance
- **Roadmap** — 4 phases from Foundation to Full OS
- **Waitlist** — Formspree-powered signup form
- **Newsletter** — Formspree-powered subscription in footer

## Tech Stack

- **React 18** + **Vite 4**
- Plain CSS (no framework)
- Fonts: DM Sans, Kumbh Sans, Space Grotesk (Google Fonts)
- Forms: [Formspree](https://formspree.io)
- Deployment: GitHub Actions → GitHub Pages

## Getting Started

```bash
git clone https://github.com/yaara-social/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## Build & Deploy

Deployment is automatic — push to `main` triggers the GitHub Actions workflow which builds and deploys to the `gh-pages` branch.

```bash
npm run build    # Build to dist/
```

### GitHub Pages Setup

In **Settings > Pages**, set:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

### Custom Domain

The CNAME (`yaara.social`) is injected automatically during build via the `build` script in `package.json`.

## Project Structure

```
src/
  App.jsx                    # Main page component (all sections)
  components/
    FeatureSection.jsx       # Communities vs Circles + module chips
  index.css                  # All styles
  main.jsx                   # React entry point
public/
  logo.svg                   # Favicon (purple Y lettermark)
index.html                   # HTML template
.github/workflows/
  deploy.yml                 # CI/CD workflow
```

## License

[MIT](LICENSE)
