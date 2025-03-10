
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md mx-4 overflow-hidden rounded-xl animate-scale-in">
        {/* Glass panel background with gradient border */}
        <div className="glass-panel p-6 border border-cyberpunk-green/30 shadow-neon-green">
          {/* Close button */}
          <button 
            onClick={handleAccept} 
            className="absolute top-3 right-3 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} className="text-white/80" />
          </button>
          
          {/* Title with gradient text */}
          <h2 className="text-2xl font-bold mb-4 text-gradient-green text-center font-display">
            DISCLAIMER
          </h2>
          
          {/* Content */}
          <div className="space-y-4 mb-6">
            <p className="text-white/90 text-sm leading-relaxed">
              By using this website and its AI-powered tools, you acknowledge that:
            </p>
            
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-cyberpunk-green text-xl leading-none">•</span>
                <span>Content generated is for informational purposes only and does not constitute professional advice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyberpunk-green text-xl leading-none">•</span>
                <span>Generated documents should be reviewed by qualified professionals before implementation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyberpunk-green text-xl leading-none">•</span>
                <span>We do not guarantee specific outcomes (business success, funding, etc.) from using our tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyberpunk-green text-xl leading-none">•</span>
                <span>You are responsible for verifying the accuracy and legal compliance of all generated content.</span>
              </li>
            </ul>
            
            <p className="text-xs text-white/60 italic">
              For the full disclaimer, please refer to our Disclaimer section.
            </p>
          </div>
          
          {/* Accept button */}
          <div className="flex justify-center">
            <AnimatedButton 
              onClick={handleAccept}
              size="md"
              className="w-full max-w-xs uppercase font-bold tracking-wide"
            >
              I AGREE
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
