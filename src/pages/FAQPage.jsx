import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';

const faqs = [
  {
    q: 'EGT slot oyunlari nedir?',
    a: 'EGT (Euro Games Technology), Bulgaristan merkezli dunyanin onde gelen slot makinesi ureticilerinden biridir. Fiziksel casino sektorunde binlerce slot makinesi ile faaliyet gostermekte, online bolumu Amusnet Interactive ise ayni kaliteli oyunlari dijital platforma tasimaktadir. EGT slotlari klasik meyve temasi, 5 cark yapisi ve Jackpot Cards sistemiyle taninir.',
  },
  {
    q: 'Amusnet Interactive ile EGT arasindaki fark nedir?',
    a: 'Amusnet Interactive, EGT nin online oyun markasıdır. EGT fiziksel casino slot makineleri uretirken, Amusnet ayni oyunlarin dijital versiyonlarini gelistirmekte ve online casinolara dagitmaktadir. Oyun mekanikleri, RTP oranlari ve gorsel tasarimlar buyuk olcude aynidir. Amusnet, Malta Gaming Authority ve diger saygin kurumlar tarafindan lisanslidir.',
  },
  {
    q: 'Jackpot Cards nasil tetiklenir?',
    a: 'Jackpot Cards, herhangi bir EGT slot oyununda herhangi bir spin sonrasi tamamen rastgele tetiklenir. Bahis miktariniz ne kadar yuksekse tetiklenme olasiligi o kadar artar. Tetiklendiginde 12 ters cevrilmis kart ekrana gelir ve siz kartlari tek tek acerek ayni takimdan 3 kart bulmaya calirsınız. Club, Diamond, Heart veya Spade seviyelerinden birini kazanirsiniz.',
  },
  {
    q: 'EGT slotlarinda RTP ne kadar?',
    a: 'EGT slotlarinin cogu %95 ile %97 arasinda RTP (Return to Player) degerine sahiptir. 40 Super Hot %95.81, Burning Hot %95.93 ve Shining Crown %96.37 RTP oranina sahiptir. Bu degerler endustri ortalamasina yakın olup uzun vadede oyuncuya donecek teorik orani ifade eder.',
  },
  {
    q: 'Risk oyunu (gamble) ozelligi nedir?',
    a: 'Risk oyunu, EGT slotlarinda her kazanctan sonra sunulan bir secenektir. Kirmizi veya siyah kart tahmini yaparak kazancinizi ikiye katlayabilir veya tamamen kaybedebilirsiniz. Bu ozellik tamamen isteğe baglidir ve kullanıp kullanmamak oyuncunun tercihine kalir. Buyuk kazanclarda risk oynamaktan kacinmaniz onerilir.',
  },
  {
    q: '40 Super Hot ile Burning Hot arasindaki fark nedir?',
    a: 'Her iki oyun da 5 cark, 4 satir ve 40 hat payline yapisina sahiptir. Temel farklar gorsel tasarim ve sembol dagilimindadir. 40 Super Hot klasik meyve temasini daha geleneksel bir yaklaşımla sunarken, Burning Hot ates temali tasarimi ve daha canli renkleriyle one cikar. RTP oranlari da birbirine yakindir (40 Super Hot: %95.81, Burning Hot: %95.93).',
  },
  {
    q: 'EGT slotlarinda 40 hat ne anlama gelir?',
    a: '40 hat, her spinde 40 farkli odeme hattinin aktif oldugu anlamina gelir. Bu hatlar soldan saga dogru calisir ve belirli sembol kombinasyonlarini tarar. 40 hatin tumu her turda otomatik olarak aktiftir, yani oyuncunun hat secimi yapmasi gerekmez. Bu yapi her turda birden fazla kazanma sansi yaratir.',
  },
  {
    q: 'EGT slot oyunlari hangi casinolarda oynanir?',
    a: 'EGT ve Amusnet Interactive slotlari Discount Casino, Jetbahis, Celtabet ve Lord Casino gibi populer Turkiye pazarindaki platformlarda mevcuttur. Bu platformlarin hepsi Jackpot Cards destegi sunmakta ve genis EGT oyun portfoyune sahiptir.',
  },
  {
    q: 'Demo modda EGT slotlari oynanabilir mi?',
    a: 'Evet, EGT slotlarinin buyuk cogunlugu demo modda ucretsiz olarak oynanabilir. Demo modda gercek para riski yoktur ve sanal bakiye ile oynarsiniz. Bu mod oyun mekaniklerini ogrenmek, hat yapılarını test etmek ve strateji gelistirmek icin idealdir. Sitemizde de ucretsiz EGT slot demosu bulunmaktadir.',
  },
  {
    q: 'EGT slotlarinda wild sembol ne ise yarar?',
    a: 'Wild (joker) sembolu, EGT slotlarinda scatter haric diger tum sembollerin yerine gecebilen ozel bir semboldur. Bir kazanc hattinda eksik sembol oldugunda wild bu boslugu doldurarak kombinasyonu tamamlar. Wild semboller kazanma sansinizi onemli olcude artirir.',
  },
  {
    q: 'Shining Crown neden 20 hat kullanir?',
    a: 'Shining Crown, 5x3 grid yapisi ile tasarlanmistir ve bu yapi 20 odeme hattini destekler. 40 hattan farkli olarak daha dusuk hat sayisi, farkli bir bahis stratejisi ve oynanis deneyimi sunar. Hat basina bahis ayarlamasi yapilabilir ve toplam bahis miktari 40 hatli oyunlardan genellikle daha dusuktur.',
  },
  {
    q: 'EGT slotlarinda en yuksek odemeyi nasil alirim?',
    a: 'En yuksek odeme, 5 adet 7 sembolunun ayni hatta gelmesiyle elde edilir ve genellikle 1000x carpan kazandirir. Ancak EGT slotlari yuksek volatiliteye sahip oldugundan buyuk kazanclar nadir gerceklesir. Jackpot Cards sistemi de buyuk odul potansiyeli sunar. Sabırli oynamak ve butce yonetimi en onemli faktorlerdir.',
  },
  {
    q: 'EGT slotlari mobilde oynanabilir mi?',
    a: 'Evet, tum modern EGT ve Amusnet Interactive slotlari HTML5 teknolojisi ile gelistirilmistir ve herhangi bir ek indirme gerektirmeden mobil tarayicida oynanabilir. iOS ve Android cihazlarda sorunsuz sekilde calismaktadir.',
  },
  {
    q: 'Sorumlu oyun nedir?',
    a: 'Sorumlu oyun, kumar faaliyetlerinin eglence amaçli ve kontrol altinda tutulmasi anlaminir gelir. Gunluk ve aylik butce limitleri belirleyin, kayiplarinizi takip edin ve kendinizi kontrol edemediginizi hissettiginizde mola verin. 18 yasindan kucuklerin kumar oynamasi kesinlikle yasaktir.',
  },
];

export default function FAQPage() {
  const { t } = useLanguage();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead
        title="EGT Slot SSS | Amusnet Interactive Sikca Sorulan Sorular"
        description="EGT ve Amusnet Interactive slot oyunlari hakkinda sikca sorulan sorular. Jackpot Cards, RTP, risk oyunu, 40 hat sistemi ve daha fazlasi."
        path="/sss"
        schema={faqSchema}
      />

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
            {t('faq.title')}
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-12">{t('faq.subtitle')}</p>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <details key={i} className="glass rounded-xl group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-white flex items-center justify-between">
                {faq.q}
                <span className="text-egt-gold group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        {/* Additional Content */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-egt-red mb-4">EGT ve Amusnet Hakkinda Daha Fazla Bilgi</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-3">
            <p>
              EGT (Euro Games Technology), slot oyun endüstrisinin en koklü ve saygin markalarindan biridir. Fiziksel casino makinelerinden online platforma gecis sureci Amusnet Interactive markasi altinda basariyla gerceklestirilmistir. Turkiye pazarinda ozellikle klasik meyve slotlari kategorisinde baskın bir konuma sahiptir.
            </p>
            <p>
              Yukaridaki sorular ve cevaplar, okuyucularimizdan en sik gelen sorulara dayanmaktadir. Daha detayli bilgi icin ilgili rehber sayfalarimizi ziyaret edebilirsiniz:
            </p>
            <ul className="space-y-2 pl-4">
              <li><Link to="/egt-slot-oyunlari" className="text-egt-gold hover:underline">EGT Slot Oyunlari Kapsamli Rehber</Link></li>
              <li><Link to="/egt-jackpot" className="text-egt-gold hover:underline">Jackpot Cards Detayli Rehber</Link></li>
              <li><Link to="/40-super-hot" className="text-egt-gold hover:underline">40 Super Hot Nasil Oynanir?</Link></li>
              <li><Link to="/amusnet-nedir" className="text-egt-gold hover:underline">Amusnet Nedir?</Link></li>
              <li><Link to="/egt-stratejileri" className="text-egt-gold hover:underline">EGT Slot Stratejileri</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
