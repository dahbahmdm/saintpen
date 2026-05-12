## Plan: Add Membership Page

Create a new `/membership` route showcasing the studio's recurring-revenue membership program with pricing tiers, benefits, and security/contract details.

### 1. New file: `src/pages/Membership.tsx`

Sections:

1. **Hero**
   - Eyebrow: "RECURRING ACCESS"
   - Headline: "STUDIO MEMBERSHIP"
   - Subhead about guaranteed weekly hours, priority booking, lower rates
   - Primary CTA: "BECOME A MEMBER" → `mailto:saintpen409@gmail.com?subject=Membership%20Inquiry`

2. **Pricing Tiers** (4 cards + 1 starter card)
   - 6 hrs/week — $600/mo (badge: "$900 value")
   - 8 hrs/week — $700/mo
   - 10 hrs/week — $800/mo
   - 12 hrs/week — $1,000/mo (badge: "Best Value")
   - Starter / Youth Rate — "$20–$25 / hr guaranteed" (separate card below, framed for younger artists who can't commit monthly yet)
   - Each card: hours, price, included perks, CTA button

3. **Member Benefits** (icon grid, 4–6 items)
   - Reduced session rate: $100 for 3-hr (vs $120 standard)
   - 1-hour booking flexibility (non-members min 2 hrs)
   - Priority scheduling
   - Guaranteed weekly hours
   - Path to 24/7 self-access (future)

4. **How It Works / Requirements**
   - Signed digital contract
   - $100 refundable deposit on file (refunded after damage-free verification)
   - Usage capped at ~2–3 sessions/week to keep studio available
   - Phrased as transparent terms, not fine print

5. **The Future: Self-Access Studio**
   - Short narrative section explaining the roadmap toward magnetic-deadbolt + camera remote access for trusted members ("laundromat-style" reframed as "24/7 self-access")

6. **CTA footer** — email to apply + link to `/contact`

### 2. Wire up routing & nav

- `src/App.tsx`: import `Membership`, add `<Route path="/membership" element={<Membership />} />`
- `src/components/Navbar.tsx`: add `{ to: "/membership", label: "Membership" }` to `navLinks` (placed between Merch and About)

### 3. Styling

- Reuse existing design tokens: `bg-gradient-dark`, `bg-gradient-card`, `text-gradient-gold`, `text-gradient-red`, `glow-red`, `glow-gold`, `font-display`, container, `SectionHeading`
- Framer-motion `fadeUp` pattern matching `RecordingStudio.tsx` and `Index.tsx`
- Highlight the 12 hr/week tier with primary border + glow; starter/youth tier in a muted secondary card to signal it's an alternative entry point
- No new colors, no new images — type-driven pricing layout

### Notes
- No backend, no payment integration — all CTAs are mailto for now (matches the rest of the site)
- Copy will soften the legal "limit to 2–3 sessions/week" language for public-facing presentation while keeping it clear
