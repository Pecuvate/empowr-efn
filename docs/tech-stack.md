# Empowr EFN — Tech Stack

## Framework & Language

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | ^5 |
| UI Library | React | ^19 |
| Node | Node.js | 20 |

All pages are server components by default, statically pre-rendered. No client-side data fetching, no authentication, no database.

---

## Dependencies

### Runtime
| Package | Purpose |
|---|---|
| `next` | Framework |
| `react` / `react-dom` | UI rendering |
| `lucide-react` | Icon library |
| shadcn/ui components | Button, Card, Accordion (Base UI variant) |

### Dev
| Package | Purpose |
|---|---|
| `tailwindcss` ^4 | Utility CSS framework |
| `@tailwindcss/postcss` ^4 | Tailwind PostCSS processor |
| `typescript` ^5 | Type checking |
| `@types/node`, `@types/react`, `@types/react-dom` | TypeScript definitions |
| `eslint` ^9 + `eslint-config-next` | Linting |

No state management, no CMS SDK, no email library, no form library.

---

## Design System

### Fonts
- **Nunito** via `next/font/google` — weights 400, 600, 800, 900
- Applied as CSS variable `--font-nunito` on `<body>`

### Colour Palette (`src/app/globals.css` @theme)
Shares the Empowr CIC brand identity:

| Token | Hex | Use |
|---|---|---|
| `--color-blue` | `#4A70C2` | Primary brand blue |
| `--color-blue-dark` | `#3558a8` | Hover states |
| `--color-blue-light` | `#c8ddf8` (approx) | Text on dark |
| `--color-blue-pale` | `#eef3fc` | Section backgrounds |
| `--color-blue-soft` | `rgba(74,112,194,0.10)` | Subtle tint |
| `--color-red` | `#FF6161` | Accent |
| `--color-red-dark` | `#e04444` | Red hover |
| `--color-red-soft` | `rgba(255,97,97,0.09)` | Red tint |
| `--color-black` | `#1B1B1B` | Body text |
| `--color-mid` | `#4a4a4a` | Secondary text |
| `--color-cream` | `#f8f7f4` | Page background |
| `--color-warm-white` | `#fdfcfa` | Card background |
| `--color-border-b` | `rgba(74,112,194,0.18)` | Blue-tinted border |
| `--color-warning` | amber | Warning callouts |

Shadows: `--shadow-blue`, `--shadow-sm`, `--shadow-md` (same as other Empowr projects).

### shadcn/ui Components
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx` (Base UI variant — single-open)

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — Nunito, metadata
│   ├── globals.css                 # @theme brand tokens + Tailwind import
│   ├── page.tsx                    # / — Landing page
│   └── guide/
│       └── page.tsx                # /guide — Freelancer guide
├── components/
│   ├── ui/                         # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── accordion.tsx
│   ├── Footer.tsx                  # 3-column footer (shared across pages)
│   │
│   ├── [Landing page components]
│   │   ├── Hero.tsx                # Eyebrow, headline, body, dual CTAs
│   │   ├── HowItWorks.tsx          # 4-step horizontal flow
│   │   ├── ValuePillars.tsx        # 3-column value props
│   │   ├── EligibilityStrip.tsx    # Chip row of eligibility criteria
│   │   └── ToolsHub.tsx            # Coming-soon tool card grid
│   │
│   └── guide/                      # Guide page components
│       ├── GuideHeader.tsx         # Eyebrow, headline, back link, CTA
│       ├── AnchorNav.tsx           # Sticky pill nav (4 section anchors)
│       ├── GuideSection.tsx        # Section wrapper with id, heading, bg
│       ├── RolesTable.tsx          # Roles and hourly rates table
│       ├── StepList.tsx            # Numbered step list (joining + payment flows)
│       ├── Callout.tsx             # Info/warning callout blocks
│       ├── FAQAccordion.tsx        # Accordion wrapping shadcn Accordion
│       └── CTAStrip.tsx            # Pre-footer CTA band
├── lib/
│   └── links.ts                    # All external URLs — never hardcode in components
└── public/
    └── [logo + favicons]
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `HowItWorks.tsx` |
| Guide components | PascalCase in `guide/` | `guide/AnchorNav.tsx` |
| Page routes | kebab-case folder | `guide/page.tsx` |
| Lib files | camelCase | `links.ts` |
| Spec files | `{feature-name}_spec.md` | `landing-page_spec-2.md` |
| Path alias | `@/*` → `src/` root | `@/components/Footer` |

---

## Build & Scripts

```bash
# Run from src/ directory (Netlify base = "src")
npm run dev      # Dev server — localhost:3000
npm run build    # Production build → .next/
npm run lint     # ESLint + TypeScript checks
```

---

## Deployment

| Setting | Value |
|---|---|
| Platform | Netlify |
| Base dir | `src/` |
| Build command | `npm run build` |
| Publish dir | `.next` |
| Plugin | `@netlify/plugin-nextjs` |
| Branch | `main` (auto-deploy) |
| Live domain | `efn.empowrcic.org` |
| Netlify URL | `empowr-efn.netlify.app` |
| Env vars | None required |
