# DEVLOG — empowr-efn

Running log of decisions, session notes, and anything left incomplete.

---

## 2026-09-04 - Stranded close-out PR merged once the branch was unblocked

- PR #1 (`docs/closeout-2026-09-03`) had been open and unmergeable since 09-03 09:04 - no conflict, but the repo ruleset's `update` rule was blocking every merge. Merged after the rule was replaced with `pull_request`
- Reconciled at close-out: the local branch was rebased onto the merged PR. `DEVLOG.md` conflicted (both sides had added a top entry) and both were kept

## 2026-09-03

- **Pushed two commits that had been sitting unpushed since 2026-08-14** (`29ecec2` CLAUDE.md M8 section, `f347899` DEVLOG close-out). Docs-only, no deploy impact — but they had been stranded for 17 days, the same pattern recorded in [[feedback_commits_stranded_unpushed]].
- No code changes in this repo this session; the work was in `Freelancer-Workflow/`.

## 2026-08-14

- Added a `## Skills and Tools Available` section to `CLAUDE.md`, closing a scheduled mwp-health M8 finding — README.md already existed and needed no changes

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

## 2026-05-09 (session 5) — `/guide` page built (8 components incl. AnchorNav, RolesTable, FAQAccordion); shadcn Accordion added; `--color-warning` token; `links.learnMore` repointed from Notion to `/guide`; build clean

---

## 2026-05-09 — Netlify site created and linked (empowr-efn.netlify.app), custom domain efn.empowrcic.org added via Route 53, netlify.toml + plugin-nextjs configured, production build verified clean

## 2026-05-08 (session 3) — Landing page built in full (Hero, HowItWorks, ValuePillars, EligibilityStrip, ToolsHub, Footer); CTA placement and Footer redesigned per spec-2

## 2026-05-08 (session 2) — Next.js 16 + Tailwind v4 + shadcn/ui scaffolded; globals.css brand tokens configured; links.ts created; src/ MWP layout established

## 2026-05-07 (session 1) — MWP structure scaffolded; landing page spec drafted; brand identity doc and Empowr CIC layer CLAUDE.md created
