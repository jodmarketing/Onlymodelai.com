import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need any prior experience with AI or content creation?",
      answer: "Not at all! Our course is designed for complete beginners. We start from the basics and guide you through every step. Many of our most successful students had zero experience when they started."
    },
    {
      question: "How quickly can I start making money?",
      answer: "Most students see their first sales within 2-4 weeks of implementing our strategies. However, building a sustainable $1000+ monthly income typically takes 2-3 months of consistent effort following our system."
    },
    {
      question: "What AI tools do I need to purchase separately?",
      answer: "We provide a complete list of recommended tools, many of which offer free tiers. You can start with free tools and upgrade as you begin earning. The total monthly cost for premium tools is typically $20-50."
    },
    {
      question: "Is this legal and compliant with platform policies?",
      answer: "Yes, absolutely. We provide comprehensive legal guidance and ensure all our strategies comply with platform terms of service. Our legal compliance module keeps you safe while maximizing your earning potential."
    },
    {
      question: "What if I don't get results?",
      answer: "We offer a 30-day money-back guarantee. If you follow our system and don't see progress within 30 days, we'll refund your entire investment. We're committed to your success."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "You can start with just 1-2 hours per day. Our system is designed for busy people. Many students work part-time on this while maintaining their day jobs until their AI income replaces their salary."
    },
    {
      question: "Do you provide ongoing support after purchase?",
      answer: "Yes! All packages include access to our private community and email support. Deluxe and Mentorship packages include additional live support and coaching calls."
    },
    {
      question: "Can I do this from anywhere in the world?",
      answer: "Absolutely! Our strategies work globally. We have successful students in over 50 countries. As long as you have an internet connection, you can build your AI content business from anywhere."
    },
    {
      question: "What makes your course different from free YouTube tutorials?",
      answer: "While free content gives you pieces of the puzzle, our course provides the complete, proven system with step-by-step implementation, legal guidance, community support, and ongoing updates. It's the difference between random tips and a structured business blueprint."
    },
    {
      question: "Is there a payment plan available?",
      answer: "Currently, we offer one-time payments only to keep costs low. However, given the earning potential, most students recoup their investment within their first month of implementation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked
              <span className="text-gold block">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions 
              from students before they join our program.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <button
                  className="faq-question w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="faq-answer px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://payhip.com/OnlyModelAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gold text-black rounded-full hover:bg-amber-400 transition-all duration-300 text-lg font-semibold"
              >
                Get Started Now
              </a>
              <a
                href="mailto:support@onlymodelai.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;