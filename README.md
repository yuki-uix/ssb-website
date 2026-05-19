# SSB Website — UI Challenge Submission

Marketing website for **Supersonic Supply (SSB)**, a next-generation US brand distributor. Built as a front-end engineering and product thinking challenge.

---

## Live Demo

**https://ssb-website-three.vercel.app/**

---

## Pages Delivered

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ |
| For Brands | `/for-brands` | ✅ |
| Technology | `/technology` | ✅ |
| Contact | `/contact` | ✅ |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Recommended verification breakpoints** (Chrome DevTools):
```
375px → Mobile
768px → Tablet
1440px → Desktop
```

**Type check:**
```bash
npx tsc --noEmit   # zero errors at submission
```

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 15 (App Router) | Per challenge spec |
| Language | TypeScript | Type safety, zero `tsc` errors enforced |
| Styling | Tailwind CSS + CSS custom properties | Utility classes + design token system |
| Animation | Framer Motion | `useAnimationFrame` physics loop, `AnimatePresence` |
| Icons | Lucide React | Consistent stroke-weight icon system |

---

## Delivered Epics

### E1–E3 — Foundation & Pages
- Global design system: color hierarchy, typography scale (`clamp()`-based tokens), spacing
- Navbar with active state, desktop nav, and mobile hamburger overlay
- Homepage: Hero, Metrics Bar, Pillars, CTA
- For Brands: Hero with bouncing physics orbs, Services Grid, CTA
- Technology: Hero, Metrics Bar, AI Agent Cards, CTA
- Contact: Form page with ambient glow treatment

### E4 — Interactions & Polish
- `useBouncingOrb` — custom hook using `useAnimationFrame` + velocity vector wall-reflection physics; pauses on `prefers-reduced-motion`
- `AnimatePresence` hamburger overlay with Escape key, scroll lock, route-change auto-close
- Animated gradient text, floating glow, staggered `fadeUp` entrance animations
- `GradientButton` shared component with `size` and `className` props

### E5 — Responsive Verification
- All pages verified at 375px / 768px / 1440px
- Shopping Agent mockup: hidden on mobile (UX decision), single-card on tablet, full 3-card on desktop
- ServicesGrid: 3+1 layout on desktop, orphan-free tablet layout via `mdColSpan`
- Mobile: `items-start` layout, balanced padding, full-width CTA button
- Hero subheadline tokens unified across pages (`var(--text-body)`)
- Contact page: blue ambient glow top + bottom, consistent border language

---

## Key Decisions

### Why only one featured card in ServicesGrid?
Visual "featured" treatment signals "this is our most important thing." US Full-Channel E-commerce defines *what SSB is* — a fully in-house, full-channel operator. Brand Protection defines *how SSB operates*. Elevating both would dilute the primary message.
→ Full rationale in [`CONTENT_DECISIONS.md`](./CONTENT_DECISIONS.md)

### Why hide the Shopping Agent mockup on mobile?
On desktop/tablet, the mockup is part of a two-column hero composition. On mobile (single column), it appears *after* the CTA with no compositional context — a static, non-interactive UI panel that users may expect to interact with. The hero narrative is complete at the CTA; the mockup is additive on larger screens.
→ Full rationale in [`CONTENT_DECISIONS.md`](./CONTENT_DECISIONS.md)

### Why `useBouncingOrb` instead of a CSS animation?
CSS `@keyframes` can't do wall-reflection physics. The hook uses `useAnimationFrame` with velocity vectors and boundary detection, delta-capped at 50ms to prevent jumps after tab switches. Automatically pauses via `useReducedMotion()`.

### ServicesGrid: single source of truth
Original implementation had content hardcoded in the component, duplicating `BRAND_SERVICES` in `lib/constants.ts`. Fixed so the component reads from the constant — titles and descriptions are sourced from `BRAND_SERVICES`, icons and layout config remain component-level decisions.

---

## QA Sign-off

### Verified breakpoints
| Breakpoint | Width | Result |
|------------|-------|--------|
| Mobile | 375px | ✅ Pass |
| Tablet | 768px | ✅ Pass |
| Desktop | 1440px | ✅ Pass |
| Legacy mobile | 320px | ⚠️ Not supported (below minimum) |

### Known limitations
- **Minimum supported width: 375px.** 320px (iPhone SE 1st gen, 2016) is not in scope — market share < 1% for target B2B audience.
- **Touch hover states.** `onMouseEnter` / `onMouseLeave` handlers do not fire on touch devices. Cards and nav links will not show hover styles on mobile. This is a browser limitation, not a bug.
- **Agent 05–07 placeholder content.** Brief provided content for 4 AI agents only; 3 entries are labeled "Coming Soon" per the source material.
- **TypeScript:** `npx tsc --noEmit` passes with zero errors.

---

## Brief Observations

During development, several inconsistencies were identified in the source brief. These are documented in [`REVIEW_NOTES.md`](./REVIEW_NOTES.md) and flagged here as items that would reduce user trust in a production context:

- **AI Agent count:** Brief states "7 in production" but provides content for 4; 3 are placeholders.
- **SKU figures:** Four different numbers appear across pages (340K / 753K / 4.32M / 5M+) without defined relationships.
- **refinery.ai:** "8-dimension" in description, "11-dimension" in bullets — same entry.
- **Channel count:** "10+ channels" (metrics) vs "14+ wholesale distributors" (copy) refer to different things but appear in parallel contexts.

These are documented rather than silently corrected, as the numbers originate from the brief and any change would require business verification.
