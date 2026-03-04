# Quick Intro Component

## Overview
A clean, high-contrast, text-focused section introducing the agency and its core offerings.

## Styling & Layout
- **Background:** Soft, off-white/very light gray to provide contrast from the dark hero section above it.
- **Text Color:** Dark gray/charcoal `rgba(55, 55, 55, 1)` for readability on the light background.
- **Logo:** The full ZingBizz logo (red squares + text) is positioned at the top left.
- **Typography:**
  - Large, prominent heading text acting as the primary content: "We are a full-service design and development agency helping businesses build a strong presence in the digital world."
- **Interactive Text Highlights:**
  - **"design":** Has a thick red underline beneath it.
  - **"development":** Has a solid red background (`rgba(240, 0, 0, 1)`) with white text.

## Interaction & Hover States (Crucial)
- **Initial State:** Both "design" and "development" should be styled with a red underline.
- **Hover State:** On hover, the red underline should smoothly transform (grow vertically) into a full red background (`rgba(240, 0, 0, 1)`) causing the text color to invert to white.

## Assets
- The section uses typography primarily. The logo is likely SVG or an image component, drawing from brand assets.

## Suggested Animations (Framer Motion / CSS)
- **Scroll Reveal:** 
  - Since this section appears after the hero, the large text should reveal itself as the user scrolls down. Use a staggered text reveal (e.g., words sliding up from a masked container, or fading in word-by-word).
- **The Highlight Hover Effect (Custom CSS / Framer Motion):**
  - **Implementation:** Use a CSS `background-size` transition.
  - Set background as a linear gradient of red: `background: linear-gradient(to top, rgba(240,0,0,1) 0%, rgba(240,0,0,1) 100%)`.
  - Initial `background-size: 100% 4px` (acting as the underline).
  - On hover: `background-size: 100% 100%` (filling the background).
  - Add a smooth transition (`transition: background-size 0.3s ease, color 0.3s ease`) to make the fill feel organic and interactive.
