import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const casinos = [
  {
    name: 'Discount Casino',
    rating: 4.8,
    bonus: '%100 Hos Geldin + 500 Freespin',
    minDeposit: '100 TL',
    wager: '30x',
    egtCount: '40+ EGT/Amusnet oyunu',
    paymentMethods: 'Papara, Havale/EFT, Kripto, Cepbank',
    withdrawalTime: '15 dakika - 2 saat',
    support: '7/24 Canli Destek',
    color: 'from-egt-red to-red-700',
    pros: [
      'Turkiye nin en genis EGT oyun portfoyu',
      'Hizli cekim suresi (ortalama 30 dakika)',
      'Yuksek hos geldin bonusu ve dusuk cevrim sarti',
      '7/24 Turkce canli destek',
      'Mobil uyumlu arayuz',
    ],
    cons: [
      'Bazi odeme yontemlerinde minimum cekim limiti yuksek',
      'Bonus kurallari dikkatli okunmali',
    ],
    review: 'Discount Casino, Turkiye pazarinda EGT ve Amusnet Interactive slot oyunlarinin en genis portfoyune sahip platformlardan biridir. 40 Super Hot, Burning Hot, Shining Crown, Flaming Hot ve daha bircok EGT oyunu bu platformda mevcuttur. Hos geldin bonusu olarak %100 + 500 freespin sunan Discount Casino, 30x cevrim sartiyla makul bir bonus politikasina sahiptir. Papara ve kripto para ile hizli islem yapilabilmesi buyuk avantajdir. Canli casino bolumunde de EGT ici oyunlar bulunmaktadir. Genel olarak EGT slotlari icin en iyi tercihlerden biridir.',
  },
  {
    name: 'Jetbahis',
    rating: 4.7,
    bonus: '%150 Ilk Yatirim Bonusu',
    minDeposit: '50 TL',
    wager: '35x',
    egtCount: '35+ EGT/Amusnet oyunu',
    paymentMethods: 'Papara, Havale/EFT, Kripto',
    withdrawalTime: '30 dakika - 3 saat',
    support: '7/24 Canli Destek',
    color: 'from-egt-gold to-yellow-700',
    pros: [
      'En yuksek bonus orani (%150)',
      'Dusuk minimum yatirim limiti (50 TL)',
      'Genis Amusnet oyun portfoyu',
      'Kullanici dostu mobil arayuz',
      'Duzenli promosyonlar ve turnuvalar',
    ],
    cons: [
      'Cevrim sarti biraz yuksek (35x)',
      'Cekim suresi bazen 3 saati bulabiliyor',
    ],
    review: 'Jetbahis, %150 ilk yatirim bonusu ile piyasadaki en yuksek bonus oranlarindan birini sunmaktadir. 50 TL gibi dusuk bir minimum yatirim ile baslanabilmesi ozellikle yeni oyuncular icin buyuk avantajdir. 35 den fazla EGT ve Amusnet oyunu mevcuttur ve Jackpot Cards destegi tum oyunlarda aktiftir. Mobil arayuzu kullanici dostu olup iOS ve Android cihazlarda sorunsuz calismaktadir. Duzenli slot turnuvalari ve promosyonlar ile oyunculara ekstra kazanc firsatlari sunmaktadir.',
  },
  {
    name: 'Celtabet',
    rating: 4.6,
    bonus: '%100 Casino Bonusu + 200 Freespin',
    minDeposit: '100 TL',
    wager: '30x',
    egtCount: '30+ EGT/Amusnet oyunu',
    paymentMethods: 'Papara, Havale/EFT, Kripto, Banka Karti',
    withdrawalTime: '1 - 4 saat',
    support: '7/24 Canli Destek',
    color: 'from-egt-purple to-purple-800',
    pros: [
      'Genis odeme yontemi secenegi',
      'Guvenilir ve koklu platform',
      'Banka karti ile islem yapilabiliyor',
      'EGT oyunlarinda ozel promosyonlar',
      'VIP programi mevcut',
    ],
    cons: [
      'Cekim suresi diger platformlara gore biraz daha yavasi',
      'Freespin sayisi sınırlı',
    ],
    review: 'Celtabet, Turkiye pazarinda uzun suredir faaliyet gosteren guvenilir bir casino platformudur. 30 dan fazla EGT ve Amusnet oyunu sunmaktadir. Banka karti ile islem yapilabilmesi diger platformlara gore onemli bir avantajdir. VIP programi ile sadık oyunculara ozel bonuslar ve hizli cekim onceligi sunulmaktadir. EGT oyunlarinda zaman zaman ozel promosyonlar duzenlenmektedir. Genel guvenilirlik ve kullanici deneyimi acisindan saglam bir tercih olarak degerlendirilmektedir.',
  },
  {
    name: 'Lord Casino',
    rating: 4.5,
    bonus: '%125 Hos Geldin + 300 Freespin',
    minDeposit: '75 TL',
    wager: '25x',
    egtCount: '25+ EGT/Amusnet oyunu',
    paymentMethods: 'Papara, Havale/EFT, Kripto',
    withdrawalTime: '30 dakika - 2 saat',
    support: '7/24 Canli Destek',
    color: 'from-egt-navy to-blue-900',
    pros: [
      'En dusuk cevrim sarti (25x)',
      'Dengeli bonus + freespin kombinasyonu',
      'Hizli cekim suresi',
      'Temiz ve modern arayuz',
      'Yeni oyunlar hizla ekleniyor',
    ],
    cons: [
      'EGT oyun sayisi diger platformlara gore biraz az',
      'Bazi promosyonlar sadece belirli oyunlarda gecerli',
    ],
    review: 'Lord Casino, 25x cevrim sartiyla piyasadaki en dusuk cevrim oranlarindan birini sunmaktadir. Bu durum bonus kazanclarinizi gercek paraya cevirmenizi kolaylastirmaktadir. %125 hos geldin bonusu ve 300 freespin ile dengeli bir baslangic paketi sunulmaktadir. 25 den fazla EGT oyunu mevcuttur ve yeni Amusnet oyunlari duzenli olarak eklenmektedir. Modern arayuzu ve hizli cekim suresi ile kullanici deneyimi oldukca iyidir.',
  },
];

export default function CasinoReviews() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead
        title="EGT Casino Incelemeleri | Amusnet Slot Oynanan En Iyi Siteler"
        description="EGT ve Amusnet Interactive slot oyunlari oynayabileceginiz en iyi casino siteleri. Discount Casino, Jetbahis, Celtabet, Lord Casino detayli incelemesi."
        path="/casino-incelemeleri"
      />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
            Casino Incelemeleri
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          EGT ve Amusnet Interactive slot oyunlarini oynayabileceginiz guvenilir platformlarin detayli incelemeleri. Bonus, odeme yontemleri ve EGT oyun portfoyu karsilastirmasi.
        </p>

        {/* Casino Reviews */}
        <div className="space-y-8 mb-16">
          {casinos.map((casino) => (
            <div key={casino.name} className="glass rounded-2xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${casino.color} p-6`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{casino.name}</h2>
                    <p className="text-white/80 text-sm mt-1">{casino.egtCount}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-300">{'★'.repeat(Math.floor(casino.rating))}</span>
                      <span className="text-white font-bold">{casino.rating}/5</span>
                    </div>
                    <p className="text-white/80 text-sm">{casino.bonus}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-gray-500 text-xs mb-1">Min. Yatirim</div>
                    <div className="text-white font-semibold">{casino.minDeposit}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-gray-500 text-xs mb-1">Cevrim Sarti</div>
                    <div className="text-white font-semibold">{casino.wager}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-gray-500 text-xs mb-1">Cekim Suresi</div>
                    <div className="text-white font-semibold text-sm">{casino.withdrawalTime}</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-gray-500 text-xs mb-1">Destek</div>
                    <div className="text-white font-semibold text-sm">{casino.support}</div>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{casino.review}</p>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Artilari</h4>
                    <ul className="space-y-1">
                      {casino.pros.map((p, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">+</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Eksileri</h4>
                    <ul className="space-y-1">
                      {casino.cons.map((c, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">-</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="text-sm">
                  <span className="text-gray-500">Odeme Yontemleri: </span>
                  <span className="text-gray-300">{casino.paymentMethods}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold text-egt-red mb-6 text-center">Casino Karsilastirma Tablosu</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-medium">Casino</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Bonus</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Cevrim</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">EGT Oyun</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Cekim</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Puan</th>
                </tr>
              </thead>
              <tbody>
                {casinos.map((c) => (
                  <tr key={c.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white font-semibold">{c.name}</td>
                    <td className="px-4 py-3 text-egt-gold">{c.bonus}</td>
                    <td className="px-4 py-3 text-gray-300">{c.wager}</td>
                    <td className="px-4 py-3 text-green-400">{c.egtCount}</td>
                    <td className="px-4 py-3 text-gray-300">{c.withdrawalTime}</td>
                    <td className="px-4 py-3 text-yellow-400">★ {c.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* EGT Availability Note */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-egt-gold mb-4">EGT/Amusnet Oyun Erisimi</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Yukaridaki tum casino platformlari, EGT ve Amusnet Interactive nin oyun portfoyune erisim saglamaktadir. 40 Super Hot, Burning Hot, Shining Crown gibi populer basliklar tum platformlarda mevcuttur. Jackpot Cards sistemi tum EGT oyunlarinda aktiftir ve progresif jackpot havuzlari platforma ozel olarak islenmektedir.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Casino secimi yaparken yalnizca bonus miktarina degil, cevrim sartina, cekim suresine ve EGT oyun sayisina da dikkat etmenizi oneririz. Detayli oyun rehberlerimiz icin <Link to="/egt-slot-oyunlari" className="text-egt-gold hover:underline">EGT Slot Oyunlari</Link> sayfamizi ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
