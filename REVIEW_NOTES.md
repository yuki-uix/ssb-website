# Content Review Notes

> Issues identified during development. All items originate from the provided brief/outline unless noted.
> Flagged for challenge submission — these discrepancies would reduce user trust in a production context.

---

## 🔴 Critical — Data contradictions that erode credibility

### 1. AI Agent count: brief says 7, only 4 have real content
- Brief states "7 AI Agents in Production" (used in hero badge + homepage metrics)
- Brief only provides content for 4 agents: Shopping Agent, claim.ai, panner.ai, refinery.ai
- Agents 05–07 have no content from the brief
- **UI decision:** Coming Soon cards hidden; hero copy updated to "4 AI Agents" — see `CONTENT_DECISIONS.md`

### 2. SKU count — 4 different numbers across the brief
| Context in brief | Number |
|-----------------|--------|
| Homepage metrics section | `340K+ SKUs ready to order` |
| Technology metrics section | `753K B2B Catalog SKUs` |
| Homepage + Technology metrics | `4.32M products in live catalog / in Database` |
| Shopping Agent feature description | `5M+ SKUs` |
- Figures are undefined relative to each other. Each number likely reflects a different scope (authorized SKUs vs total catalog vs agent-indexed SKUs) but is not labelled as such.

### 3. refinery.ai: dimension count conflict within same entry
- Description field: `"8-dimension listing audit"`
- Bullet point: `"11-dimension listing audit and scoring"`
- Same agent, same brief entry, two different numbers.

### 4. Channel count: metric and copy use different baselines
- Homepage metrics: `"10+ channels operated in-house"`
- ServicesGrid / Pillars copy: `"14+ wholesale distributors/channels"`
- "10+" counts platform channels; "14+" counts wholesale distributors — different things appearing in parallel contexts without explanation.

---

## 🟡 Trust / credibility gaps (brief-level, not frontend)

> These items were identified during a brand-owner-perspective review. They cannot be resolved at the frontend layer — resolution requires business content from SSB.

### 5. Business boundary contradictions
- Site leads with "Not a reseller. Not a 3PL." but services include Amazon 1P (buy-and-resell), Store-in-Store (distribution), JD.com (cross-border operator), and Silent Liquidation (grey-channel clearance)
- "Silent Liquidation" (discreet inventory clearance) conflicts with "MAP enforcement" (brand price protection) — both offered by the same company, creating logical tension for brand clients
- Recommendation: clarify positioning as "multi-modal partner" or define which services are primary vs supplementary

### 6. Agent naming style inconsistency (brief-level)
- `claim.ai` / `panner.ai` / `refinery.ai` use lowercase + `.ai` suffix brand format
- `Shopping Agent` uses plain English (brief-defined, not a typo)
- `Agent 05/06/07` are placeholders
- Three naming conventions in one product family signals the platform isn't fully productised

### 7. No trust infrastructure for B2B conversion
Brief provides no content for:
- About page (founders, team, company history)
- Case studies (Hyland's and Hello Bello are named in Tech page body copy but have no linked evidence)
- Legal: Terms of Service, Privacy Policy
- Credentials: Amazon SPN certification, DUNS/EIN, physical address beyond "DE/NJ/NY"
- Contact: only `ai@supersonicbrick.com` + WeChat `Haoruiiii` — no phone, no company address

### 8. Brand name structure
- Public brand: **Supersonic Supply** (logo, challenge brief)
- Legal entity: **Supersonic Brick LLC** (footer, email domain `supersonicbrick.com`)
- Abbreviation: **SSB** (used throughout body copy)
- This is a normal dba structure (brand vs legal entity), but the meta description originally led with "Supersonic Brick LLC" rather than the brand name — **corrected in `app/layout.tsx`**
