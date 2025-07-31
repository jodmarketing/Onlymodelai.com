import React from "react";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 40,
      originalPrice: 97,
      description: "Perfect for beginners ready to start their AI content journey",
      icon: Zap,
      features: [
        "Complete AI Creation Course",
        "Basic Social Media Strategy",
        "Content Creation Templates",
        "Getting Started Checklist",
        "Email Support",
        "30-Day Money Back Guarantee"
      ],
      popular: false,
      cta: "Start Learning"
    },
    {
      name: "Deluxe",
      price: 150,
      originalPrice: 397,
      description: "Everything you need to build a profitable AI content business",
      icon: Star,
      features: [
        "Everything in Starter",
        "Advanced Marketing Strategies", 
        "Platform-Specific Optimization",
        "Monetization Masterclass",
        "Private Community Access",
        "Weekly Group Coaching Calls",
        "Bonus: Legal & Compliance Guide",
        "Priority Support"
      ],
      popular: true,
      cta: "Get Deluxe"
    },
    {
      name: "Mentorship",
      price: 500,
      originalPrice: 1297,
      description: "1-on-1 guidance to accelerate your success to 6-figures",
      icon: Crown,
      features: [
        "Everything in Deluxe",
        "1-on-1 Personal Mentoring",
        "Custom Business Strategy",
        "Direct Access to Creator",
        "Monthly Strategy Sessions",
        "Content Review & Feedback",
        "Advanced Scaling Techniques",
        "Lifetime Community Access",
        "Success Guarantee"
      ],
      popular: false,
      cta: "Get Mentorship"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Choose Your
              <span className="text-gold block">Success Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Each package is designed to get you results fast. Start where you're comfortable 
              and upgrade anytime as you grow your business.
            </p>
            
            <div className="inline-flex items-center px-6 py-3 bg-gold/20 rounded-full">
              <Star className="w-5 h-5 text-gold mr-2" />
              <span className="text-black font-semibold">Limited Time: Save up to 70%</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'featured' : ''} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-gold" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-black">${plan.price}</span>
                      <span className="text-gray-500 ml-2">one-time</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-gray-400 line-through text-lg">${plan.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold ml-2">
                        SAVE {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://payhip.com/OnlyModelAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-black hover:bg-amber-400'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Guarantee Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gold/10 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-600 text-lg">
                We're so confident in our system that if you don't see results within 30 days, 
                we'll refund every penny. No questions asked. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;