# ops — Context

Deployment and DNS configuration for `efn.empowrcic.org`.

---

## Structure

| Folder | Purpose |
|---|---|
| `scripts/` | One-off deployment and DNS scripts |

---

## Netlify

`netlify.toml` lives at the **repo root** (`empowr-efn/netlify.toml`) — Netlify requires it there as its entry point. It sets `base = "src"`, `publish = ".next"`, and loads `@netlify/plugin-nextjs`.

---

## Outstanding

- [ ] Connect repo to Netlify via dashboard
- [ ] Configure DNS on AWS Route 53 — `efn.empowrcic.org` CNAME to Netlify domain
