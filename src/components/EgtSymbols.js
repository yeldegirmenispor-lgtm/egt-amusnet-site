/**
 * EGT Amusnet Slot Symbol Definitions
 * Classic payline system - 5 reels, 4 rows, 40 paylines
 */

export const WILD_EMOJI = '🔥';

export const SYMBOLS = [
  {
    id: 'seven',
    emoji: '7️⃣',
    name: 'Seven',
    payouts: { 3: 200, 4: 500, 5: 1000 },
    weight: 2,
    color: '#FF1744',
  },
  {
    id: 'star',
    emoji: '⭐',
    name: 'Star',
    payouts: { 3: 100, 4: 250, 5: 500 },
    weight: 3,
    color: '#FFD600',
  },
  {
    id: 'watermelon',
    emoji: '🍉',
    name: 'Watermelon',
    payouts: { 3: 50, 4: 100, 5: 250 },
    weight: 5,
    color: '#4CAF50',
  },
  {
    id: 'grape',
    emoji: '🍇',
    name: 'Grape',
    payouts: { 3: 30, 4: 75, 5: 200 },
    weight: 5,
    color: '#9C27B0',
  },
  {
    id: 'bar',
    emoji: '🎰',
    name: 'Bar',
    payouts: { 3: 25, 4: 60, 5: 175 },
    weight: 4,
    color: '#FF9100',
  },
  {
    id: 'orange',
    emoji: '🍊',
    name: 'Orange',
    payouts: { 3: 20, 4: 50, 5: 150 },
    weight: 7,
    color: '#FF6D00',
  },
  {
    id: 'lemon',
    emoji: '🍋',
    name: 'Lemon',
    payouts: { 3: 15, 4: 40, 5: 100 },
    weight: 7,
    color: '#FFEA00',
  },
  {
    id: 'cherry',
    emoji: '🍒',
    name: 'Cherry',
    payouts: { 3: 10, 4: 30, 5: 75 },
    weight: 8,
    color: '#D50000',
  },
  {
    id: 'wild',
    emoji: WILD_EMOJI,
    name: 'Wild',
    payouts: { 3: 0, 4: 0, 5: 0 },
    weight: 3,
    isWild: true,
    color: '#FF3D00',
  },
];

// Build weighted pool once
const weightedPool = [];
SYMBOLS.forEach((sym) => {
  for (let i = 0; i < sym.weight; i++) {
    weightedPool.push(sym);
  }
});

/**
 * Pick a random symbol using weighted probability
 */
function randomSymbol() {
  return weightedPool[Math.floor(Math.random() * weightedPool.length)];
}

/**
 * Generate a grid of symbols
 * @param {number} rows - number of rows (default 4)
 * @param {number} cols - number of columns/reels (default 5)
 * @returns {Array<Array<object>>} 2D array [row][col] of symbol objects
 */
export function generateGrid(rows = 4, cols = 5) {
  const grid = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push(randomSymbol());
    }
    grid.push(row);
  }
  return grid;
}

/**
 * Get a symbol definition by its emoji
 */
export function getSymbolByEmoji(emoji) {
  return SYMBOLS.find((s) => s.emoji === emoji);
}

export default SYMBOLS;
