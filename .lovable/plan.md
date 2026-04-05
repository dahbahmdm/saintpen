

## Plan: Rename "Follow Your Heart" to "Saints & Sinners" Across the Site

The album currently labeled "Follow Your Heart" throughout the site should be "Saints & Sinners". Updates needed in two files:

### 1. `src/pages/Music.tsx`
- **Line 33**: `"Follow Your Heart (Clean)"` → `"Saints & Sinners (Clean)"`
- **Line 34**: `"Follow Your Heart (Dirty)"` → `"Saints & Sinners (Dirty)"`
- **Line 61**: Section title `"FOLLOW YOUR HEART"` → `"SAINTS & SINNERS"`
- **Line 73**: Alt text `"Follow Your Heart"` → `"Saints & Sinners"`
- **Line 81**: Display text `"Follow Your Heart"` → `"Saints & Sinners"`

### 2. `src/pages/Index.tsx`
- **Line 34**: `"Follow Your Heart (Clean)"` → `"Saints & Sinners (Clean)"`
- **Line 35**: `"Follow Your Heart (Dirty)"` → `"Saints & Sinners (Dirty)"`

No layout, styling, links, or image changes — just renaming the album title everywhere it appears.

