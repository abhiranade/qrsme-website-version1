import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalCardsSection from '@/components/DigitalCardsSection';
import AboutSection from '@/components/AboutSection';
import ProductLineSection from '@/components/ProductLineSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DigitalCardsSection />
      <AboutSection />
      <ProductLineSection />
    </div>
  );
};

export default Index;
