<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Design System Rules — MUST CHECK BEFORE WRITING ANY COMPONENT

Before writing any color value, font size, or icon in a component, you MUST open and consult:

**`/Users/yuki/Documents/callenge-ui/agile/ux/design_decisions.md`**

### Color contrast — non-negotiable

On dark background (`#0D0F12`), text colors MUST follow this hierarchy:

| Role | Hex | Usage |
|------|-----|-------|
| Primary text | `#FFFFFF` | H1–H3, high-priority copy |
| Secondary text | `#CBD5E1` | Body, subheadlines, **metric labels** (anything user must read) |
| Auxiliary text | `#94A3B8` | Overlines, section category labels |
| Decorative only | `#64748B` | Visual rhythm — NOT for informational text |
| ⛔ Forbidden | `#475569` and below | Never use for any text that carries meaning |

**If you are about to write `#334155`, `#475569`, `#64748B` for a label, description, or any text the user needs to read — stop. Use `#94A3B8` minimum, `#CBD5E1` preferred.**

### Typography scale — use tokens, not magic numbers

Use CSS custom properties from `globals.css`, never hardcode font sizes:
- `var(--text-overline)` — 12px, for section overlines
- `var(--text-label)` — 14px, for buttons and nav
- `var(--text-body)` — 16px, for body copy
- `var(--text-h2)` — clamp(24–32px), for section headings

### Icons

- Navigation/CTA arrows: `ArrowBigRight` from lucide-react with `fill="currentColor" strokeWidth={0}`
- Inline secondary arrows: `ArrowRight` (outline, lightweight)

### Before every commit

Run `npx tsc --noEmit` and confirm zero errors.
