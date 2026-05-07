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

## Phase Status (as of 2026-05-07)

- Phase 0 (Planning): Complete — MWP docs scaffolded, landing page specced
- Phase 1 (Build): Not started — scaffold app, build landing page, deploy to Netlify
- Phase 2 (DNS): Not started — configure Route 53 CNAME once Netlify deploy is live
- Phase 3 (Expand): Not started — add more tool links as the EFN programme grows

## Still To Do

1. Scaffold Next.js app
2. Build landing page from `planning/specs/landing-page_spec.md`
3. Set up Netlify project and connect to GitHub repo
4. Configure Route 53 DNS — `efn.empowrcic.org` CNAME
5. Update Notion EFN guidebook URL to `efn.empowrcic.org` once live
