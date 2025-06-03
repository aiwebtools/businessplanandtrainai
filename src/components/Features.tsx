
import React, { useEffect, useRef, useState } from "react";
import { 
  FileText, 
  Book, 
  Search, 
  PenTool, 
  List, 
  HardDrive,
  Activity,
  Sparkles,
  Lock,
  Sliders,
  Star,
  RefreshCw
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <FileText className="h-6 w-6 text-cyberpunk-green" />,
      title: "Free AI Document Generation",
      description: "Generate complete business plans and training manuals with our free AI tools - no subscription required.",
      delay: 100,
    },
    {
      icon: <Search className="h-6 w-6 text-cyberpunk-green" />,
      title: "Smart Web Research Integration",
      description: "Our AI tools analyze your website and industry data to create personalized business documents.",
      delay: 200,
    },
    {
      icon: <PenTool className="h-6 w-6 text-cyberpunk-green" />,
      title: "Industry-Specific AI Content",
      description: "Tailored content for every industry using advanced artificial intelligence algorithms.",
      delay: 300,
    },
    {
      icon: <List className="h-6 w-6 text-cyberpunk-green" />,
      title: "Structured AI Development",
      description: "Section-by-section document creation with clear outlines and professional formatting.",
      delay: 400,
    },
    {
      icon: <Book className="h-6 w-6 text-cyberpunk-green" />,
      title: "Educational AI Resources",
      description: "Learn while you create with detailed explanations and best practices built into every tool.",
      delay: 500,
    },
    {
      icon: <HardDrive className="h-6 w-6 text-cyberpunk-green" />,
      title: "Free Document Export",
      description: "Download your AI-generated documents as professional .docx files at no cost.",
      delay: 600,
    },
    {
      icon: <Activity className="h-6 w-6 text-cyberpunk-green" />,
      title: "AI Data Visualization",
      description: "Incorporate charts and graphs automatically with our intelligent data presentation tools.",
      delay: 700,
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyberpunk-green" />,
      title: "Professional AI Writing",
      description: "Business-grade content that matches your brand voice using advanced language models.",
      delay: 800,
    },
    {
      icon: <Lock className="h-6 w-6 text-cyberpunk-green" />,
      title: "Secure AI Processing",
      description: "Your business information remains private and secure with enterprise-level AI protection.",
      delay: 900,
    },
    {
      icon: <Sliders className="h-6 w-6 text-cyberpunk-green" />,
      title: "Unlimited AI Customization",
      description: "Revise and refine your documents endlessly with our flexible AI editing capabilities.",
      delay: 1000,
    },
    {
      icon: <Star className="h-6 w-6 text-cyberpunk-green" />,
      title: "Premium Quality AI Tools",
      description: "Professional-grade artificial intelligence that meets industry standards and best practices.",
      delay: 1100,
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-cyberpunk-green" />,
      title: "Seamless AI Continuity",
      description: "Our AI maintains context throughout the entire document creation process for consistency.",
      delay: 1200,
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-gradient-green">Free AI Tools Features</span> for Every Business
          </h2>
          <p className={`text-lg text-white/70 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            AI Web Tools delivers cutting-edge artificial intelligence solutions designed with precision and versatility for businesses of all sizes. Experience the best free AI tools available online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative glass-panel rounded-xl p-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-panel rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose AI Web Tools for Your Business?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-cyberpunk-green mb-3">Free AI Tools That Deliver Results</h4>
                <p className="text-white/70">
                  Our free artificial intelligence tools provide enterprise-level capabilities without the cost. Perfect for startups, small businesses, and entrepreneurs looking to leverage AI technology for business growth.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyberpunk-green mb-3">Advanced AI Technology</h4>
                <p className="text-white/70">
                  Built on cutting-edge AI models, our tools understand context, industry standards, and business requirements to deliver professional-quality documents every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
