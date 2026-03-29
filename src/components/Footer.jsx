import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const articleLinks = [
  { path: '/egt-slot-oyunlari', label: 'EGT Slot Oyunları' },
  { path: '/40-super-hot', label: '40 Super Hot Rehberi' },
  { path: '/burning-hot', label: 'Burning Hot Rehberi' },
  { path: '/egt-jackpot', label: 'EGT Jackpot Sistemi' },
  { path: '/shining-crown', label: 'Shining Crown Rehberi' },
  { path: '/amusnet-nedir', label: 'Amusnet Nedir?' },
  { path: '/egt-stratejileri', label: 'EGT Stratejileri' },
];

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="border-t border-white/10 mt-16">
      {/* Responsible gaming banner */}
      <div className="bg-gradient-to-r from-red-900/20 to-egt-gold/10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <div className="inline-flex items-center gap-2 text-red-400 font-bold text-lg mb-2">
            ⚠️ {t('responsible.title')}
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">{t('responsible.text')}</p>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-500/30 text-red-400 text-sm font-bold">
            {t('responsible.age')}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              🔥 EGT & Amusnet
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer.aboutText')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: lang === 'tr' ? 'Ana Sayfa' : 'Home' },
                { path: '/egt-slot-demo', label: 'Demo' },
                { path: '/oyunlar', label: lang === 'tr' ? 'Oyunlar' : 'Games' },
                { path: '/jackpot-cards', label: 'Jackpot Cards' },
                { path: '/casino-incelemeleri', label: lang === 'tr' ? 'Casino İncelemeleri' : 'Casino Reviews' },
                { path: '/sss', label: lang === 'tr' ? 'SSS' : 'FAQ' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-egt-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.articles')}</h3>
            <ul className="space-y-2">
              {articleLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-egt-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.legal')}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">{t('footer.disclaimer')}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t('footer.disclaimerText')}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">{t('footer.responsible')}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t('footer.responsibleText')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Naked Links */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-4 text-xs">
          {[
            'https://bedavaslotoyunlarioyna1.com/',
            'https://demoslotoyunlarioyna1.top/',
            'https://anatoljhr.org/',
            'https://demoslotoyna.org/',
            'https://www.biosimilars-congress.com/',
          ].map((url, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-egt-gold transition-colors">
              {url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center text-gray-600 text-xs">
          <p>EGT ve Amusnet Slot Oyunlari | Euro Games Technology</p>
          <p className="mt-1">Bu site yalnızca bilgi ve eğlence amaçlıdır.</p>
        </div>
      </div>
    </footer>
  );
}
