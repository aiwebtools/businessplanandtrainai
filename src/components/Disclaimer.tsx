
import React, { useRef, useEffect, useState } from "react";

const Disclaimer = () => {
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

  return (
    <section ref={sectionRef} id="disclaimer" className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black opacity-100"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-gradient-green">Legal</span> Disclaimer
          </h2>

          <div
            className={`glass-panel rounded-xl p-8 transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 text-white/80">
              <p>
                <strong className="text-white">Service Limitations:</strong> The Business Plan Generator GPT and Staff Training Manual Generator GPT ("the Tools") provided by AI Web Tools LLC are advanced AI assistants designed to aid in document creation. While they strive for accuracy and quality, they do not replace professional business or legal advice.
              </p>
              
              <p>
                <strong className="text-white">No Guarantees:</strong> We do not guarantee specific outcomes, such as business success, funding acquisition, or regulatory compliance. The effectiveness of generated documents depends on the accuracy of information provided, market conditions, and other factors beyond our control.
              </p>
              
              <p>
                <strong className="text-white">User Responsibility:</strong> Users bear full responsibility for verifying the accuracy, completeness, and legal compliance of all generated content. We strongly recommend having final documents reviewed by qualified professionals (business consultants, lawyers, industry experts) before implementation or submission.
              </p>
              
              <p>
                <strong className="text-white">Information Processing:</strong> The Tools process information in accordance with OpenAI's policies. Users should review OpenAI's privacy policy and terms of service regarding data handling and limitations.
              </p>
              
              <p>
                <strong className="text-white">No Fiduciary Relationship:</strong> Use of the Tools does not create any agency, partnership, or fiduciary relationship between the user and AI Web Tools LLC or its affiliates.
              </p>
              
              <p>
                <strong className="text-white">Intellectual Property:</strong> Users retain ownership of content they create using the Tools, subject to OpenAI's terms of service. However, the Tools' underlying technologies, methodologies, and interfaces remain the property of their respective owners.
              </p>
              
              <p>
                <strong className="text-white">Limitation of Liability:</strong> To the maximum extent permitted by law, AI Web Tools LLC disclaims all liability for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the Tools, regardless of whether AI Web Tools LLC has been advised of the possibility of such damages.
              </p>
              
              <p>
                <strong className="text-white">Accuracy of Information:</strong> While the Tools attempt to provide up-to-date information, AI Web Tools LLC makes no representations or warranties about the completeness, reliability, or accuracy of information provided. Any reliance on such information is strictly at the user's own risk.
              </p>
              
              <p>
                <strong className="text-white">Changes to Service:</strong> AI Web Tools LLC reserves the right to modify, suspend, or discontinue the Tools at any time without notice.
              </p>
              
              <p>
                By using the Business Plan Generator GPT and/or Staff Training Manual Generator GPT, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
              
              <p className="text-sm text-white/60">
                Last updated: May 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
