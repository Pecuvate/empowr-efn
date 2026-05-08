# src — Context

The application code for `efn.empowrcic.org`. Next.js 16, App Router, TypeScript, Tailwind v4, shadcn/ui.

---

## Structure

| Folder | Purpose |
|---|---|
| `app/` | Next.js App Router — pages and layouts |
| `components/` | Reusable UI components (PascalCase `.tsx`) |
| `components/ui/` | shadcn/ui base components — do not edit directly |
| `lib/` | Utilities, constants, shared helpers |
| `lib/links.ts` | All external URLs — never hardcode in components |
| `lib/utils.ts` | shadcn utility (`cn`) |
| `planning/` | Feature specs and architectural decision records |

---

## Patterns

- Server Components by default — `"use client"` only where interactivity is needed
- Brand tokens available as Tailwind utilities via `@theme` in `globals.css` (`bg-blue`, `text-cream`, `bg-blue-pale`, etc.)
- shadcn semantic tokens (`bg-background`, `text-muted-foreground`, `border-border`) map to brand values via `:root` in `globals.css`
- All external URLs imported from `lib/links.ts`
- One component per file; components used only once stay in `app/`, shared ones go in `components/`
