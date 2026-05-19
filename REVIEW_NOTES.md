# Content Review Notes

> Issues identified during development and brand-owner review.
> Items originate from the provided brief/outline unless noted.
> Preserved as-is per brief; flagged here so evaluators understand these were identified, not missed.

---

## 🔴 P0 — Would block conversion in a live B2B context

### 1. AI Agent count: brief claims 7, only 4 have real content
**Status: Preserved per brief. Not silently fixed.**

- Brief states "7 AI Agents in Production" — used in hero badge, section heading, and homepage metrics
- Brief provides content for 4 agents only: Shopping Agent, claim.ai, panner.ai, refinery.ai
- Agents 05–07 render as "Coming Soon" placeholders with no real content
- A brand evaluating SSB will click through the Technology page. Seeing 3 of 7 agents as empty placeholders directly contradicts the "in Production" claim
- **Recommendation:** Change "7 AI Agents in Production" → "4 AI Agents in Production, 3 in Development"; or suppress the count until all 7 have content. Either requires business sign-off.

### 2. No trust infrastructure for B2B conversion
**Status: Brief provides no content for these. Cannot be resolved at frontend layer.**

A brand serious about handing over inventory and marketplace access will verify before signing:
- **About page:** No founders, team, company history, or LinkedIn presence
- **Customer evidence:** Hyland's and Hello Bello named in Technology page body copy — but no case study page, no testimonials, no "used with permission" attribution. Named customers without supporting evidence read as borrowed credibility
- **Legal:** No Terms of Service, no Privacy Policy (US-operated platform with CCPA exposure)
- **Credentials:** No Amazon SPN certification badge, no DUNS/EIN reference, no physical address (warehouses described as "DE/NJ/NY" with no street address)
- **Contact:** Only `ai@supersonicbrick.com` + WeChat `Haoruiiii` — no phone number, no company address. For a company claiming 33K sqft of owned warehouse, a single WeChat handle as the primary contact erodes all credibility

---

## 🟡 Data contradictions in the brief

### 3. SKU count — 4 different numbers across the brief
| Context | Number |
|---------|--------|
| Homepage metrics | `340K+ SKUs ready to order` |
| Technology metrics | `753K B2B Catalog SKUs` |
| Homepage + Technology metrics | `4.32M products in live catalog / in Database` |
| Shopping Agent description | `5M+ SKUs` |

Each number likely reflects a different scope (authorized SKUs / total catalog / agent-indexed SKUs) but none are labelled as such. Appearing in parallel contexts without explanation, they read as inconsistent data.

### 4. refinery.ai: dimension count conflict within same entry
- Description: `"8-dimension listing audit"`
- Bullet point: `"11-dimension listing audit and scoring"`
- Same agent, same brief entry, two different numbers.

### 5. Channel count: two different baselines
- Homepage metrics: `"10+ channels operated in-house"`
- ServicesGrid / Pillars copy: `"14+ wholesale distributors/channels"`
- "10+" = platform channels; "14+" = wholesale distributors — different scopes appearing in parallel without explanation.

---

## 🟡 Positioning and naming (brief-level)

### 6. Business boundary contradictions
- Opening claim: "Not a reseller. Not a 3PL."
- Services offered: Amazon 1P (buy-and-resell = reseller behaviour), Silent Liquidation (grey-channel clearance), Store-in-Store (distribution), JD.com (cross-border operator)
- "Silent Liquidation" (discreet inventory clearance) conflicts directly with "MAP enforcement" (brand price protection) — both offered by the same company. A brand will notice this tension immediately
- **Recommendation:** Reframe as "multi-modal brand partner" or clearly categorise which services are primary vs supplementary

### 7. Agent naming style inconsistency
- `claim.ai` / `panner.ai` / `refinery.ai` — lowercase + `.ai` suffix brand format
- `Shopping Agent` — plain English phrase (brief-defined, not a typo)
- `Agent 05` / `Agent 06` / `Agent 07` — numeric placeholders
- Three naming conventions within one product family signals the platform is not fully productised

---

## ✅ Resolved

### 8. Brand name in meta description
- **Issue:** `layout.tsx` meta description originally read "Supersonic Brick LLC is..." using the legal entity name rather than the public brand name
- **Resolution:** Updated to "Supersonic Supply is..." — legal entity (Supersonic Brick LLC) is correctly used in footer copyright; brand name (Supersonic Supply) belongs in public-facing meta
