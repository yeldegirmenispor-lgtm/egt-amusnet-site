import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const articleLinks = [
  { path: '/egt-slot-oyunlari', label: { tr: 'EGT Slot Oyunları', en: 'EGT Slot Games' } },
  { path: '/40-super-hot', label: { tr: '40 Super Hot Rehberi', en: '40 Super Hot Guide' } },
  { path: '/burning-hot', label: { tr: 'Burning Hot Rehberi', en: 'Burning Hot Guide' } },
  { path: '/egt-jackpot', label: { tr: 'EGT Jackpot Sistemi', en: 'EGT Jackpot System' } },
  { path: '/shining-crown', label: { tr: 'Shining Crown Rehberi', en: 'Shining Crown Guide' } },
  { path: '/amusnet-nedir', label: { tr: 'Amusnet Nedir?', en: 'What is Amusnet?' } },
  { path: '/egt-stratejileri', label: { tr: 'EGT Stratejileri', en: 'EGT Strategies' } },
];

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  const navItems = [
    { path: '/egt-slot-demo', label: lang === 'tr' ? '🔥 Demo' : '🔥 Demo' },
    { path: '/oyunlar', label: lang === 'tr' ? '🎰 Oyunlar' : '🎰 Games' },
    { path: '/jackpot-cards', label: lang === 'tr' ? '🃏 Jackpot Cards' : '🃏 Jackpot Cards' },
    { path: '/casino-incelemeleri', label: lang === 'tr' ? '🏆 Casino İncelemeleri' : '🏆 Casino Reviews' },
    { path: '/sss', label: lang === 'tr' ? '❓ SSS' : '❓ FAQ' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">🔥</span>
            <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
              EGT & Amusnet
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-egt-red/20 text-egt-gold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Articles Dropdown */}
            <div className="relative"
              onMouseEnter={() => setArticlesOpen(true)}
              onMouseLeave={() => setArticlesOpen(false)}
            >
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-1">
                <span>📝</span>
                {lang === 'tr' ? 'Makaleler' : 'Articles'}
                <svg className={`w-4 h-4 transition-transform ${articlesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {articlesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 glass rounded-xl overflow-hidden shadow-2xl">
                  {articleLinks.map(article => (
                    <Link
                      key={article.path}
                      to={article.path}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {article.label[lang]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 transition-colors"
            >
              {lang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(item.path) ? 'bg-egt-red/20 text-egt-gold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2">
              <p className="px-3 py-1 text-xs text-gray-500 uppercase">{lang === 'tr' ? 'Makaleler' : 'Articles'}</p>
              {articleLinks.map(article => (
                <Link
                  key={article.path}
                  to={article.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-300"
                >
                  {article.label[lang]}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleLang}
              className="w-full mt-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/5 text-left"
            >
              {lang === 'tr' ? '🇹🇷 Türkçe → English' : '🇬🇧 English → Türkçe'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
