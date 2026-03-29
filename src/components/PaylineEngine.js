/**
 * Classic 40-Line Payline Engine for EGT 5x4 Slot
 * Left-to-right evaluation with wild substitution
 */

import { WILD_EMOJI } from './EgtSymbols';

/**
 * 40 payline definitions for a 5-reel 4-row grid.
 * Each payline is an array of 5 row indices (one per reel).
 * Row 0 = top, Row 3 = bottom.
 */
export const PAYLINES = [
  // Lines 1-10: straight and simple curves
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [0, 1, 2, 1, 0],
  [1, 2, 3, 2, 1],
  [2, 1, 0, 1, 2],
  [3, 2, 1, 2, 3],
  [0, 0, 1, 0, 0],
  [1, 1, 2, 1, 1],

  // Lines 11-20
  [2, 2, 1, 2, 2],
  [3, 3, 2, 3, 3],
  [0, 1, 1, 1, 0],
  [1, 2, 2, 2, 1],
  [2, 3, 3, 3, 2],
  [3, 2, 2, 2, 3],
  [0, 0, 1, 2, 3],
  [3, 3, 2, 1, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],

  // Lines 21-30
  [2, 3, 2, 3, 2],
  [3, 2, 3, 2, 3],
  [0, 1, 2, 3, 3],
  [3, 2, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [2, 3, 3, 3, 2],
  [0, 0, 2, 0, 0],
  [3, 3, 1, 3, 3],
  [1, 2, 1, 2, 1],
  [2, 1, 2, 1, 2],

  // Lines 31-40
  [0, 2, 0, 2, 0],
  [1, 3, 1, 3, 1],
  [2, 0, 2, 0, 2],
  [3, 1, 3, 1, 3],
  [0, 1, 3, 1, 0],
  [3, 2, 0, 2, 3],
  [1, 0, 1, 2, 3],
  [2, 3, 2, 1, 0],
  [0, 2, 3, 2, 0],
  [3, 1, 0, 1, 3],
];

/**
 * Evaluate all 40 paylines against a grid.
 * @param {Array<Array<object>>} grid - 2D array [row][col] of symbol objects
 * @param {number} bet - total bet amount (divided by 40 per line)
 * @returns {Array<object>} winning line results
 */
export function evaluatePaylines(grid, bet) {
  const lineBet = bet / 40;
  const results = [];

  PAYLINES.forEach((line, lineIndex) => {
    const result = evaluateLine(grid, line, lineIndex, lineBet);
    if (result) {
      results.push(result);
    }
  });

  return results;
}

/**
 * Evaluate a single payline left-to-right.
 */
function evaluateLine(grid, line, lineIndex, lineBet) {
  // Get symbols on this payline
  const lineSymbols = line.map((row, col) => grid[row][col]);

  // Find the base symbol (first non-wild from the left)
  let baseSymbol = null;
  for (let i = 0; i < 5; i++) {
    if (lineSymbols[i].emoji !== WILD_EMOJI) {
      baseSymbol = lineSymbols[i];
      break;
    }
  }

  // If all wilds, no payout (wilds alone don't pay in classic EGT)
  if (!baseSymbol) return null;

  // Count consecutive matching symbols from left (wilds substitute)
  let count = 0;
  const positions = [];

  for (let col = 0; col < 5; col++) {
    const sym = lineSymbols[col];
    if (sym.emoji === baseSymbol.emoji || sym.emoji === WILD_EMOJI) {
      count++;
      positions.push([line[col], col]);
    } else {
      break;
    }
  }

  // Need at least 3 matching symbols
  if (count < 3) return null;

  const payout = baseSymbol.payouts[count];
  if (!payout) return null;

  const win = lineBet * payout;

  return {
    lineIndex,
    symbol: baseSymbol,
    count,
    positions,
    payout,
    win: Math.round(win * 100) / 100,
  };
}

/**
 * Calculate total win from all line results
 * @param {Array<object>} results - array of winning line objects
 * @returns {number} total win amount
 */
export function calculateTotalWin(results) {
  return results.reduce((sum, r) => sum + r.win, 0);
}

/**
 * Get the positions array for a specific payline index
 * @param {number} lineIndex
 * @returns {Array<[number, number]>} array of [row, col] positions
 */
export function getPaylinePositions(lineIndex) {
  return PAYLINES[lineIndex].map((row, col) => [row, col]);
}
