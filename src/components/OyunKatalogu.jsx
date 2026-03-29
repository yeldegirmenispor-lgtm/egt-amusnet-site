import React, { useState, useMemo } from 'react';

const GAMES = [
  {
    name: '40 Super Hot',
    grid: '5x4',
    lines: 40,
    rtp: '95.81%',
    theme: 'Klasik Meyve',
    description: 'Klasik meyve slot deneyiminin modern yorumu. 40 oedeme hatti ile yuksek kazanc sansi.',
    tags: ['klasik', 'meyve', 'sicak'],
  },
  {
    name: 'Burning Hot',
    grid: '5x3',
    lines: 5,
    rtp: '96.45%',
    theme: 'Ates & Meyve',
    description: 'Basit ama etkili 5 hatli slot. Yanan sembollerle dolu klasik EGT deneyimi.',
    tags: ['ates', 'meyve', 'klasik'],
  },
  {
    name: 'Flaming Hot',
    grid: '5x3',
    lines: 5,
    rtp: '95.53%',
    theme: 'Ates & Meyve',
    description: 'Burning Hot\'un kardes oyunu. Alevli temasi ve hizli oynanis ile populer.',
    tags: ['ates', 'meyve', 'klasik'],
  },
  {
    name: '40 Burning Hot',
    grid: '5x4',
    lines: 40,
    rtp: '95.93%',
    theme: 'Ates & Meyve',
    description: 'Burning Hot\'un 40 hatli versiyonu. Daha fazla hat, daha fazla kazanc firsati.',
    tags: ['ates', 'meyve', '40hat'],
  },
  {
    name: 'Shining Crown',
    grid: '5x3',
    lines: 10,
    rtp: '96.37%',
    theme: 'Krallik & Meyve',
    description: 'Tac sembolu ile ozel ozellikler. EGT\'nin en bilinen oyunlarindan biri.',
    tags: ['tac', 'meyve', 'klasik'],
  },
  {
    name: 'Egypt Sky',
    grid: '5x3',
    lines: 40,
    rtp: '96.16%',
    theme: 'Antik Misir',
    description: 'Misir temasina sahip slot. Piramitler, firavunlar ve gizemli sembollerle dolu.',
    tags: ['misir', 'macera', 'antik'],
  },
  {
    name: '100 Cats',
    grid: '5x4',
    lines: 100,
    rtp: '95.79%',
    theme: 'Antik Misir & Kediler',
    description: '100 oedeme hattina sahip kedi temali slot. Misir kedileri ile buyuk kazanclar.',
    tags: ['kedi', 'misir', '100hat'],
  },
  {
    name: 'Bell Link',
    grid: '5x3',
    lines: 10,
    rtp: '95.98%',
    theme: 'Klasik & Jackpot',
    description: 'Baglantilanmis jackpot sistemi ile klasik slot. Bell Link ozelliginde buyuk odulller.',
    tags: ['jackpot', 'klasik', 'link'],
  },
  {
    name: '20 Super Hot',
    grid: '5x3',
    lines: 20,
    rtp: '95.79%',
    theme: 'Klasik Meyve',
    description: '20 hatli klasik meyve slot. Orta seviye volatilite ile dengeli oyun deneyimi.',
    tags: ['klasik', 'meyve', '20hat'],
  },
  {
    name: "Amazons' Battle",
    grid: '5x3',
    lines: 50,
    rtp: '95.62%',
    theme: 'Amazon Savascilari',
    description: 'Amazon savascilari temali slot. Free spin ve carp ozellikleri ile heyecanli.',
    tags: ['macera', 'amazon', 'savasci'],
  },
  {
    name: 'Circus Brilliant',
    grid: '5x3',
    lines: 20,
    rtp: '95.64%',
    theme: 'Sirk & Eglence',
    description: 'Renkli sirk temasi. Palyacolar, akrobatlar ve buyuk odullerle dolu gosteris.',
    tags: ['sirk', 'eglence', 'renkli'],
  },
  {
    name: 'Egypt Quest',
    grid: '5x3',
    lines: 10,
    rtp: '95.81%',
    theme: 'Antik Misir',
    description: 'Misir macerasi temali slot. Hazine avciligi ve gizemli bonuslarla dolu.',
    tags: ['misir', 'macera', 'hazine'],
  },
];

const THEME_COLORS = {
  'Klasik Meyve': '#FF9100',
  'Ates & Meyve': '#FF3D00',
  'Krallik & Meyve': '#FFD600',
  'Antik Misir': '#F57F17',
  'Antik Misir & Kediler': '#E65100',
  'Klasik & Jackpot': '#FF6F00',
  'Amazon Savascilari': '#4CAF50',
  'Sirk & Eglence': '#E040FB',
};

export default function OyunKatalogu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const themes = useMemo(() => {
    const set = new Set(GAMES.map((g) => g.theme));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return GAMES.filter((game) => {
      const matchSearch =
        search === '' ||
        game.name.toLowerCase().includes(search.toLowerCase()) ||
        game.tags.some((t) => t.includes(search.toLowerCase()));
      const matchFilter = filter === 'all' || game.theme === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <section id="oyun-katalogu" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{
            background: 'linear-gradient(90deg, #F57F17, #FF6F00, #F57F17)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          EGT Oyun Katalogu
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Amusnet Interactive tarafindan gelistirilen populer slot oyunlari
        </p>

        {/* Search & filter bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Oyun ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-egt-gold/50 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setFilter(theme)}
                className="px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer"
                style={{
                  background:
                    filter === theme
                      ? 'linear-gradient(135deg, #B71C1C, #F57F17)'
                      : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${filter === theme ? '#F57F17' : 'rgba(255,255,255,0.1)'}`,
                  color: filter === theme ? '#fff' : '#9E9E9E',
                }}
              >
                {theme === 'all' ? 'Tumu' : theme}
              </button>
            ))}
          </div>
        </div>

        {/* Game grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((game) => {
            const themeColor = THEME_COLORS[game.theme] || '#F57F17';
            return (
              <div
                key={game.name}
                className="glass rounded-xl p-5 transition-all hover:scale-[1.02] hover:border-egt-gold/30"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Game header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{game.name}</h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      background: `${themeColor}20`,
                      color: themeColor,
                      border: `1px solid ${themeColor}40`,
                    }}
                  >
                    {game.theme}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {game.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="glass rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-500">Grid</div>
                    <div className="text-sm font-bold text-white">{game.grid}</div>
                  </div>
                  <div className="glass rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-500">Hatlar</div>
                    <div className="text-sm font-bold text-white">{game.lines}</div>
                  </div>
                  <div className="glass rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-500">RTP</div>
                    <div className="text-sm font-bold text-egt-gold">{game.rtp}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-1 flex-wrap">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: '#9E9E9E',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Aramanizla eslesen oyun bulunamadi.
          </div>
        )}
      </div>
    </section>
  );
}
