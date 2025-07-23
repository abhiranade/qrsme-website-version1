import { useEffect, useState } from 'react';

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    type: 'dot' | 'qr';
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }>>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    // Check for mobile device
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Don't create particles if user prefers reduced motion
    if (reducedMotion) return;
    const createParticle = (id: number) => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      type: Math.random() > 0.7 ? 'qr' : 'dot' as 'dot' | 'qr',
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1
    });

    // Reduce particle count on mobile for performance
    const particleCount = isMobile ? 20 : 50;
    const initialParticles = Array.from({ length: particleCount }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Wrap around screen edges
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    };

    // Slower animation on mobile for better performance
    const interval = setInterval(animateParticles, isMobile ? 100 : 50);
    return () => clearInterval(interval);
  }, [reducedMotion, isMobile]);

  const generateMiniQR = () => {
    const pattern = [];
    for (let i = 0; i < 9; i++) {
      pattern.push(Math.random() > 0.5 ? 1 : 0);
    }
    return pattern;
  };

  // Don't render particles if user prefers reduced motion
  if (reducedMotion) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      role="presentation"
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute particle-element"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity
          }}
        >
          {particle.type === 'dot' ? (
            <div
              className="rounded-full bg-primary"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                filter: 'blur(0.5px)'
              }}
            />
          ) : (
            <div
              className="grid grid-cols-3 gap-px"
              style={{ width: `${particle.size * 3}px`, height: `${particle.size * 3}px` }}
            >
              {generateMiniQR().map((cell, i) => (
                <div
                  key={i}
                  className={`${cell ? 'bg-primary' : 'bg-transparent'}`}
                  style={{ width: `${particle.size * 0.8}px`, height: `${particle.size * 0.8}px` }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ParticleSystem;