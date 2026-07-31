# Feldrix Website

> Farm Smarter. Grow Stronger.

The official marketing website for [Feldrix](https://www.feldrix.com) — a modern farm management platform for livestock, crops, machinery, finance and planning.

## Tech Stack

- **React 19** — UI library
- **Vite 6** — Build tool
- **Material UI 6** — Component library
- **Framer Motion 11** — Animations
- **React Router 7** — Client-side routing
- **React Helmet Async** — SEO meta tags
- **React Icons** — Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Output goes to `dist/`

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/                 # Static assets imported in code
├── components/
│   ├── animations/         # FadeIn, SlideUp, ScrollReveal, ScaleIn, StaggerContainer
│   ├── buttons/            # PrimaryButton, SecondaryButton
│   ├── cards/              # FeatureCard, PricingCard, IconCard, TestimonialCard, StatisticCard
│   ├── common/             # Logo, SEO, SectionTitle, PageContainer
│   ├── layout/             # Navbar, Footer, Layout
│   └── sections/           # CTASection, FAQAccordion, ScreenshotGallery, ComparisonTable
├── hooks/                  # Custom React hooks
├── pages/
│   ├── Home/               # Landing page (10 sections)
│   ├── Features/           # Module details
│   ├── Pricing/            # Plans + comparison table
│   ├── About/              # Mission, vision, timeline
│   ├── Contact/            # Contact form + info
│   ├── Privacy/            # Privacy policy
│   ├── Terms/              # Terms of service
│   ├── NotFound/           # 404 page
│   └── Placeholder/        # Blog, Docs, Releases, Help, etc.
├── routes/                 # Router configuration
├── theme/                  # MUI theme (palette, typography, components)
├── styles/                 # Global CSS
└── utils/                  # Utility functions
```

## Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | Complete |
| `/features` | Features | Complete |
| `/pricing` | Pricing | Complete |
| `/about` | About | Complete |
| `/contact` | Contact | Complete |
| `/privacy` | Privacy Policy | Complete |
| `/terms` | Terms of Service | Complete |
| `/blog` | Blog | Placeholder |
| `/docs` | Documentation | Placeholder |
| `/releases` | Release Notes | Placeholder |
| `/help` | Help Centre | Placeholder |
| `/careers` | Careers | Placeholder |
| `/partners` | Partners | Placeholder |
| `/api` | API Docs | Placeholder |
| `/stories` | Customer Stories | Placeholder |
| `/login` | Login | Redirects to app.feldrix.com |
| `/register` | Register | Redirects to app.feldrix.com |
| `*` | 404 | Complete |

## Deployment (Vercel)

This project is configured for zero-config deployment on Vercel.

### Steps

1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install --legacy-peer-deps`

The `vercel.json` handles SPA routing rewrites and asset caching headers.

### Environment Variables

None required for the marketing site.

### Custom Domain

Configure in Vercel:
- `www.feldrix.com` → production
- `feldrix.com` → redirect to www

## Design System

| Token | Value |
|-------|-------|
| Primary | `#16A34A` (Green) |
| Secondary | `#1E293B` (Dark Slate) |
| Background | `#FFFFFF` |
| Surface | `#F8FAFC` |
| Accent | `#3B82F6` (Blue) |
| Border Radius | 12px (buttons), 16px (cards) |
| Font | Inter (Google Fonts) |

## Performance

- Code splitting via React.lazy + Suspense
- Route-based chunking (Vite manual chunks: vendor, mui, motion)
- Tree-shaking enabled
- Font preconnect for Google Fonts
- Asset caching headers (1 year immutable for hashed assets)
- Minimal bundle: ~225KB gzipped total

## SEO

- Per-page meta titles and descriptions
- Open Graph + Twitter Card tags
- Canonical URLs
- `robots.txt` + `sitemap.xml`
- Semantic HTML throughout
- JSON-LD ready (add structured data to SEO component as needed)

## Accessibility

- Semantic HTML (`main`, `section`, `nav`, `header`, `footer`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus states
- Accessible colour contrast (WCAG AA)
- `prefers-reduced-motion` respected

## Future Enhancements

- [ ] Replace placeholder images with real screenshots
- [ ] Replace placeholder logo with final brand logo
- [ ] Connect contact form to backend/email service
- [ ] Add real testimonials
- [ ] Build out Blog with CMS integration
- [ ] Add structured data (JSON-LD) for Organization
- [ ] Add analytics (Plausible/PostHog)
- [ ] Newsletter form integration
- [ ] Add cookie consent banner if needed

## Links

- **Website**: https://www.feldrix.com
- **Application**: https://app.feldrix.com
- **Register**: https://app.feldrix.com/register

## Licence

Proprietary. All rights reserved.
