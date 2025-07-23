import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'About Our Company';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="company" className="min-h-screen py-20 relative overflow-hidden">
      {/* Matrix background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 md:grid-cols-24 h-full">
          {Array.from({ length: 288 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/20 text-xs font-mono text-primary/30 flex items-center justify-center"
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animation: 'matrix-code 8s infinite linear'
              }}
            >
              {Math.random() > 0.7 ? ['0', '1', '>', '$', '#'][Math.floor(Math.random() * 5)] : ''}
            </div>
          ))}
        </div>
      </div>

      {/* Terminal frame effect */}
      <div className="absolute inset-8 border border-primary/30 rounded-lg terminal-frame">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-t-lg flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
            <div className="w-3 h-3 rounded-full bg-accent/60"></div>
            <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          </div>
          <div className="ml-4 font-mono text-xs text-muted-foreground">qrs-me.terminal</div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16">
        {/* Terminal prompt with typewriter effect */}
        <div className="text-center mb-16">
          <div className="font-mono text-primary mb-4">
            <span className="text-secondary">user@qrs-me:~$</span>{' '}
            <span className="text-primary">cat about.txt</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            {typedText}
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Content container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism p-8 md:p-12 rounded-xl border border-primary/20 relative">
            {/* Corner brackets for terminal feel */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/60"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-primary/60"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-primary/60"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-primary/60"></div>

            <div className="space-y-8 text-center">
              {/* Paragraph 1 */}
              <div className="relative">
                <div className="font-mono text-primary text-sm mb-2"># Company Overview</div>
                <p className="text-lg leading-relaxed text-foreground/90 tracking-wide">
                  QRS ME is an innovative technology company specializing in AI-driven QR code solutions. 
                  Traditional QR codes are limited by their static nature, offering the same response to all users. 
                  In contrast, QRS ME's dynamic AI-driven QR codes generate personalized, contextualized responses 
                  based on individual user behavior. Our mission is to revolutionize customer engagement by offering 
                  intelligent, tailored interactions that connect businesses and consumers in meaningful ways. 
                  With QRS ME, businesses can now offer a unique and intelligent digital experience.
                </p>
              </div>

              {/* Separator */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent flex-1"></div>
                <div className="font-mono text-secondary text-sm">---</div>
                <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent flex-1"></div>
              </div>

              {/* Paragraph 2 */}
              <div className="relative">
                <div className="font-mono text-primary text-sm mb-2"># Vision 2030</div>
                <p className="text-lg leading-relaxed text-foreground/90 tracking-wide">
                  Founded with a vision to become the global leader in contextualized QR solutions by 2030, 
                  our company builds innovative products that help businesses across industries enhance their 
                  customer engagement, streamline operations, and drive measurable results.
                </p>
              </div>

              {/* Terminal prompt end */}
              <div className="pt-8">
                <div className="font-mono text-primary text-left">
                  <span className="text-secondary">user@qrs-me:~$</span>{' '}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines"></div>
      </div>
    </section>
  );
};

export default AboutSection;