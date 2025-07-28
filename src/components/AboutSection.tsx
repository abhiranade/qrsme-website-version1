import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cpu, Zap, Target } from 'lucide-react';

const CompanySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    success: 0,
    growth: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const fullText = "QRS ME is an innovative technology company specializing in AI-driven QR code solutions.";
  
  const stats = [
    { label: 'Years Innovation', value: 5, suffix: '+', icon: Target },
    { label: 'Global Clients', value: 10000, suffix: '+', icon: Brain },
    { label: 'Success Rate', value: 98, suffix: '%', icon: Zap },
    { label: 'YoY Growth', value: 300, suffix: '%', icon: Cpu }
  ];

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'years' : index === 1 ? 'clients' : index === 2 ? 'success' : 'growth']: Math.floor(current)
          }));
        }, 40);
      });
    };

    const timeout = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  // Intersection observer
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

  // Floating data points positions
  const dataPoints = [
    { x: 15, y: 20, size: 8, delay: 0 },
    { x: 85, y: 15, size: 6, delay: 1 },
    { x: 20, y: 80, size: 10, delay: 2 },
    { x: 90, y: 75, size: 7, delay: 3 },
    { x: 50, y: 10, size: 9, delay: 1.5 },
    { x: 10, y: 50, size: 5, delay: 2.5 }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-bg overflow-hidden"
      id="company"
    >
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating data points */}
      {dataPoints.map((point, index) => (
        <div
          key={index}
          className="data-point absolute rounded-full bg-electric-blue/60 opacity-70"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            animationDelay: `${point.delay}s`
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: AI-Enhanced QR Network Visualization */}
          <div className="relative">
            <div className="qr-network relative w-80 h-80 mx-auto">
              
              {/* Central QR Code */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* QR Code Pattern */}
                  <div className="qr-code-grid w-32 h-32 bg-background/90 border-2 border-electric-blue/50 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-8 gap-0.5 p-2 h-full">
                      {[...Array(64)].map((_, i) => (
                        <div
                          key={i}
                          className={`bg-electric-blue transition-all duration-500 ${
                            [0, 2, 6, 7, 8, 14, 16, 17, 22, 23, 24, 25, 31, 32, 39, 40, 41, 46, 47, 48, 49, 54, 55, 56, 57, 63].includes(i)
                              ? 'opacity-100 animate-pulse' 
                              : 'opacity-30'
                          }`}
                          style={{ animationDelay: `${i * 0.05}s` }}
                        />
                      ))}
                    </div>
                    {/* Scanning line animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent h-1 animate-qr-scan" />
                  </div>
                  
                  {/* AI Processing Ring */}
                  <div className="absolute -inset-4 border-2 border-dashed border-cyan-glow/60 rounded-full animate-spin-slow" />
                  <div className="absolute -inset-8 border border-purple-accent/40 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Network Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <defs>
                  <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--electric-blue))" />
                    <stop offset="50%" stopColor="hsl(var(--cyan-glow))" />
                    <stop offset="100%" stopColor="hsl(var(--purple-accent))" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Network Connections */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const x1 = 160 + Math.cos(angle) * 70;
                  const y1 = 160 + Math.sin(angle) * 70;
                  const x2 = 160 + Math.cos(angle) * 130;
                  const y2 = 160 + Math.sin(angle) * 130;
                  
                  return (
                    <g key={i}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#networkGradient)"
                        strokeWidth="2"
                        filter="url(#glow)"
                        className="circuit-line"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                      {/* Network Nodes (Mini QR Codes) */}
                      <rect
                        x={x2 - 8}
                        y={y2 - 8}
                        width="16"
                        height="16"
                        fill="none"
                        stroke="hsl(var(--electric-blue))"
                        strokeWidth="1"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      <rect
                        x={x2 - 6}
                        y={y2 - 6}
                        width="4"
                        height="4"
                        fill="hsl(var(--cyan-glow))"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      <rect
                        x={x2 + 2}
                        y={y2 - 6}
                        width="4"
                        height="4"
                        fill="hsl(var(--electric-blue))"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
                      />
                      <rect
                        x={x2 - 6}
                        y={y2 + 2}
                        width="4"
                        height="4"
                        fill="hsl(var(--purple-accent))"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
                      />
                    </g>
                  );
                })}

                {/* Data Flow Particles */}
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 22.5) * Math.PI / 180;
                  const radius = 100 + (i % 3) * 20;
                  const x = 160 + Math.cos(angle) * radius;
                  const y = 160 + Math.sin(angle) * radius;
                  
                  return (
                    <circle
                      key={`particle-${i}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="hsl(var(--cyan-glow))"
                      className="data-point"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}
              </svg>

              {/* AI Processing Indicators */}
              <div className="absolute top-4 left-4 text-xs text-electric-blue font-mono opacity-70">
                <div className="animate-pulse">AI PROCESSING...</div>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-cyan-glow font-mono opacity-70">
                <div className="animate-pulse">NETWORK SYNC</div>
              </div>

              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-cyan-glow/5 rounded-full animate-pulse" />
            </div>

            {/* Stats counters */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const counterValue = Object.values(counters)[index];
                
                return (
                  <div
                    key={index}
                    className={`holographic-card rounded-lg p-4 text-center counter-animation ${
                      isVisible ? 'revealed' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="w-6 h-6 text-electric-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-glow holographic">
                      {counterValue}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side: Company content */}
          <div className="space-y-8">
            {/* Section title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                About Our{' '}
                <span className="ai-text-gradient">Company</span>
              </h2>
            </div>

            {/* Main text with typewriter effect */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-electric-blue font-semibold">
                  {typedText}
                </span>
                {typedText && typedText.length < fullText.length && (
                  <span className="animate-pulse text-electric-blue">|</span>
                )}
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Traditional QR codes are limited by their static nature, offering the same response to all users. 
                In contrast, <span className="ai-text-gradient font-semibold">QRS ME&apos;s dynamic AI-driven QR codes</span> generate 
                personalized, contextualized responses based on individual user behavior.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Our mission is to revolutionize customer engagement by offering intelligent, tailored interactions 
                that connect businesses and consumers in meaningful ways. With{' '}
                <span className="text-cyan-glow font-semibold">QRS ME</span>, businesses can now offer a unique 
                and intelligent digital experience.
              </p>

              <div className="holographic-card rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-glow">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a vision to become the{' '}
                  <span className="ai-text-gradient font-semibold">global leader in contextualized QR solutions by 2030</span>, 
                  our company builds innovative products that help businesses across industries enhance their customer engagement, 
                  streamline operations, and drive measurable results.
                </p>
              </div>
            </div>

            {/* AI capabilities highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { label: 'AI-Powered', desc: 'Machine Learning', color: 'electric-blue' },
                { label: 'Real-time', desc: 'Analytics', color: 'cyan-glow' },
                { label: 'Contextual', desc: 'Intelligence', color: 'purple-accent' },
                { label: 'Scalable', desc: 'Architecture', color: 'electric-blue' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full bg-${item.color} animate-pulse`} />
                  <div>
                    <div className={`font-semibold text-${item.color}`}>{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;