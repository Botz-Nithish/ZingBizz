# Creative Carousel Component (Testimonials/Clients)

## Overview
A horizontally scrolling carousel section designed to showcase client testimonials and reviews.

## Styling & Layout
- **Layout:**
  - Left side (Sticky/Fixed): Section Headers ("TESTIMONIALS", "What our happy clients say about us") and Carousel Navigation Buttons (Left/Right arrows).
  - Right side (Scrolling): A horizontal track of testimonial cards extending off-screen.
- **Card Styling:**
  - **Background:** Dark blue `rgba(0, 43, 70, 1)`.
  - **Quote Icon & Accents:** Light blue color `rgba(80, 167, 220, 1)`. This is applied to the large opening quote mark, mentions like `@Pon Siva`, the author name ("Sonakshi Senthil"), and their role.
  - **Text Details:**
    - The large quote graphic (`"`) is text, NOT an SVG.
    - Body text is white/off-white for contrast against the dark blue card background.
    - Client Avatar: A placeholder avatar icon next to the author's name.
- **Navigation Buttons (Left/Right Arrows):**
  - Square buttons.
  - Left button appears dark (inactive/default state).
  - **Hover State:** Both Left and Right buttons must change their background to **Red** on hover.

## Assets
- Requires SVG arrows for the navigation buttons (e.g., `leftarrow.svg`, `rightkey.svg`).

## Suggested Animations (Framer Motion / Embla / Swiper)
- **Carousel Mechanics:**
  - Use a modern slider library like `Embla Carousel` or `Framer Motion` for smooth, drag-to-scroll horizontal movement on desktop and mobile.
  - Ensure the left-side text ("What our happy...") remains somewhat sticky or sticky-positioned while the cards scroll past it.
- **Card Entrance:**
  - On page scroll, the initial cards should stagger slide-in from the right side (`x: 100` to `x: 0`) to indicate horizontal flow.
- **Hover Effects:**
  - **Navigation Buttons:** Smooth background color transition to red on hover (`transition: background-color 0.2s ease`).
  - **Cards:** Slight scale and brightness increase on hover (`scale: 1.02`, `filter: brightness(1.1)`) to make the active interacting card stand out from the grid.
