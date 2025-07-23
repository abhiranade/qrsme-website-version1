import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalCardsSection from '@/components/DigitalCardsSection';
import AboutSection from '@/components/AboutSection';
import ProductLineSection from '@/components/ProductLineSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DigitalCardsSection />
      <AboutSection />
      <ProductLineSection />
      <ContactSection />
    </div>
  );
};

export default Index;
