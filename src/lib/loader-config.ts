/**
 * Loader configuration for 4×4 pixel grid (16px × 16px)
 * Grid layout (0-15):
 *  0  1  2  3
 *  4  5  6  7
 *  8  9 10 11
 * 12 13 14 15
 */

export const GRID_4X4_POSITIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const
export type Grid4x4Position = (typeof GRID_4X4_POSITIONS)[number]

/** @deprecated Use GRID_4X4_POSITIONS - legacy 3×3 grid (1-9) */
export const GRID_POSITIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
