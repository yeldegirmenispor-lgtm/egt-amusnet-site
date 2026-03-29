import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import EgtSlotDemo from '../components/EgtSlotDemo';

export default function EgtSlotDemoPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead
        title="EGT Slot Demo | Ucretsiz 40 Super Hot Tarzi Oyna"
        description="EGT ve Amusnet Interactive slot oyunlarini ucretsiz demo modda oynayın. 5 cark, 4 satir, 40 hat payline sistemi ile klasik meyve slotunu deneyin."
        path="/egt-slot-demo"
      />

      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-egt-red to-egt-gold bg-clip-text text-transparent">
            EGT Slot Demo
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Klasik EGT meyve slotunu ucretsiz deneyin. 5 cark, 4 satir ve 40 odeme hatti ile gercek EGT deneyimini yasayin. Jackpot Cards, wild semboller ve risk oyunu mekanikleriyle tanisin.
        </p>

        {/* Full Slot Demo Component */}
        <EgtSlotDemo />

        {/* Info Section */}
        <div className="mt-12 glass rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-egt-red mb-4">EGT Slot Demo Hakkinda</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-3">
            <p>
              Bu demo, EGT ve Amusnet Interactive nin klasik meyve slotlarinin mekaniklerini simule etmektedir. 5 cark, 4 satir ve 40 odeme hatti ile gercek EGT oyunlarina benzer bir deneyim sunmaktadir. Demo modda gercek para riski bulunmamaktadir ve tamamen eglence amaçlidir.
            </p>
            <p>
              Sembol tablosu: 7 (en yuksek), Yildiz, Karpuz, Uzum, Bar, Portakal, Limon, Kiraz (en dusuk) ve Wild (joker). Wild sembolu diger tum sembollerin yerine gecebilir ve kazanc kombinasyonlarini tamamlar. Her spinde 40 hat aktif olarak calismaktadir.
            </p>
            <p>
              Gercek EGT slotlarinda ayrica <Link to="/egt-jackpot" className="text-egt-gold hover:underline">Jackpot Cards</Link> sistemi ve risk oyunu ozelligi de bulunmaktadir. Bu demo da Jackpot Cards ve risk oyunu mekaniklerini deneyebilirsiniz. Tam strateji rehberi icin <Link to="/egt-stratejileri" className="text-egt-gold hover:underline">EGT Stratejileri</Link> sayfamizi ziyaret edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
