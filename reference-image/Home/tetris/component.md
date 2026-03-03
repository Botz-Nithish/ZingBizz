# Tetris Game Component

## Overview
An interactive, fully playable Tetris mini-game embedded directly into the webpage to increase engagement. It tracks score and handles win/loss states.

## Styling & Layout
- **Background:** A gradient fading from dark grey at the top to white at the bottom.
- **Header:** 
  - Left side: "Let's Play" text with an underline.
  - Right side: "Score: 0" text counter.
- **Controls Display:** On-screen visual cues for controls (Left arrow, Up arrow (Rotate), Right arrow). These can be clickable for mobile support, or act as a legend for desktop keyboard play.
- **Game Board:** Standard Tetris grid dimensions. The falling tetrominoes are brightly solid colored blocks with bold, slightly darker borders (Red square block `O-tetromino`, Green S-shape `S/Z-tetromino`, Blue L-shape `L/J-tetromino`, etc.).

## Logic & Requirements
- **Playability:** This must be a working game instance, utilizing React state (`useState`, `useEffect`) or a custom hook state machine to map grid vectors and falling blocks.
- **Scoring System:** Award exactly 100 points for every successful line cleared (as stated in `moreinfo.txt`).
- **Game Over State:** When the blocks reach the top boundary, the game ends.
  - On end, render a "You Have Lost" overlay text.
  - Display the final Score immediately underneath it.

## Suggested Animations & Tech
- **Game Rendering:** For high performance React rendering without lag, consider drawing the grid using an HTML5 `<canvas>` ref, or highly optimized `div` grids with minimal re-rendering.
- **Animations:** 
  - Hard dropping a piece could trigger a slight "screen shake" effect using Framer Motion on the game container.
  - Clearing a line could flash the row white before collapsing.
