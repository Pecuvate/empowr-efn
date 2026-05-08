# DEVLOG — empowr-efn

Running log of decisions, session notes, and anything left incomplete.

---

## 2026-05-07 (session 1)

**Session summary:**
- Project created at `F:\Projects\Empowr CIC\Empowr Freelancer Network\empowr-efn\`
- Full MWP structure scaffolded: CLAUDE.md, CONTEXT.md, README.md, DEVLOG.md, memory.md, planning workspace
- Landing page spec drafted at `planning/specs/landing-page_spec.md`
- Brand identity doc created at `F:\Projects\Empowr CIC\brand-identity.md` — pulled from `empowr-heroes-nextjs/src/app/globals.css`
- Empowr CIC layer CLAUDE.md created at `F:\Projects\Empowr CIC\CLAUDE.md` — Layer 0.5 for all Empowr CIC projects

**Key decisions:**
- `empowr-efn` is a UI-only hub — no API routes, no auth; all tools are separate builds linked from here
- Plain CSS (no Tailwind) for brand consistency with Heroes
- Primary CTA links to `https://dashboard.empowrcic.org/onboard`
- Programme hub design: homepage is the navigation layer for the full EFN programme; tools added as links as they are built
- Next.js (App Router) chosen for routing flexibility and future-proofing over Vite/React
- Sling integration approach updated: BoldSign webhook triggers a Sling invite link email; freelancer self-onboards — no programmatic user creation needed

**Still outstanding:**
- [x] Scaffold Next.js app (`create-next-app`)
- [ ] Build landing page from `planning/specs/landing-page_spec.md`
- [ ] Set up Netlify project and connect to repo
- [ ] Configure DNS on AWS Route 53 — `efn.empowrcic.org` CNAME to Netlify domain
- [ ] Update Notion EFN guidebook URL once live (currently points to Notion page)

---

## 2026-05-08 (session 2)

**Session summary:**
- Next.js 16 app scaffolded (TypeScript, App Router, Tailwind v4, ESLint)
- shadcn/ui v4 initialised (Radix variant); Button and Card components installed
- `globals.css` configured with brand tokens via `@theme`; shadcn semantic variables overridden with brand values in `:root`
- Geist font removed; Nunito (weights 400, 600, 800, 900) set as `--font-sans` via `next/font/google`
- `src/lib/links.ts` created — centralised external URLs (onboard, contact, terms, privacy)
- `package.json` name corrected from `efn-scaffold` to `empowr-efn`
- MWP structure corrected: all Next.js scaffold files moved into `src/` so `src/` is the framework root; `empowr-efn/` root holds only MWP context and workspace folders
- `src/CONTEXT.md` created — describes the src workspace (structure, patterns, conventions)
- `ops/` workspace stubbed with `CONTEXT.md` and `netlify.toml`
- `netlify.toml` drafted in `ops/` — base dir `src`, publish `src/.next`, includes `@netlify/plugin-nextjs`
- `tsconfig.json` path alias updated: `@/*` → `./*` (relative to `src/` root)
- `components.json` CSS path updated: `app/globals.css` (relative to `src/` root)
- Build and type-check pass cleanly from `src/`

**Key decisions:**
- Nunito variable set to `--font-sans` so it integrates directly with shadcn's `@theme inline` font system
- Conflicting brand token names (`muted`, `card`, `border`) resolved by removing them from `@theme` and mapping through shadcn's `:root` with brand hex values
- Dark mode block removed — brand is light-mode only
- Next.js project root set to `src/` per MWP model — all npm commands run from `src/`
- `netlify.toml` lives in `ops/` until deploy; copy to project root when connecting Netlify

**Still outstanding:**
- [ ] Build landing page from `planning/specs/landing-page_spec.md`
- [ ] Confirm LegalHub URLs for T&Cs and Privacy Policy (currently placeholders in `links.ts`)
- [ ] Set up Netlify project and connect to repo
- [ ] Configure DNS on AWS Route 53 — `efn.empowrcic.org` CNAME to Netlify domain
- [ ] Update Notion EFN guidebook URL once live
