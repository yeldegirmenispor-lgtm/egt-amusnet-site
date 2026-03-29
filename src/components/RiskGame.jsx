import React, { useState, useCallback } from 'react';

const CARD_SUITS = [
  { suit: '\u2665', color: 'red' },
  { suit: '\u2666', color: 'red' },
  { suit: '\u2663', color: 'black' },
  { suit: '\u2660', color: 'black' },
];

const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function randomCard() {
  const suit = CARD_SUITS[Math.floor(Math.random() * 4)];
  const value = CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)];
  return { ...suit, value };
}

export default function RiskGame({ isActive, currentWin, onResult }) {
  const [card, setCard] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [pendingWin, setPendingWin] = useState(currentWin);
  const [result, setResult] = useState(null); // 'win' | 'lose'
  const [history, setHistory] = useState([]);

  const handleGuess = useCallback(
    (guess) => {
      if (isRevealed) return;

      const drawnCard = randomCard();
      setCard(drawnCard);
      setIsRevealed(true);

      const isCorrect = drawnCard.color === guess;

      setTimeout(() => {
        if (isCorrect) {
          const newWin = Math.round(pendingWin * 2 * 100) / 100;
          setPendingWin(newWin);
          setResult('win');
          setHistory((h) => [...h, { ...drawnCard, won: true }]);
        } else {
          setResult('lose');
          setHistory((h) => [...h, { ...drawnCard, won: false }]);
          // Lose everything after a delay
          setTimeout(() => {
            if (onResult) onResult(0);
          }, 1500);
        }
        // Reset for next round after short delay
        setTimeout(() => {
          if (isCorrect) {
            setCard(null);
            setIsRevealed(false);
            setResult(null);
          }
        }, 1000);
      }, 600);
    },
    [isRevealed, pendingWin, onResult]
  );

  const handleCollect = useCallback(() => {
    if (onResult) onResult(pendingWin);
  }, [pendingWin, onResult]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className="glass rounded-2xl p-6 max-w-md w-full mx-4 text-center"
        style={{
          border: '2px solid rgba(183, 28, 28, 0.5)',
          boxShadow: '0 0 40px rgba(183, 28, 28, 0.3)',
        }}
      >
        <h2
          className="text-2xl font-bold mb-2"
          style={{
            background: 'linear-gradient(90deg, #F44336, #FF9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RISK / GAMBLE
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          Renk tahmin edin - dogruysa kazanciniz 2 katina cikar!
        </p>

        {/* Current win display */}
        <div
          className="text-3xl font-bold mb-5 py-2"
          style={{ color: '#F57F17' }}
        >
          {pendingWin.toFixed(2)} TL
        </div>

        {/* Card display */}
        <div className="flex justify-center mb-5">
          <div
            className="w-28 h-40 rounded-xl flex items-center justify-center text-4xl font-bold transition-transform duration-500"
            style={{
              background: isRevealed
                ? 'rgba(255,255,255,0.95)'
                : 'linear-gradient(135deg, #B71C1C, #4A148C)',
              border: isRevealed
                ? `3px solid ${card?.color === 'red' ? '#F44336' : '#333'}`
                : '3px solid rgba(245, 127, 23, 0.5)',
              transform: isRevealed ? 'rotateY(0deg)' : 'rotateY(0deg)',
              color: card?.color === 'red' ? '#F44336' : '#1A1A1A',
            }}
          >
            {isRevealed && card ? (
              <div>
                <div className="text-2xl">{card.value}</div>
                <div className="text-3xl">{card.suit}</div>
              </div>
            ) : (
              <span className="text-white/60 text-5xl">?</span>
            )}
          </div>
        </div>

        {/* Result message */}
        {result === 'win' && (
          <div className="text-green-400 font-bold text-lg mb-3 animate-fire-pulse">
            DOGRU! Kazanciniz 2 katina cikti!
          </div>
        )}
        {result === 'lose' && (
          <div className="text-red-400 font-bold text-lg mb-3">
            YANLIS! Kazancinizi kaybettiniz.
          </div>
        )}

        {/* Buttons */}
        {result !== 'lose' && (
          <div className="flex gap-3 justify-center mb-4">
            <button
              onClick={() => handleGuess('red')}
              disabled={isRevealed}
              className="px-8 py-3 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #F44336, #D32F2F)',
                boxShadow: '0 4px 15px rgba(244, 67, 54, 0.4)',
              }}
            >
              KIRMIZI
            </button>
            <button
              onClick={() => handleGuess('black')}
              disabled={isRevealed}
              className="px-8 py-3 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #424242, #212121)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
              }}
            >
              SIYAH
            </button>
          </div>
        )}

        {/* Collect button */}
        {result !== 'lose' && (
          <button
            onClick={handleCollect}
            className="px-10 py-3 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #F57F17, #FF6F00)',
              boxShadow: '0 4px 15px rgba(245, 127, 23, 0.4)',
            }}
          >
            TOPLA ({pendingWin.toFixed(2)} TL)
          </button>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {history.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs"
                style={{
                  background: h.won ? 'rgba(76,175,80,0.2)' : 'rgba(244,67,54,0.2)',
                  border: `1px solid ${h.won ? '#4CAF50' : '#F44336'}`,
                  color: h.color === 'red' ? '#F44336' : '#999',
                }}
              >
                {h.value}{h.suit}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
