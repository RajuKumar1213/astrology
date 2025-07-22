'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaHome, FaBriefcase, FaHeart, FaUserAstronaut } from 'react-icons/fa';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
  duration: string;
  price: number;
  originalPrice: number;
  includes: string[];
  color: string;
  bgColor: string;
  popular?: boolean;
};

const servicesData = [
  {
    id: 'home',
    title: 'Home Harmony',
    description: 'Create peaceful, balanced energy in your living space with cosmic alignment.',
    icon: <FaHome className="text-4xl" />,
    duration: '60 minutes',
    price: 149,
    originalPrice: 199,
    includes: [
      'Space Clearing Guidance',
      'Feng Shui Analysis',
      'Ideal Room Layouts',
      'Protection Rituals',
      'Family Harmony Tips',
      'Sacred Space Creation'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    popular: true
  },
  {
    id: 'office',
    title: 'Office Energy',
    description: 'Boost productivity and success with professionally aligned workspace energy.',
    icon: <FaBriefcase className="text-4xl" />,
    duration: '75 minutes',
    price: 179,
    originalPrice: 229,
    includes: [
      'Career Energy Assessment',
      'Success Crystal Placement',
      'Optimal Desk Positioning',
      'Client Attraction Tips',
      'Business Protection',
      'Team Harmony Guidance'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'love',
    title: 'Love & Relationships',
    description: 'Attract and nurture loving relationships with cosmic alignment.',
    icon: <FaHeart className="text-4xl" />,
    duration: '65 minutes',
    price: 159,
    originalPrice: 209,
    includes: [
      'Love Energy Assessment',
      'Partner Compatibility',
      'Self-Love Practices',
      'Attraction Techniques',
      'Healing Past Hurts',
      'Sacred Space Creation'
    ],
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'personal-growth',
    title: 'Personal Growth',
    description: 'Unlock your highest potential with personalized cosmic guidance.',
    icon: <FaUserAstronaut className="text-4xl" />,
    duration: '90 minutes',
    price: 199,
    originalPrice: 249,
    includes: [
      'Life Purpose Analysis',
      'Strength Identification',
      'Blockage Removal',
      'Manifestation Techniques',
      'Spiritual Development',
      'Personalized Practices'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookService = (service: ServiceType) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cosmic Alignment Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your spaces and relationships with our expert energy alignment services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 ${service.bgColor}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className={`${service.color} mb-4 flex justify-center items-center`}>
                    {service.icon}
                  </div>
                  
                  {/* Title & Pricing */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                   </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => handleBookService(service)}
                    className={`w-full bg-black text-white font-semibold py-3 px-4 rounded-lg transition-all hover:shadow-md`}
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Client Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                &quot;The Home Harmony service completely transformed our family dynamics. We&apos;re communicating better and the energy in our house feels lighter.&quot;
              </p>
              <div className="font-medium text-gray-900">- Sarah J.</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                &quot;After the Office Energy alignment, my team became more cohesive and our productivity increased by 30% in just one month!&quot;
              </p>
              <div className="font-medium text-gray-900">- Michael T.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book Your Session</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`${selectedService.color} mb-4`}>
                {selectedService.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{selectedService.title}</h4>
              <div className="text-2xl font-bold text-purple-600">${selectedService.price}</div>
            </div>

            <div className="space-y-4 mb-6">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg">
                Book Now
              </button>
              <button className="w-full border border-purple-600 text-purple-600 font-bold py-3 rounded-lg hover:bg-purple-50">
                Schedule Consultation
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>100% Satisfaction Guarantee</p>
              <p>Secure & Confidential Booking</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServicesPage;