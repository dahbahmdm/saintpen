# Plan: Make "Flexible Sessions" card link to `/book-studio`

On `/recording-studio`, the four service cards in the "STUDIO SERVICES" grid are static `<motion.div>`s. The third card ("Flexible Sessions") should navigate to `/book-studio` on click.

## Change
In `src/pages/RecordingStudio.tsx`:
- Add an optional `href` field to each service item.
- Set `href: "/book-studio"` on the "Flexible Sessions" entry.
- When an item has `href`, render it as a React Router `<Link>` wrapping the card markup with hover treatment (border lifts to `border-primary`, subtle `glow-red`); otherwise keep the current `<motion.div>`.

That's the entire change — no other pages, routing, or copy touched.