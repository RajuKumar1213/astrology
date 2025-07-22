'use client';

import React from 'react';
import { FaStar, FaChartLine, FaHeart } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint with a detailed analysis of your natal chart and planetary positions.",
      icon: <FaChartLine className="text-4xl text-purple-600" />
    },
    {
      title: "Love Compatibility",
      description: "Explore your romantic potential and relationship dynamics through astrological synastry.",
      icon: <FaHeart className="text-4xl text-pink-600" />
    },
    {
      title: "Daily Horoscope",
      description: "Personalized daily guidance based on your zodiac sign and current planetary transits.",
      icon: <FaStar className="text-4xl text-yellow-500" />
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Astrology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional astrological guidance to help you navigate life's challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;