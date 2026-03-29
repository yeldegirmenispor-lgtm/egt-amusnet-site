import React, { useState, useCallback, useRef, useEffect } from 'react';
import { SYMBOLS, generateGrid, WILD_EMOJI } from './EgtSymbols';
import { evaluatePaylines, calculateTotalWin } from './PaylineEngine';
import JackpotCards from './JackpotCards';
import RiskGame from './RiskGame';
import WinLineAnim from './WinLineAnim';

const BET_LEVELS = [0.40, 0.80, 1.00, 2.00, 4.00, 10.00, 20.00];

export default function EgtSlotDemo() {
  const [grid, setGrid] = useState(() => generateGrid(4, 5));
  const [balance, setBalance] = useState(1000);
  const [betIndex, setBetIndex] = useState(2); // start at 1.00
  const [spinning, setSpinning] = useState(false);
  const [winResults, setWinResults] = useState([]);
  const [totalWin, setTotalWin] = useState(0);
  const [activeWinLine, setActiveWinLine] = useState(null);
  const [winLineIdx, setWinLineIdx] = useState(0);
  const [autoSpin, setAutoSpin] = useState(false);
  const [jackpotActive, setJackpotActive] = useState(false);
  const [riskActive, setRiskActive] = useState(false);
  const [riskWin, setRiskWin] = useState(0);
  const [message, setMessage] = useState('Cevirmek icin SPIN basin');
  const autoRef = useRef(false);
  const cycleRef = useRef(null);

  const bet = BET_LEVELS[betIndex];

  // Cycle through winning lines for display
  useEffect(() => {
    if (winResults.length === 0) {
      setActiveWinLine(null);
      return;
    }

    let idx = 0;
    setActiveWinLine(winResults[0]);

    cycleRef.current = setInterval(() => {
      idx = (idx + 1) % winResults.length;
      setActiveWinLine(winResults[idx]);
      setWinLineIdx(idx);
    }, 1500);

    return () => clearInterval(cycleRef.current);
  }, [winResults]);

  const doSpin = useCallback(() => {
    if (spinning || jackpotActive || riskActive) return;
    if (balance < bet) {
      setMessage('Yetersiz bakiye!');
      setAutoSpin(false);
      autoRef.current = false;
      return;
    }

    setSpinning(true);
    setWinResults([]);
    setTotalWin(0);
    setActiveWinLine(null);
    setMessage('');
    setBalance((b) => Math.round((b - bet) * 100) / 100);

    // Simulate spin delay
    setTimeout(() => {
      const newGrid = generateGrid(4, 5);
      setGrid(newGrid);

      const results = evaluatePaylines(newGrid, bet);
      const win = calculateTotalWin(results);

      setWinResults(results);
      setTotalWin(Math.round(win * 100) / 100);
      setSpinning(false);

      if (win > 0) {
        setBalance((b) => Math.round((b + win) * 100) / 100);
        setMessage(`KAZANDINIZ: ${win.toFixed(2)} TL (${results.length} hat)`);

        // Offer risk game
        setRiskWin(win);
      } else {
        setMessage('Kazanc yok - tekrar deneyin');
      }

      // 1/50 chance to trigger Jackpot Cards
      if (Math.random() < 0.02) {
        setTimeout(() => {
          setJackpotActive(true);
        }, 1000);
      }

      // Auto-spin continue
      if (autoRef.current) {
        setTimeout(() => {
          if (autoRef.current) doSpin();
        }, 1200);
      }
    }, 800);
  }, [spinning, jackpotActive, riskActive, balance, bet]);

  const handleBetChange = (dir) => {
    if (spinning) return;
    setBetIndex((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= BET_LEVELS.length) return prev;
      return next;
    });
  };

  const toggleAutoSpin = () => {
    if (autoSpin) {
      setAutoSpin(false);
      autoRef.current = false;
    } else {
      setAutoSpin(true);
      autoRef.current = true;
      doSpin();
    }
  };

  const handleJackpotComplete = (winAmount) => {
    setJackpotActive(false);
    if (winAmount > 0) {
      setBalance((b) => Math.round((b + winAmount) * 100) / 100);
      setMessage(`JACKPOT KAZANDINIZ: ${winAmount.toFixed(2)} TL!`);
    }
  };

  const handleRiskStart = () => {
    if (totalWin <= 0) return;
    setBalance((b) => Math.round((b - totalWin) * 100) / 100);
    setRiskActive(true);
  };

  const handleRiskResult = (winAmount) => {
    setRiskActive(false);
    if (winAmount > 0) {
      setBalance((b) => Math.round((b + winAmount) * 100) / 100);
      setMessage(`Risk oyunundan ${winAmount.toFixed(2)} TL toplandi!`);
    } else {
      setMessage('Risk oyununda kaybettiniz!');
    }
    setTotalWin(0);
    setRiskWin(0);
  };

  return (
    <section id="demo-slot" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{
            background: 'linear-gradient(90deg, #F57F17, #FF6F00, #F57F17)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          EGT Slot Demo
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm">
          5 Makara - 4 Satir - 40 Oedeme Hatti | Klasik Payline Sistemi
        </p>

        {/* Main slot machine */}
        <div
          className="glass rounded-2xl p-4 md:p-6 mb-4"
          style={{
            border: '2px solid rgba(245, 127, 23, 0.3)',
            boxShadow: '0 0 30px rgba(183, 28, 28, 0.2), inset 0 0 30px rgba(0,0,0,0.3)',
          }}
        >
          {/* Balance & bet info bar */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-gray-400">Bakiye: </span>
              <span className="text-egt-gold font-bold">{balance.toFixed(2)} TL</span>
            </div>
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-gray-400">Bahis: </span>
              <span className="text-white font-bold">{bet.toFixed(2)} TL</span>
            </div>
            {totalWin > 0 && (
              <div className="glass rounded-lg px-4 py-2 animate-fire-pulse">
                <span className="text-gray-400">Kazanc: </span>
                <span className="text-green-400 font-bold">{totalWin.toFixed(2)} TL</span>
              </div>
            )}
          </div>

          {/* 5x4 Grid */}
          <div
            className="relative rounded-xl overflow-hidden mb-4"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(26,0,0,0.8))',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="grid grid-cols-5 gap-0">
              {grid.map((row, rIdx) =>
                row.map((sym, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`
                      aspect-square flex items-center justify-center text-3xl md:text-4xl
                      border border-white/5 transition-all duration-300
                      ${spinning ? 'animate-spin-reel opacity-60' : ''}
                    `}
                    style={{
                      animationDelay: spinning ? `${cIdx * 0.1}s` : '0s',
                      background:
                        activeWinLine?.positions.some(
                          ([r, c]) => r === rIdx && c === cIdx
                        )
                          ? `${activeWinLine.symbol.color}15`
                          : 'transparent',
                    }}
                  >
                    <span
                      className={spinning ? 'blur-sm' : ''}
                      role="img"
                      aria-label={sym.name}
                    >
                      {sym.emoji}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Win line overlay */}
            {activeWinLine && !spinning && (
              <WinLineAnim
                positions={activeWinLine.positions}
                color={activeWinLine.symbol.color}
              />
            )}
          </div>

          {/* Message bar */}
          <div
            className="text-center py-2 rounded-lg mb-4 text-sm font-medium"
            style={{
              background: 'rgba(0,0,0,0.4)',
              color: totalWin > 0 ? '#4CAF50' : '#9E9E9E',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {message}
            {activeWinLine && !spinning && (
              <span className="ml-2 text-xs text-gray-500">
                Hat {activeWinLine.lineIndex + 1}: {activeWinLine.count}x{' '}
                {activeWinLine.symbol.emoji} = {activeWinLine.win.toFixed(2)} TL
              </span>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {/* Bet controls */}
            <button
              onClick={() => handleBetChange(-1)}
              disabled={spinning || betIndex === 0}
              className="w-10 h-10 rounded-lg glass text-white font-bold text-lg cursor-pointer disabled:opacity-30 hover:bg-white/10 transition-all"
            >
              -
            </button>
            <div className="glass rounded-lg px-4 py-2 text-sm min-w-[80px] text-center">
              <span className="text-gray-400 text-xs block">BAHIS</span>
              <span className="text-white font-bold">{bet.toFixed(2)}</span>
            </div>
            <button
              onClick={() => handleBetChange(1)}
              disabled={spinning || betIndex === BET_LEVELS.length - 1}
              className="w-10 h-10 rounded-lg glass text-white font-bold text-lg cursor-pointer disabled:opacity-30 hover:bg-white/10 transition-all"
            >
              +
            </button>

            {/* Spin button */}
            <button
              onClick={doSpin}
              disabled={spinning || jackpotActive || riskActive}
              className="px-8 py-3 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              style={{
                background: spinning
                  ? 'linear-gradient(135deg, #555, #333)'
                  : 'linear-gradient(135deg, #B71C1C, #D32F2F)',
                boxShadow: spinning
                  ? 'none'
                  : '0 4px 20px rgba(183, 28, 28, 0.5)',
              }}
            >
              {spinning ? 'DONUYOR...' : 'SPIN'}
            </button>

            {/* Auto-spin */}
            <button
              onClick={toggleAutoSpin}
              disabled={jackpotActive || riskActive}
              className="px-4 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 cursor-pointer"
              style={{
                background: autoSpin
                  ? 'linear-gradient(135deg, #F57F17, #FF6F00)'
                  : 'rgba(255,255,255,0.08)',
                border: autoSpin
                  ? '1px solid #F57F17'
                  : '1px solid rgba(255,255,255,0.1)',
                color: autoSpin ? '#fff' : '#999',
              }}
            >
              AUTO {autoSpin ? 'ON' : 'OFF'}
            </button>

            {/* Risk button */}
            {totalWin > 0 && !spinning && (
              <button
                onClick={handleRiskStart}
                className="px-4 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 cursor-pointer animate-fire-pulse"
                style={{
                  background: 'linear-gradient(135deg, #E65100, #BF360C)',
                  boxShadow: '0 4px 15px rgba(230, 81, 0, 0.4)',
                }}
              >
                RISK
              </button>
            )}
          </div>
        </div>

        {/* Win summary */}
        {winResults.length > 0 && !spinning && (
          <div className="glass rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-egt-gold mb-2">
              Kazanan Hatlar ({winResults.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto">
              {winResults.map((r, i) => (
                <div
                  key={i}
                  className="text-xs glass rounded-lg px-3 py-2 flex items-center gap-2"
                  style={{
                    border:
                      activeWinLine?.lineIndex === r.lineIndex
                        ? `1px solid ${r.symbol.color}`
                        : '1px solid transparent',
                  }}
                >
                  <span className="text-gray-500">#{r.lineIndex + 1}</span>
                  <span>{r.count}x {r.symbol.emoji}</span>
                  <span className="text-green-400 ml-auto font-bold">
                    {r.win.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Symbol reference table */}
        <div className="glass rounded-xl p-4">
          <h3 className="text-sm font-bold text-egt-gold mb-3">
            Sembol Oedeme Tablosu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {SYMBOLS.filter((s) => !s.isWild).map((sym) => (
              <div
                key={sym.id}
                className="flex items-center gap-3 glass rounded-lg px-3 py-2 text-sm"
              >
                <span className="text-2xl">{sym.emoji}</span>
                <span className="text-gray-300 flex-1">{sym.name}</span>
                <div className="text-xs text-right">
                  <span className="text-gray-500">3x</span>{' '}
                  <span className="text-white">{sym.payouts[3]}x</span>
                  <span className="text-gray-600 mx-1">|</span>
                  <span className="text-gray-500">4x</span>{' '}
                  <span className="text-white">{sym.payouts[4]}x</span>
                  <span className="text-gray-600 mx-1">|</span>
                  <span className="text-gray-500">5x</span>{' '}
                  <span className="text-egt-gold font-bold">{sym.payouts[5]}x</span>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 glass rounded-lg px-3 py-2 text-sm border border-orange-500/30">
              <span className="text-2xl">{WILD_EMOJI}</span>
              <span className="text-orange-400 flex-1">Wild - Tum sembollerin yerine gecer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jackpot Cards overlay */}
      <JackpotCards
        isActive={jackpotActive}
        onComplete={handleJackpotComplete}
        bet={bet}
      />

      {/* Risk Game overlay */}
      <RiskGame
        isActive={riskActive}
        currentWin={riskWin}
        onResult={handleRiskResult}
      />
    </section>
  );
}
