import { Brain, BarChart3, Zap } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "While traditional QR codes deliver the same content to everyone, QRS-Me adjusts shared content based on scan context, time, location, and user profile for personalized experiences.",
      color: "primary",
      position: "top"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics", 
      description: "Gain actionable insights with our advanced Scan Analytics platform that helps you understand user behavior and optimize your content for maximum engagement.",
      color: "accent",
      position: "bottom-left"
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Get up and running in under a minute with our AI-guided templates that make setup and customization a breeze, saving you time and resources.",
      color: "secondary",
      position: "bottom-right"
    }
  ];

  return (
    <section id="why-choose-us" className="min-h-screen py-20 relative overflow-hidden">
      {/* AI Brain network background */}
      <div className="absolute inset-0 ai-brain-pattern opacity-20"></div>
      
      {/* Neural network nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute neural-node"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${15 + Math.floor(i / 5) * 20}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Connecting lines between nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            className="neural-connection"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Why Choose QRS-Me
          </h2>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Pyramid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Pyramid Layout */}
          <div className="hidden lg:block">
            {/* Top card */}
            <div className="flex justify-center mb-12">
              <BenefitCard benefit={benefits[0]} />
            </div>
            
            {/* Bottom two cards */}
            <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
              <BenefitCard benefit={benefits[1]} />
              <BenefitCard benefit={benefits[2]} />
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="lg:hidden space-y-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit }: { benefit: any }) => {
  const IconComponent = benefit.icon;
  
  return (
    <div className="group">
      <div className={`benefit-card-3d glass-morphism p-8 rounded-2xl border-2 transition-all duration-500
        ${benefit.color === 'primary' ? 'border-primary/30 hover:border-primary/60' : ''}
        ${benefit.color === 'accent' ? 'border-accent/30 hover:border-accent/60' : ''}
        ${benefit.color === 'secondary' ? 'border-secondary/30 hover:border-secondary/60' : ''}
        hover-3d-benefit`}
      >
        {/* Data flow effect */}
        <div className="data-flow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* 3D Icon with glow */}
        <div className="relative mb-6 flex justify-center">
          <div className={`icon-3d-container ${benefit.color}`}>
            <div className="icon-glow-effect">
              <IconComponent 
                size={48} 
                className={`relative z-10 text-${benefit.color} electric-icon`}
              />
            </div>
            
            {/* Particle effects around icon */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-${benefit.color} rounded-full icon-particle`}
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${20 + i * 8}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground glow-text">
            {benefit.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {benefit.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className={`mt-6 w-full h-px bg-gradient-to-r from-transparent via-${benefit.color} to-transparent`}></div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;