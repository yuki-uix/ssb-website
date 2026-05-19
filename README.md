# SSB Website — UI Challenge Submission

Marketing website for **Supersonic Supply (SSB)**, a next-generation US brand distributor. Built as a front-end engineering and product thinking challenge. **[→ Live Demo](https://ssb-website-three.vercel.app/)**

![Homepage Desktop](./docs/screenshot-desktop.png)

---

## Pages Delivered

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ |
| For Brands | `/for-brands` | ✅ |
| Technology | `/technology` | ✅ |
| Contact | `/contact` | ✅ |

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

## Trade-offs

### Shopping Agent mockup: honesty over wow factor
The mockup uses interactive-looking elements (search bar, results list, "Order Now"). Two options: (a) add micro-interactions and switchable query presets to make it feel alive, or (b) clearly frame it as a concept preview and remove the false affordances.

Chose (b) — in a B2B context, a "broken" interactive element damages credibility more than a clearly-labelled static demo. The label `Preview · Concept Demo` and a static search bar cost nothing and prevent the "why doesn't this work?" moment.

### Mobile: hiding the Shopping Agent mockup
The mockup is part of a two-column hero composition on desktop. On mobile (single column), it appears *after* the CTA with no compositional context — a static, non-interactive panel the user may expect to interact with. The hero narrative is complete at the CTA; the mockup is additive on larger screens, not essential on mobile.

Hiding it on mobile (`hidden md:flex`) was chosen over a stripped-down mobile version to avoid a half-finished feel on the most-used viewport. Documented in `CONTENT_DECISIONS.md`.

### ServicesGrid: equal-width 3-col over 3+1 col-span layout
Initial implementation gave "US Full-Channel E-commerce" a `col-span-2` at the tablet breakpoint to signal its importance. Design review flagged this as a structural error — content volume doesn't justify extra width, and the imbalanced layout read as a CSS mistake rather than intentional hierarchy.

Revised to equal-width 3-col grid. The blue top accent line (`inset 0 2px 0 #3B82F6`) carries the "featured" signal without changing card dimensions. Signal through colour, not structure.

### AnimatedStat: fallback-first counter
`useMotionValue(0)` as the initial state meant any IntersectionObserver miss — slow connection, SSR, mid-page navigation — would leave the metric stuck at "0". Changed to `useState(numericValue)` with framer-motion's imperative `animate()` API: the correct number is always visible, and the count-up animation is a progressive enhancement, not a requirement.

### Brief data inconsistencies: document, don't silently fix
The source brief contained four distinct SKU figures across different pages (340K / 753K / 4.32M / 5M+), a conflicting AI agent count (7 claimed, 4 with real content), and an internal contradiction in refinery.ai's dimension count (8 vs 11). These were documented in `REVIEW_NOTES.md` rather than silently corrected — the numbers originate from the business and any change requires business verification, not a frontend judgment call.

---

## What I'd Do Next

**1. Homepage narrative restructure (JTBD/PAS)**
The current homepage lists capabilities. A stronger structure leads with the customer's problem: "Your brand is on 14 channels. You control none of them." — then presents SSB as the answer, backed by the metrics as proof, with the Shopping Agent as the concrete demonstration. This is the structure Stripe, Linear, and Vercel use: problem → approach → evidence → product → CTA. The current order buries the "why this matters" until the reader has already disengaged.

**2. Domain-specific visual identity**
The current visual language (dark background, blue accents, geometric grid) could belong to any B2B SaaS. SSB is a physical-goods distributor — warehouses, logistics networks, cross-channel flows. A faint network topology illustration (5–8% opacity, nodes = channels, edges = logistics paths) as the Hero background would anchor the brand in its actual domain without being literal or heavy-handed.

**3. Hero typography with a point of view**
Inter/Geist is the default B2B SaaS typeface. Pairing a variable serif (Instrument Serif, Fraunces) for the H1 with a sans-serif body would give the brand a typographic identity that's harder to copy and easier to remember. Risk: needs validation against the current token system and loading budget.

**4. Lighthouse to 90+ across all four metrics**
Current Lighthouse results are unverified at submission time. Priority fixes would be: image sizing optimisation (Next.js `<Image>` sizes prop), reducing unused JavaScript from animation libraries, and ensuring all interactive elements have accessible labels. Target: 90+ Performance, 95+ Accessibility.

**5. Shopping Agent: switchable query presets**
Instead of one static query, three preset buttons ("Anti-aging under $15 B2B" / "Wireless earbuds bulk Q4" / "Kids toys MOQ 24") each map to different hardcoded result sets. The mockup stays honest (clearly labelled as a demo) but becomes a narrative tool — the evaluator can see how the agent would handle different sourcing scenarios. This is the version I'd ship if the goal were a live product page rather than a challenge submission.

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

## QA Sign-off

### Verified breakpoints
| Breakpoint | Width | Result |
|------------|-------|--------|
| Mobile | 375px | ✅ Pass |
| Tablet | 768px | ✅ Pass |
| Desktop | 1440px | ✅ Pass |
| Legacy mobile | 320px | ⚠️ Not supported (below minimum) |

### Lighthouse (production — `ssb-website-three.vercel.app`)

| Category | Score |
|----------|-------|
| Performance | 91 ✅ |
| Accessibility | 96 ✅ |
| Best Practices | 100 ✅ |
| SEO | 100 ✅ |

Raw report: [`docs/lighthouse.json`](./docs/lighthouse.json)

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
- **Channel count:** "10+ channels" (metrics) vs "14+ wholesale distributors" (copy) refer to different things but appear in parallel contexts without explanation.

These are documented rather than silently corrected, as the numbers originate from the brief and any change would require business verification.

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
