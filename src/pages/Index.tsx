import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalCardsSection from '@/components/DigitalCardsSection';
import AboutSection from '@/components/AboutSection';
import ProductLineSection from '@/components/ProductLineSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import ParticleSystem from '@/components/ParticleSystem';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleSystem />
      <Header />
      <HeroSection />
      <DigitalCardsSection />
      <AboutSection />
      <ProductLineSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
