import React from "react";
import { Star, TrendingUp, DollarSign } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 24,
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=150&h=150&fit=crop&crop=face",
      revenue: "$8,500/month",
      timeframe: "3 months",
      quote: "I went from complete beginner to making $8,500 per month in just 3 months. The step-by-step training made everything so clear and actionable.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      age: 29,
      location: "Austin, TX", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      revenue: "$12,300/month",
      timeframe: "4 months",
      quote: "The community support and advanced strategies in the Deluxe package were game-changers. I quit my 9-5 and now work from anywhere.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      age: 22,
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      revenue: "$15,800/month",
      timeframe: "5 months",
      quote: "The mentorship program accelerated my growth beyond imagination. I'm now helping others achieve the same success I found.",
      rating: 5
    },
    {
      name: "Jake Wilson",
      age: 27,
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      revenue: "$6,200/month",
      timeframe: "2 months",
      quote: "As a college student, this completely changed my financial situation. The starter package gave me everything I needed to begin earning.",
      rating: 5
    },
    {
      name: "Ashley Kim",
      age: 31,
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      revenue: "$22,100/month",
      timeframe: "6 months",
      quote: "After losing my job, this became my lifeline. Now I'm earning more than I ever did in corporate and loving every minute of it.",
      rating: 5
    },
    {
      name: "David Thompson",
      age: 25,
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      revenue: "$9,750/month",
      timeframe: "4 months",
      quote: "The legal guidance and compliance training saved me from costly mistakes. This program thinks of everything you need to succeed.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Real Students,
              <span className="text-gold block">Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our successful students are saying 
              about their transformation and financial freedom.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">10,000+</div>
              <div className="text-gray-600">Successful Students</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">$2.5M+</div>
              <div className="text-gray-600">Total Student Earnings</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Revenue Highlight */}
                <div className="bg-gold/10 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">{testimonial.revenue}</div>
                    <div className="text-sm text-gray-600">in {testimonial.timeframe}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      Age {testimonial.age} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of students who are already living their dream lifestyle
            </p>
            <a
              href="https://payhip.com/OnlyModelAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold text-black rounded-full hover:bg-amber-400 transition-all duration-300 text-lg font-semibold"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;