import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';

const casinos = [
  {
    name: 'Discount Casino',
    bonus: '2.500 TL + 150 Free Spin',
    rating: 4.9,
    wagering: '35x',
    features: { tr: ['Hızlı Ödeme', 'Canlı Destek', 'EGT/Amusnet Mevcut', 'Jackpot Cards Aktif', 'Mobil Mükemmel'], en: ['Fast Payout', 'Live Support', 'EGT/Amusnet Available', 'Jackpot Cards Active', 'Mobile Excellent'] },
    color: 'from-egt-red to-egt-gold',
    icon: '💰',
  },
  {
    name: 'Jetbahis',
    bonus: '5.000 TL + 200 Free Spin',
    rating: 4.8,
    wagering: '40x',
    features: { tr: ['En Yüksek Bonus', 'Mobil Uyumlu', 'EGT/Amusnet Mevcut', 'Jackpot Cards Aktif'], en: ['Highest Bonus', 'Mobile Ready', 'EGT/Amusnet Available', 'Jackpot Cards Active'] },
    color: 'from-egt-gold to-yellow-500',
    icon: '🚀',
  },
  {
    name: 'Celtabet',
    bonus: '3.000 TL + 100 Free Spin',
    rating: 4.6,
    wagering: '38x',
    features: { tr: ['Deneme Bonusu', '7/24 Destek', 'EGT/Amusnet Mevcut', 'Jackpot Cards Aktif'], en: ['Trial Bonus', '24/7 Support', 'EGT/Amusnet Available', 'Jackpot Cards Active'] },
    color: 'from-egt-purple to-egt-red',
    icon: '🍀',
  },
  {
    name: 'Lord Casino',
    bonus: '4.000 TL + 120 Free Spin',
    rating: 4.5,
    wagering: '42x',
    features: { tr: ['VIP Program', 'Yüksek Limit', 'EGT/Amusnet Mevcut', 'Jackpot Cards Aktif'], en: ['VIP Program', 'High Limit', 'EGT/Amusnet Available', 'Jackpot Cards Active'] },
    color: 'from-egt-red to-egt-purple',
    icon: '👑',
  },
];

export default function CasinoCards() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-egt-gold to-egt-red bg-clip-text text-transparent">
              {t('casino.title')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">{t('casino.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {casinos.map((casino, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              {/* Header */}
              <div className={`p-4 bg-gradient-to-r ${casino.color}`}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{casino.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{casino.name}</h3>
                    <div className="flex items-center gap-1">
                      {'⭐'.repeat(Math.floor(casino.rating))}
                      <span className="text-sm text-white/80 ml-1">{casino.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="mb-3">
                  <div className="text-xs text-gray-400 uppercase mb-1">{t('casino.bonus')}</div>
                  <div className="text-egt-gold font-bold text-lg">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-1">{lang === 'tr' ? 'Çevrim' : 'Wagering'}: {casino.wagering}</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {casino.features[lang].map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-egt-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-egt-red to-egt-gold text-white text-sm font-bold hover:opacity-90 transition-opacity">
                    {t('casino.visit')}
                  </button>
                  <Link
                    to="/casino-incelemeleri"
                    className="flex-1 py-2 rounded-lg glass text-center text-white text-sm font-medium hover:bg-white/10"
                  >
                    {t('casino.review')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
