

## Plan: Add Merch Section to the Website

### Overview
Build a full Merch page ("The Black Art Store") showcasing the "Follow Ya Heart" long-sleeve tees, plus integrate merch into the homepage, navbar, and footer. Products link out to your GHL store for purchase.

### 1. Copy uploaded merch photos to `src/assets/`
Map the 10 uploaded images to descriptive filenames:
- `merch-red-tee-1.jpg` through `merch-red-tee-4.jpg` (4 red tee shots)
- `merch-blue-tee-1.jpg`, `merch-blue-tee-2.jpg` (2 blue tee shots)
- `merch-hoodie-1.jpg`, `merch-hoodie-2.jpg` (2 hoodie shots -- kept as lifestyle/brand imagery even if not listed as products yet)
- `merch-studio-session.jpg`, `merch-lifestyle-1.jpg` (2 lifestyle/brand shots)

### 2. Create `src/pages/Merch.tsx`
- **Hero section**: "THE BLACK ART STORE" heading with brand subtitle, matching existing hero pattern
- **Featured product section**: "Follow Ya Heart" long-sleeve tees in two color cards:
  - **Red Long-Sleeve** -- 2x2 photo grid or carousel of the 4 red tee images
  - **Blue Long-Sleeve** -- side-by-side photos of the 2 blue tee images
  - Each card has product name, description, and a "SHOP NOW" button (links to `#` placeholder until you provide your GHL store URL)
  - Styled with `glow-gold`, `rounded-sm`, `font-display`, `fadeUp` animations
- **Lifestyle gallery**: Grid of the studio session and lifestyle photos to build brand atmosphere
- Mobile-first: single column on small screens, multi-column on `md+`

### 3. Update `src/App.tsx`
- Import and add `/merch` route

### 4. Update `src/components/Navbar.tsx`
- Add "Merch" to `navLinks` array (between Music and About)

### 5. Update `src/components/Footer.tsx`
- Add "Merch" link to the Quick Links list

### 6. Update `src/pages/Index.tsx`
- Add a new "MERCH" preview section before the Location CTA
- Show 3-4 merch photos in a grid with a "SHOP MERCH" link to `/merch`
- Uses existing `fadeUp` animation and `SectionHeading` component

### Files changed
- **New**: `src/pages/Merch.tsx`
- **Edit**: `src/App.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/pages/Index.tsx`
- **Copy**: 10 images to `src/assets/`

Once you provide your GHL store URL, I'll update the "SHOP NOW" buttons to link directly there.

