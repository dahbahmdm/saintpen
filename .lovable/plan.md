# Route every "Book Now" CTA to /book-studio

Right now several primary booking CTAs across the site still fire a `mailto:` link or point at `/recording-studio` instead of the actual booking page. I'll repoint them all to `/book-studio` so the user lands on the session-picker flow we already built.

## What changes

**1. `src/pages/RecordingStudio.tsx` — Hero "BOOK NOW — $100 MINIMUM"**
Currently an `<a href="mailto:saintpen409@gmail.com?...">`. Change to a `<Link to="/book-studio">` (keep all styling, icon, and copy).

**2. `src/pages/RecordingStudio.tsx` — Bottom CTA "EMAIL TO BOOK"**
Currently `mailto:`. Change to `<Link to="/book-studio">` and relabel to **"BOOK NOW"** so it matches the rest of the site's booking CTA.

**3. `src/pages/Index.tsx` — Hero "BOOK STUDIO TIME"**
Currently `<Link to="/recording-studio">`. Repoint to `/book-studio` (the user lands directly on the booking flow; the studio info page is still reachable from the nav).

## What stays the same

- **Navbar** "BOOK NOW" (desktop + mobile) — already points to `/book-studio`. No change.
- **PaymentSuccess** "Book another session" — already points to `/book-studio`. No change.
- **Greenroom** booking form (`BOOK THE GREENROOM`) — separate dedicated flow with its own mailto form. Not a "Book Now" CTA, leave untouched.
- **Membership** mailto inquiry links (e.g. "Membership Inquiry", "Apply") — these are membership-application emails, not "Book Now". Leave untouched.
- **Footer** — no "Book Now" link. No change.

## Notes

- All three edits are pure link/label swaps. No new components, no backend changes, no styling changes beyond keeping the existing classes.
- After the change, every "Book Now" CTA on the site funnels into the `/book-studio` page where the SessionPickerModal handles Stripe checkout and Young Artist lead capture.
