# Yaara Social Portfolio

This is the portfolio site for Yaara Social—a new platform for authentic, human-only connections.

## Features

- Real human connections (no bots, no anonymity)
- 300 real friends limit for meaningful relationships
- Customizable communities
- Nearby/discovery feature for public events and posts
- Modern, clean design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/yaara-social/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploy to GitHub Pages

### 1. Vite Configuration

Make sure your `vite.config.js` has:

```js
base: '/portfolio/',
```

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy `dist` to GitHub Pages

Install the deployment tool:

```bash
npm install --save-dev gh-pages
```

Deploy with:

```bash
npm run deploy
```

### 4. Enable GitHub Pages

- Go to your repo’s **Settings** > **Pages**
- Choose the `gh-pages` branch as the source and save.

Your site will be live at:  
`https://yaara-social.github.io/portfolio/`

## Customizing

- Update `src/index.css` for colors and typography.
- Replace `public/logo.svg` with your brand’s final version.
- Add more sections/pages as needed.

## License

[MIT](LICENSE)

---

**Yaara Social — A more meaningful digital space**