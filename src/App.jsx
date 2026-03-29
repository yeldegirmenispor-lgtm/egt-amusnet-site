import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import EgtSlotDemoPage from './pages/EgtSlotDemoPage';
import OyunlarPage from './pages/OyunlarPage';
import JackpotCardsPage from './pages/JackpotCardsPage';
import CasinoReviews from './pages/CasinoReviews';
import FAQPage from './pages/FAQPage';
import Article1EgtRehber from './pages/articles/Article1EgtRehber';
import Article2_40SuperHot from './pages/articles/Article2_40SuperHot';
import Article3BurningHot from './pages/articles/Article3BurningHot';
import Article4JackpotCards from './pages/articles/Article4JackpotCards';
import Article5ShiningCrown from './pages/articles/Article5ShiningCrown';
import Article6AmusnetNedir from './pages/articles/Article6AmusnetNedir';
import Article7EgtStratejileri from './pages/articles/Article7EgtStratejileri';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/egt-slot-demo" element={<EgtSlotDemoPage />} />
                <Route path="/oyunlar" element={<OyunlarPage />} />
                <Route path="/jackpot-cards" element={<JackpotCardsPage />} />
                <Route path="/casino-incelemeleri" element={<CasinoReviews />} />
                <Route path="/sss" element={<FAQPage />} />
                <Route path="/egt-slot-oyunlari" element={<Article1EgtRehber />} />
                <Route path="/40-super-hot" element={<Article2_40SuperHot />} />
                <Route path="/burning-hot" element={<Article3BurningHot />} />
                <Route path="/egt-jackpot" element={<Article4JackpotCards />} />
                <Route path="/shining-crown" element={<Article5ShiningCrown />} />
                <Route path="/amusnet-nedir" element={<Article6AmusnetNedir />} />
                <Route path="/egt-stratejileri" element={<Article7EgtStratejileri />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
