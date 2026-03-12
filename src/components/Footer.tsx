
import React from "react";
import AnimatedButton from "./AnimatedButton";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cyberpunk-grid opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-green/30 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">AI Web Tools</h3>
            <p className="text-white/60 mb-6">
              Empowering businesses with cutting-edge AI solutions that streamline operations and drive growth.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+14758008096" 
                className="flex items-center text-white/60 hover:text-cyberpunk-green transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-white/60 hover:text-cyberpunk-green transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Our Tools</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-q7pLvlyHl-business-plan-generator-gpt" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Business Plan Generator GPT</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-eAjMJuHC3-training-manual-generator-gpt" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Staff Training Manual Generator GPT</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dataanalysisandreportai.lovable.app/" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Data Analysis & Reports AI</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Browse More AI Tools</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#faq" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/60 hover:text-cyberpunk-green transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/terms-of-services?via=aiwebtools" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-green transition-colors flex items-center"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="h-3 w-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Explore More</h3>
            <p className="text-white/60 mb-6">
              Discover our full suite of AI-powered tools designed to help your business thrive in the digital age.
            </p>
            <AnimatedButton
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              variant="primary"
              size="md"
              className="w-full"
            >
              Visit AiWebTools.ai
            </AnimatedButton>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              className="hover:text-cyberpunk-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a 
              href="https://chatgpt.com/g/g-q7pLvlyHl-business-plan-generator-gpt" 
              className="text-white/60 hover:text-cyberpunk-green transition-colors text-sm"
            >
              Business Plan Generator
            </a>
            <a 
              href="https://chatgpt.com/g/g-eAjMJuHC3-training-manual-generator-gpt" 
              className="text-white/60 hover:text-cyberpunk-green transition-colors text-sm"
            >
              Training Manual Generator
            </a>
            <a 
              href="#faq" 
              className="text-white/60 hover:text-cyberpunk-green transition-colors text-sm"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white/60 hover:text-cyberpunk-green transition-colors text-sm"
            >
              Disclaimer
            </a>
          </div>
        </div>
        
        {/* Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="block w-16 h-16 rounded-full bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue p-[2px] animate-pulse-glow shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-medium text-white text-center leading-tight">
              More<br />AI Tools
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
