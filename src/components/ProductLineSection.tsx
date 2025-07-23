import { CheckCircle } from 'lucide-react';

const ProductLineSection = () => {
  const products = [
    {
      title: "Digital Smart Cards",
      description: "Our digital smart cards go beyond simple contact sharing with intelligent, context-aware features that adapt to different networking scenarios.",
      features: [
        "Personalized Smart Cards - Instantly adapt to every meeting and event",
        "AI Connect - Gain Insights about new connections - right when you need them",
        "Two-Way Contact Sharing - Automatically capture lead details when your card is scanned",
        "Seamless Integration - Effortlessly manage leads and engagement from one platform"
      ],
      glow: "primary",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Smart Dining Platform",
      description: "Revolutionize your restaurant's dining experience with personalized, dynamic digital menus that adapt to diner preferences.",
      features: [
        "Restaurant Intelligence Dashboard - Gain valuable insights about engagement patterns, diner preferences, and behaviors",
        "Dynamic QR Code-Based Menu - Update offerings, pricing, and availability in real-time across all locations",
        "Dietary Preference Personalization - Automatically filter menu items based on diner dietary preferences",
        "POS System Integration - Sync with popular POS systems and loyalty programs for streamlined order-to-payment workflows"
      ],
      glow: "accent",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Contextual Advertising Platform",
      description: "Create hyper-personalized advertising experiences that match user profiles with relevant opportunities, significantly increasing engagement.",
      features: [
        "Dynamic Ad Personalization - Serve tailored ads based on users' profession, skills, hobbies, and industry",
        "Two-Way Value Exchange - Provide users with relevant content while businesses receive qualified leads with pre-filtered data",
        "Real-Time Analytics - Track scan-to-application rates, user demographics, and engagement heatmaps"
      ],
      glow: "secondary",
      image: "photo-1496307653780-42ee777d4833"
    }
  ];

  const generateQRPattern = () => {
    const pattern = [];
    for (let i = 0; i < 25; i++) {
      pattern.push(Math.random() > 0.5 ? 1 : 0);
    }
    return pattern;
  };

  return (
    <section id="product-line" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background QR mesh pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="qr-mesh-pattern"></div>
      </div>

      {/* Floating connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 20% 60% Q 50% 20% 80% 60%" 
            stroke="url(#connectionGradient)" 
            strokeWidth="2" 
            fill="none"
            className="connection-line"
          />
          <path 
            d="M 20% 60% Q 50% 90% 80% 60%" 
            stroke="url(#connectionGradient)" 
            strokeWidth="2" 
            fill="none"
            className="connection-line"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Product Line
          </h2>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={product.title} className="relative group">
              {/* Product Card */}
              <div className={`product-card glass-morphism rounded-2xl p-8 h-full relative 
                ${product.glow === 'primary' ? 'glow-primary-card' : ''}
                ${product.glow === 'accent' ? 'glow-accent-card' : ''}
                ${product.glow === 'secondary' ? 'glow-secondary-card' : ''}
                hover-3d-card`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Corner QR Code */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  <div className="mini-qr-code">
                    <div className="grid grid-cols-5 gap-px h-full">
                      {generateQRPattern().map((cell, i) => (
                        <div 
                          key={i} 
                          className={`${cell ? `bg-${product.glow}` : 'bg-transparent'} 
                            animate-pulse`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="mb-6 overflow-hidden rounded-xl relative">
                  <img 
                    src={`https://images.unsplash.com/${product.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${product.glow}/20 to-transparent`}></div>
                </div>

                {/* Product Content */}
                <div className="space-y-6">
                  <h3 className={`text-2xl font-bold text-${product.glow} mb-3`}>
                    {product.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                        <div className="mt-1 relative">
                          <CheckCircle className={`w-5 h-5 text-${product.glow} circuit-check`} />
                          <div className={`absolute inset-0 w-5 h-5 bg-${product.glow}/20 rounded-full animate-ping`}></div>
                        </div>
                        <span className="text-sm text-foreground/90 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px 
                  bg-gradient-to-r from-transparent via-${product.glow} to-transparent opacity-60`}></div>
              </div>

              {/* Floating QR connections */}
              {index < products.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-12 z-20">
                  <div className="floating-qr-connector">
                    <div className="grid grid-cols-3 gap-px h-full">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`${Math.random() > 0.5 ? 'bg-primary' : 'bg-transparent'} 
                            animate-pulse opacity-60`}
                          style={{ animationDelay: `${i * 0.2 + index}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLineSection;