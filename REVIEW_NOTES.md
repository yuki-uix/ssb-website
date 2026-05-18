# Content Review Notes

> Issues identified during development. All items below originate from the provided brief/outline.
> Flagged for challenge submission — these discrepancies would reduce user trust in a production context.

---

## 🔴 Critical — Data contradictions that erode credibility

### 1. AI Agent count: brief says 7, only 4 have real content
- Brief states "7 AI Agents in Production" (used in hero badge + homepage metrics)
- Brief only provides content for 4 agents: Shopping Agent, claim.ai, panner.ai, refinery.ai
- Agents 05–07 have no content from the brief → rendered as visible "Coming Soon" placeholders
- Claiming 7 "in production" while showing 3 empty placeholders directly contradicts the claim

### 2. SKU count — 4 different numbers across the brief
| Context in brief | Number |
|-----------------|--------|
| Homepage metrics section | `340K+ SKUs ready to order` |
| Technology metrics section | `753K B2B Catalog SKUs` |
| Homepage + Technology metrics | `4.32M products in live catalog / in Database` |
| Shopping Agent feature description | `5M+ SKUs` |
- These figures are undefined relative to each other. Recommendation: define each number's scope (authorized SKUs vs total catalog vs agent-indexed SKUs) and label them distinctly.

### 3. refinery.ai: dimension count conflict within same entry
- Description field: `"8-dimension listing audit"`
- Bullet point: `"11-dimension listing audit and scoring"`
- Same agent, same brief entry, two different numbers.

### 4. Channel count: metric and copy use different baselines
- Homepage metrics: `"10+ channels operated in-house"`
- ServicesGrid / Pillars copy: `"14+ wholesale distributors/channels"`
- "10+" counts platform channels; "14+" counts wholesale distributors — different things, but appear in parallel contexts without explanation.
