# empowr-efn — Claude Code Rules

`efn.empowrcic.org` — the Empowr Freelancer Network programme hub. Lightweight Next.js site; introduces the EFN and links out to admin tools built in separate projects.

Inherits from `F:\Projects\Empowr CIC\CLAUDE.md` and `F:\Projects\CLAUDE.md`. This file is the map — workspace context lives in each folder's CONTEXT.md.

---

## Routing

| Task | Workspace | Read first |
|---|---|---|
| Landing page or any page build | `planning/specs/` | relevant spec in `planning/specs/` |
| Deployment or DNS | `ops/` | `ops/CONTEXT.md` |
| Architectural decisions | `planning/decisions/` | relevant decision record |

---

## Constraints

- Brand must match `F:\Projects\Empowr CIC\brand-identity.md` exactly — no new colours or fonts
- Plain CSS with custom properties — no Tailwind (consistent with Heroes codebase)
- Primary CTA "Join the Network" links to `https://dashboard.empowrcic.org/onboard`
- No back-end logic in this project — UI-only hub; API routes belong in the dashboard
- Do not add features beyond what is specced in `planning/specs/` before build review
- No form handling — all forms live in the dashboard

---

## File Placement

| File type | Goes in |
|---|---|
| Feature specs | `planning/specs/` |
| Architectural decision records | `planning/decisions/` |
| Deployment and DNS scripts | `ops/scripts/` |
| Shared CSS tokens | `src/app/globals.css` |
| Reusable UI components | `src/components/` |
| Page files | `src/app/` (Next.js App Router) |

---

## Token Management

Do NOT load unless the task requires it:
- `planning/decisions/` — only when reviewing or recording architectural decisions
- `docs/` — only when task involves integration documentation
- `ops/` — only when deploying or running scripts

---

## Naming

| Thing | Convention |
|---|---|
| Page files | kebab-case, `.tsx` |
| Component files | PascalCase, `.tsx` |
| CSS files | kebab-case, `.css` |
| Script files | kebab-case, `.mjs` |
| Spec files | `{feature-name}_spec.md` |
