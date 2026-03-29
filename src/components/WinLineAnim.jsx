import React from 'react';

/**
 * Renders glowing overlay on winning symbol positions.
 * @param {Array<[number, number]>} positions - array of [row, col] coordinates
 * @param {string} color - glow color (hex or CSS color)
 */
export default function WinLineAnim({ positions, color = '#F57F17' }) {
  if (!positions || positions.length === 0) return null;

  return (
    <>
      {positions.map(([row, col], i) => (
        <div
          key={`${row}-${col}-${i}`}
          className="absolute rounded-lg pointer-events-none"
          style={{
            top: `${row * 25}%`,
            left: `${col * 20}%`,
            width: '20%',
            height: '25%',
            background: `${color}20`,
            border: `2px solid ${color}`,
            boxShadow: `0 0 12px ${color}60, inset 0 0 12px ${color}30`,
            animation: 'winPulse 1s ease-in-out infinite',
            zIndex: 10,
          }}
        />
      ))}
      <style>{`
        @keyframes winPulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 12px ${color}60, inset 0 0 12px ${color}30;
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 24px ${color}80, inset 0 0 20px ${color}50;
          }
        }
      `}</style>
    </>
  );
}
