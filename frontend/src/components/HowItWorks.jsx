import React from "react";
import { Play, BookOpen, Users, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Play,
      title: "Learn AI Creation",
      description: "Master cutting-edge AI tools to create stunning visual content that captivates audiences.",
      features: ["AI Art Generation", "Content Optimization", "Style Mastery"]
    },
    {
      step: "02", 
      icon: BookOpen,
      title: "Build Your Brand",
      description: "Develop a compelling personal brand and content strategy that stands out in the market.",
      features: ["Brand Identity", "Content Strategy", "Audience Building"]
    },
    {
      step: "03",
      icon: Users,
      title: "Grow Your Audience",
      description: "Use proven social media strategies to build a loyal following across platforms.",
      features: ["Social Media Growth", "Engagement Tactics", "Community Building"]
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Scale & Monetize",
      description: "Transform your content into multiple revenue streams and scale to 5-figure monthly income.",
      features: ["Revenue Optimization", "Scaling Systems", "Premium Offerings"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Your Journey to
              <span className="text-gold block">Financial Freedom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven 4-step system that has helped thousands of students 
              build profitable AI content businesses from zero to six figures.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Step Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gold rounded-2xl">
                        <step.icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-6xl font-bold text-gold/20">
                        {step.step}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-gold mr-3" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <step.icon className="w-10 h-10 text-gold" />
                          </div>
                          <div className="text-gold text-2xl font-bold">Step {step.step}</div>
                          <div className="text-white text-lg mt-2">{step.title}</div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black/20 rounded-full blur-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8">
                    <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of successful students who are already earning with AI
            </p>
            <a
              href="https://payhip.com/OnlyModelAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold text-black rounded-full hover:bg-amber-400 transition-all duration-300 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;