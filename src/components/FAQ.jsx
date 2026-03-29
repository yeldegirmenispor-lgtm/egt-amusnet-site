import React, { useState, useCallback } from 'react';

const FAQ_DATA = [
  {
    question: 'EGT (Amusnet Interactive) nedir?',
    answer:
      'EGT Interactive, artik Amusnet Interactive olarak bilinen Bulgaristan merkezli bir oyun saglayicisidir. 2002 yilinda kurulan sirket, kara tabanli ve online casino oyunlari uretmektedir. 200\'den fazla slot oyunu ile dunyanin en buyuk oyun saglayicilarindan biridir.',
  },
  {
    question: 'EGT slot oyunlarinda Jackpot Cards nedir?',
    answer:
      'Jackpot Cards, EGT\'nin imza ozelliklerinden biridir. Herhangi bir spin sonrasinda rastgele tetiklenen bir mini oyundur. 12 yuz uste kapaili karttan 3 ayni sembol bulmaniz gerekir. Club, Diamond, Heart ve Spade olmak uzere 4 jackpot seviyesi vardir. Spade en yuksek jackpot seviyesidir.',
  },
  {
    question: 'EGT oyunlarinda RTP (Oyuncuya Donus) orani nedir?',
    answer:
      'EGT slot oyunlarinin RTP oranlari genellikle %95.50 ile %96.50 arasinda degisir. Ornegin Burning Hot %96.45, Shining Crown %96.37 ve 40 Super Hot %95.81 RTP\'ye sahiptir. Bu oranlar uzun vadeli istatistiksel beklentiyi gosterir.',
  },
  {
    question: 'Demo slot oyunlari gercek para ile mi oynanir?',
    answer:
      'Hayir, demo slot oyunlari tamamen ucretsizdir ve sanal bakiye ile oynanir. Gercek para yatirmaniz veya kazanmaniz soz konusu degildir. Demo modda oyunun mekaniklerini ve ozelliklerini risksiz olarak deneyebilirsiniz.',
  },
  {
    question: 'Payline (oedeme hatti) sistemi nasil calisir?',
    answer:
      'Klasik payline sisteminde, makaralardaki sembollerin belirli pozisyonlarda eslesmesi gerekir. EGT\'nin 40 hatli oyunlarinda 5 makara ve 4 satirli bir grid uzerinde 40 farkli oedeme hatti bulunur. Kazanc icin en az 3 ayni sembolun soldan saga sirali sekilde bir hat uzerinde olmasi gerekir. Wild sembolu diger tum sembollerin yerine gecebilir.',
  },
  {
    question: 'Risk (Gamble) ozelligi nedir?',
    answer:
      'Risk ozelligi, bir kazanc elde ettikten sonra kazancinizi ikiye katlama sansi verir. Kart rengi tahmin oyununda kirmizi veya siyah secersiniz. Dogru tahmin kazancinizi 2 katina cikarir, yanlis tahmin ise tum kazancinizi kaybetmenize neden olur. Kazancinizi korumak icin "Topla" butonunu kullanabilirsiniz.',
  },
  {
    question: 'EGT oyunlarinda volatilite ne anlama gelir?',
    answer:
      'Volatilite, bir slot oyununun kazanc dagilim sikligi ve buyuklugunu belirler. Dusuk volatiliteli oyunlar (ornegin Burning Hot) daha sik ama daha kucuk kazanclar verir. Yuksek volatiliteli oyunlar daha seyrek ama daha buyuk kazanclar sunar. EGT oyunlarinin cogu orta-dusuk volatiliteye sahiptir.',
  },
  {
    question: 'Amusnet Interactive lisansli midir?',
    answer:
      'Evet, Amusnet Interactive birden fazla yetki alaninda lisanslidir. Malta Gaming Authority (MGA), UK Gambling Commission, Romanya ONJN ve baska duzenleyici kuruluslardan lisans almistir. Tum oyunlari bagimsiz test laboratuvarlari tarafindan denetlenmektedir.',
  },
  {
    question: 'EGT slot oyunlarinda en yuksek kazanc nasil elde edilir?',
    answer:
      'En yuksek kazanc icin 5 makarada ayni yuksek degerli sembolun (ornegin 7) eslesmesi gerekir. 40 hatli oyunlarda birden fazla hatta ayni anda kazanc elde etmek mumkundur. Jackpot Cards ozelliginin tetiklenmesi ise en buyuk tek seferlik kazanc firsatini sunar.',
  },
  {
    question: 'Mobil cihazlarda EGT oyunlarini oynayabilir miyim?',
    answer:
      'Evet, Amusnet Interactive\'in tum modern slot oyunlari HTML5 teknolojisi ile gelistirilmistir. Bu sayede iOS ve Android cihazlarda, tabletlerde ve masaustu bilgisayarlarda sorunsuz calisir. Herhangi bir ek yazilim yuklemesine gerek yoktur.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="glass rounded-xl overflow-hidden transition-all mb-3"
      style={{
        border: isOpen
          ? '1px solid rgba(245, 127, 23, 0.3)'
          : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-sm md:text-base text-white/90">
          {item.question}
        </span>
        <span
          className="text-egt-gold transition-transform duration-300 flex-shrink-0"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback(
    (index) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  // FAQPage structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="sss" className="py-16 px-4">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{
            background: 'linear-gradient(90deg, #F57F17, #FF6F00, #F57F17)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sikca Sorulan Sorular
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          EGT Amusnet slot oyunlari hakkinda merak edilenler
        </p>

        <div>
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
