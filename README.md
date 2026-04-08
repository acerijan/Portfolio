# Rijan Maharjan — DevOps Portfolio

A modern, interactive portfolio website built with React, TypeScript, Tailwind CSS v4, and Framer Motion. Features a dark theme with neon accents, binary cursor effect, Night Owl mode, and smooth animations.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **Dark Mode by Default** — Elegant dark theme with cyan, purple, and green neon accents
- **Night Owl Mode** — Pull the curtain string to activate a deeper night mode with enhanced glowing effects
- **Binary Cursor** — Custom cursor that reveals binary digits (0 and 1) with particle trail effects
- **Smooth Animations** — Framer Motion powered scroll reveals, hover effects, and micro-animations
- **Glassmorphism UI** — Frosted glass cards with subtle borders and backdrop blur
- **Particle Background** — Ambient floating starfield particles
- **Fully Responsive** — Mobile-first design optimized for all screen sizes
- **Typing Effect** — Animated tagline in the hero section
- **Terminal Motifs** — Terminal-styled elements throughout the design

## 🧱 Sections

1. **Hero** — Name, title, animated tagline, and scroll prompt
2. **About** — Professional bio with terminal-style motto and highlight cards
3. **Skills** — Categorized skill bars (Languages, Cloud, Tools, DevOps)
4. **Projects** — Project showcase with status badges, tech stacks, and GitHub links
5. **Experience** — Timeline of activities, clubs, hackathons, and leadership roles
6. **Contact** — Contact form with validation and social links

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| TypeScript | 6.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.x | Animations |
| Vite | 8.x | Build tool & dev server |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/acerijan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite — click **Deploy**

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click **Deploy**

### AWS Amplify

1. Push your code to GitHub
2. Go to AWS Amplify Console
3. Connect your repository
4. Set build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Save and deploy

## 📁 Project Structure

```
Portfolio/
├── index.html              # HTML entry point with SEO meta tags
├── package.json
├── vite.config.ts          # Vite + Tailwind CSS plugin config
├── tsconfig.json
├── public/
│   └── vite.svg
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app with Night Owl state
    ├── index.css           # Tailwind CSS + custom theme
    └── components/
        ├── Navbar.tsx      # Sticky glassmorphism navigation
        ├── Hero.tsx        # Hero with typing effect
        ├── About.tsx       # Bio with terminal motif
        ├── Skills.tsx      # Animated skill bars
        ├── Projects.tsx    # Project cards with badges
        ├── Experience.tsx  # Timeline layout
        ├── Contact.tsx     # Form + social links
        ├── Footer.tsx      # Minimal footer
        ├── BinaryCursor.tsx    # Canvas binary particle cursor
        ├── ParticleField.tsx   # Ambient background particles
        ├── NightOwlToggle.tsx  # Curtain string toggle
        └── ScrollReveal.tsx    # Scroll animation wrapper
```

## 📄 License

MIT © Rijan Maharjan
