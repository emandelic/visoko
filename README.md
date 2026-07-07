# Bosnian Pyramids – Visoko

A modern, full-featured web site about the **Bosnian Pyramid complex** in Visoko, Bosnia & Herzegovina.

## Features

- 🏔️ **Landing Hero** — full-screen hero with animated stats
- 📖 **About** — discovery story and key facts
- 🔺 **Pyramids** — all 5 pyramid structures + underground tunnels
- 🔬 **Research** — scientific findings and discovery timeline
- 🖼️ **Gallery** — filterable photo gallery with lightbox
- 🗺️ **Visit** — tourism info, tour options, getting there, best time
- 📬 **Contact** — contact form with map embed
- 📱 **Fully Responsive** — mobile-first design

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### GitHub + Railway

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/visoko-pyramids.git
git push -u origin main
```

2. Go to [railway.app](https://railway.app)
3. Click **New Project → Deploy from GitHub Repo**
4. Select your repository
5. Railway auto-detects Next.js and deploys automatically

### Environment Variables (Railway)

No required environment variables for basic deployment.

Optional:
- `NODE_ENV=production`
- `PORT=3000` (Railway sets this automatically)

## Build

```bash
npm run build
npm run start
```
