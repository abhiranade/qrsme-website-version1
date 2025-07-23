const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Electric flow border */}
      <div className="electric-border">
        <div className="electric-flow"></div>
      </div>

      {/* Background gradient */}
      <div className="footer-gradient">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2025 QRS-Me. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex space-x-8">
              <a 
                href="#" 
                className="footer-link text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative"
              >
                Privacy Policy
                <div className="electric-spark"></div>
              </a>
              <a 
                href="#" 
                className="footer-link text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative"
              >
                Terms of Service
                <div className="electric-spark"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;