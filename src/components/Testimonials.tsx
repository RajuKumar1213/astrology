'use client';

import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'After implementing the Residential Vastu recommendations, our home feels completely transformed. The positive energy is palpable, and our family relationships have improved dramatically.',
    service: 'Residential Vastu',
    image: '👩‍💼'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    text: 'The Commercial Vastu consultation for our office was a game-changer. Our business sales increased by 40% within 6 months of implementing the suggested changes!',
    service: 'Commercial Vastu',
    image: '👨‍💻'
  },
  {
    name: 'Anita Gupta',
    location: 'Bangalore, India',
    rating: 5,
    text: 'The Vastu remedies suggested for our apartment were simple yet incredibly effective. No demolition was needed, and the positive changes were immediate.',
    service: 'Vastu Remedies',
    image: '👩‍🎨'
  },
  {
    name: 'Suresh Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    text: 'The Industrial Vastu guidance for our factory layout improved worker productivity and reduced accidents. The harmony in our workplace is remarkable.',
    service: 'Industrial Vastu',
    image: '👨‍🔬'
  },
  {
    name: 'Meera Singh',
    location: 'Pune, India',
    rating: 5,
    text: 'The combination of Vastu and astrology consultation gave us the perfect timing for our new home construction. Everything fell into place beautifully.',
    service: 'Vastu + Astrology',
    image: '👩‍🏫'
  },
  {
    name: 'Vikram Mehta',
    location: 'Chennai, India',
    rating: 5,
    text: 'The plot selection guidance using Vastu principles helped us choose the perfect land for our dream home. The prosperity we\'ve experienced since moving is incredible.',
    service: 'Plot Selection Vastu',
    image: '👨‍🎤'
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our Vastu consultations and astrological guidance have transformed 
            homes, businesses, and lives across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              10,000+
            </div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
              50,000+
            </div>
            <div className="text-gray-300">Readings Done</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
              98%
            </div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
              4.9★
            </div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            →
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl text-purple-400 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Service */}
                <div className="text-sm text-purple-400 mb-4 font-semibold">
                  {testimonial.service}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-600 scale-125' 
                    : 'bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join thousands of satisfied clients and discover your cosmic truth today
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
