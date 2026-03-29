import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import CasinoCards from '../components/CasinoCards';
import EgtSlotDemo from '../components/EgtSlotDemo';
import FAQ from '../components/FAQ';

/* ───────── How To Play Section ───────── */
function HowToPlaySection() {
  const cards = [
    { icon: '🎰', title: '5x4 Grid Yapisi', desc: 'EGT slot oyunlari 5 cark ve 4 satirdan olusan klasik bir grid yapisi kullanir. Bu yapi 40 Super Hot, Burning Hot ve Shining Crown gibi tum populer oyunlarda standarttir. Toplam 20 sembol pozisyonu her spinde rastgele doldurulur.' },
    { icon: '📊', title: '40 Hat Payline', desc: 'Cogu EGT slotunda 40 sabit odeme hatti bulunur. Bu hatlar soldan saga dogru calisir ve her spinde tum hatlar aktiftir. Oyuncunun hat secimi yapmasina gerek yoktur, boylece her turda 40 farkli kazanma sansi vardir.' },
    { icon: '🔥', title: 'Wild Semboller', desc: 'Wild (joker) sembolleri diger tum sembollerin yerine gecebilir. EGT slotlarinda wild genellikle ates veya yildiz semboludur ve kazanc kombinasyonlarini tamamlayarak buyuk kazanclar olusturabilir.' },
    { icon: '🃏', title: 'Jackpot Cards', desc: 'EGT nin benzersiz 4 kademeli progresif jackpot sistemi. Her spin sonrasi rastgele tetiklenir. Club, Diamond, Heart ve Spade olmak uzere 4 seviye bulunur ve her seviye farkli buyuklukte oduller sunar.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">EGT Slot Nasil Oynanir?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Jackpot System Section ───────── */
function JackpotSystemSection() {
  const tiers = [
    { suit: '♣️', name: 'Club', range: '50 - 250 TL', color: 'text-green-400', desc: 'En sik tetiklenen baslangic seviyesi. Dusuk bahislerde bile kazanilabilir ve duzenli ekstra gelir saglar.' },
    { suit: '♦️', name: 'Diamond', range: '250 - 2.500 TL', color: 'text-blue-400', desc: 'Orta seviye jackpot. Duzenli oyuncularin en cok kazandigi kademe olup tatmin edici oduller sunar.' },
    { suit: '♥️', name: 'Heart', range: '2.500 - 25.000 TL', color: 'text-red-400', desc: 'Yuksek seviye jackpot. Daha nadir tetiklenir ancak kazanildiginda onemli miktarda odul saglar.' },
    { suit: '♠️', name: 'Spade', range: '25.000 - 250.000+ TL', color: 'text-egt-gold', desc: 'En buyuk jackpot. Cok nadir tetiklenir, hayat degistiren odullere sahiptir ve progresif havuz surekli buyur.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-egt-purple/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-egt-gold to-egt-red bg-clip-text text-transparent">Jackpot Cards Sistemi</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">EGT nin 4 kademeli progresif jackpot sistemi her spin sonrasi rastgele tetiklenebilir</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-gray-400 font-medium">Seviye</th>
                <th className="px-4 py-3 text-gray-400 font-medium">Isim</th>
                <th className="px-4 py-3 text-gray-400 font-medium">Odul Araligi</th>
                <th className="px-4 py-3 text-gray-400 font-medium">Aciklama</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => (
                <tr key={tier.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className={`px-4 py-4 text-2xl ${tier.color}`}>{tier.suit}</td>
                  <td className={`px-4 py-4 font-bold ${tier.color}`}>{tier.name}</td>
                  <td className="px-4 py-4 text-white font-semibold">{tier.range}</td>
                  <td className="px-4 py-4 text-gray-400 text-sm">{tier.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <Link to="/jackpot-cards" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-egt-gold/40 text-egt-gold font-bold hover:bg-egt-gold/10 transition-colors">
            🃏 Jackpot Cards Detayli Rehber
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Tactics Section ───────── */
function TacticsSection() {
  const tactics = [
    {
      icon: '💰',
      title: 'Butce Yonetimi',
      desc: 'EGT slotlarinda en onemli strateji butce yonetimidir. Gunluk limit belirleyin, kayip limitinize sadik kalin ve asla kaybettiginizi geri kazanmak icin bahis artirmayin. Sabit bahis stratejisi klasik slotlarda en guvenli yaklasimdir.',
    },
    {
      icon: '🃏',
      title: 'Jackpot Cards Strateji',
      desc: 'Jackpot Cards rastgele tetiklenir ancak bazi stratejiler sansınızı artırabilir. Daha uzun oturumlar oynamak, orta seviye bahislerle devamlılık saglamak ve progresif havuzun buyudugu zamanlarda oynamak avantaj saglayabilir.',
    },
    {
      icon: '🎲',
      title: 'Risk Oyunu',
      desc: 'EGT nin risk (gamble) ozelligi her kazanctan sonra kullanilabilir. Kirmizi veya siyah secimi ile kazancinizi ikiye katlayabilir ya da tamamen kaybedebilirsiniz. Buyuk kazanclarda risk oynamaktan kacinin, kucuk kazanclarda deneyin.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">EGT Slot Stratejileri</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tactics.map((t) => (
            <div key={t.title} className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/egt-stratejileri" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-egt-red to-egt-gold text-white font-bold hover:scale-105 transition-transform">
            Tum Stratejileri Oku
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Bonus Table ───────── */
function BonusTable() {
  const bonuses = [
    { casino: 'Discount Casino', bonus: '%100 + 500 FS', min: '100 TL', wager: '30x', egtGames: 'Tumu', rating: '4.8' },
    { casino: 'Jetbahis', bonus: '%150 Ilk Yatirim', min: '50 TL', wager: '35x', egtGames: 'Tumu', rating: '4.7' },
    { casino: 'Celtabet', bonus: '%100 + 200 FS', min: '100 TL', wager: '30x', egtGames: 'Tumu', rating: '4.6' },
    { casino: 'Lord Casino', bonus: '%125 + 300 FS', min: '75 TL', wager: '25x', egtGames: 'Cogu', rating: '4.5' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-egt-gold to-egt-red bg-clip-text text-transparent">EGT Slot Bonus Karsilastirma</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left glass rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-white/5">
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">Casino</th>
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">Bonus</th>
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">Min. Yatirim</th>
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">Cevrim</th>
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">EGT Oyunlari</th>
                <th className="px-4 py-3 text-gray-400 font-medium text-sm">Puan</th>
              </tr>
            </thead>
            <tbody>
              {bonuses.map((b) => (
                <tr key={b.casino} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-white font-semibold">{b.casino}</td>
                  <td className="px-4 py-3 text-egt-gold">{b.bonus}</td>
                  <td className="px-4 py-3 text-gray-300">{b.min}</td>
                  <td className="px-4 py-3 text-gray-300">{b.wager}</td>
                  <td className="px-4 py-3 text-green-400">{b.egtGames}</td>
                  <td className="px-4 py-3 text-yellow-400">{'★ '}{b.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ───────── Alt SEO Blog Section ───────── */
function AltSEOBlog() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
              EGT ve Amusnet Interactive: Kapsamli Slot Rehberi
            </span>
          </h2>

          <div className="text-gray-300 leading-relaxed space-y-4 text-sm">
            <p>
              <strong className="text-white">EGT (Euro Games Technology)</strong>, Bulgaristan merkezli dunyanin en buyuk slot makinesi ureticilerinden biridir. Sirket, fiziksel casino sektorunde onlarca ulkede binlerce slot makinesi ile faaliyet gostermektedir. EGT nin online oyun bolumu olan <strong className="text-white">Amusnet Interactive</strong>, ayni kaliteli oyun deneyimini dijital platforma tasimaktadir. Turkiye pazarinda EGT slotlari buyuk bir populerlige sahiptir ve <Link to="/40-super-hot" className="text-egt-gold hover:underline">40 Super Hot</Link>, <Link to="/burning-hot" className="text-egt-gold hover:underline">Burning Hot</Link> ve <Link to="/shining-crown" className="text-egt-gold hover:underline">Shining Crown</Link> gibi oyunlar en cok tercih edilen basliklar arasindadir.
            </p>

            <p>
              EGT slot oyunlarinin en dikkat cekici ozelligi <strong className="text-white">klasik meyve slot tasarimi</strong> ile modern teknolojinin birlestirilmis olmasidir. 7, yildiz, karpuz, uzum, portakal, limon ve kiraz gibi klasik meyve sembolleri EGT slotlarinin temelini olusturur. Bu semboller hem nostaljik bir atmosfer yaratir hem de oyunculara taninir bir deneyim sunar. EGT nin tum populer slotlari <Link to="/egt-slot-oyunlari" className="text-egt-gold hover:underline">EGT Slot Oyunlari rehberimizde</Link> detayli olarak incelenmektedir.
            </p>

            <p>
              <strong className="text-white">5 cark ve 4 satirdan olusan grid yapisi</strong> EGT slotlarinin standart formatidir. Bu yapi toplam 20 sembol pozisyonu olusturur ve 40 sabit odeme hatti ile birlikte calisir. 40 hat sistemi, her spinde tum hatlarin aktif olmasi anlamina gelir ve bu durum oyuncunun her turda birden fazla kazanma kombinasyonu yakalama sansini arttirir. Hat yapisi ve odeme tablosu her oyunun arayuzunde detayli olarak gosterilmektedir.
            </p>

            <p>
              EGT nin en onemli ve benzersiz ozelligi <Link to="/egt-jackpot" className="text-egt-gold hover:underline">Jackpot Cards</Link> sistemidir. Bu 4 kademeli progresif jackpot sistemi, <strong className="text-white">Club, Diamond, Heart ve Spade</strong> olmak uzere dort seviyeden olusur. Jackpot Cards herhangi bir EGT slot oyununda herhangi bir spin sonrasi rastgele tetiklenebilir. Tetiklendiginde oyuncunun onune 12 ters cevrilmis kart cikar ve oyuncu bu kartlardan birini secer. Uc ayni takim sembolunu buldugunuzda ilgili seviyenin jackpotunu kazanirsiniz. Club en dusuk seviye olup en sik tetiklenir, Spade ise en yuksek seviye olup en buyuk odulleri sunar.
            </p>

            <p>
              <strong className="text-white">40 Super Hot</strong>, EGT nin en ikonik ve en cok oynanan slotudur. Klasik meyve makinesi temasina sahip bu oyun, yuksek volatilite ve %95.81 RTP oranina sahiptir. 7 sembolu en yuksek odulli sembol olup 5 tane geldiginde 1000x carpan kazandirir. Oyun ayni zamanda wild sembol ve Jackpot Cards ozelligini icerir. 40 Super Hot hakkinda detayli bilgi icin <Link to="/40-super-hot" className="text-egt-gold hover:underline">40 Super Hot rehberimizi</Link> inceleyebilirsiniz.
            </p>

            <p>
              <strong className="text-white">Burning Hot</strong>, 40 Super Hot ile benzer bir yapiya sahip olan ancak daha farkli bir gorsel tema ve sembol dagilimiyla one cikan EGT slotudur. Ates temali tasarimi, parlak renkleri ve hizli oynanisi ile dikkat ceker. Burning Hot ayni zamanda risk oyunu ozelligine sahiptir; bu ozellik her kazanctan sonra kirmizi veya siyah kart secimi yaparak kazancinizi ikiye katlama firsati sunar. Burning Hot hakkinda daha fazla bilgi icin <Link to="/burning-hot" className="text-egt-gold hover:underline">Burning Hot rehberimize</Link> goz atabilirsiniz.
            </p>

            <p>
              <strong className="text-white">Shining Crown</strong>, EGT nin bir diger populer slotudur ve 5x3 grid yapisi ile 20 sabit odeme hattina sahiptir. Bu oyun tac sembolunu scatter olarak kullanir ve tac sembolunun 3 veya daha fazla gelmesi durumunda ozel ozellikler tetiklenir. Shining Crown, 40 hattan farkli olarak 20 hat sistemi kullanmasi nedeniyle farkli bir strateji yaklasimi gerektirir. Detayli bilgi icin <Link to="/shining-crown" className="text-egt-gold hover:underline">Shining Crown rehberimizi</Link> okuyabilirsiniz.
            </p>

            <p>
              <strong className="text-white">Amusnet Interactive</strong>, EGT nin online oyun markasidir ve tum EGT slot oyunlarinin dijital versiyonlarini gelistirmektedir. Amusnet, Malta Gaming Authority (MGA), UK Gambling Commission ve diger saygin kurumlar tarafindan lisanslidir. Bu lisanslar oyunlarin adil ve guvenilir oldugunu garanti eder. Amusnet hakkinda daha fazla bilgi icin <Link to="/amusnet-nedir" className="text-egt-gold hover:underline">Amusnet Nedir rehberimizi</Link> inceleyebilirsiniz.
            </p>

            <p>
              EGT slotlarinda <strong className="text-white">strateji</strong> onemli bir konudur. Klasik meyve slotlari tamamen sans bazli olmakla birlikte, butce yonetimi, hat secimi ve risk oyunu kullanimi gibi konularda bilincli kararlar vermek oyun deneyiminizi iyilestirebilir. Sabit bahis stratejisi, kayip limiti belirleme ve Jackpot Cards icin uzun oturum planlama gibi yaklasimlar EGT oyuncularinin en cok kullandigi yontemlerdir. Tum stratejiler icin <Link to="/egt-stratejileri" className="text-egt-gold hover:underline">EGT Strateji rehberimize</Link> basvurabilirsiniz.
            </p>

            <p>
              <strong className="text-white">Demo modu</strong>, EGT slotlarini ogrenmek icin en iyi yoldur. Demo modda gercek para riski olmadan tum oyun ozelliklerini test edebilir, hat yapilarini anlayabilir ve kendi stratejinizi gelistirebilirsiniz. Sitemizde sunulan <Link to="/egt-slot-demo" className="text-egt-gold hover:underline">EGT Slot Demo</Link> sayfasinda ucretsiz olarak oynayabilirsiniz. Demo mod, ozellikle Jackpot Cards mekanizmasini anlamak ve risk oyununu denemek icin idealdir.
            </p>

            <p>
              Turkiye pazarinda EGT ve Amusnet slotlari bircok guvenilir online casino platformunda mevcuttur. <Link to="/casino-incelemeleri" className="text-egt-gold hover:underline">Casino incelemelerimizde</Link> Discount Casino, Jetbahis, Celtabet ve Lord Casino gibi platformlari detayli olarak degerlendirdik. Her platformun bonus teklifleri, EGT oyun portfoyu, odeme yontemleri ve musteri hizmetleri kalitesini karsilastirmali olarak inceledik.
            </p>

            <p>
              EGT slotlarinin Turkiye deki populerliginin temel nedenleri arasinda <strong className="text-white">klasik tasarim</strong>, <strong className="text-white">yuksek RTP oranlari</strong>, <strong className="text-white">Jackpot Cards sistemi</strong> ve <strong className="text-white">risk oyunu ozelligi</strong> yer almaktadir. Ayrica EGT oyunlari mobil uyumlu olarak tasarlanmistir ve hem iOS hem de Android cihazlarda sorunsuz sekilde calismaktadir. HTML5 teknolojisi sayesinde tarayici uzerinden herhangi bir indirme gerektirmeden oynanabilir.
            </p>

            <p>
              Sorumlu oyun, EGT slot deneyiminin en onemli parcasidir. Kumar eglence amacli olmalidir ve asla bir gelir kaynagi olarak gorulmemelidir. Gunluk ve aylik butce limitleri belirleyin, kayiplarinizi takip edin ve kendinizi kontrol edemediginizi hissettiginizde mola verin. 18 yasindan kucuklerin kumar oynamasi kesinlikle yasaktir. Herhangi bir sorun yasarsaniz profesyonel yardim kuruluslarina basvurmanizi oneririz.
            </p>

            <p>
              Sitemiz, EGT ve Amusnet Interactive slot oyunlari hakkinda Turkce olarak en kapsamli kaynagi sunmaktadir. Oyun rehberlerinden strateji kilavuzlarina, casino incelemelerinden demo oyunlara kadar genis bir icerik yelpazesi sunuyoruz. Tum iceriklerimiz uzman yazarlarimiz tarafindan hazirlanmakta ve teknik SEO editorumuz tarafindan duzenli olarak guncellenmektedir. Amacimiz Turk oyuncularini dogru ve guncel bilgiyle donatmaktir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════ */
export default function HomePage() {
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'EGT Slot Rehberi',
      url: 'https://egtslotrehberi.com',
      description: 'EGT ve Amusnet Interactive slot oyunlari hakkinda en kapsamli Turkce rehber. Demo oyunlar, Jackpot Cards, strateji ve casino incelemeleri.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://egtslotrehberi.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'EGT Slot Rehberi',
      url: 'https://egtslotrehberi.com',
      description: 'EGT ve Amusnet Interactive slot oyunlari icin Turkce rehber ve strateji platformu.',
      sameAs: [],
    },
  ];

  return (
    <>
      <SEOHead
        title="EGT Slot Oyunlari | Amusnet Interactive Demo ve Rehber"
        description="EGT ve Amusnet Interactive slot oyunlarini ucretsiz deneyin. 40 Super Hot, Burning Hot, Shining Crown demo, Jackpot Cards rehberi ve casino incelemeleri."
        path="/"
        schema={homeSchema}
      />
      <Hero />
      <CasinoCards />
      <div id="demo-slot">
        <EgtSlotDemo />
      </div>
      <HowToPlaySection />
      <JackpotSystemSection />
      <TacticsSection />
      <BonusTable />
      <FAQ />
      <AltSEOBlog />
    </>
  );
}
