import React from "react";
import { Mail, MessageCircle, Shield, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">AI</span>
                </div>
                <span className="text-2xl font-bold">OnlyModelAI</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Empowering the next generation of entrepreneurs to build profitable 
                AI content businesses and achieve financial freedom through innovative 
                digital strategies.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gray-300">10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gray-300">Trusted Since 2022</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gold">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Contact & Support */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gold">Support</h3>
              <div className="space-y-4">
                <a
                  href="mailto:support@onlymodelai.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>support@onlymodelai.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Live Chat Support</span>
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://payhip.com/OnlyModelAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gold text-black rounded-full hover:bg-amber-400 transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          {/* Guarantees & Trust Badges */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-white">30-Day Guarantee</h4>
                <p className="text-sm text-gray-400">Money back if not satisfied</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-white">Proven Results</h4>
                <p className="text-sm text-gray-400">10,000+ successful students</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-white">Ongoing Support</h4>
                <p className="text-sm text-gray-400">Community & expert guidance</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} OnlyModelAI. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Disclaimer: Individual results may vary. Success depends on effort, dedication, and market conditions. 
                OnlyModelAI does not guarantee specific income results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;