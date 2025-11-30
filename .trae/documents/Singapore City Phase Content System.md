## Overview
Implement a phase-based content display system in the existing Next.js 14 + React + Tailwind app, aligning with Singapore city branding, accessible, responsive, and route-driven so browser navigation works naturally.

## Architecture
- App Router pages for phases: `app/phases/[slug]/page.tsx` with `app/phases/layout.tsx`
- Central data model: `data/phases.ts` exporting typed phase list (id, slug, title, description, metadata, color, assets)
- Shared UI: `components/PhaseHeader.tsx`, `components/PhaseProgress.tsx`, `components/PhaseNav.tsx`, `components/PhaseCard.tsx`
- Reuse existing components (`Phase1`, `Phase2`, `Phase4`) by migrating their content into the new structure; keep `Navigation` and `Footer`

## Routing
- Define dynamic route `phases/[slug]` to render content by phase
- Home (`app/page.tsx`) links to phases and shows an overview grid
- Preserve browser back/forward; support internal next/prev via `PhaseNav`

## Data Model
- `Phase`: `{ id, slug, name, shortLabel, description, meta: {seoTitle, seoDescription}, theme: {colorKey}, sections: [{title, body, media}] }`
- Map `theme.colorKey` to Tailwind palette (phase1, phase2, phase4) set in `tailwind.config.js`
- Provide canonical order in `phases` list (for progress and next/prev)

## UI Components
- `PhaseHeader`: phase title, short label, description, themed banner with clear visual separation
- `PhaseProgress`: step indicator (current/total) + progress bar with accessible labels
- `PhaseNav`: previous/next buttons, keyboard navigation, and breadcrumb link back to overview
- `PhaseCard`: consistent content blocks per section; supports images, maps, and text
- Integrate `TabNavigation` to route-based tabs (replace custom event with `Link` to `/phases/[slug]`)

## Styling & Branding
- Use existing brand colors: `phase1`, `phase2`, `phase4`; keep `#ff6b35` CTA and `#6b5740` brand accents
- Consistent typography: `font-sans` for body, `font-serif` for headings; reuse logo box motif in headers
- Add clear phase separators using themed top borders, background tints, and spacing

## Navigation Controls
- Top `Navigation` remains; add `PhaseNav` within phase pages
- Sticky bottom tabs (`TabNavigation`) updated to use routing for forward/back and direct phase access
- Keyboard: ArrowLeft/ArrowRight to navigate phases; focus management on mount

## Progress Indicators
- Stepper at top: "Phase X of Y" with dots and a progress bar
- Color-coded by phase theme; ARIA labels describe progress

## Accessibility
- Semantic landmarks: `main`, `nav`, `header`
- ARIA roles/labels for progress, navigation, and loading indicators
- Focus visible styles; tab order; skip-to-content link
- Respect `prefers-reduced-motion`; ensure contrast ratios per brand palette

## Transitions & Loading
- Client-side transitions using CSS (Tailwind transitions) with reduced motion fallback
- Route-level loading UI: `app/phases/[slug]/loading.tsx` with skeletons/spinners
- Use `next/dynamic` for heavy components (maps/gallery) with a `loading` component

## Responsive Design
- Tailwind responsive utilities (`sm`, `md`, `lg`, `xl`) for grids and headers
- Ensure sticky navs behave on mobile; test 360px–4k widths

## SEO & Metadata
- `generateMetadata` in `app/phases/[slug]/page.tsx` using `phase.meta`
- Canonical URLs per phase; descriptive titles and descriptions

## State Management
- Minimal local state; derive from route + `phases` config
- Keep global app stateless; no external state libraries

## Implementation Steps
1. Create `data/phases.ts` with full phase list and themes
2. Add `app/phases/layout.tsx` with themed container and `PhaseProgress`
3. Add `app/phases/[slug]/page.tsx` to render content by slug and `generateMetadata`
4. Add `app/phases/[slug]/loading.tsx` for skeleton/loader
5. Implement `components/PhaseHeader.tsx`, `PhaseNav.tsx`, `PhaseProgress.tsx`, `PhaseCard.tsx`
6. Migrate existing `Phase1`, `Phase2`, `Phase4` content into `sections` within `phases`
7. Update `components/TabNavigation.tsx` to use `next/link` routing; add prev/next logic
8. Update `app/page.tsx` to show an overview grid of phases with links
9. Ensure color themes exist in `tailwind.config.js`; add missing brand tokens if needed
10. Add accessibility: ARIA labels, focus management, reduced motion checks
11. Add simple unit coverage for helpers (if test infra added later); manual verification steps

## Verification
- Run dev server and navigate across phases; confirm browser back/forward works
- Validate responsiveness at breakpoints; check color contrast
- Test keyboard navigation and screen reader labels
- Simulate slow network to confirm loading indicators

## Risks & Alternatives
- If new routes are undesirable, implement single-page phase switching with URL query state
- Avoid new libraries; stick to React + Tailwind to minimize footprint

Please review and confirm. Once approved, I will implement the files and refactors described above, wire up routing, and verify functionality end-to-end.