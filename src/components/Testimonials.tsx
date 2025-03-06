
import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "Our startup saved thousands on consultants by using the Business Plan Generator. The level of detail and industry-specific insights far exceeded our expectations.",
      name: "Sarah Johnson",
      position: "Founder & CEO, Elevate Tech",
      delay: 100,
    },
    {
      quote: "The Training Manual Generator transformed our onboarding process. New employees now have comprehensive guidance, and training consistency has improved by 200%.",
      name: "Michael Chen",
      position: "HR Director, GlobalReach Logistics",
      delay: 200,
    },
    {
      quote: "As a small business owner, I couldn't afford professional business plan services. This tool delivered an investor-ready plan that helped secure our first round of funding.",
      name: "David Rodriguez",
      position: "Owner, Artisan Brewers Collective",
      delay: 300,
    },
    {
      quote: "The regulatory compliance features in the Training Manual Generator ensured our healthcare facility remained up-to-date with changing guidelines. An essential tool for our industry.",
      name: "Dr. Emily Patel",
      position: "Operations Manager, Wellness Medical Center",
      delay: 400,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a] opacity-100"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-gradient-green">Success Stories</span> From Our Clients
          </h2>
          <p className={`text-lg text-white/70 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Discover how businesses are transforming their operations with our AI-powered document generators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative glass-panel rounded-xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <Quote className="h-8 w-8 text-cyberpunk-green opacity-40 mb-4" />
              <blockquote className="mb-6 text-lg text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
