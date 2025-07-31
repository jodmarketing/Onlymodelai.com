import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-black">OnlyModelAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="nav-link text-black hover:text-gold transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="nav-link text-black hover:text-gold transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="nav-link text-black hover:text-gold transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="nav-link text-black hover:text-gold transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="nav-link text-black hover:text-gold transition-colors"
            >
              FAQ
            </button>
            <a
              href="https://payhip.com/OnlyModelAI"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button bg-gold text-black hover:bg-amber-400 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-black hover:text-gold transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-black hover:text-gold transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-black hover:text-gold transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-black hover:text-gold transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-black hover:text-gold transition-colors"
              >
                FAQ
              </button>
              <a
                href="https://payhip.com/OnlyModelAI"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button bg-gold text-black hover:bg-amber-400 transition-all duration-300 inline-block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;