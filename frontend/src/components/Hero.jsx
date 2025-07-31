import React from "react";
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gold/20 rounded-full">
                  <TrendingUp className="w-4 h-4 text-gold mr-2" />
                  <span className="text-sm font-medium text-black">
                    Join 10,000+ Successful Students
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                  Turn AI Art Into
                  <span className="text-gold block">Real Money</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn the exact system to create stunning AI-generated content, build a following, 
                  and earn $1,000-10,000+ per month selling digital art and content online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://payhip.com/OnlyModelAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-300 text-lg font-semibold group"
                >
                  Start Making Money Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-lg font-semibold"
                >
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-black">$50K+</div>
                  <div className="text-sm text-gray-600">Avg. Monthly Revenue</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-black">10,000+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-black">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-sm opacity-75">Monthly Revenue</div>
                      <div className="text-3xl font-bold text-gold">$12,459</div>
                    </div>
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-white text-sm">AI Art Sales</span>
                      <span className="text-gold font-semibold">+$4,200</span>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-white text-sm">Content Creation</span>
                      <span className="text-gold font-semibold">+$3,800</span>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-white text-sm">Social Media</span>
                      <span className="text-gold font-semibold">+$4,459</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-black/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;