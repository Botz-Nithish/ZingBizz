# Responsive Design Audit

Tailwind breakpoints used in this project: `sm` (640px) · `md` (768px) · `lg` (1024px) · `xl` (1280px) · `2xl` (1536px).

**Scope:** All files in `src/components/` and `src/Page/`.  
**Result:** 9 issues found across 7 files.

---

## 🔴 Critical Issues

### Issue 1 — No mobile navigation menu
**File:** [Navbar.tsx](file:///c:/zingbizz-new/src/components/Global/Navbar.tsx)  
**Problem:** Nav links are `hidden md:flex` — on mobile they vanish completely. There is **no hamburger button, no drawer, no fallback**. Mobile users have zero navigation.

**Current:**
```tsx
<div className="hidden md:flex items-center gap-8">
  {["Our Works", "About Us", "Blog"].map(...)}
</div>
```

**Fix:** Add a hamburger button for mobile + a slide-down drawer:
```tsx
// Add state
const [menuOpen, setMenuOpen] = useState(false);

// Hamburger button (visible only on mobile)
<button
  className="md:hidden flex flex-col gap-1.5 p-2"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
  <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
  <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
</button>

// Mobile drawer (below nav)
{menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-[#000E17]/95 backdrop-blur-md rounded-b-2xl px-6 py-4 flex flex-col gap-4 border-t border-white/10">
    {["Our Works", "About Us", "Blog"].map((item) => (
      <Link key={item} href="#" className="text-white/80 hover:text-white text-sm font-medium py-2">
        {item}
      </Link>
    ))}
  </div>
)}
```

---

### Issue 2 — Experience metrics: always 3 columns, crushes on mobile
**File:** [Experience.tsx](file:///c:/zingbizz-new/src/components/Home/Experience.tsx) · Line 75  
**Problem:** `grid grid-cols-3 gap-16` — on a 375px phone, three columns with `gap-16` (64px) leaves almost no space for actual content. Numbers get cut off.

**Current:**
```tsx
className="grid grid-cols-3 gap-16 max-w-5xl mx-auto"
```

**Fix:**
```tsx
className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 max-w-5xl mx-auto"
```

Also fix the stat number `ml-16` (icon width offset) which breaks on small screens:
```tsx
// Current (line 55):
className="text-white text-4xl md:text-5xl ml-16 leading-none"
// Fix:
className="text-white text-3xl sm:text-4xl md:text-5xl ml-0 sm:ml-14 leading-none"
```

---

## 🟠 Major Issues

### Issue 3 — Hero heading + CTA: side-by-side row breaks on small screens
**File:** [Hero.tsx](file:///c:/zingbizz-new/src/components/Home/Hero.tsx) · Line 124  
**Problem:** `flex items-end justify-between` forces the 48px heading and CTA button into the same row. On screens ≤480px the heading gets squeezed or overflows.

**Current:**
```tsx
className="flex items-end justify-between px-6 lg:px-24"
```

**Fix:**
```tsx
className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0 px-6 lg:px-24"
```

Also the heading uses a fixed `text-[48px]` — no responsive scaling:
```tsx
// Current (line 131):
className="font-sans font-medium text-[48px] leading-[100%] tracking-[0%]"
// Fix:
className="font-sans font-medium text-3xl sm:text-4xl md:text-[48px] leading-[100%] tracking-[0%]"
```

---

### Issue 4 — TestimonialCarousel: fixed card widths on mobile
**File:** [TestimonialCarousel.tsx](file:///c:/zingbizz-new/src/components/Home/TestimonialCarousel.tsx) · Line 117  
**Problem:** Cards are `w-[360px] md:w-[420px]` fixed. On a 375px phone, a 360px card leaves only 15px of margin — cards appear nearly full-screen with no visual breathing room.

**Current:**
```tsx
className="flex-shrink-0 w-[360px] md:w-[420px] rounded-2xl p-7 ..."
```

**Fix:**
```tsx
className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[420px] rounded-2xl p-5 sm:p-7 ..."
```

---

### Issue 5 — ScAbout: heading font size in `style={}`, not responsive Tailwind
**File:** [ScAbout.tsx](file:///c:/zingbizz-new/src/components/branding/ScAbout.tsx) · Line 45  
**Problem:** `fontSize: "42px"` is set via inline `style` prop — Tailwind's responsive system cannot override it. The `<h2>` will always be 42px, even on mobile where it should be smaller.

**Current:**
```tsx
style={{ fontSize: "42px", lineHeight: "100%", ... }}
```

**Fix:** Move into Tailwind and remove the style override:
```tsx
// Remove the fontSize/lineHeight from style, add to className:
className="font-semibold text-[#021B2A] text-2xl md:text-3xl lg:text-[42px] leading-tight lg:leading-[100%]"
style={{ fontFamily: "Urbanist", fontWeight: 600, letterSpacing: "0%" }}
```

---

### Issue 6 — ScAbout: body text always `text-[18px]`, no mobile scaling
**File:** [ScAbout.tsx](file:///c:/zingbizz-new/src/components/branding/ScAbout.tsx) · Line 72  
**Problem:** `text-[18px]` is hardcoded in className but 18px paragraph text on mobile can feel dense.

**Current:**
```tsx
className="font-normal text-[#001929] text-[18px] leading-[26px] ..."
```

**Fix:**
```tsx
className="font-normal text-[#001929] text-base lg:text-[18px] leading-relaxed lg:leading-[26px] ..."
```

---

## 🟡 Minor Issues

### Issue 7 — ScLogoSection: badge has fixed `height: 90px`, clamps on mobile
**File:** [ScLogoSection.tsx](file:///c:/zingbizz-new/src/components/branding/ScLogoSection.tsx) · Lines 82–88  
**Problem:** The badge container has a fixed `height: "90px"` via inline style which clips the text if it wraps on smaller screens.

**Current:**
```tsx
style={{ backgroundColor: "#1C3A32", width: "fit-content", minWidth: "250px", height: "90px" }}
```

**Fix:** Remove fixed height, use padding instead:
```tsx
className="flex items-center justify-center px-6 py-4 bg-[#1C3A32]"
style={{ width: "fit-content", minWidth: "min(250px, 90vw)" }}
// Remove height:"90px"
```

---

### Issue 8 — Footer: `gap-20 md:gap-28` nav columns too wide on small screens
**File:** [Footer.tsx](file:///c:/zingbizz-new/src/components/Global/Footer.tsx) · Line 65  
**Problem:** `gap-20` (80px) between the two small nav columns is very wide on mobile. On a 375px screen it pushes the second column almost off screen.

**Current:**
```tsx
className="flex gap-20 md:gap-28"
```

**Fix:**
```tsx
className="flex gap-8 sm:gap-16 md:gap-28"
```

---

### Issue 9 — BrandingGallery: images always `w-[80%]` — too narrow on mobile
**File:** [BrandingGallery.tsx](file:///c:/zingbizz-new/src/components/Our-Works/BrandingGallery.tsx) · Line 59  
**Problem:** `w-[80%] mx-auto` is fine on desktop but on mobile it wastes 20% viewport width unnecessarily. Gallery images should be full-width on small screens.

**Current:**
```tsx
className="w-[80%] mx-auto flex flex-col gap-8"
```

**Fix:**
```tsx
className="w-full md:w-[85%] lg:w-[80%] mx-auto flex flex-col gap-6 md:gap-8 px-4 md:px-0"
```

---

## Summary Table

| # | Severity | File | Issue | Impact |
|---|---|---|---|---|
| 1 | 🔴 Critical | `Navbar.tsx` | No mobile menu at all | Users can't navigate on mobile |
| 2 | 🔴 Critical | `Experience.tsx` | 3-col grid, always | Numbers crushed on mobile |
| 3 | 🟠 Major | `Hero.tsx` | Fixed 48px text, row never wraps | Heading + button overlap on small screens |
| 4 | 🟠 Major | `TestimonialCarousel.tsx` | Fixed 360px card width | Cards overflow on sub-400px screens |
| 5 | 🟠 Major | `ScAbout.tsx` | `style={{ fontSize:"42px" }}` | Cannot be overridden by Tailwind breakpoints |
| 6 | 🟡 Minor | `ScAbout.tsx` | Fixed `text-[18px]` paragraph | Dense on mobile, no scaling |
| 7 | 🟡 Minor | `ScLogoSection.tsx` | Fixed `height: 90px` badge | Clips text on narrow screens |
| 8 | 🟡 Minor | `Footer.tsx` | `gap-20` at base | Nav columns too spread on mobile |
| 9 | 🟡 Minor | `BrandingGallery.tsx` | `w-[80%]` always | Unnecessarily narrow on mobile |

---

> Reply **"fix all"** to apply every fix, or call out specific issue numbers (e.g. "fix 1 2 3") to apply selectively.
