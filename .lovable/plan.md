# Pricing Audit & Stripe Catalog Update

## Contradictions Found vs Tremaine's Spec

| Location | Current | Should Be |
|---|---|---|
| `RecordingStudio.tsx` pricing card (Audio) | **$120** / 2-hr min, "$50/hr after" | **$100** / 2-hr min (engineer included), $50/hr after |
| `RecordingStudio.tsx` pricing card (Young Artist) | "$40 / 1st hour — New Clients ONLY" | Rebrand → **Member Discount Inquiry** (lead capture only) |
| `Membership.tsx` perks ("Reduced Session Rate") | "$100 for 3-hour session vs **$60** standard" | "$100 for 3-hour overflow block vs **$100 / 2-hr** standard public rate" |
| `Membership.tsx` "New Artist Hourly Rate" section ($40) | Public-facing $40 1st-hour CTA | Rebrand → Member Discount Inquiry (Tremaine rejected $40 for public) |
| `SessionPickerModal.tsx` "Young Artist Rate" | Lead form labeled "Young Artist Rate, new clients only" | Rebrand → **Member Discount Inquiry** (same GHL webhook) |
| `create-payment` comments + Audio modal blurb | "deposit" wording on $100 Audio | "$100 full payment, 2-hr minimum, engineer included" |
| Core memory (`mem://index.md`) | "Focus on recording studio ($120 min)" | Update to **$100 min** |

User confirmed: keep Late-Night $80, Studio Full-Day $500, Combo $600 as-is.

## Site Edits

1. `src/pages/RecordingStudio.tsx` — Audio tile price `$120 → $100`; rename "Young Artist Rate" tile to "Member Discount Rate" with note "Available to active members — request via form."
2. `src/pages/Membership.tsx` — Fix "Reduced Session Rate" copy; relabel the "$40 New Artist" CTA section to "Members-Only Discount Hours — $20–$25/hr self-engineered" and wire its button to open the rebranded lead form.
3. `src/components/SessionPickerModal.tsx` — Rename Young Artist option to "Member Discount Inquiry", keep the existing GHL lead-capture path.
4. `src/components/YoungArtistLeadForm.tsx` — Rename component to `MemberDiscountLeadForm.tsx`; update form headings/copy; same webhook secret (`GHL_YOUNG_ARTIST_WEBHOOK_URL`).
5. `mem://index.md` — Update Core line to `$100 min` and add note that membership tiers + add-ons are sold via Stripe.

## Stripe Catalog Changes

**Update descriptions** on existing 7 one-off products (prices already correct):
- `Audio Recording Session ($100)` — desc: "2-hour minimum recording session. Engineer included. Full payment locks your date; refundable minus 10% chargeback fee."
- `Greenroom Hourly ($60)`, `Late-Night Hourly ($80)`, `Greenroom Half-Day ($200, 4hr)`, `Greenroom Full-Day ($350, 8hr)`, `Studio Full-Day ($500)`, `Studio + Greenroom Combo Day ($600)` — refreshed descriptions with refund-policy line.

**Create 4 recurring membership products** (monthly):
- `Membership — Starter` — $600/mo, 6 hrs/week
- `Membership — Plus` — $700/mo, 8 hrs/week
- `Membership — Pro` — $800/mo, 10 hrs/week
- `Membership — Elite` — $1,000/mo, 12 hrs/week
Descriptions include: priority scheduling, 1-hr bookings unlocked, $100 / 3-hr overflow block, $20–$25/hr self-engineered rate.

**Create 4 one-off member / add-on products**:
- `Member Overflow Block — 3 hours` — $100 (member-only)
- `Hourly Extension` — $50 (post-2hr minimum)
- `Videographer Add-On` — $200
- `On-Set Makeup Artist` — $297 / person
- `Post-Production Video Editing` — $8 (sold per-minute via quantity)

## Checkout Wiring

- New edge function `create-subscription` (subscription mode, guest checkout via `customer_email` modal) for membership tiers. Same success/cancel URLs.
- Extend `create-payment` `ALLOWED_PRICES` set with the new member/add-on price IDs.
- `Membership.tsx` tier buttons → open small email-capture modal → invoke `create-subscription` → redirect to Stripe Checkout in new tab.
- Add an optional **Add-Ons** chip group inside `SessionPickerModal` so users can append Videographer / Makeup / Post-Prod minutes as additional `line_items` on the same checkout session.

## Technical Notes

- All new Stripe products created via `create_stripe_product_and_price`; price IDs hard-coded into `SessionPickerModal` and `Membership` data arrays (no `price_data` per guide).
- No auth added — subscription checkout uses guest email; member-only products are gated by UI copy only (Tremaine to manually verify membership status when purchases come in, until auth is added later).
- `verify_jwt = false` for both edge functions (already standard for these flows).
- Refund-policy line ("Refundable minus 10% chargeback fee") shown in modal, success page, and every Stripe product description.

## Out of Scope

- Building a member-auth/login system (flag for later — needed to programmatically gate member-only products and the Stripe Customer Portal).
- Touching Greenroom.tsx booking flow (still mailto by design).
- Merchandise / GHL store.
