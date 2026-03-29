import React, { useState, useEffect, useCallback } from 'react';

const SUITS = [
  { name: 'Club', symbol: '\u2663', color: '#4CAF50', multiplier: 50 },
  { name: 'Diamond', symbol: '\u2666', color: '#2196F3', multiplier: 200 },
  { name: 'Heart', symbol: '\u2665', color: '#F44336', multiplier: 500 },
  { name: 'Spade', symbol: '\u2660', color: '#FFD600', multiplier: 2000 },
];

// Weighted probability: Club 60%, Diamond 25%, Heart 12%, Spade 3%
function determineWinningSuit() {
  const r = Math.random() * 100;
  if (r < 60) return 0; // Club
  if (r < 85) return 1; // Diamond
  if (r < 97) return 2; // Heart
  return 3; // Spade
}

function generateDeck(winningSuitIndex) {
  const winningSuit = SUITS[winningSuitIndex];
  // Place 3 winning suits among 12 cards
  const cards = [];
  const winPositions = new Set();

  while (winPositions.size < 3) {
    winPositions.add(Math.floor(Math.random() * 12));
  }

  // Fill remaining 9 slots with other suits (not the winning one)
  const otherSuits = SUITS.filter((_, i) => i !== winningSuitIndex);

  for (let i = 0; i < 12; i++) {
    if (winPositions.has(i)) {
      cards.push({ ...winningSuit, isWinner: true });
    } else {
      const other = otherSuits[Math.floor(Math.random() * otherSuits.length)];
      cards.push({ ...other, isWinner: false });
    }
  }

  return cards;
}

export default function JackpotCards({ isActive, onComplete, bet }) {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState(new Set());
  const [matchCount, setMatchCount] = useState({});
  const [wonSuit, setWonSuit] = useState(null);
  const [winningSuitIndex, setWinningSuitIndex] = useState(null);

  useEffect(() => {
    if (isActive) {
      const wsi = determineWinningSuit();
      setWinningSuitIndex(wsi);
      setCards(generateDeck(wsi));
      setRevealed(new Set());
      setMatchCount({});
      setWonSuit(null);
    }
  }, [isActive]);

  const handleCardClick = useCallback(
    (index) => {
      if (!isActive || revealed.has(index) || wonSuit) return;

      const newRevealed = new Set(revealed);
      newRevealed.add(index);
      setRevealed(newRevealed);

      const card = cards[index];
      const newMatchCount = { ...matchCount };
      newMatchCount[card.name] = (newMatchCount[card.name] || 0) + 1;
      setMatchCount(newMatchCount);

      // Check if 3 of any suit found
      if (newMatchCount[card.name] >= 3) {
        const suit = SUITS.find((s) => s.name === card.name);
        setWonSuit(suit);
        // Reveal all cards after a short delay
        setTimeout(() => {
          const allRevealed = new Set();
          for (let i = 0; i < 12; i++) allRevealed.add(i);
          setRevealed(allRevealed);
        }, 600);
        // Complete after celebration
        setTimeout(() => {
          if (onComplete) onComplete(suit.multiplier * bet);
        }, 3000);
      }
    },
    [isActive, revealed, wonSuit, cards, matchCount, bet, onComplete]
  );

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className="glass rounded-2xl p-6 max-w-lg w-full mx-4 text-center"
        style={{
          border: '2px solid rgba(245, 127, 23, 0.5)',
          boxShadow: '0 0 40px rgba(245, 127, 23, 0.3), inset 0 0 40px rgba(183, 28, 28, 0.1)',
        }}
      >
        {/* Header */}
        <h2
          className="text-2xl font-bold mb-1"
          style={{
            background: 'linear-gradient(90deg, #F57F17, #FF6F00, #F57F17)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          JACKPOT CARDS
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Kartlari acin - 3 ayni sembol jackpot kazandirir!
        </p>

        {/* Jackpot levels */}
        <div className="flex justify-center gap-3 mb-5">
          {SUITS.map((suit) => (
            <div
              key={suit.name}
              className="px-3 py-1 rounded-lg text-sm font-bold"
              style={{
                background:
                  wonSuit?.name === suit.name
                    ? `${suit.color}40`
                    : 'rgba(255,255,255,0.05)',
                border: `1px solid ${wonSuit?.name === suit.name ? suit.color : 'rgba(255,255,255,0.1)'}`,
                color: suit.color,
              }}
            >
              <span className="text-lg">{suit.symbol}</span> {suit.multiplier}x
            </div>
          ))}
        </div>

        {/* Card grid 4x3 */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {cards.map((card, i) => {
            const isFlipped = revealed.has(i);
            return (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                disabled={isFlipped || !!wonSuit}
                className="relative w-full aspect-[3/4] rounded-xl cursor-pointer transition-transform hover:scale-105 disabled:cursor-default disabled:hover:scale-100"
                style={{ perspective: '600px' }}
              >
                <div
                  className="absolute inset-0 rounded-xl transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Card back */}
                  <div
                    className="absolute inset-0 rounded-xl flex items-center justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: 'linear-gradient(135deg, #B71C1C, #F57F17)',
                      border: '2px solid rgba(245, 127, 23, 0.5)',
                    }}
                  >
                    <span className="text-2xl font-bold text-white/80">?</span>
                  </div>
                  {/* Card front */}
                  <div
                    className="absolute inset-0 rounded-xl flex items-center justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: 'rgba(0,0,0,0.7)',
                      border: `2px solid ${card.color}`,
                      boxShadow: card.isWinner ? `0 0 20px ${card.color}60` : 'none',
                    }}
                  >
                    <span className="text-3xl" style={{ color: card.color }}>
                      {card.symbol}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Win display */}
        {wonSuit && (
          <div className="animate-fire-pulse">
            <div
              className="text-xl font-bold py-3 px-6 rounded-xl inline-block"
              style={{
                background: `linear-gradient(135deg, ${wonSuit.color}40, ${wonSuit.color}20)`,
                border: `2px solid ${wonSuit.color}`,
                boxShadow: `0 0 30px ${wonSuit.color}40`,
              }}
            >
              <span style={{ color: wonSuit.color }}>
                {wonSuit.symbol} {wonSuit.name} JACKPOT!
              </span>
              <br />
              <span className="text-egt-gold text-2xl">
                {(wonSuit.multiplier * bet).toFixed(2)} TL
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
