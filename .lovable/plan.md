

## Plan: Add DistroKid Links to "Follow Your Heart" Featured Release

### Changes to `src/pages/Music.tsx`

1. **Copy uploaded images** to `src/assets/follow-your-heart-clean-cover.jpg` and `src/assets/follow-your-heart-dirty-cover.jpg`

2. **Add imports** for the two new cover images

3. **Prepend two entries** to the `tracks` array for Clean and Dirty versions

4. **Add Featured Release section** between Hero and Discography Grid with:
   - `SectionHeading` (label: "NEW RELEASE", title: "FOLLOW YOUR HEART")
   - Two side-by-side cards (`md:grid-cols-2`, stacked on mobile) with `glow-gold` styling
   - Each card: album art, version label, artist name, "STREAM NOW" button
   - **Clean Version** button links to: `https://distrokid.com/hyperfollow/saintpenandikezntana/saints-and-sinners?afsrc=1&irclickid=znk37nx7bxyZWRMWqQQQPxVeUkuzPxzBRySTTY0&irgwc=1&irpid=10078&sharedid=linktr.ee&utm_campaign=10078&utm_medium=affiliate&utm_source=impact`
   - **Dirty Version** button links to: `https://distrokid.com/hyperfollow/saintpenandikezntana/saints--sinners?afsrc=1&irclickid=znk37nx7bxyZWRMWqQQQPxVeUkuzNeSt0yI61g0&irgwc=1&irpid=10078&sharedid=linktr.ee&utm_campaign=10078&utm_medium=affiliate&utm_source=impact`
   - Links open in new tab (`target="_blank"`)

5. **No other changes** — Hero, SoundCloud, Instagram Reels, Footer all untouched.

