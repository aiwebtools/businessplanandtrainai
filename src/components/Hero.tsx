
import React, { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen py-20 flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-black to-[#0a0a0a] opacity-100"></div>
        <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyberpunk-green/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-cyberpunk-blue/20 rounded-full filter blur-[100px]"></div>
        
        {/* Floating dollar signs */}
        <div className="absolute top-20 left-[10%] text-cyberpunk-green text-opacity-20 text-6xl animate-float">$</div>
        <div className="absolute top-40 right-[15%] text-cyberpunk-green text-opacity-15 text-5xl animate-float animate-delay-300">$</div>
        <div className="absolute bottom-40 left-[25%] text-cyberpunk-green text-opacity-10 text-7xl animate-float animate-delay-500">$</div>
        <div className="absolute bottom-60 right-[20%] text-cyberpunk-green text-opacity-20 text-4xl animate-float animate-delay-200">$</div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-cyberpunk-green uppercase border border-cyberpunk-green/30 rounded-full animate-pulse-glow">
              Free AI-Powered Business Tools
            </span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-gradient-green text-glow">Free AI Tools</span> 
            <br />
            <span className="text-white">for Business Success</span>
          </h1>
          
          <p className={`text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Generate professional business plans and comprehensive training manuals with our free AI tools. AI Web Tools delivers the best artificial intelligence solutions for entrepreneurs and businesses worldwide.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <AnimatedButton 
              href="https://chatgpt.com/g/g-q7pLvlyHl-business-plan-generator-gpt" 
              variant="primary"
              size="lg"
            >
              Free Business Plan Generator
            </AnimatedButton>
            <AnimatedButton 
              href="https://chatgpt.com/g/g-eAjMJuHC3-training-manual-generator-gpt" 
              variant="outline"
              size="lg"
            >
              Free Training Manual Generator
            </AnimatedButton>
          </div>
        </div>
        
        {/* Tool Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Business Plan Generator Card */}
          <div className={`relative group perspective-1000 transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="relative glass-panel rounded-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:shadow-neon-green preserve-3d backface-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-green/10 to-transparent opacity-50"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Free Business Plan Generator AI</h2>
                  <div className="w-12 h-12 rounded-full bg-cyberpunk-green/20 flex items-center justify-center">
                    <span className="text-cyberpunk-green text-2xl">$</span>
                  </div>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-logo-design-with-the-text-business-plan-gene.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:81" 
                    alt="Free AI Business Plan Generator Tool - AI Web Tools" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <p className="text-white/70 mb-6">
                  Create comprehensive, customized business plans with our free AI tool. Includes detailed sections on executive summary, market analysis, financial projections, and strategic planning for any industry.
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyberpunk-green mr-2">✓</span>
                    <span className="text-white/80">Free AI-powered business plan creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberpunk-green mr-2">✓</span>
                    <span className="text-white/80">Industry-specific templates and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberpunk-green mr-2">✓</span>
                    <span className="text-white/80">Professional formatting and insights</span>
                  </li>
                </ul>
                
                <AnimatedButton 
                  href="https://chatgpt.com/g/g-q7pLvlyHl-business-plan-generator-gpt" 
                  className="w-full" 
                  variant="primary"
                >
                  Start Free Business Plan
                </AnimatedButton>
              </div>
            </div>
          </div>
          
          {/* Training Manual Generator Card */}
          <div className={`relative group perspective-1000 transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="relative glass-panel rounded-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:shadow-neon-blue preserve-3d backface-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-blue/10 to-transparent opacity-50"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Free Training Manual Generator AI</h2>
                  <div className="w-12 h-12 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center">
                    <span className="text-cyberpunk-blue text-2xl">$</span>
                  </div>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005968.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:600,cg:true,m/qt=q:81" 
                    alt="Free AI Training Manual Generator Tool - AI Web Tools" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <p className="text-white/70 mb-6">
                  Create comprehensive training manuals with our free AI tool. Perfect for employee onboarding, role-specific training, and professional development across all industries.
                </p>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyberpunk-blue mr-2">✓</span>
                    <span className="text-white/80">Free AI training manual creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberpunk-blue mr-2">✓</span>
                    <span className="text-white/80">Role-specific content and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberpunk-blue mr-2">✓</span>
                    <span className="text-white/80">Compliance and best practices included</span>
                  </li>
                </ul>
                
                <AnimatedButton 
                  href="https://chatgpt.com/g/g-eAjMJuHC3-training-manual-generator-gpt" 
                  className="w-full" 
                  variant="secondary"
                >
                  Start Free Training Manual
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Best Free AI Tools for Business - AI Web Tools</h2>
            <p className="text-white/70 leading-relaxed">
              AI Web Tools by AI WEB TOOLS LLC provides the most comprehensive collection of free artificial intelligence tools designed specifically for business success. Our AI-powered solutions help entrepreneurs, startups, and established businesses create professional documents, streamline operations, and achieve their goals faster than ever before. Experience the power of free AI tools that deliver enterprise-level results without the enterprise price tag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
