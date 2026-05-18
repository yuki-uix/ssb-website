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

**Decision: maintain current implementation. Do not add featured treatment to any other card.**

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
