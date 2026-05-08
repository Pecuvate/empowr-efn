# Memory — empowr-efn

Persistent project memory. Read on session start. Update at session close before committing.

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

## Phase Status (as of 2026-05-08)

- Phase 0 (Planning): Complete — MWP docs scaffolded, landing page specced
- Phase 1 (Build): Complete — landing page built and reviewed; all components done
- Phase 2 (DNS): Not started — configure Route 53 CNAME once Netlify deploy is live
- Phase 3 (Expand): Not started — add more tool links as the EFN programme grows

## Still To Do

1. Set up Netlify project and connect to GitHub repo
2. Configure Route 53 DNS — `efn.empowrcic.org` CNAME
3. Update Notion EFN guidebook URL to `efn.empowrcic.org` once live

## Key Links (live in `src/lib/links.ts`)

- Onboard: `https://dashboard.empowrcic.org/onboard`
- Learn More: Notion EFN page (see `links.ts`)
- Terms: `https://legalhub.pecuvate.com/share/empowr/empowr-efn-terms-and-conditions`
- Privacy: `https://legalhub.pecuvate.com/share/empowr/empowr-efn-privacy-policy`
