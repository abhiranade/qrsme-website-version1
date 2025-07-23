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

  useEffect(() => {
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

    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i));
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

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const generateMiniQR = () => {
    const pattern = [];
    for (let i = 0; i < 9; i++) {
      pattern.push(Math.random() > 0.5 ? 1 : 0);
    }
    return pattern;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
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