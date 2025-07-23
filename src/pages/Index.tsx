import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalCardsSection from '@/components/DigitalCardsSection';
import AboutSection from '@/components/AboutSection';
import ProductLineSection from '@/components/ProductLineSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DigitalCardsSection />
      <AboutSection />
      <ProductLineSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
