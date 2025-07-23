import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Zap } from 'lucide-react';

const ContactSection = () => {
  const [typedEmail, setTypedEmail] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const email = 'contact@qrsme.com';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= email.length) {
        setTypedEmail(email.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(cursorTimer);
  }, []);

  const generateFlowingQR = (index: number) => {
    const pattern = [];
    for (let i = 0; i < 9; i++) {
      pattern.push(Math.random() > 0.5 ? 1 : 0);
    }
    return pattern;
  };

  return (
    <section id="contact-us" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated data streams background */}
      <div className="absolute inset-0">
        <div className="data-streams"></div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="circuit-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main container with glassmorphism */}
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden qr-border-pattern">
            
            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">
              
              {/* Left side - Terminal style */}
              <div className="space-y-8 lg:pr-8">
                {/* Terminal header */}
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                      <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">contact.terminal</span>
                  </div>
                  
                  <div className="terminal-content p-6">
                    <div className="font-mono text-primary text-sm mb-2">
                      <span className="text-secondary">user@qrs-me:~$</span> cat contact_info.txt
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                      Get In Touch
                    </h3>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      Ready to transform your customer engagement with intelligent QR solutions? 
                      Contact us today!
                    </p>

                    {/* Email with typing effect */}
                    <div className="flex items-center space-x-3 p-4 bg-background/20 rounded-lg border border-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                      <div className="font-mono text-primary">
                        {typedEmail}
                        <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                          |
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 font-mono text-primary text-sm">
                      <span className="text-secondary">user@qrs-me:~$</span>{' '}
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center divider with flowing QR codes */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2">
                <div className="relative h-full">
                  {/* Vertical line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/40 to-accent/20 transform -translate-x-1/2"></div>
                  
                  {/* Flowing QR codes */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className="absolute left-1/2 transform -translate-x-1/2 flowing-qr-code"
                      style={{
                        animationDelay: `${index * 1.5}s`,
                        top: `${10 + index * 10}%`
                      }}
                    >
                      <div className="w-6 h-6 bg-background/80 border border-primary/40 rounded-sm p-0.5 backdrop-blur-sm">
                        <div className="grid grid-cols-3 gap-px h-full">
                          {generateFlowingQR(index).map((cell, i) => (
                            <div
                              key={i}
                              className={`${cell ? 'bg-primary' : 'bg-transparent'} animate-pulse`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Holographic panel */}
              <div className="space-y-8 lg:pl-8">
                <div className="holographic-panel">
                  <div className="holographic-frame p-8 rounded-2xl">
                    <div className="text-center space-y-6">
                      <Zap className="w-12 h-12 text-accent mx-auto animate-pulse" />
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                        Transform Your Networking
                      </h3>
                      
                      <p className="text-foreground/80 leading-relaxed">
                        Get your AI-powered digital smart card in 24-48 hours and 
                        revolutionize your networking game!
                      </p>

                      {/* Quantum CTA Button */}
                      <div className="relative inline-block">
                        <a
                          href="https://app.qrsme.com/q/waitlist"
                          className="quantum-button group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-gradient-to-r from-primary via-secondary to-accent rounded-xl overflow-hidden transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* Particle overlay */}
                          <div className="absolute inset-0 particle-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>Join Now</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                          </span>

                          {/* Quantum glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                        </a>

                        {/* Floating particles around button */}
                        <div className="absolute inset-0 pointer-events-none">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-primary rounded-full quantum-particle"
                              style={{
                                left: `${20 + i * 10}%`,
                                animationDelay: `${i * 0.3}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;