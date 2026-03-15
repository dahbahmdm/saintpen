

## Plan: Add New Photos Across the Website

The uploaded photos include merch photoshoot images (black long-sleeve, blue long-sleeve, group shots showing all colorways), lifestyle/event photos (SXSW, crew photos), and a kid wearing Th3 L3agu3 merch. Here's where each will go:

### Image Mapping

| Upload | Description | Filename | Usage |
|--------|-------------|----------|-------|
| B5F044CC | Two women — hoodie + black long-sleeve | `merch-black-tee-1.jpg` | New black colorway product on Merch page |
| D18776BE | Two women close-up — hoodie + black tee | `merch-black-tee-2.jpg` | New black colorway product on Merch page |
| 769CF8C2 | Woman smiling in black long-sleeve | `merch-black-tee-3.jpg` | New black colorway product on Merch page |
| CC6E5F9E | Man in blue long-sleeve dancing | `merch-blue-tee-3.jpg` | Add to blue product gallery on Merch page |
| 3ABA053A | Group shot — all 5 colorways | `merch-group-shoot.jpg` | Hero background on Merch page + homepage merch preview |
| CEF0AB25 | Sleeve close-up — all colorways | `merch-sleeve-detail.jpg` | Lifestyle gallery on Merch page |
| 0A0EC015 | SXSW 2022 photo | `lifestyle-sxsw.jpg` | About page gallery or homepage culture section |
| AD26DAA7 | Crew against brick wall | `lifestyle-crew.jpg` | About page or lifestyle gallery |
| 07ACB5DD | Performing live outdoors | `lifestyle-performance.jpg` | About page — live performance photo |
| IMG_0369 | Kid in Th3 L3agu3 tee | `merch-kids-tee.jpg` | Merch page lifestyle gallery — community feel |

### Changes

**1. `src/pages/Merch.tsx`**
- Add a third product: "Follow Ya Heart — Black Long-Sleeve" with 3 photos (black-tee-1, black-tee-2, black-tee-3)
- Add `merch-blue-tee-3.jpg` to the blue product's image array
- Replace the Merch hero background with the group photoshoot image
- Add the sleeve detail shot and kids tee to the lifestyle gallery section (expanding from 2 to 4 images)

**2. `src/pages/About.tsx`**
- Add a new "THE CULTURE" photo gallery section with the SXSW, crew, and performance photos

**3. `src/pages/Index.tsx`**
- Swap one of the homepage merch preview images for the group photoshoot shot (more impactful)

**4. Asset copies** — 10 new images to `src/assets/`

### Files Changed
- **Edit**: `src/pages/Merch.tsx`, `src/pages/About.tsx`, `src/pages/Index.tsx`
- **Copy**: 10 images to `src/assets/`

