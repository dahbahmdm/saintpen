

## Plan: Three-Way Photo Swap on Merch Page

Three photos need to rotate between sections in `src/pages/Merch.tsx`:

1. **`blueTee1`** (man in red long-sleeve, misplaced in blue section pos 1) → **Red section pos 2** (replacing `redTee4`)
2. **`hoodie1`** (blue hoodie man, in Coming Soon pos 1) → **Blue section pos 1** (replacing `blueTee1`)
3. **`redTee4`** (woman in black hoodie, in red section pos 2) → **Coming Soon pos 1** (replacing `hoodie1`)

### Changes to `src/pages/Merch.tsx`

- **Line 38** (Red product images): `[redTee1, redTee4, redTee2, redTee3]` → `[redTee1, blueTee1, redTee2, redTee3]`
- **Line 46** (Blue product images): `[blueTee1, blueTee2, blueTee3]` → `[hoodie1, blueTee2, blueTee3]`
- **Line 61** (Coming Soon): `{ img: hoodie1, ... }` → `{ img: redTee4, ... }`

Single file changed.

