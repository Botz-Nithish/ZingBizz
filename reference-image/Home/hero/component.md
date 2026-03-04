# Hero Component

## Overview
A visually striking, dark-themed hero section featuring a central 3D-like hand graphic holding a glowing sphere, surrounded by technical terms.

## Styling & Layout
- **Main Background:** Radial gradient originating from the top-center.
  - `background: radial-gradient(100% 100% at 50% 0%, #085C90 0%, #021D2D 61.06%, #00090F 100%);`
  - This creates a spotlight effect illuminating the central graphic.
- **Typography & Colors:**
  - **Heading Text:** "Tech-Driven Creativity, Unlimited Possibilities" located at the bottom left.
  - **Highlighted Text ("Tech-Driven"):** Uses a linear gradient for a metallic/shimmering look: `linear-gradient(90deg, #FFFFFF 41.5%, #999999 56%, #FFFFFF 70.5%)` applied as a text fill (`background-clip: text`).
  - **General Text:** High contrast white/off-white against the dark background.
- **Graphic Elements:**
  - **Center:** A realistic hand extending upwards (`image.png`), holding a glowing dark blue sphere.
  - **Floating Text:** "// Design", "// Development", "// Marketing" positioned orbit-like around the glowing sphere.
- **CTA Button:** At the bottom right, "See What We Do", pill-shaped, solid white background with dark text.

## Assets
- `assets/circle1.svg`: Likely relates to the glowing sphere or background elements.
- Main Image: `hero.png` (incorporates the hand and sphere).

## Suggested Animations (Framer Motion / Three.js / Scroll)
- **3D / Parallax (Scroll Experience):**
  - Use subtle mouse-move parallax on the floating text ("// Design", "// Development", "// Marketing") so they shift slightly based on cursor position, creating depth.
  - The central glowing sphere could have a slow, continuous pulsing animation (scaling slightly or pulsing opacity on its glow).
- **Initial Load:**
  - **Hand Image:** Slide up from the bottom (`y: 100`) and fade in.
  - **Text Elements:** Staggered fade in and slide up for the main heading and the floating technical terms.
  - **"Tech-Driven" Gradient:** A continuous horizontal background animation moving across the text gradient to make it shimmer constantly.
- **CTA Button:** Scale down slightly on click (`scale: 0.95`), and a hover effect that inverts colors or adds an outer glow.
