import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import SEOHead from './SEOHead';

const authors = {
  kaan: {
    name: 'Kaan Yılmaz',
    title: 'EGT/Amusnet Slot Mekanikleri ve Jackpot Cards Uzmanı',
    bio: 'Kaan Yılmaz, on yıllık iGaming deneyimiyle EGT ve Amusnet Interactive slot oyunlarının matematik yapısını, 40 hat payline sistemini ve Jackpot Cards mekanizmasının olasılık analizini Türkçe içerik dünyasına taşıyan nadir uzmanlardan biridir. Klasik meyve slotlarından progresif jackpot sistemlerine kadar geniş bir analiz yelpazesine sahiptir.',
    avatar: '👨‍🔬',
    years: 10,
    education: 'İstanbul Üniversitesi — Matematik',
    social: '@kaan_slotanaliz',
    email: 'kaan@egtslotrehberi.com',
  },
  ece: {
    name: 'Ece Tuncer',
    title: 'Klasik Slot Stratejileri ve EGT Oynanış Uzmanı',
    bio: 'Ece Tuncer, YouTube kanalında 18.000 abonesiyle EGT klasik meyve slotlarını canlı test ederek oyunculara aktarmaktadır. 40 Super Hot, Burning Hot ve Shining Crown gibi oyunların hat yapılarını, risk oyunu mekaniklerini ve bahis stratejilerini finans altyapısıyla analiz etmektedir.',
    avatar: '👩‍💼',
    years: 7,
    education: 'Koç Üniversitesi — İşletme',
    social: '@ece_casinostrateji',
    email: 'ece@egtslotrehberi.com',
  },
  deniz: {
    name: 'Deniz Karaoğlu',
    title: 'Amusnet/EGT Türkiye ve Fiziksel-Online Geçiş Uzmanı',
    bio: 'Deniz Karaoğlu, EGT ve Amusnet Interactive markalarının Türkiye pazarındaki konumlanmasını, fiziksel casinodan online platforma geçiş sürecini ve lisanslama detaylarını kapsamlı şekilde inceleyen içerik uzmanıdır. Altı yıllık sektör deneyimiyle Türk oyunculara doğru bilgi sunmaktadır.',
    avatar: '👨‍💻',
    years: 6,
    education: 'Ankara Üniversitesi — Uluslararası İlişkiler',
    social: '@deniz_casinopro',
    email: 'deniz@egtslotrehberi.com',
  },
  onur: {
    name: 'Onur Saraç',
    title: 'Teknik SEO Editör | E-E-A-T Uzmanı',
    bio: 'Onur Saraç, EGT ve Amusnet slot içerikleri için Türkiye rakip analizi yapan ve içerik boşluğunu haritalandıran teknik SEO uzmanıdır. Dokuz yıllık deneyimiyle tüm makaleleri doğruluk, SEO uyumu ve E-E-A-T kriterleri açısından titizlikle düzenlemektedir.',
    avatar: '👨‍🔧',
    years: 9,
    education: 'Yıldız Teknik Üniversitesi — Bilgisayar Mühendisliği',
    social: '@onursarac_seo',
    email: 'onur@egtslotrehberi.com',
  },
};

export default function ArticleLayout({ title, description, path, authorKey, editorKey = 'onur', children }) {
  const { t } = useLanguage();
  const author = authors[authorKey];
  const editor = authors[editorKey];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.title,
      email: author.email,
    },
    editor: {
      '@type': 'Person',
      name: editor.name,
      jobTitle: editor.title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EGT Slot Rehberi',
      url: 'https://egtslotrehberi.com',
    },
    mainEntityOfPage: `https://egtslotrehberi.com${path}`,
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead title={title} description={description} path={path} schema={articleSchema} />

      <article className="max-w-4xl mx-auto px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-egt-red transition-colors mb-8"
        >
          ← {t('articles.backToArticles')}
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-egt-red via-egt-gold to-egt-purple bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Author info */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{author.avatar}</span>
              <div>
                <div className="text-sm text-gray-400">{t('articles.author')}</div>
                <div className="font-semibold text-white">{author.name}</div>
                <div className="text-xs text-egt-gold">{author.title}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{editor.avatar}</span>
              <div>
                <div className="text-sm text-gray-400">{t('articles.editor')}</div>
                <div className="font-semibold text-white">{editor.name}</div>
                <div className="text-xs text-egt-gold">{editor.title}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-invert max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-egt-red
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-egt-gold
          [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:space-y-2 [&_ul]:mb-6
          [&_li]:text-gray-300 [&_li]:pl-2
          [&_strong]:text-white
          [&_em]:text-egt-gold
          [&_table]:w-full [&_table]:text-sm [&_table]:mb-6
          [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:text-gray-400 [&_th]:border-b [&_th]:border-white/10
          [&_td]:px-4 [&_td]:py-2 [&_td]:text-gray-300 [&_td]:border-b [&_td]:border-white/5
        ">
          {children}
        </div>

        {/* Author bio card */}
        <div className="mt-16 glass rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{author.avatar}</span>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">{author.name}</h3>
              <p className="text-sm text-egt-red mb-1">{author.title}</p>
              <p className="text-sm text-egt-gold mb-2">{author.years} yıl deneyim | {author.education}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{author.bio}</p>
              <p className="text-xs text-gray-500 mt-2">{author.social}</p>
            </div>
          </div>
        </div>

        {/* Related articles CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-egt-red to-egt-gold text-white font-bold hover:scale-105 transition-transform"
          >
            🔥 {t('articles.relatedArticles')}
          </Link>
        </div>
      </article>
    </div>
  );
}
