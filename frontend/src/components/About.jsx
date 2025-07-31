import React from "react";
import { Award, Users, TrendingUp, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      label: "Students Taught",
      description: "Across 50+ countries worldwide"
    },
    {
      icon: TrendingUp,
      number: "$2.5M+",
      label: "Student Revenue Generated",
      description: "Combined earnings of our community"
    },
    {
      icon: Award,
      number: "3 Years",
      label: "Industry Experience",
      description: "Leading AI content creation"
    },
    {
      icon: Target,
      number: "95%",
      label: "Success Rate",
      description: "Students achieving profitability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Meet the Team Behind
                  <span className="text-gold block">OnlyModelAI</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We're not just educators - we're practitioners who have built multiple 
                  6-figure AI content businesses and now share our proven strategies with 
                  ambitious entrepreneurs like you.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is simple: democratize access to AI-powered income opportunities 
                  and help you build the financial freedom you deserve. We've tested every 
                  strategy, made every mistake, and perfected the system so you don't have to.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">Why Choose OnlyModelAI?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Proven Track Record</h4>
                      <p className="text-gray-600">10,000+ successful students across the globe</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Cutting-Edge Methods</h4>
                      <p className="text-gray-600">Latest AI tools and monetization strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Ongoing Support</h4>
                      <p className="text-gray-600">Community and mentorship when you need it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-2xl font-bold text-black mb-1">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-gray-800 mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Quote */}
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
                <blockquote className="text-lg leading-relaxed mb-6">
                  "I started with zero experience and built my first $10K month within 6 months. 
                  Now I'm passionate about sharing these exact strategies with others who want 
                  to change their lives through AI."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gold font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold">Alex Morgan</div>
                    <div className="text-gold text-sm">Founder & Lead Instructor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;