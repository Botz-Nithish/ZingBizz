# Experience Component

## Overview
A statistics/metrics section highlighting the agency's track record, framed within a large glowing curved bottom edge.

## Styling & Layout
- **Background & Shape:**
  - The section has a distinct curved (arch) top border.
  - Features a deep blue to black gradient backdrop. Based on the hero/overall theme, this seems to be a continuation or variation of the `radial-gradient` that drops down into the dark background `rgba(2, 29, 45, 1)`.
- **Text & Typography:**
  - Large headings: "We are here" / "to change the game".
  - Subheading: "Reach us to discover how we can help you".
  - All text is highly contrasted white in the main central block.
- **Metrics Layout:** 
  - A horizontal row of three key statistics placed above the main header curve.
  - 1: Heart icon + "Experience" -> "> 8Y"
  - 2: Clipboard/Document icon + "Projects Completed" -> "> 600"
  - 3: Smiley icon + "Happy Clients" -> "> 100"
- **CTA Button:** "Let's Talk" button with an arrow, similar styling to the CTA in the Navbar (dark pill shape with border).

## Assets
- `assets/smiley.svg`: Happy Clients icon.
- `assets/project-complete.svg`: Projects Completed icon.
- Likely another asset for the "Experience" heart icon.

## Suggested Animations (Framer Motion / Scroll)
- **The Arch Reveal:**
  - The large blue curved shape could be animated to reveal itself on scroll. Using an SVG mask or CSS `clip-path`, the curve could "grow" from the bottom up as it enters the viewport.
- **Number Counting Animation:**
  - The metrics (8, 600, 100) are perfect candidates for a "count up" animation when they enter the viewport using Framer Motion's `useSpring` and `useTransform` or a library like `react-countup`.
- **Staggered Fade-In:**
  - The three metric blocks should fade in sequentially.
  - The main text "We are here to change the game" should have a dramatic reveal (e.g., words masking in from the bottom).
