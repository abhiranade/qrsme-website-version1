import { useEffect, useRef, useState } from 'react';
import { Zap, Brain, RefreshCw, TrendingUp, Play } from 'lucide-react';

const DigitalCardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefitCards = [
    {
      icon: Zap,
      title: "Instant Personalization",
      description: "Your smart card adapts to every meeting, showing relevant information based on context and audience",
      color: "primary",
      delay: "delay-100"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get real-time intelligence about new connections, mutual contacts, and best follow-up strategies",
      color: "secondary",
      delay: "delay-200"
    },
    {
      icon: RefreshCw,
      title: "Two-Way Exchange",
      description: "Automatically capture contact details while sharing yours - no more typing or lost business cards",
      color: "accent",
      delay: "delay-300"
    },
    {
      icon: TrendingUp,
      title: "Track Your Network",
      description: "Monitor engagement, follow-up success rates, and grow your professional network strategically",
      color: "primary",
      delay: "delay-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-background"
      id="digital-smart-cards"
    >
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-board" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none"/>
              <circle cx="20" cy="20" r="2" fill="hsl(var(--primary))">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="80" cy="80" r="2" fill="hsl(var(--secondary))">
                <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite"/>
              </circle>
              <line x1="20" y1="20" x2="80" y2="20" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              <line x1="20" y1="20" x2="20" y2="80" stroke="hsl(var(--accent))" strokeWidth="0.5"/>
              <line x1="80" y1="80" x2="80" y2="20" stroke="hsl(var(--secondary))" strokeWidth="0.5"/>
              <line x1="80" y1="80" x2="20" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-board)"/>
        </svg>
      </div>

      {/* Floating Mini QR Codes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift-qr ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className="w-6 h-6 border border-primary grid grid-cols-3 gap-0.5 p-0.5">
              {[...Array(9)].map((_, j) => (
                <div
                  key={j}
                  className={`w-full h-full ${Math.random() > 0.5 ? 'bg-primary' : 'bg-transparent'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headlines */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text">
              Your Next Connection is Just One Scan Away
            </h2>
          </div>
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl lg:text-2xl text-muted-foreground glow-text">
              Revolutionize your networking game using AI-powered smart cards
            </p>
          </div>
        </div>

        {/* Diagonal Split Layout */}
        <div className="relative">
          {/* Left Diagonal - Video Container */}
          <div className={`lg:absolute lg:left-0 lg:top-0 lg:w-3/5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Holographic Frame */}
              <div className="holographic-frame p-4 mb-8 lg:mb-0">
                <div className="relative aspect-video bg-gradient-to-br from-card/50 to-background/30 rounded-xl overflow-hidden backdrop-blur-sm border border-primary/30">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative inline-block">
                        <Play 
                          size={64} 
                          className="text-primary mb-4 animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Scan_Page_Features_Ver4.mp4</p>
                    </div>
                  </div>
                  
                  {/* Animated QR Icons around video */}
                  <div className="absolute -top-4 -left-4 animate-bounce" style={{animationDelay: '0s'}}>
                    <div className="w-8 h-8 border border-primary grid grid-cols-2 gap-0.5 p-0.5 bg-background/80 rounded">
                      <div className="bg-primary"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-primary"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 animate-bounce" style={{animationDelay: '1s'}}>
                    <div className="w-8 h-8 border border-secondary grid grid-cols-2 gap-0.5 p-0.5 bg-background/80 rounded">
                      <div className="bg-secondary"></div>
                      <div className="bg-secondary"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-secondary"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 animate-bounce" style={{animationDelay: '2s'}}>
                    <div className="w-8 h-8 border border-accent grid grid-cols-2 gap-0.5 p-0.5 bg-background/80 rounded">
                      <div className="bg-accent"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-accent"></div>
                      <div className="bg-accent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Overlapping - Benefit Cards */}
          <div className="lg:absolute lg:right-0 lg:top-8 lg:w-3/5 space-y-6">
            {benefitCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`benefit-card group transition-all duration-1000 ${card.delay} ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    zIndex: hoveredCard === index ? 20 : 10 - index
                  }}
                >
                  <div className="glass-morphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                    {/* QR Code Corner Decoration */}
                    <div className="absolute top-2 right-2 opacity-30">
                      <div className="w-4 h-4 border border-current grid grid-cols-2 gap-0.5 p-0.5">
                        <div className="bg-current"></div>
                        <div className="bg-transparent"></div>
                        <div className="bg-transparent"></div>
                        <div className="bg-current"></div>
                      </div>
                    </div>
                    
                    {/* Neon Glow Effect */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl`}
                      style={{
                        background: `hsl(var(--${card.color}))`
                      }}
                    ></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div 
                          className={`p-3 rounded-lg bg-gradient-to-br from-${card.color}/20 to-${card.color}/10 border border-${card.color}/30`}
                          style={{
                            boxShadow: hoveredCard === index ? `0 0 20px hsl(var(--${card.color}) / 0.3)` : 'none'
                          }}
                        >
                          <IconComponent 
                            size={24} 
                            className={`text-${card.color} transition-all duration-300 ${
                              hoveredCard === index ? 'scale-110' : 'scale-100'
                            }`}
                            style={{
                              filter: hoveredCard === index ? `drop-shadow(0 0 8px hsl(var(--${card.color})))` : 'none'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {card.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://app.qrsme.com/q/waitlist"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-primary via-secondary to-accent p-[2px] rounded-xl hover-3d">
              <div className="relative bg-background px-8 py-4 rounded-[10px] flex items-center space-x-3 transition-all duration-300 group-hover:bg-transparent">
                <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                  Get Your Smart Card
                </span>
                <Zap 
                  size={24} 
                  className="text-primary group-hover:text-white transition-all duration-300 group-hover:animate-pulse" 
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalCardsSection;