"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 14;

type Cell = string | null;
type Board = Cell[][];

interface Tetromino {
    shape: number[][];
    color: string;
}

interface Piece {
    shape: number[][];
    color: string;
    x: number;
    y: number;
}

const TETROMINOES: Record<string, Tetromino> = {
    I: { shape: [[1, 1, 1, 1]], color: "#00f0f0" },
    O: { shape: [[1, 1], [1, 1]], color: "#f0f000" },
    T: { shape: [[0, 1, 0], [1, 1, 1]], color: "#a000f0" },
    S: { shape: [[0, 1, 1], [1, 1, 0]], color: "#00f000" },
    Z: { shape: [[1, 1, 0], [0, 1, 1]], color: "#f00000" },
    J: { shape: [[1, 0, 0], [1, 1, 1]], color: "#0000f0" },
    L: { shape: [[0, 0, 1], [1, 1, 1]], color: "#f0a000" },
};

const TETRO_KEYS = Object.keys(TETROMINOES);

function createBoard(): Board {
    return Array.from({ length: BOARD_HEIGHT }, () =>
        Array(BOARD_WIDTH).fill(null)
    );
}

function randomPiece(): Piece {
    const key = TETRO_KEYS[Math.floor(Math.random() * TETRO_KEYS.length)];
    return {
        shape: TETROMINOES[key].shape,
        color: TETROMINOES[key].color,
        x: Math.floor(BOARD_WIDTH / 2) - Math.floor(TETROMINOES[key].shape[0].length / 2),
        y: 0,
    };
}

function rotate(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rotated: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            rotated[c][rows - 1 - r] = matrix[r][c];
        }
    }
    return rotated;
}

function isValid(board: Board, piece: Piece, offsetX = 0, offsetY = 0): boolean {
    for (let r = 0; r < piece.shape.length; r++) {
        for (let c = 0; c < piece.shape[r].length; c++) {
            if (piece.shape[r][c]) {
                const newX = piece.x + c + offsetX;
                const newY = piece.y + r + offsetY;
                if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) return false;
                if (newY >= 0 && board[newY][newX]) return false;
            }
        }
    }
    return true;
}

function mergePiece(board: Board, piece: Piece): Board {
    const newBoard = board.map((row) => [...row]);
    for (let r = 0; r < piece.shape.length; r++) {
        for (let c = 0; c < piece.shape[r].length; c++) {
            if (piece.shape[r][c]) {
                const y = piece.y + r;
                const x = piece.x + c;
                if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
                    newBoard[y][x] = piece.color;
                }
            }
        }
    }
    return newBoard;
}

function clearLines(board: Board): { board: Board; cleared: number } {
    let cleared = 0;
    const newBoard = board.filter((row) => {
        if (row.every((cell) => cell !== null)) {
            cleared++;
            return false;
        }
        return true;
    });
    while (newBoard.length < BOARD_HEIGHT) {
        newBoard.unshift(Array(BOARD_WIDTH).fill(null));
    }
    return { board: newBoard, cleared };
}

export function useTetris() {
    const [board, setBoard] = useState<Board>(createBoard);
    const [piece, setPiece] = useState<Piece>(randomPiece);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const tick = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((prev) => {
            if (isValid(board, prev, 0, 1)) {
                return { ...prev, y: prev.y + 1 };
            }
            const merged = mergePiece(board, prev);
            const { board: clearedBoard, cleared } = clearLines(merged);
            setBoard(clearedBoard);
            setScore((s) => s + cleared * 100);
            const next = randomPiece();
            if (!isValid(clearedBoard, next)) {
                setGameOver(true);
                setIsPlaying(false);
                return prev;
            }
            return next;
        });
    }, [board, gameOver, isPaused, isPlaying]);

    useEffect(() => {
        if (gameOver || isPaused || !isPlaying) return;
        intervalRef.current = setInterval(tick, 500);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [tick, gameOver, isPaused, isPlaying]);

    const togglePause = useCallback(() => {
        if (isPlaying && !gameOver) setIsPaused((prev) => !prev);
    }, [isPlaying, gameOver]);

    const startGame = useCallback(() => {
        setBoard(createBoard());
        setPiece(randomPiece());
        setScore(0);
        setGameOver(false);
        setIsPaused(false);
        setIsPlaying(true);
    }, []);

    const moveLeft = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((p) => (isValid(board, p, -1, 0) ? { ...p, x: p.x - 1 } : p));
    }, [board, gameOver, isPaused, isPlaying]);

    const moveRight = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((p) => (isValid(board, p, 1, 0) ? { ...p, x: p.x + 1 } : p));
    }, [board, gameOver, isPaused, isPlaying]);

    const moveDown = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((p) => (isValid(board, p, 0, 1) ? { ...p, y: p.y + 1 } : p));
    }, [board, gameOver, isPaused, isPlaying]);

    const rotatePiece = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((p) => {
            const rotated = { ...p, shape: rotate(p.shape) };
            return isValid(board, rotated) ? rotated : p;
        });
    }, [board, gameOver, isPaused, isPlaying]);

    const hardDrop = useCallback(() => {
        if (gameOver || isPaused || !isPlaying) return;
        setPiece((p) => {
            let newY = p.y;
            while (isValid(board, { ...p, y: newY + 1 })) newY++;
            return { ...p, y: newY };
        });
    }, [board, gameOver, isPaused, isPlaying]);

    const restart = useCallback(() => {
        startGame();
    }, [startGame]);

    // Build display board
    const displayBoard: Board = board.map((row) => [...row]);
    if (isPlaying && !gameOver) {
        for (let r = 0; r < piece.shape.length; r++) {
            for (let c = 0; c < piece.shape[r].length; c++) {
                if (piece.shape[r][c]) {
                    const y = piece.y + r;
                    const x = piece.x + c;
                    if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
                        displayBoard[y][x] = piece.color;
                    }
                }
            }
        }
    }

    return {
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
    };
}

