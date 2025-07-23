import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import qrsLogo from '@/assets/qrs-me-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Digital Smart Cards', href: '#digital-cards' },
    { name: 'Company', href: '#company' },
    { name: 'Product Line', href: '#product-line' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact Us', href: '#contact-us' }
  ];

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={qrsLogo}
                alt="QRS-Me Logo"
                className="h-8 w-8 lg:h-10 lg:w-10 glow-primary transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6))'
                }}
              />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-gradient">
              QRS-Me
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link electric-hover text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Join Now Button */}
          <div className="hidden lg:block">
        <a
          href="https://app.qrsme.com/q/waitlist"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon electric-hover"
        >
          Join Now
        </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors min-h-11 min-w-11"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav 
            className="lg:hidden animate-slide-down"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <div className="glass-morphism rounded-lg mt-2 p-4 space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block nav-link electric-hover text-sm font-medium py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-border">
                <a
                  href="https://app.qrsme.com/q/waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon electric-hover block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;