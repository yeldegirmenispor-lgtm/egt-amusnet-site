import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import OyunKatalogu from '../components/OyunKatalogu';

const games = [
  {
    name: '40 Super Hot',
    slug: '/40-super-hot',
    icon: '🔥',
    grid: '5x4',
    lines: 40,
    rtp: '%95.81',
    volatility: 'Yuksek',
    desc: 'EGT nin en ikonik klasik meyve slotu. 40 hat, yuksek volatilite ve Jackpot Cards ile buyuk kazanc potansiyeli.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Burning Hot',
    slug: '/burning-hot',
    icon: '🔥',
    grid: '5x4',
    lines: 40,
    rtp: '%95.93',
    volatility: 'Yuksek',
    desc: 'Ates temali klasik EGT slotu. 40 hat, risk oyunu ve Jackpot Cards ozellikleriyle heyecan dolu deneyim.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Shining Crown',
    slug: '/shining-crown',
    icon: '👑',
    grid: '5x3',
    lines: 20,
    rtp: '%96.37',
    volatility: 'Orta-Yuksek',
    desc: 'Tac temali EGT slotu. 20 hat yapisi ve scatter ozelligi ile farkli bir strateji yaklaşımı gerektiren oyun.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Flaming Hot',
    slug: '#',
    icon: '🌶️',
    grid: '5x4',
    lines: 40,
    rtp: '%95.53',
    volatility: 'Yuksek',
    desc: 'Biber temali heyecan verici EGT slotu. 40 Super Hot ile benzer yapıda ancak farkli sembol dagilimiyla one cikar.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Supreme Hot',
    slug: '#',
    icon: '⭐',
    grid: '5x3',
    lines: 5,
    rtp: '%95.43',
    volatility: 'Dusuk-Orta',
    desc: 'Minimalist EGT slotu. Sadece 5 hat ile basit ama eglenceli bir oyun deneyimi. Yeni baslayanlar icin idealdir.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Extra Stars',
    slug: '#',
    icon: '✨',
    grid: '5x3',
    lines: 10,
    rtp: '%95.78',
    volatility: 'Orta',
    desc: 'Yildiz temali EGT slotu. 10 odeme hatti ile orta seviye volatilite sunar. Scatter ve wild sembolleri mevcuttur.',
    category: 'Klasik Meyve',
  },
  {
    name: 'Amazons Battle',
    slug: '#',
    icon: '⚔️',
    grid: '5x3',
    lines: 20,
    rtp: '%95.63',
    volatility: 'Orta-Yuksek',
    desc: 'Amazon savascilari temali EGT slotu. Free spin ozelligi ve Jackpot Cards ile macera dolu bir deneyim.',
    category: 'Tematik',
  },
  {
    name: 'Rise of Ra',
    slug: '#',
    icon: '🏛️',
    grid: '5x3',
    lines: 15,
    rtp: '%95.97',
    volatility: 'Orta',
    desc: 'Misir temali EGT slotu. Ra tanrisinin gucu ile free spin ve scatter ozelliklerini icerir.',
    category: 'Tematik',
  },
];

const categories = ['Tumu', 'Klasik Meyve', 'Tematik'];

export default function OyunlarPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead
        title="EGT Oyun Katalogu | Amusnet Interactive Slot Oyunlari"
        description="EGT ve Amusnet Interactive slot oyunlarinin tam katalogu. 40 Super Hot, Burning Hot, Shining Crown ve daha fazlasi. RTP, hat sayisi ve volatilite bilgileri."
        path="/oyunlar"
      />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
            EGT Oyun Katalogu
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          EGT ve Amusnet Interactive nin en populer slot oyunlarini kesfetsin. Her oyunun RTP orani, hat sayisi, volatilite seviyesi ve ozel ozellikleri hakkinda detayli bilgi edinin.
        </p>

        {/* Interactive Game Catalog */}
        <OyunKatalogu />

        <div className="mb-16" />

        {/* Category Descriptions */}
        <div className="space-y-8">
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-egt-red mb-4">Klasik Meyve Slotlari</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              EGT nin klasik meyve slotlari, geleneksel casino deneyimini modern teknolojiyle birlestiren oyunlardir. 7, yildiz, karpuz, uzum, portakal, limon ve kiraz gibi klasik semboller kullanilir. Bu slotlar genellikle 5 cark ve 4 satirdan olusan grid yapisi ile 40 sabit odeme hattina sahiptir. 40 Super Hot, Burning Hot ve Flaming Hot bu kategorinin en populer ornekleridir.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Klasik meyve slotlarinin temel ozelligi basit ama heyecan verici oynanis mekanikleridir. Karmasik bonus turları yerine yuksek odemeli sembol kombinasyonlari ve Jackpot Cards sistemi ile buyuk kazanc potansiyeli sunarlar. Risk oyunu ozelligi de bu oyunlarin vazgecilmez bir parcasidir.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-egt-red mb-4">Tematik Slotlar</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              EGT ve Amusnet Interactive nin tematik slot oyunlari, farkli kultur ve tarih temalarini kullanarak zengin gorsel deneyimler sunar. Amazons Battle, Rise of Ra ve benzeri oyunlar Misir, antik medeniyet ve fantezi temalariyla dikkat ceker. Bu oyunlar genellikle free spin, scatter sembol ve ozel bonus turlari icerir.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tematik slotlar klasik meyve slotlarindan farkli olarak daha dusuk hat sayilarina sahip olabilir ancak ozel ozellikler ve bonus mekanikleri ile dengelenir. Tum tematik EGT slotlari da Jackpot Cards sistemini destekler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
