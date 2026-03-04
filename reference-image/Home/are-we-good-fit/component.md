# Are We Good Fit Component

## Overview
A comparative section detailing who the agency is a good fit for versus who they are not, using a simple, clean list layout with thumbs up/down visual cues.

## Styling & Layout
- **Layout:** Standard two-column comparative split. Left column for "Good Fit", Right column for "Not a Good Fit".
- **Visual Cues:**
  - **Left (Good Fit):** 
    - Thumbs Up icon.
    - Color: Green `rgba(123, 178, 72, 1)`.
    - List items use green checkmarks.
  - **Right (Don't Fit):**
    - Thumbs Down icon (Implementation note: use the thumbs-up SVG and apply a CSS transform `rotate(180deg)` or flip horizontally/vertically to create the thumbs down as instructed).
    - Color: Dark Blue `rgba(35, 84, 113, 1)`.
    - List items use dark blue 'x' or cross marks.
- **Typography:** Contrast ratio should be managed to ensure text is legible against the background (background is likely white or off-white based on the image).

## Assets
- The thumbs up icon (reused for thumbs down via CSS rotation).
- Checkmark icon.
- Cross/Close icon.

## Suggested Animations (Framer Motion)
- **Entrance Animation:**
  - As the component enters the viewport, the left column slides in from the left (`x: -50`, `opacity: 0`), and the right column slides in from the right (`x: 50`, `opacity: 0`).
  - The list items within each column can be stagger-faded sequentially to guide the reader's eye down the lists.
- **Icon Hover Effects:**
  - Subtle bounce or scale effect (`scale: 1.1`) on the Thumbs Up/Down icons when hovering over their respective columns.
