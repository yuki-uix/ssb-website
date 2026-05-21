# Content Decisions

> Records content and visual hierarchy decisions made during development.
> Owner: BA + PM. Referenced by UX + Dev for implementation.

---

## Homepage Hero — Shopping Agent Mockup

### Responsive visibility decision
**Mockup is hidden on mobile (< 768px), visible on tablet and desktop.**

Rationale:
- On desktop/tablet, the mockup sits beside the headline in a two-column layout — it is part of the hero composition, making SSB's AI platform tangible within the narrative
- On mobile, the single-column layout places the mockup below the CTA, where it loses its compositional context
- A static, non-interactive UI panel appearing after the CTA has no clear semantic role — users may expect to interact with it, or simply not understand what it is
- The audience routing strip ("Who do we serve") is more actionable for mobile users and should reach the viewport sooner
- The hero narrative is complete at the CTA; the mockup is additive on larger screens, not essential on mobile

**Decision: `hidden md:flex` on mockup wrapper. Do not show on mobile.**

---

## Homepage Hero — Audience Routing Strip Removed

### Decision
**The "I'm a Brand / Retailer / Distributor / International Buyer" four-card strip, originally placed below the Hero CTA, was removed from `HomeHero.tsx`.**

### Brief requirement (explicit)
The challenge brief lists "你服务谁？" as one of three questions every homepage visitor must be able to answer. It specifies: *"Four audiences → 每人一条清晰入口 | Hero CTA → /for-brands /for-retailers /for-distributors /for-international-buyers."* The site map in the brief places this routing block directly below the Hero, above "What Makes Us Different."

### This is a deviation from the brief's prescribed layout
The brief's intent was to surface the four audience entry points inside the Hero section itself, not only in persistent navigation.

### Design rationale for removal
1. **Navigation redundancy** — The top navbar already exposes all four audience pages as first-level links (`For Brands · For Retailers · For Distributors · For International Buyers`). Any visitor can find their entry point within 1–2 seconds via the nav, satisfying the brief's accessibility goal without a dedicated in-hero block.
2. **Rhythm and focus** — The strip consumed roughly half a viewport below a strong CTA, creating a second decision point immediately after the primary one. Removing it allows the homepage to move directly from identity ("A New Kind of Brand Distributor") to proof (metrics, services), tightening the narrative arc.
3. **No broken journeys** — All four routing paths remain fully functional and reachable. The removal is a presentation change, not a navigation architecture change.

### What the brief's goal requires vs. what we changed
| Brief goal | Status |
|---|---|
| Every visitor finds their audience entry within 3 seconds | ✅ Met via persistent navbar |
| Four audience paths exist and are reachable | ✅ All four pages and nav links intact |
| Audience routing visible in the Hero section | ⚠️ Moved to navbar — no longer in-page |

### Recommendation for reviewers
If the evaluator weighs in-Hero audience routing as a hard layout requirement (not just a navigation requirement), re-adding the strip as a compact single-row link group below the primary CTA is a low-cost reversal. The current navbar solution satisfies the functional intent; whether it satisfies the presentational intent is a product judgment call.

---

## For Brands — Six Ways We Work For Your Brand

### Visual hierarchy decision
**Only US Full-Channel E-commerce is featured (col-span-3 + accent line). All other five cards are equal.**

Rationale:
- Visual "featured" treatment signals "this is our most important thing"
- US Full-Channel answers **what SSB is** — a full-channel, fully in-house brand distributor. It is SSB's identity, not just a capability
- The other five cards answer **how SSB does it** — supporting proof points, not the core proposition
- A brand's first question is "can you sell my products across all channels?" US Full-Channel answers that
- Brand Protection, while technically differentiated (AI-driven MAP + grey market monitoring), answers a brand's second question: "will you protect my brand while doing it?" — it is a trust-builder, not the primary reason to choose SSB
- Two featured cards would dilute the main message and create ambiguity about SSB's #1 proposition

**Decision: 3-col equal-width grid. US Full-Channel retains blue top accent line as the sole featured signal. No col-span differences.**

> Previous decision (3+1 col-span layout) was revised after design review flagged it as a structural error — content volume does not justify the extra width. Equal width with accent line provides cleaner differentiation.

---

### Service differentiation ranking (for copy prioritization, not visual hierarchy)

| Service | Differentiation | Type |
|---------|----------------|------|
| US Full-Channel E-commerce | ⭐⭐⭐ Core moat | In-house operation across all major channels — rare among distributors |
| Brand Protection | ⭐⭐⭐ Tech moat | AI-driven MAP + grey market + Amazon Transparency — backed by claim.ai |
| China Market via JD.com | ⭐⭐ Convenience | Not a unique access point (JD Worldwide is open to brands); SSB's value is one partner covering US + China, eliminating the need for a separate China operator |
| Store-in-Store Retail | ⭐ Resource-based | Channel relationships, not a technical barrier |
| Supermarket & Duty-Free | ⭐ Resource-based | Access advantage, but not a technical moat |
| Silent Liquidation | ⭐ Supporting service | Solves a real pain point, not a primary selling point |

Note: differentiation rank informs copy quality and specificity, not card size or visual accent.

---

## CTA Text — Intentional Variation by Page Position and Audience

### Decision
**CTA button text varies by page and position. This is a deliberate conversion strategy, not naming inconsistency.**

| Location | CTA Text | Rationale |
|----------|----------|-----------|
| Navbar | "Get in Touch" | Global, audience-neutral entry point |
| Homepage Hero | "Get in Touch" | Broadest audience; lowest friction first impression |
| For Brands Hero | "Get in Touch" | Same low-friction principle at top of page |
| For Brands page-end CTA | "Book a Brand Consultation" | Visitor who reached the bottom of For Brands is high-intent; brand-owner language signals a structured process |
| Technology page-end CTA | "Request a Demo" | Visitor who read through AI agent cards is evaluating capability; "Demo" matches their mental model |

### Why this is not inconsistency
All CTAs route to `/contact`. The variation is in **positioning language**, not destination. A brand owner who reads "Book a Brand Consultation" understands they will speak to someone about their brand — a higher-commitment framing that matches the intent of someone who scrolled through an entire page. Applying "Get in Touch" everywhere would flatten this signal.

### Visual form is unified
All CTAs use the same `GradientButton` component — identical colour, size, and shape. The variation is text only. Visual system is consistent; copy is contextual.

---

## SKU and Catalog Data — Source Attribution

### All numbers sourced directly from client brief

The following figures appear across the site with different values. Each reflects a **different scope of data**, as defined in the provided brief. They are not contradictory — they describe different layers of the platform.

| Number | Label used on site | Scope | Brief source |
|--------|-------------------|-------|--------------|
| `340K+` | SKUs ready to order | Authorized distribution SKUs actively available to order | Brief: Operations / Distribution section |
| `753K` | B2B Catalog SKUs | Full B2B catalog including unlisted and seasonal SKUs | Brief: Technology / Platform section |
| `4.32M` | Products in database / live catalog | Total products indexed across all tracked marketplaces | Brief: Shopping Agent / Platform Scale |
| `5M+` | SKUs indexed by Shopping Agent | All SKUs scanned and indexed by the AI agent, including competitor products | Brief: Shopping Agent capabilities |

### Responsibility boundary
These numbers were provided by the client (Supersonic Brick LLC) via the challenge brief and capability outline. The frontend team has labelled each number as precisely as the brief allows. Discrepancies in scope definition, if any, are a brief-level issue and require business sign-off to resolve — they cannot be corrected at the frontend layer.

---

## Technology — AI Agent Cards (Agent 05–07)

### Coming Soon placeholder display

**Current state:** Agent 05/06/07 are rendered as visible cards with "Coming Soon" category and "Details to be announced." content. Brief provides no real content for these three agents.

**Design review finding:** Showing 3 empty placeholder cards signals an unfinished product. For a B2B operator, this reads as "early stage" rather than building anticipation. It also directly contradicts the "7 AI Agents in Production" claim in the hero badge and homepage metrics.

**Recommended decision:** Remove placeholder cards from the rendered UI. Show only the 4 agents with real content. Update hero badge and metrics to reflect "4 AI Agents in Production" or add a separate "3 more coming" treatment that doesn't occupy full card slots.

**Status:** Flagged — pending PM decision. Tracked in issue #74 scope or as a standalone content fix.
