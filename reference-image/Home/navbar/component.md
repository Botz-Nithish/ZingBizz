# Navbar Component

## Overview
A sleek, transparent-style navigation bar positioned at the top of the interface.

## Styling & Layout
- **Background:** `rgba(0, 14, 23, 0.5)` - Creates a semi-transparent, glass-like effect allowing the hero background to subtly show through.
- **Text Color:** `rgba(255, 255, 255, 1)` (White) - Ensures high contrast against the dark background.
- **Layout:** Flexbox layout spreading elements horizontally with spacing.
  - **Left:** Logo (red squares `logo.svg`).
  - **Center:** Navigation Links ("Our Works", "About Us", "Blog").
  - **Right:** Call to Action (CTA) Button ("Let's Talk" with an upright right-pointing arrow `upright-vector.svg`).
- **Shape:** The entire navbar uses a pill shape (fully rounded corners, e.g., `rounded-full` in Tailwind).
- **CTA Button:** Pill-shaped, dark background with a subtle border, containing text and an icon.

## Assets
- `assets/logo.svg`: The ZingBizz logo mark (red squares).
- `assets/upright-vector.svg`: Arrow icon used in the "Let's Talk" button.

## Suggested Animations (Framer Motion / CSS)
- **Initial Load:** Slide down from the top (`y: -100` to `y: 0`) and fade in (`opacity: 0` to `opacity: 1`) on page load.
- **Scroll Behavior:** 
  - Apply a backdrop blur (`backdrop-filter: blur(8px)`) when scrolling down so content passing underneath is blurred, enhancing the glassmorphism effect.
- **Hover States:**
  - **Nav Links:** Subtle text color shift or a thin underline animation spanning outwards from the center.
  - **CTA Button:** Slight scale up (`scale: 1.05`), background color lighten, or the arrow icon translating slightly up and to the right on hover.
