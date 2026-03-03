# Core Services Component

## Overview
A grid layout displaying the primary services offered by the agency, utilizing a clean, minimal design with folder-like icons.

## Styling & Layout
- **Background:** Uses the main dark theme background of the website `rgba(2, 29, 45, 1)`.
- **Layout:** A responsive grid (looks like a 3-column layout on desktop: 2 rows, 3 items per row).
- **Typography:**
  - Section Header: "Our Core Services" (White, prominent, left-aligned or centered above the grid).
  - Service Titles: "Logo Design", "Branding", "Package Design", "Website Development", "App Development", "Digital Marketing" (White text, centered below each icon).
- **Icons:** Yellow/orange folder illustrations.

## Assets
- The folder icon is likely standard across all items (e.g., `assets/folder.svg` if provided, otherwise the image assets should be extracted from Figma).
- Reusable component card structure containing `[Folder Icon]` + `[Title]`.

## Suggested Animations (Framer Motion)
- **Scroll Reveal (Staggered):** 
  - As the user scrolls into the section, the grid container should use a Framer Motion `staggerChildren` variant.
  - Each service item (folder + text) fades in and slides up (`y: 50` to `y: 0`, `opacity: 0` to `opacity: 1`) sequentially.
- **Hover Interactions (3D & Glow):**
  - Make the folder icons interactive. On hover:
    - Slightly scale up the folder (`scale: 1.05`).
    - Add a subtle drop-shadow or a "glow" effect behind the folder matching the folder's primary yellow/orange color to create a sense of depth and interactivity.
    - The title text could subtly increase in brightness or shift slightly up.
