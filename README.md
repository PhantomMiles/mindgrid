# MindGrid

A nonprofit ed-tech platform — free courses, mentors, and community-funded
scholarships. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

**Verified**: `npm run build` and `npx eslint .` both pass clean on this
codebase (checked before delivery).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design system

- **Neumorphism** is the base surface language — `.neu-raised`, `.neu-pressed`,
  `.neu-inset` utility classes in `src/app/globals.css`, used for cards, nav,
  buttons, and inputs.
- **Skeuomorphism** is reserved for three signature elements only, so it reads
  as an intentional accent rather than fighting the neumorphic base:
  - `ProgressDial` — circular gauge with a metal bezel (weekly goal)
  - `Medal` — metallic achievement badge with ribbon
  - `ImpactMeter` — liquid-fill glass tube (donor/impact stats)
- **Bento grid** — `src/components/bento/` — the dashboard is an asymmetric
  grid of differently-sized tiles (`BentoGrid` + `BentoItem` with `colSpan`/
  `rowSpan` props), not a uniform card list.
- **Dark/light mode** — designed as a token pair in `globals.css` (`:root`/
  `.dark` vs `.light`), not an inversion. Toggle lives in the topbar and
  persists to `localStorage`.

All colors are semantic CSS variables (`--bg`, `--surface`, `--accent`, `--gold`,
etc.) — no raw hex codes in components — so retheming means editing tokens in
one place.

## Structure

```
src/
  app/
    layout.tsx          Root shell: fonts, theme provider, sidebar/topbar
    page.tsx             Dashboard (bento grid)
    courses/page.tsx      Course catalog
    globals.css           Design tokens + neumorphic/skeuomorphic utilities
  components/
    ui/                   Base primitives (NeuCard, NeuButton, ProgressDial,
                           ToggleSwitch, Medal, ImpactMeter, CourseCard, ...)
    layout/               Sidebar, Topbar, MobileNav
    bento/                BentoGrid, BentoItem
    dashboard/             Composed dashboard cards
  lib/
    utils.ts               cn() + formatters
    mock-data.ts            Sample data — swap for real API/DB calls
    theme-provider.tsx        Dark/light context
  types/
    index.ts                 Domain types (Course, Learner, Achievement, ...)
```

## Next steps

- Wire `lib/mock-data.ts` up to a real data source (Prisma, Supabase, etc.)
- Add auth (the Sidebar/Topbar assume a signed-in learner)
- Build out `/community`, `/impact`, and `/settings` (currently linked but
  not yet implemented — everything else routes correctly)
