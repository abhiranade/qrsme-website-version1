import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DigitalCardsSection from '@/components/DigitalCardsSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DigitalCardsSection />
      <AboutSection />
      
      {/* Placeholder for Product Line section */}
      <section id="product-line" className="min-h-screen flex items-center justify-center bg-card">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gradient mb-4">Product Line</h2>
          <p className="text-lg text-muted-foreground">Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
