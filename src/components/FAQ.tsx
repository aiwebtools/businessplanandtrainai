
import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

  const faqs = [
    {
      question: "How do the AI tools gather information about my business?",
      answer:
        "Our AI tools begin by scanning your company website to gather essential information about your business, including your products/services, mission, values, and overall branding. The AI then asks targeted questions to fill in any missing details needed to create a comprehensive document tailored to your specific business needs.",
    },
    {
      question: "What is the process for creating a business plan or training manual?",
      answer:
        "The process follows a structured approach: First, the AI researches your business through your website. Next, it asks specific questions to gather additional information. Then, it develops a comprehensive outline for your approval. Once approved, the AI creates each section in detail, seeking your feedback before moving to the next section. The final document is compiled into a professional .docx file.",
    },
    {
      question: "How customizable are the documents created by these tools?",
      answer:
        "Both tools offer unlimited customization. You can request revisions at any stage of the process, provide feedback on specific sections, and adjust the tone, content, and structure to align perfectly with your business needs and brand voice. The AI will implement your changes while maintaining document coherence.",
    },
    {
      question: "Do the tools ensure compliance with industry regulations?",
      answer:
        "Yes. Both AI tools research industry-specific regulations and standards relevant to your business location and sector. The Training Manual Generator is particularly attentive to incorporating necessary compliance elements, ensuring your documents meet regulatory requirements while remaining practical and usable.",
    },
    {
      question: "What happens to my business information after using these tools?",
      answer:
        "We prioritize your confidentiality. Your business information is only used to create your requested documents and is processed according to OpenAI's privacy policy. We do not store, share, or repurpose your business data for any other uses. You maintain full ownership of all generated content.",
    },
    {
      question: "Can I export or save the generated documents?",
      answer:
        "Absolutely. Both tools compile your documents into professional .docx files that you can download, save, and modify as needed. These documents are formatted for immediate professional use, whether for internal purposes, investor presentations, or regulatory compliance.",
    },
    {
      question: "How long does it take to create a complete document?",
      answer:
        "The timeline varies based on document complexity and your engagement. Typically, a comprehensive business plan or training manual can be completed within a few hours of active use. The section-by-section approach allows you to work at your preferred pace, with the option to pause and resume the process as needed.",
    },
    {
      question: "Do I need any special technical knowledge to use these tools?",
      answer:
        "No technical expertise is required. The AI tools are designed to be user-friendly and conversational. They guide you through each step of the process with clear instructions and prompts. You simply need to provide information about your business and respond to the AI's questions and suggestions.",
    },
  ];

  return (
    <section ref={sectionRef} id="faq" className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-gradient-green">Frequently Asked</span> Questions
          </h2>
          <p
            className={`text-lg text-white/70 transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            Get answers to common questions about our AI-powered business document generators.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto glass-panel rounded-xl p-8 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-cyberpunk-green transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
