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
- [ ] Scaffold Next.js app (`create-next-app`)
- [ ] Build landing page from `planning/specs/landing-page_spec.md`
- [ ] Set up Netlify project and connect to repo
- [ ] Configure DNS on AWS Route 53 — `efn.empowrcic.org` CNAME to Netlify domain
- [ ] Update Notion EFN guidebook URL once live (currently points to Notion page)
