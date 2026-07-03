# 🕶️ IRIS AI Glasses — Landing Page

A premium, modern landing page for **IRIS AI Glasses** — a fictional AI-powered smart glasses product. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

> **Live Product Concept:** AI-powered smart glasses that redefine work, travel, and creativity with seamless real-time assistance.

---

## ✨ Features

### Sections
| Section | Description |
|---|---|
| **Navbar** | Fixed glassmorphism navbar with responsive mobile menu, smooth scroll navigation, and animated CTA button |
| **Hero** | Full-screen hero with gradient background, grid overlay, animated glow effects, product stats (4.9 rating, 50K+ users, 50+ languages), and dual CTA buttons |
| **Features** | Bento grid layout showcasing 6 product features (AI Assistant, Live Translation, 18H Battery, 48MP Camera, Privacy, Gesture Control) with hover animations |
| **Experience** | Split layout with product image and step-by-step experience flow (4 steps) |
| **Specifications** | 6-card grid displaying technical specs (48MP, 18H, 65g, OLED, Wi-Fi 6, IP54) with hover glow effects |
| **Gallery** | 2×2 image grid with zoom-on-hover and gradient overlay titles |
| **Newsletter** | Email subscription form with success feedback, glassmorphism card design |
| **Footer** | 3-column footer with brand info, navigation links, resources, and social icons |
| **ScrollToTop** | Floating button with scroll-triggered visibility |

### Design Highlights
- 🌑 **Dark theme** with `#020617` background
- 🔵 **Cyan-to-blue gradient** accent system (`#38bdf8` → `#2563eb`)
- 🪟 **Glassmorphism** cards with `backdrop-blur` and subtle borders
- ✨ **Micro-animations** — hover scale, glow transitions, shimmer effects on buttons
- 📱 **Fully responsive** — mobile-first with hamburger menu
- 🔤 **Inter font** via `next/font/google`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.9 | React framework (App Router) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS |
| [Lucide React](https://lucide.dev/) | ^1.22.0 | Icon library (primary) |
| [React Icons](https://react-icons.github.io/) | ^5.7.0 | Icon library (social icons) |
| [clsx](https://github.com/lukeed/clsx) | ^2.1.1 | Conditional className utility |

---

## 📁 Project Structure

```
landing-page-ai-glasses/
├── public/
│   ├── icons/                          # Icon assets
│   └── images/
│       ├── Logo.png                    # Brand logo
│       ├── glassesAI.png               # Hero product image
│       ├── experience.png              # Experience section image
│       ├── features/                   # 6 feature images (AI-generated)
│       │   ├── ai-assistant.png
│       │   ├── battery.png
│       │   ├── camera.png
│       │   ├── gesture-control.png
│       │   ├── live-translation.png
│       │   └── privacy.png
│       └── gallery/                    # 4 gallery images
│           ├── gallery-1.png
│           ├── gallery-2.png
│           ├── gallery-3.png
│           └── gallery-4.png
├── src/
│   ├── app/
│   │   ├── globals.css                 # Global styles, CSS variables, reusable classes
│   │   ├── layout.tsx                  # Root layout (Inter font, metadata)
│   │   └── page.tsx                    # Home page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx                  # Fixed responsive navbar (client component)
│   │   ├── Hero.tsx                    # Hero section with stats cards
│   │   ├── Experience.tsx              # Experience section with steps
│   │   ├── Specifications.tsx          # Tech specs grid
│   │   ├── Gallery.tsx                 # Image gallery grid
│   │   ├── Newsletter.tsx              # Email subscription form (client component)
│   │   ├── Footer.tsx                  # Footer with social links
│   │   ├── ScrollToTop.tsx             # Scroll-to-top button (client component)
│   │   └── features/
│   │       ├── Features.tsx            # Features section container
│   │       ├── BentoCard.tsx           # Bento grid feature card
│   │       └── FeatureCard.tsx         # Alternative feature card (unused)
│   ├── data/
│   │   └── product.ts                  # All product data (features, specs, gallery, experiences)
│   ├── hooks/                          # Custom hooks (empty)
│   ├── lib/                            # Utility functions (empty)
│   ├── styles/                         # Additional styles (empty)
│   └── types/                          # Type definitions (empty)
├── next.config.ts                      # Next.js config (devIndicators disabled)
├── tsconfig.json                       # TypeScript config (path alias @/*)
├── postcss.config.mjs                  # PostCSS config (Tailwind plugin)
├── eslint.config.mjs                   # ESLint config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd landing-page-ai-glasses

# Install dependencies
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

### Lint

```bash
npm run lint
```

---

## 🎨 Design System

### CSS Variables (`globals.css`)

```css
:root {
  --background: #020617;    /* Slate 950 */
  --foreground: #f8fafc;    /* Slate 50 */
  --primary: #2563eb;       /* Blue 600 */
  --secondary: #38bdf8;     /* Sky 400 */
  --card: rgba(255, 255, 255, 0.05);
  --border: rgba(255, 255, 255, 0.1);
  --muted: #94a3b8;         /* Slate 400 */
}
```

### Reusable Classes

| Class | Description |
|---|---|
| `.card` / `.glass` | Glassmorphism card with blur backdrop and subtle border |
| `.gradient-text` | Cyan-to-blue gradient text effect |
| `.hero-bg` | Multi-layered radial gradient background |
| `.hero-grid` | Subtle grid pattern overlay |
| `.glow` | Absolute-positioned blur glow effect |
| `.container` | Centered container with `max-width: 1200px` |

---

## 📊 Component Architecture

```
page.tsx
├── Navbar           (client) — Fixed header, mobile menu toggle
├── Hero             (server) — Stats cards, CTA buttons, product image
├── Features         (server) — Bento grid with BentoCard sub-components
├── Experience       (server) — Image + step list from data
├── Specifications   (server) — Spec cards with hover animations
├── Gallery          (server) — Image grid with overlays
├── Newsletter       (client) — Email form with state management
├── Footer           (server) — Brand, nav links, social icons
└── ScrollToTop      (client) — Scroll-triggered floating button
```

**Client Components** (3): `Navbar`, `Newsletter`, `ScrollToTop` — require browser APIs (`useState`, `useEffect`, event handlers)

**Server Components** (6): All others — statically rendered for performance

---

## 📦 Data Layer

All product content is centralized in `src/data/product.ts`:

- **`features`** — 6 items with icon, image, size (large/small/wide for bento layout)
- **`experiences`** — 4 step items (step number, title, description)
- **`specifications`** — 6 tech spec items (value, label, description)
- **`gallery`** — 4 gallery images (src, title)

---

## 📄 License

This project is for learning and demonstration purposes.
