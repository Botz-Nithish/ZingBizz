"use client";

import { useEffect, useCallback, useState } from "react";
import { useTetris } from "@/hooks/useTetris";

const BOARD_COLS = 14;
const BOARD_ROWS = 14;

/** Returns a slightly darker version of a hex color for the inner block */
function darkenHex(hex: string, factor = 0.6): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 0xff) * factor);
  const g = Math.round(((n >> 8) & 0xff) * factor);
  const b = Math.round((n & 0xff) * factor);
  return `rgb(${r},${g},${b})`;
}

export default function Tetris() {
  const {
    displayBoard,
    score,
    gameOver,
    isPaused,
    isPlaying,
    moveLeft,
    moveRight,
    moveDown,
    rotatePiece,
    hardDrop,
    togglePause,
    startGame,
    restart,
  } = useTetris();

  const gridW = "80vw";
  const gridH = "80vw"; // ensuring perfect squares where grid blocks match width dimensions.

  // Key handler
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (gameOver || isPaused || !isPlaying) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          moveLeft();
          break;
        case "ArrowRight":
          e.preventDefault();
          moveRight();
          break;
        case "ArrowDown":
          e.preventDefault();
          moveDown();
          break;
        case "ArrowUp":
          e.preventDefault();
          rotatePiece();
          break;
        case " ":
          e.preventDefault();
          hardDrop();
          break;
        case "p":
          e.preventDefault();
          togglePause();
          break;
      }
    },
    [
      moveLeft,
      moveRight,
      moveDown,
      rotatePiece,
      hardDrop,
      togglePause,
      gameOver,
      isPaused,
      isPlaying,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <section
      id="tetris"
      className="relative z-10 py-16 px-6 lg:px-24 bg-[#001929] min-h-screen flex flex-col justify-center items-center font-[var(--font-urbanist)] overflow-hidden"
    >
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none" />

      <div
        className="relative border border-[#50A7DC]/30 bg-[#030a16] shadow-2xl overflow-hidden"
        style={{ width: gridW, height: gridH }}
      >
        {/* ── Overlay UI ── */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4">
          {/* Top Row: Left block (title + controls) | Score (right) */}
          <div className="flex justify-between items-start w-full pointer-events-auto">
            {/* Left: title then controls below */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-2xl font-bold underline decoration-[#50A7DC] underline-offset-8">
                Let&apos;s Play
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={moveLeft}
                  className="w-9 h-9 bg-[#e5e5e5] rounded flex items-center justify-center text-lg hover:bg-white text-black transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={rotatePiece}
                  className="w-9 h-9 bg-[#e5e5e5] rounded flex items-center justify-center text-lg hover:bg-white text-black transition-colors"
                >
                  ↑
                </button>
                <button
                  onClick={moveRight}
                  className="w-9 h-9 bg-[#e5e5e5] rounded flex items-center justify-center text-lg hover:bg-white text-black transition-colors"
                >
                  →
                </button>
                <button
                  onClick={togglePause}
                  className="w-9 h-9 bg-[#e5e5e5] rounded flex items-center justify-center text-xs font-bold hover:bg-white text-black transition-colors"
                >
                  ||
                </button>
              </div>
            </div>

            {/* Right: score */}
            <div className="text-white text-lg font-semibold">
              Score: {score}
            </div>
          </div>

          {/* Start Screen */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-30 pointer-events-auto">
              <button
                onClick={startGame}
                className="px-10 py-4 bg-[#50A7DC] text-[#030a16] text-xl font-bold rounded-md hover:bg-white transition-colors"
              >
                Start Game
              </button>
            </div>
          )}

          {/* Game Over */}
          {gameOver && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-30 pointer-events-auto">
              <p className="text-white text-xl mb-4">Score: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-3 bg-[#3b82f6] text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
              >
                Game Over! Play again
              </button>
            </div>
          )}

          {/* Paused */}
          {isPaused && !gameOver && isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 pointer-events-auto">
              <h2 className="text-white text-4xl font-light tracking-widest">
                PAUSED
              </h2>
            </div>
          )}
        </div>

        {/* ── Grid ── */}
        <div
          className="grid w-full h-full relative z-10"
          style={{
            gridTemplateColumns: `repeat(${BOARD_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${BOARD_ROWS}, 1fr)`,
          }}
        >
          {displayBoard.flat().map((cell, i) => (
            <div
              key={i}
              className="border border-[#50A7DC]/20 relative w-full h-full"
              style={{
                backgroundColor: cell ?? "transparent",
              }}
            >
              {/* Inner darker block for filled cells */}
              {cell && (
                <div
                  className="absolute"
                  style={{
                    inset: "10%",
                    backgroundColor: darkenHex(cell, 0.6),
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drop Button */}
      <div className="mt-6 md:hidden">
        <button
          onClick={hardDrop}
          className="px-8 py-3 bg-[#50A7DC] text-[#030a16] font-bold rounded-full w-full max-w-[200px]"
        >
          DROP SPACE
        </button>
      </div>
    </section>
  );
}

