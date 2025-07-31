import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import About from "./About";
import FAQ from "./FAQ";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;