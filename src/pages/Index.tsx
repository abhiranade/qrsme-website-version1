import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to the Future of{' '}
                <span className="text-gradient">Digital Identity</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience next-generation digital smart cards powered by AI technology. 
                Transform your networking and business connections with QRS-Me.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.qrsme.com/q/waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon text-lg px-8 py-3"
                >
                  Get Started
                </a>
                <button className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-background transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
