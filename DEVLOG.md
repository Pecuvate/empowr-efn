# DEVLOG — empowr-efn

Running log of decisions, session notes, and anything left incomplete.

---

## 2026-07-04

- Diagnosed broken "Join the Network" CTA — root cause was dashboard migration on 2026-06-14 (EFN dashboard moved from `dashboard.empowrcic.org` to `efn-dashboard.empowrcic.org`) that was never reflected in the EFN site
- Fixed `src/lib/links.ts`: `onboard` URL updated from `dashboard.empowrcic.org/onboard` → `efn-dashboard.empowrcic.org/onboard`
- Updated `CLAUDE.md` and `CONTEXT.md` to reference the new domain; committed and pushed to main (Netlify auto-deployed)
- Cloudflare Turnstile "cannot connect" on onboarding form resolved by user adding `efn-dashboard.empowrcic.org` to the Turnstile site key's allowed hostnames in Cloudflare dashboard

---

## 2026-05-10 (session 6)

**Session summary:**
- Mobile-first pass across landing page components: reduced vertical padding, responsive type scale, full-width CTAs on Hero, `sm:grid-cols-2` intermediate breakpoint on HowItWorks
- EligibilityStrip bubbles made full-width on mobile (`w-full sm:w-auto`) for consistent sizing
- AnchorNav on /guide replaced horizontal scroll with `flex-wrap justify-center` for mobile legibility
- StepList circle reduced from `w-8 h-8` to `w-6 h-6`; alignment fine-tuned to `mt-[3px]`
- HowItWorks step 4 (home page only): "manager" → "admin team will reach out via Sling"
- Guide joining steps: HMRC registration note added to step 2; Xero contact record noted in step 3; step 4 updated to admin team + Sling
- All "manager" references across guide page and FAQAccordion updated to "admin team"

**Key decisions:**
- Copy additions (HMRC, Xero) applied to /guide only — home page HowItWorks kept brief
- "Manager" terminology removed entirely — all scheduling/management handled by admin team via Sling; Sling mentioned briefly pending full process confirmation from team

**Still outstanding:**
- [ ] Confirm exact Sling management process with team; expand copy if needed

---

## 2026-05-09 (session 5)

**Session summary:**
- `/guide` page built — 8 components: GuideHeader, AnchorNav, GuideSection, RolesTable, StepList, Callout, FAQAccordion, CTAStrip
- shadcn Accordion installed (Base UI variant); `multiple={false}` used for single-open behaviour
- `--color-warning` token added to globals.css for amber callout borders
- `links.learnMore` updated from Notion URL to `/guide`; Hero and Footer updated to remove `target="_blank"` (now internal link)
- Production build clean — `/guide` statically prerendered

**Still outstanding:**
- [x] Commit and deploy

---

## 2026-05-09 (session 4)

**Session summary:**
- `netlify.toml` created at repo root — corrected `publish = ".next"` (relative to base `src/`, not repo root)
- `@netlify/plugin-nextjs` installed as devDependency in `src/`
- Production build confirmed clean — fully static output at `/` and `/_not-found`
- Netlify site created (`empowr-efn.netlify.app`) and linked to `Pecuvate/empowr-efn` on GitHub
- Netlify GitHub App authorised for all repos on Pecuvate account — no manual per-project step needed going forward
- Custom domain `efn.empowrcic.org` added in Netlify; CNAME `efn → empowr-efn.netlify.app` added in Route 53
- SSL provisioning in progress — site will be live at `https://efn.empowrcic.org` once complete

**Still outstanding:**
- [x] Update Notion EFN guidebook URL once live — replaced by /guide page (see Session 5)

---

## 2026-05-08 (session 3) — Landing page built in full (Hero, HowItWorks, ValuePillars, EligibilityStrip, ToolsHub, Footer); CTA placement and Footer redesigned per spec-2

## 2026-05-08 (session 2) — Next.js 16 + Tailwind v4 + shadcn/ui scaffolded; globals.css brand tokens configured; links.ts created; src/ MWP layout established

## 2026-05-07 (session 1) — MWP structure scaffolded; landing page spec drafted; brand identity doc and Empowr CIC layer CLAUDE.md created
