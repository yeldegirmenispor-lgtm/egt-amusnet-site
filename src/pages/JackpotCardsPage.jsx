import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const tiers = [
  {
    suit: '♣️',
    name: 'Club',
    color: 'from-green-600 to-green-800',
    textColor: 'text-green-400',
    range: '50 - 250 TL',
    frequency: 'En Sik',
    desc: 'Club seviyesi, Jackpot Cards sisteminin baslangic kademesidir. En sik tetiklenen seviye olup kucuk ama duzenli odeme yapar. Dusuk bahis miktarlarinda bile kazanilabilir ve yeni baslayanlar icin motivasyon kaynagi olabilir.',
  },
  {
    suit: '♦️',
    name: 'Diamond',
    color: 'from-blue-600 to-blue-800',
    textColor: 'text-blue-400',
    range: '250 - 2.500 TL',
    frequency: 'Orta Sik',
    desc: 'Diamond seviyesi, orta kademe jackpottur. Club tan daha buyuk oduller sunar ve duzenli oyuncular tarafindan en sik kazanilan seviyedir. Orta bahis miktarlarinda tetiklenme olasiligi daha yuksektir.',
  },
  {
    suit: '♥️',
    name: 'Heart',
    color: 'from-red-600 to-red-800',
    textColor: 'text-red-400',
    range: '2.500 - 25.000 TL',
    frequency: 'Nadir',
    desc: 'Heart seviyesi, yuksek kademe jackpottur. Daha nadir tetiklenir ancak kazanildiginda onemli miktarda odul sunar. Uzun oturumlarda ve yuksek bahis miktarlarinda tetiklenme sansi artar.',
  },
  {
    suit: '♠️',
    name: 'Spade',
    color: 'from-egt-gold to-yellow-700',
    textColor: 'text-egt-gold',
    range: '25.000 - 250.000+ TL',
    frequency: 'Cok Nadir',
    desc: 'Spade seviyesi, Jackpot Cards sisteminin en buyuk oduludur. Cok nadir tetiklenir ancak hayat degistiren miktarlarda odul sunar. Progresif havuz surekli buyudugu icin odul miktari zamanla artar.',
  },
];

const steps = [
  {
    step: 1,
    title: 'Herhangi Bir Spin Yapin',
    desc: 'Jackpot Cards herhangi bir EGT slot oyununda herhangi bir spin sonrasi rastgele tetiklenebilir. Bahis miktariniz ne kadar yuksekse tetiklenme olasiligi o kadar artar. Kazanmis veya kaybetmis olmaniz farketmez; tetiklenme tamamen rastgeledir.',
  },
  {
    step: 2,
    title: 'Kart Secimi Ekrani Acilir',
    desc: 'Jackpot Cards tetiklendiginde ekraninizda 12 adet ters cevrilmis kart belirir. Bu kartlarin her biri dort takim sembolunden birine (Club, Diamond, Heart veya Spade) aittir. Kartlar karisik siralanmistir ve hangisinin hangi takima ait oldugunu goremezsiniz.',
  },
  {
    step: 3,
    title: 'Kartlari Acin',
    desc: 'Kartlari tek tek secip acerek ayni takim sembollerini bulmaya calisin. Her sectiginiz kart ilgili takim sembolunu gosterir. Secim yapmaya devam edersiniz ta ki ayni takimdan 3 kart buluncaya kadar.',
  },
  {
    step: 4,
    title: 'Jackpot Kazanin',
    desc: 'Ayni takimdan 3 kart buldugunuzda ilgili seviyenin progresif jackpotunu kazanirsiniz. Ornegin 3 Spade kartı bulursaniz en buyuk jackpotu kazanirsiniz. Kazanc otomatik olarak bakiyenize eklenir.',
  },
];

export default function JackpotCardsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead
        title="Jackpot Cards Nasil Calisir? | EGT 4 Kademe Jackpot Rehberi"
        description="EGT Jackpot Cards sisteminin detayli aciklamasi. Club, Diamond, Heart ve Spade seviyeleri, kart esleme oyunu ve strateji rehberi."
        path="/jackpot-cards"
      />

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-egt-red via-egt-gold to-egt-purple bg-clip-text text-transparent">
            Jackpot Cards Sistemi
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          EGT nin benzersiz 4 kademeli progresif jackpot sistemi. Her spin sonrasi rastgele tetiklenir ve dort farkli seviyede buyuk oduller sunar.
        </p>

        {/* 4 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tiers.map((tier) => (
            <div key={tier.name} className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-3xl`}>
                  {tier.suit}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${tier.textColor}`}>{tier.name}</h3>
                  <p className="text-white font-semibold">{tier.range}</p>
                  <p className="text-gray-400 text-xs">Sıklık: {tier.frequency}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Table */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold text-egt-red mb-6 text-center">Jackpot Seviyeleri Karsilastirma</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-medium">Seviye</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Odul Araligi</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Tetiklenme Sikligi</th>
                  <th className="px-4 py-3 text-gray-400 font-medium">Progresif</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr key={tier.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`px-4 py-3 font-bold ${tier.textColor}`}>{tier.suit} {tier.name}</td>
                    <td className="px-4 py-3 text-white">{tier.range}</td>
                    <td className="px-4 py-3 text-gray-300">{tier.frequency}</td>
                    <td className="px-4 py-3 text-green-400">Evet</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-egt-gold to-egt-red bg-clip-text text-transparent">Adim Adim Nasil Calisir?</span>
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-egt-red to-egt-gold flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Link
            to="/egt-jackpot"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-egt-red to-egt-gold text-white font-bold text-lg hover:scale-105 transition-transform"
          >
            🃏 Jackpot Cards Detayli Makale
          </Link>
          <br />
          <Link to="/egt-slot-demo" className="text-egt-gold hover:underline text-sm">
            Demo modda Jackpot Cards mekanigini deneyin →
          </Link>
        </div>
      </div>
    </div>
  );
}
