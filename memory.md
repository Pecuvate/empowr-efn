# Memory — empowr-efn

**2026-09-04 — PR #1 merged; local checkout deliberately left behind.** The close-out PR had been unmergeable since 09-03 09:04 — not a conflict, but the ruleset's `update` rule blocking every merge. **The local repo is 1 commit behind with `memory.md` modified locally *and* changed by that PR**, plus local edits to `docs/CONTEXT.md` and `docs/system-flow.md`. Pulling will collide. Reconcile manually before doing anything else here.

Persistent project memory. Read on session start. Update at session close before committing.

**GitHub state (2026-09-03):** the repository is public at `PecuvateOrg/empowr-efn`; production remains `main` with Netlify auto-deploy.

---

## Pre-Close Checklist (mandatory — do before every commit)

1. Update `DEVLOG.md` — dated entry with session summary, key decisions, remaining to-dos
2. Update this file (`memory.md`) — bring it in line with what changed this session
3. Run `git status` and `git diff` — review every changed file
4. Confirm no secrets, credentials, or `.env` files are staged
5. Check `.env.local` is gitignored and not tracked
6. Confirm no stray debug files or unintended changes
7. Commit and push

---

## Phase Status (as of 2026-05-10)

- Phase 0 (Planning): Complete
- Phase 1 (Build): Complete — landing page, /guide page, mobile optimisation all done
- Phase 2 (DNS): Complete — `efn.empowrcic.org` live on Netlify + Route 53
- Phase 3 (Expand): Not started — add more tool links as EFN programme grows

## Still To Do

1. Confirm exact Sling management process with team — expand copy on home page and /guide if needed

## Key Links (live in `src/lib/links.ts`)

- Onboard: `https://efn-dashboard.empowrcic.org/onboard` — **`dashboard.empowrcic.org` is DEAD** (does not resolve) since the 2026-06-14 dashboard migration. `links.ts` was corrected on 2026-07-04; this file still named the dead host until 2026-09-03.
- Learn More: `/guide` (internal)
- Terms: `https://legalhub.pecuvate.com/share/empowr/empowr-efn-terms-and-conditions`
- Privacy: `https://legalhub.pecuvate.com/share/empowr/empowr-efn-privacy-policy`

## Terminology

- "Manager" has been removed from all copy — use "admin team" throughout
- Sling is the scheduling platform; all shift management goes through it via the admin team
