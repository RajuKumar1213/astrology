'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaHome, FaBriefcase, FaIndustry, FaBuilding, FaTools, FaGem, FaLeaf, FaMapMarkedAlt, FaHeart, FaStar } from 'react-icons/fa';
import Link from 'next/link';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
  includes: string[];
  color: string;
  bgColor: string;
  popular?: boolean;
};

const servicesData = [
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    description: 'Online & On-Site consultations with detailed energy analysis of your property.',
    icon: <FaStar className="text-4xl" />,
    includes: [
      'Online & On-Site Consultations',
      'Detailed energy analysis',
      'Complete property assessment',
      'Personalized recommendations',
      'Follow-up support'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    popular: true
  },
  {
    id: 'residential-vastu',
    title: 'Residential Vastu',
    description: 'Complete home Vastu solutions for apartments & houses without demolition.',
    icon: <FaHome className="text-4xl" />,
    includes: [
      'Room placement & direction analysis',
      'Kitchen, bedroom, toilet alignment',
      'Pooja room positioning',
      'Apartment & rental solutions',
      'No demolition required'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'commercial-vastu',
    title: 'Commercial Vastu',
    description: 'Business layout optimization for better sales, focus & cash flow.',
    icon: <FaBriefcase className="text-4xl" />,
    includes: [
      'Offices, Shops, Clinics setup',
      'Business layout correction',
      'Cash drawer placement',
      'Entry point optimization',
      'Sales enhancement strategies'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'industrial-vastu',
    title: 'Industrial Vastu',
    description: 'Factory setup planning with optimal machine placement & energy flow.',
    icon: <FaIndustry className="text-4xl" />,
    includes: [
      'Factory setup planning',
      'Machine placement optimization',
      'Entry/exit flow design',
      'Labor area alignment',
      'Production zone balancing'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'architecture-interior',
    title: 'Architecture & Interior Vastu',
    description: 'Vastu-friendly floor plans and interior layout integration.',
    icon: <FaBuilding className="text-4xl" />,
    includes: [
      'Floor plan review',
      'Interior layout design',
      'Furniture placement guide',
      'Color & décor suggestions',
      'Construction integration'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'vastu-remedies',
    title: 'Vastu Remedies',
    description: 'Energy correction using crystals, mirrors & colors - no demolition needed.',
    icon: <FaTools className="text-4xl" />,
    includes: [
      'Pyramids & Yantras placement',
      'Crystal energy healing',
      'Mirror positioning',
      'Color therapy solutions',
      'Affordable apartment solutions'
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'energy-balancing',
    title: 'Energy Balancing & Aura Cleansing',
    description: 'Space healing techniques with chakra-based energy mapping.',
    icon: <FaLeaf className="text-4xl" />,
    includes: [
      'Space healing techniques',
      'Negativity removal',
      'Chakra energy mapping',
      'Spiritual balance restoration',
      'Monthly energy tune-ups'
    ],
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    id: 'plot-selection',
    title: 'Plot Selection & Land Analysis',
    description: 'Ideal plot selection with Vastu-compliant layout planning.',
    icon: <FaMapMarkedAlt className="text-4xl" />,
    includes: [
      'Plot shape & direction analysis',
      'Soil quality assessment',
      'Layout planning guidance',
      'Auspicious timing suggestions',
      'Bhoomi poojan consultation'
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 'relationships-wellness',
    title: 'Vastu for Relationships & Wellness',
    description: 'Room allocation for harmony, peace & mental wellness.',
    icon: <FaHeart className="text-4xl" />,
    includes: [
      'Room allocation for harmony',
      'Sleeping direction guidance',
      'Couple compatibility zones',
      'Child room optimization',
      'Mental health improvement'
    ],
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'astrology-vastu-combo',
    title: 'Astrology + Vastu Combo',
    description: 'Personalized spatial planning based on your birth chart.',
    icon: <FaGem className="text-4xl" />,
    includes: [
      'Birth chart analysis',
      'Personalized spatial planning',
      'Astrological + Vastu sync',
      'Custom remedies',
      'Financial & health solutions'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🏡 Our Vastu Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Bring balance, harmony, and prosperity into your space—without breaking a wall.
          </p>
          <p className="text-lg text-gray-500 italic">
            Transform your home, office, or business with expert Vastu guidance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`relative rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 ${service.bgColor}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}

                <div className="p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className={`${service.color} mb-4 flex justify-center items-center`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.includes.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-xs text-gray-500 italic">
                          +{service.includes.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/contact">
                    <button className={`w-full bg-black text-white font-semibold py-3 px-4 rounded-lg transition-all hover:shadow-md hover:bg-gray-800`}>
                      Get Consultation
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default ServicesPage;