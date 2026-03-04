# Footer Component

## Overview
A comprehensive bottom navigation and resource section providing secondary links, social media access, and external web development resources.

## Styling & Layout
- **Background:** Solid dark blue background `rgba(2, 29, 45, 1)`. Needs to match the core branding background.
- **Top Section (Brand & Primary Links):** 
  - **Left:** ZingBizz logo (Standard white/grayscale mark).
  - **Center:** Two distinct columns for primary site navigation:
    - Col 1: Home, About, Works
    - Col 2: Blog, Careers, Contact Us
  - **Right:** Horizontal row of localized social media icons (LinkedIn, Instagram, Facebook, YouTube).
  - **Bottom Right (Top Section):** Copyright text `© 2025 Zingbizz. All Rights Reserved` right-aligned below the social icons.
- **Divider:** A subtle, thin, low-opacity horizontal line (`rgba(255, 255, 255, 0.1)` approximately) separating the top navigation from the bottom resources.
- **Bottom Section (Useful Resources):**
  - Section Header: "Useful Resources" (White, bolder weight).
  - Three distinct columns of external links.
  - Each link format:
    - Overline text (Small, light blue/grey category tag, e.g., "Front-end Development", "Modern Web Development").
    - Link text (White, regular weight, e.g., "CSS-Tricks", "Web.dev", "GitHub", "DigitalOcean Community", "Code Academy", "Smashing Magazine", "StackOverflow").

## Assets
- Social icons: LinkedIn, Instagram, Facebook, YouTube SVGs.
- ZingBizz logo SVG.

## Suggested Animations
- **Footer Reveal:** The footer can use a subtle reveal effect. As the user reaches the absolute bottom of the page, the footer content elements could fade in.
- **Link Hover Effects:**
  - Standard navigation links (Home, About, etc.) should have an `after` pseudo-element underline animation that scales from `left: 0` to `width: 100%` on hover.
  - Social icons should subtly scale up (`scale: 1.15`) and perhaps change their background or fill color on hover.
  - The "Useful Resources" category text could remain static, but the main link names like "CSS-Tricks" should adopt a subtle color shift (perhaps to the light blue `rgba(80, 167, 220, 1)`) indicating interactivity.
