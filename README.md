# 🕶️ IRIS AI Glasses — Landing Page

A premium, modern landing page for **IRIS AI Glasses** — a fictional AI-powered smart glasses product. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

> **Live Demo:** [iris-ai-glasses.vercel.app](https://iris-ai-glasses.vercel.app)

---

## ✨ Features

### Sections

| Section            | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| **Navbar**         | Fixed glassmorphism navbar with responsive mobile menu and smooth scroll          |
| **Hero**           | Full-screen hero with gradient glow, product stats, and dual CTA buttons         |
| **Features**       | Bento grid layout with 6 product features and hover animations                   |
| **Experience**     | Split layout with product image and 4-step experience flow                       |
| **Specifications** | 6-card grid displaying technical specs with hover glow effects                   |
| **Gallery**        | 2×2 image grid with zoom-on-hover and gradient overlay                           |
| **Newsletter**     | Email subscription form with success feedback                                    |
| **Footer**         | 3-column footer with brand, navigation, resources, and social icons              |
| **ScrollToTop**    | Floating button with scroll-triggered visibility                                 |

### Design Highlights

- 🌑 **Dark theme** with `#020617` background
- 🔵 **Cyan-to-blue gradient** accent system
- 🪟 **Glassmorphism** cards with `backdrop-blur` and subtle borders
- ✨ **Micro-animations** — hover scale, glow transitions, shimmer effects
- 📱 **Fully responsive** — mobile-first with hamburger menu
- 🔤 **Inter font** via `next/font/google`

---

## 🛠️ Tech Stack

| Technology                                       | Version | Purpose                       |
| ------------------------------------------------ | ------- | ----------------------------- |
| [Next.js](https://nextjs.org/)                   | 16.2.9  | React framework (App Router)  |
| [React](https://react.dev/)                      | 19.2.4  | UI library                    |
| [TypeScript](https://www.typescriptlang.org/)    | ^5      | Type safety                   |
| [Tailwind CSS](https://tailwindcss.com/)         | ^4      | Utility-first CSS             |
| [Lucide React](https://lucide.dev/)              | ^1.22.0 | Icon library (primary)        |
| [React Icons](https://react-icons.github.io/)    | ^5.7.0  | Icon library (social icons)   |
| [clsx](https://github.com/lukeed/clsx)           | ^2.1.1  | Conditional className utility |
| [sharp](https://sharp.pixelplumbing.com/)        | (dev)   | Image optimization            |

---

## 📁 Project Structure

```
landing-page-ai-glasses/
├── public/
│   └── images/
│       ├── Logo.png
│       ├── glassesAI.png
│       ├── experience.png
│       ├── features/          # 6 feature images
│       └── gallery/           # 4 gallery images
├── scripts/
│   └── optimize-images.mjs    # Image compression script
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & CSS variables
│   │   ├── layout.tsx         # Root layout, SEO metadata (OG, Twitter)
│   │   └── page.tsx           # Home page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx         # Fixed responsive navbar (client)
│   │   ├── Hero.tsx           # Hero section with stats cards
│   │   ├── Experience.tsx     # Experience section with steps
│   │   ├── Specifications.tsx # Tech specs grid
│   │   ├── Gallery.tsx        # Image gallery grid
│   │   ├── Newsletter.tsx     # Email subscription form (client)
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── ScrollToTop.tsx    # Scroll-to-top button (client)
│   │   └── features/
│   │       ├── Features.tsx   # Features section container
│   │       └── BentoCard.tsx  # Bento grid feature card
│   └── data/
│       └── product.ts         # All product data (features, specs, gallery)
├── next.config.ts             # Next.js config (image optimization)
├── tsconfig.json              # TypeScript config (path alias @/*)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** (or yarn / pnpm / bun)

### Installation

```bash
git clone <repository-url>
cd landing-page-ai-glasses
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## ⚡ Performance Optimization

- All images compressed from **~85MB → ~3.7MB** (95% reduction) using sharp
- WebP versions auto-generated for all images
- Next.js Image configured with **AVIF + WebP** auto-serve (`next.config.ts`)
- Below-fold images use `loading="lazy"` — only Hero image uses `priority`
- All `<Image>` components include `sizes` and `quality={75}` props

### Image Optimization Script

```bash
node scripts/optimize-images.mjs
```

---

## 🔍 SEO

Configured in `layout.tsx`:

- **Title & Description** — keyword-rich, descriptive
- **Open Graph** — title, description, image, siteName, locale, type
- **Twitter Card** — summary_large_image with image
- **Keywords** — AI glasses, smart glasses, wearable technology, etc.
- **Robots** — index, follow
- **Semantic HTML** — single `<h1>`, `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`

---

## 🚢 Deployment

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository directly on [vercel.com/new](https://vercel.com/new).

---

## 📄 License

This project is for learning and demonstration purposes.
