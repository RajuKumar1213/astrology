'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaHome, FaCheckCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import { GiCrystalBall, GiMagicSwirl } from 'react-icons/gi';
import Button from '@/components/Button';
import Link from 'next/link';

const HomeConsultancyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    area: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const features = [
    { icon: <FaHome />, title: 'Room Analysis', desc: 'Complete room-by-room energy assessment' },
    { icon: <GiCrystalBall />, title: 'Vastu Correction', desc: 'Strategic placement and corrections' },
    { icon: <FaShieldAlt />, title: 'Protection Rituals', desc: 'Sacred space creation and protection' },
    { icon: <FaStar />, title: 'Harmony Enhancement', desc: 'Family relationships and peace' }
  ];

  const benefits = [
    'Enhanced family harmony and relationships',
    'Improved health and well-being',
    'Financial prosperity and abundance',
    'Better sleep and rest quality',
    'Positive energy flow throughout home',
    'Protection from negative influences'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600">
                  <FaHome className="text-xl" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Home Consultancy</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Transform Your Home Into a 
                  <span className="text-orange-600"> Sacred Sanctuary</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create harmonious living spaces that nurture your family&apos;s well-being, prosperity, and happiness through ancient Vastu principles and cosmic energy alignment.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                    <div className="text-orange-600 text-xl mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'/contact'}>
              
                <Button className="">
                  Get Home Analysis
                </Button></Link>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Beautiful home interior with cosmic energy"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
                  <GiCrystalBall className="text-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-4 rounded-xl shadow-lg">
                  <GiMagicSwirl className="text-2xl" />
                </div>
              </div>
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What You&apos;ll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Home Consultancy Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Site Survey</h3>
              <p className="text-gray-600">Comprehensive measurement and mapping of your home with directional analysis</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Energy Audit</h3>
              <p className="text-gray-600">Complete Vastu and cosmic energy assessment of all rooms and spaces</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Remedies</h3>
              <p className="text-gray-600">Customized solutions and sacred remedies to enhance positive energy flow</p>
            </div>
          </div>
        </div>
      </section>

 

      <Footer />
    </div>
  );
};

export default HomeConsultancyPage;
