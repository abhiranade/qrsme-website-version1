import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const generateQRPattern = () => {
    const pattern = [];
    for (let i = 0; i < 25; i++) {
      pattern.push(Math.random() > 0.6 ? 1 : 0);
    }
    return pattern;
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 qr-back-to-top electric-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      type="button"
    >
      {/* QR Code Background - decorative only */}
      <div className="qr-background" aria-hidden="true">
        <div className="grid grid-cols-5 gap-px p-2">
          {generateQRPattern().map((cell, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${cell ? 'bg-primary' : 'bg-transparent'} 
                animate-pulse transition-all duration-300`}
              style={{ animationDelay: `${i * 0.05}s` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      
      {/* Arrow Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ChevronUp className="w-6 h-6 text-background" aria-hidden="true" />
      </div>
      
      {/* Glow Effect - decorative only */}
      <div className="absolute inset-0 qr-glow-effect rounded-xl" aria-hidden="true"></div>
    </button>
  );
};

export default BackToTopButton;