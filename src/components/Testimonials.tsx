'use client';

import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    text: 'The birth chart reading was incredibly accurate and insightful. It helped me understand my life patterns and make better decisions. Truly transformative!',
    service: 'Birth Chart Reading',
    image: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'The love compatibility reading saved my relationship! The insights about our communication styles were spot-on and helped us reconnect.',
    service: 'Love Compatibility',
    image: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'The tarot reading was mind-blowing. Every card resonated with my situation perfectly. The guidance I received was exactly what I needed to hear.',
    service: 'Tarot Reading',
    image: '👩‍🎨'
  },
  {
    name: 'David Thompson',
    location: 'Seattle, WA',
    rating: 5,
    text: 'The career guidance reading helped me find my true calling. Within 3 months of following the advice, I landed my dream job. Amazing accuracy!',
    service: 'Career Guidance',
    image: '👨‍🔬'
  },
  {
    name: 'Lisa Park',
    location: 'Chicago, IL',
    rating: 5,
    text: 'The spiritual counseling session was deeply healing. I felt understood and guided towards a path of self-discovery and inner peace.',
    service: 'Spiritual Counseling',
    image: '👩‍🏫'
  },
  {
    name: 'James Wilson',
    location: 'Austin, TX',
    rating: 5,
    text: 'The numerology reading revealed patterns I never noticed before. The insights about my life path number changed my perspective completely.',
    service: 'Numerology Reading',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our mystical services have transformed lives and guided souls 
            towards their true cosmic destiny.
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
