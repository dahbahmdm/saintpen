# Plan: `/book-studio` page — "What to Expect & Book"

A new SEO-optimized landing page that walks artists through the studio booking experience and funnels them to payment, then a GHL calendar.

## Branding
- Use **"The L3ague Studios"** wherever the copy says "The League Studios."
- Site shell (Navbar / Footer) stays SaintPen.

## Route & nav
- Add `/book-studio` route in `App.tsx`.
- New file: `src/pages/BookStudio.tsx`.
- Add "Book" link to `Navbar.tsx` (between Studio and Greenroom).
- Update Navbar's "BOOK NOW" button to point at `/book-studio` instead of `/recording-studio`.

## Page sections (top → bottom)

1. **Hero**
   - H1: "Flexible Studio Sessions in Houston — Book by the Hour or the Day"
   - Sub: "12PM–midnight, 7 days a week. Book when inspiration hits."
   - Primary CTA: "BOOK YOUR SESSION" → scrolls to #booking
   - Secondary: address chip "7400 Harwin Drive, Houston, TX"

2. **Book When Inspiration Hits** (H2 + copy as provided)

3. **Houston's Most Flexible Recording Studio** (H2 + copy)

4. **Session Types** (H2: "Hourly, Full-Day & Late-Night Sessions Available")
   - 3 cards: Hourly bookings • Full-day blocks • Late-night sessions
   - Hours/address line below the grid

5. **Simple Online Booking. Instant Confirmation.** (H2 + copy)
   - Big CTA → scrolls to #booking

6. **Why Artists Choose The L3ague Studios** (H2 + 6-item bulleted grid with check icons)

7. **Booking section (`#booking`)**
   - Title: "RESERVE YOUR SESSION"
   - Step indicator: ① Pay deposit → ② Pick your time on the calendar → ③ Get instant confirmation
   - Two payment buttons (placeholders until Stripe products exist):
     - "Reserve Hourly Session" 
     - "Reserve Full-Day Block"
     - Both render as disabled-styled buttons with helper text "Stripe checkout coming online — meanwhile email saintpen409@gmail.com." OR a mailto fallback (I'll use a working mailto so the page is functional today; we'll swap to Stripe payment links once products are created).
   - Below buttons: a placeholder card labeled "GHL Calendar — appears here after payment" with an `iframe` slot stub (commented `data-ghl-calendar` div) so we can drop the embed in later without restructuring.

8. **Footer SEO line** (small print at bottom of page, NOT site footer):
   "The L3ague Studios | Recording Studio in Houston, TX | 7400 Harwin Drive, Houston, TX | Open Daily 12PM – 12AM | Book Online at saintpen.com"

## SEO
- Use `react-helmet-async` if already installed; otherwise set `document.title` + meta description in a `useEffect` (check existing pattern on other pages first and match it — no new deps unless the project already has Helmet).
- Title: "Book Recording Studio Time in Houston | The L3ague Studios – Hourly & Full-Day Sessions"
- Meta description: provided copy.
- JSON-LD `LocalBusiness` / `MusicVenue` block in a `<script type="application/ld+json">` injected via the same pattern, with name, address (7400 Harwin Drive, Houston, TX), openingHours `Mo-Su 12:00-24:00`, telephone (skip if unknown), priceRange "$$".
- Single H1, semantic `<section>` per H2, descriptive alt text on any imagery using the suggested alt slugs.
- No new images generated in v1 — sections use the existing dark/gradient styling and lucide icons. (We can add hero photography later.)

## Design
- Reuse `SectionHeading`, `bg-gradient-card`, `bg-gradient-dark`, `text-gradient-gold`, `glow-red` — same look as Greenroom and Studio pages so it feels native.
- Framer-motion fadeUp on each section.

## Out of scope
- No Stripe product creation in this turn (we'll wire payment links after products exist).
- No GHL embed code yet — leaving a clearly marked slot.
- No DB tables.