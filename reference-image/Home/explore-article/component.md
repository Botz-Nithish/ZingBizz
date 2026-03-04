# Explore Articles Component

## Overview
A section dedicated to highlighting recent blog posts or articles, featuring a horizontal grid of rich media cards and a CTA button to view all articles.

## Styling & Layout
- **Background:** A light, soft off-white/gray background providing contrast against the dark article cards.
- **Typography:**
  - Main Heading: "Explore Our Articles" (Dark gray/black).
  - Subheading: "Design thinking, conversion wins, and growth tactics..."
- **Article Cards:**
  -Image mentioned in the asset
  - Below the Image: 
    - Outline pill tags for category ("Resources").
    - Date text ("Nov 26, 2024").
    - Two-line dark text for the article title ("What is Digital Marketing? A Comprehensive Guide").
- **CTA Button:** 
  - "See All Articles ->"
  - Dark pill-shaped button with white text and an arrow icon.

## Assets
- Image

## Suggested Animations (Framer Motion / Embla)
- **Interaction:** Given the horizontal layout of identical cards, consider implementing this as a horizontal scrollable list or an Embla Carousel on mobile, shifting to a CSS Grid on large desktop screens.
- **Card Hover:**
  - Elevate the card slightly (`y: -5`).
  - Expand the arrow inside the "See All Articles" button slightly to the right on hover.
- **Scroll Reveal:** Fade-up the heading first, followed by a staggered fade-in of the article cards.
