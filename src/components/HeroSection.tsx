import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleScrollToSection = () => {
    const productSection = document.getElementById('product-line');
    if (productSection) {
      productSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            hsl(var(--primary) / 0.1) 0%, 
            transparent 50%),
          linear-gradient(135deg, 
            hsl(var(--background)) 0%, 
            hsl(var(--background)) 100%)
        `
      }}
    >
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="qr-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
              <rect x="10" y="10" width="5" height="5" fill="hsl(var(--primary))" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
              </rect>
              <rect x="25" y="25" width="5" height="5" fill="hsl(var(--accent))" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
              </rect>
            </pattern>
            
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#qr-grid)"/>
          
          {/* Neural Network Lines */}
          {[...Array(12)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${(i * 8.33)}%`}
                y1="0%"
                x2={`${(i * 8.33 + 20)}%`}
                y2="100%"
                stroke="url(#neural-gradient)"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur={`${3 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
              <circle
                cx={`${(i * 8.33 + 10)}%`}
                cy={`${20 + (i * 5)}%`}
                r="2"
                fill="hsl(var(--primary))"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur={`${2 + i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Transform Static QR Codes into{' '}
                <span className="text-gradient block">
                  Intelligent Business Solutions
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed mb-8 glow-text">
                Experience the power of QRS-Me's revolutionary AI technology that turns ordinary QR codes 
                into dynamic, personalized interactions that captivate users and drive unprecedented engagement.
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={handleScrollToSection}
                className="group relative bg-gradient-to-r from-primary via-secondary to-accent p-[2px] rounded-xl overflow-hidden hover-3d"
              >
                <div className="relative bg-background px-8 py-4 rounded-[10px] flex items-center space-x-3 transition-all duration-300 group-hover:bg-transparent">
                  <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                    Explore Our Solutions
                  </span>
                  <ChevronRight 
                    size={24} 
                    className="text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"></div>
              </button>
            </div>
          </div>

          {/* Right Visual Elements - 40% */}
          <div className="lg:col-span-2 relative h-96 lg:h-[600px]">
            
            {/* Main Animated QR Code */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="qr-code-container relative">
                <div className="qr-code-main">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="animate-slow-spin">
                    <defs>
                      <linearGradient id="qr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8"/>
                        <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* QR Code Pattern */}
                    {[...Array(15)].map((_, row) => 
                      [...Array(15)].map((_, col) => {
                        const shouldFill = Math.random() > 0.4;
                        return shouldFill ? (
                          <rect
                            key={`${row}-${col}`}
                            x={col * 12 + 10}
                            y={row * 12 + 10}
                            width="10"
                            height="10"
                            fill="url(#qr-gradient)"
                            filter="url(#glow)"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.7;1;0.7"
                              dur={`${2 + Math.random() * 3}s`}
                              repeatCount="indefinite"
                            />
                          </rect>
                        ) : null;
                      })
                    )}
                    
                    {/* Corner markers */}
                    <rect x="10" y="10" width="30" height="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                    <rect x="160" y="10" width="30" height="30" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                    <rect x="10" y="160" width="30" height="30" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 right-10 floating-shape">
              <div className="w-8 h-8 border-2 border-primary rotate-45 animate-pulse"></div>
            </div>
            
            <div className="absolute bottom-20 left-10 floating-shape" style={{animationDelay: '1s'}}>
              <div className="w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
            </div>
            
            <div className="absolute top-40 left-5 floating-shape" style={{animationDelay: '2s'}}>
              <div className="w-4 h-12 bg-gradient-to-b from-accent to-primary rounded-full animate-pulse"></div>
            </div>

            {/* Particle Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1={`${20 + i * 10}%`}
                  y1={`${30 + i * 8}%`}
                  x2={`${60 + i * 5}%`}
                  y2={`${70 - i * 6}%`}
                  stroke="url(#connection-gradient)"
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.8;0.2"
                    dur={`${3 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;