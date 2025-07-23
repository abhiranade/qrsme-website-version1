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
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector('#main-content') as HTMLElement;
          element?.focus();
        }}
      >
        Skip to main content
      </a>
      
      <ParticleSystem />
      <Header />
      
      {/* Main content wrapper with semantic HTML */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <DigitalCardsSection />
        <AboutSection />
        <ProductLineSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
