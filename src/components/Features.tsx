
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
      title: "Comprehensive Documents",
      description: "Generate complete business plans and training manuals with all necessary sections.",
      delay: 100,
    },
    {
      icon: <Search className="h-6 w-6 text-cyberpunk-green" />,
      title: "Web Research Integration",
      description: "Our tools analyze your website to incorporate your brand's unique information.",
      delay: 200,
    },
    {
      icon: <PenTool className="h-6 w-6 text-cyberpunk-green" />,
      title: "Tailored Content",
      description: "Every document is customized to your specific industry, company, and objectives.",
      delay: 300,
    },
    {
      icon: <List className="h-6 w-6 text-cyberpunk-green" />,
      title: "Structured Approach",
      description: "Section-by-section development with clear outlines and progressive flow.",
      delay: 400,
    },
    {
      icon: <Book className="h-6 w-6 text-cyberpunk-green" />,
      title: "Educational Value",
      description: "Detailed explanations that serve as valuable learning resources for your team.",
      delay: 500,
    },
    {
      icon: <HardDrive className="h-6 w-6 text-cyberpunk-green" />,
      title: "Exportable Files",
      description: "Save your documents as professional, ready-to-use .docx files.",
      delay: 600,
    },
    {
      icon: <Activity className="h-6 w-6 text-cyberpunk-green" />,
      title: "Data Visualization",
      description: "Incorporate graphs and charts to present complex data more effectively.",
      delay: 700,
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyberpunk-green" />,
      title: "Engaging Tone",
      description: "Professional yet relatable writing style that aligns with your brand voice.",
      delay: 800,
    },
    {
      icon: <Lock className="h-6 w-6 text-cyberpunk-green" />,
      title: "Confidentiality",
      description: "Your business information remains private and secure throughout the process.",
      delay: 900,
    },
    {
      icon: <Sliders className="h-6 w-6 text-cyberpunk-green" />,
      title: "Unlimited Customization",
      description: "Make as many revisions as needed until the document meets your exact specifications.",
      delay: 1000,
    },
    {
      icon: <Star className="h-6 w-6 text-cyberpunk-green" />,
      title: "Premium Quality",
      description: "Professional-grade content that meets industry standards and best practices.",
      delay: 1100,
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-cyberpunk-green" />,
      title: "Seamless Continuity",
      description: "The AI maintains context throughout the document creation process.",
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
            <span className="text-gradient-green">Powerful Features</span> for Your Business
          </h2>
          <p className={`text-lg text-white/70 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Our AI tools are designed with precision and versatility to deliver exceptional value for businesses of all sizes.
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
      </div>
    </section>
  );
};

export default Features;
