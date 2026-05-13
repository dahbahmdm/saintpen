# Plan: Greenroom Booking Page + Studio Pricing Enrichment

## 1. New page: `/greenroom` (`src/pages/Greenroom.tsx`)

**Hero**
- Tagline: "THE GREENROOM — Houston's video, podcast & content shoot space"
- Single CTA: "Book the Greenroom" (scrolls to form)

**What you can shoot here**
Cards: Podcast recording • Video shoots & music videos • Photoshoots • Skits / content creation

**Pricing (tiered)**
| Tier | Duration | Price | Notes |
|------|----------|-------|-------|
| Hourly | 1 hr | **$60** | Extend hour-by-hour at $60/hr |
| Half-Day | 4 hrs | **$200** | Save $40 vs hourly |
| Full-Day | 8 hrs | **$350** | Best value — save $130 |

Note: "Same space doubles as the Recording Studio — switch between audio booth and video set in one session."

**Add-ons**
- Lighting rigs & backdrops — **Included**
- Videographer / camera op — **+$200**
- Post-production editing — **$8/min** of finished footage
- On-set makeup artist — **$297 per person**

**Booking form (inline)**
Fields, all zod-validated client-side:
- Name (required, ≤100)
- Email (required, valid, ≤255)
- Phone (optional, ≤20)
- Shoot type (select: Podcast / Video / Photo / Skit / Other)
- Tier (select: Hourly / Half-Day / Full-Day)
- Preferred date (shadcn DatePicker, future dates only)
- Add-ons (checkboxes: Videographer, Post-production, Makeup artist)
- Notes (textarea, ≤1000)

Submit handler: builds a pre-filled `mailto:saintpen409@gmail.com` with subject "Greenroom Booking — {name}" and the details URL-encoded in the body, then `window.location.href = mailto`. Shows a sonner toast confirming. No backend table needed for v1 (matches existing site pattern).

## 2. Enrich studio pricing on `RecordingStudio.tsx`

Replace the single "Pricing" card with a richer pricing block that covers BOTH audio + Greenroom:

- **Audio session** — $120 minimum (2 hrs), $50/hr after
- **Greenroom hourly** — $60/hr (extendable)
- **Greenroom half-day** — $200 / 4 hrs
- **Greenroom full-day** — $350 / 8 hrs
- **Members** — discounted rates baked into membership tiers

Add a CTA card linking to `/greenroom` for video/podcast shoots, and update the hero subhead to mention "audio + video + podcast under one roof."

## 3. Navigation
- Add "Greenroom" link to `Navbar.tsx` between "Recording Studio" and "Membership."
- Register route in `App.tsx`.

## 4. SEO
- `<title>`: "Greenroom Booking — Houston Video, Podcast & Photo Studio | SaintPen" (<60 chars target)
- Meta description: hourly $60, half-day $200, full-day $350
- Single H1, semantic sections, alt text on imagery (reuse existing studio imagery if present, else gradient hero only).

## Out of scope (not changing)
- No Stripe wiring on the Greenroom page yet — booking goes via email like the rest of the site. We can swap to Stripe checkout once products are created.
- No new database tables.
- Membership page untouched.