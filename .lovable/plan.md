# Book Studio — Session Picker + Stripe Checkout

## Goal
Clicking the **Hourly Session** or **Full-Day Block** card on `/book-studio` opens a modal listing the session types we offer. Each option launches a Stripe Checkout in a new tab — except **Young Artist Rate**, which opens a lead-capture form that posts to GoHighLevel.

---

## Session menus

### Hourly Session modal
| Option | Price | Type |
|---|---|---|
| Audio Recording | $100 | Stripe Checkout |
| Greenroom Hourly | $60 | Stripe Checkout |
| Late-Night Hourly | $80 | Stripe Checkout |
| Young Artist Rate (1st hour, new clients only) | — | GHL lead form (no checkout) |

### Full-Day Block modal
| Option | Price | Type |
|---|---|---|
| Greenroom Half-Day (4 hrs) | $200 | Stripe Checkout |
| Greenroom Full-Day (8 hrs) | $350 | Stripe Checkout |
| Studio Full-Day | $500 | Stripe Checkout |
| Studio + Greenroom Combo Day | $600 | Stripe Checkout |

All payments are **full payments that hold the date**. Refundable minus a **10% chargeback fee**. This refund policy will be displayed inside both modals.

---

## Stripe products
Existing Stripe account only has "Studio Time (via calendars)" and "Security Deposit". I will create 7 new one-time products/prices in Stripe (USD) using the create_stripe_product_and_price tool:

- Audio Recording Session — $100
- Greenroom Hourly — $60
- Late-Night Hourly — $80
- Greenroom Half-Day — $200
- Greenroom Full-Day — $350
- Studio Full-Day — $500
- Studio + Greenroom Combo Day — $600

The returned `price_id`s will be hard-coded in the `create-payment` edge function (no auth required — guest checkout).

---

## Implementation

1. **Stripe products** — create the 7 products/prices.
2. **Edge function `create-payment`** — accepts `{ priceId }`, creates a Stripe Checkout session in `mode: "payment"` with `success_url=/payment-success` and `cancel_url=/book-studio#booking`. No login required (guest checkout, Stripe collects email).
3. **`/payment-success` page** — new route confirming the booking, telling the user to check email and that the GHL calendar link will follow. Includes refund-policy line.
4. **`SessionPickerModal` component** — shadcn `Dialog` listing the options for the chosen category. Each row shows name + price + short blurb + "Reserve" button. Footer shows refund policy. Clicking a paid option calls `supabase.functions.invoke('create-payment', { body: { priceId } })` and `window.open(url, '_blank')`. Young Artist row swaps the dialog body to the lead form.
5. **`YoungArtistLeadForm`** — name, email, phone, IG handle (zod-validated). On submit, POSTs to a GHL inbound webhook URL stored as a runtime secret `GHL_YOUNG_ARTIST_WEBHOOK_URL` (handled by a small `submit-young-artist-lead` edge function so the URL stays server-side). Shows a success state: *"Look out for your special-rate coupon in your email."*
6. **Wire up `BookStudio.tsx`** — replace the two `<a href="mailto:...">` cards with buttons that open the modal with the correct category.

---

## Open item — Young Artist lead routing
I need a **GoHighLevel inbound webhook URL** (or form embed URL) to send the Young Artist leads to. Two options:

- **A. Webhook (recommended):** You paste the GHL webhook URL after I'm done; I'll add it as a secret named `GHL_YOUNG_ARTIST_WEBHOOK_URL`.
- **B. Embed:** Give me the GHL form embed URL/iframe and I'll just embed it inside the modal instead of building a form.

I'll proceed with option A as the default and you can swap to B later if you prefer.

---

## Files touched
- `src/pages/BookStudio.tsx` — replace mailto cards with modal triggers
- `src/components/SessionPickerModal.tsx` *(new)*
- `src/components/YoungArtistLeadForm.tsx` *(new)*
- `src/pages/PaymentSuccess.tsx` *(new)* + route in `App.tsx`
- `supabase/functions/create-payment/index.ts` *(new)*
- `supabase/functions/submit-young-artist-lead/index.ts` *(new)*
- Stripe: 7 new products/prices created via tool