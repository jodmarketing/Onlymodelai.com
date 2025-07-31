import React from "react";
import { Zap, Target, BookOpen, Users, TrendingUp, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Content Creation",
      description: "Master the latest AI tools and techniques to create stunning, high-converting visual content that sells."
    },
    {
      icon: Target,
      title: "Proven Marketing Strategies",
      description: "Learn the exact social media strategies that top creators use to build massive audiences and drive sales."
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Training",
      description: "Follow our comprehensive curriculum designed for beginners to advanced creators, with easy-to-follow modules."
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join a private community of successful creators sharing tips, collaborating, and supporting each other."
    },
    {
      icon: TrendingUp,
      title: "Scaling Techniques",
      description: "Discover how to scale your content creation business from hundreds to thousands of dollars per month."
    },
    {
      icon: Shield,
      title: "Legal & Safety Guidance",
      description: "Stay compliant with platform rules and legal guidelines while maximizing your earning potential."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Everything You Need to
              <span className="text-gold block">Succeed Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system gives you all the tools, knowledge, and support 
              needed to build a profitable AI content business from scratch.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <a
              href="https://payhip.com/OnlyModelAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold text-black rounded-full hover:bg-amber-400 transition-all duration-300 text-lg font-semibold"
            >
              Get Access to All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;