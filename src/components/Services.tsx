'use client';

import React from 'react';
import { FaHome, FaBriefcase, FaIndustry, FaBuilding, FaTools, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: "Residential Vastu",
      description: "Complete home Vastu solutions for harmony, health, and prosperity. Perfect for apartments and houses.",
      icon: <FaHome className="text-4xl text-amber-600" />,
      category: "vastu"
    },
    {
      title: "Commercial Vastu",
      description: "Boost your business success with office and shop Vastu consultation for better cash flow and growth.",
      icon: <FaBriefcase className="text-4xl text-green-600" />,
      category: "vastu"
    },
    {
      title: "Industrial Vastu",
      description: "Factory and manufacturing unit Vastu planning for optimal productivity and worker harmony.",
      icon: <FaIndustry className="text-4xl text-orange-600" />,
      category: "vastu"
    },
    {
      title: "Vastu Remedies",
      description: "Simple, effective solutions using crystals, yantras, and energy correction - no demolition needed.",
      icon: <FaTools className="text-4xl text-yellow-700" />,
      category: "vastu"
    },
    {
      title: "Architecture Vastu",
      description: "Vastu-compliant floor plan design and interior layout for new construction projects.",
      icon: <FaBuilding className="text-4xl text-teal-600" />,
      category: "vastu"
    },
    {
      title: "Astrology Consultation",
      description: "Personal birth chart analysis and astrological guidance for life decisions and timing.",
      icon: <FaStar className="text-4xl text-yellow-500" />,
      category: "astrology"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vastu & Astrology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your spaces and life with expert Vastu consultations and personalized astrological guidance. 
            Create harmony, prosperity, and positive energy in every aspect of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    service.category === 'vastu' 
                      ? 'bg-amber-100 text-amber-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {service.category === 'vastu' ? 'Vastu Science' : 'Astrology'}
                  </span>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a comprehensive Vastu analysis of your home or office. Our expert consultations 
              have helped thousands create more harmonious and prosperous living spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  View All Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  Book Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;