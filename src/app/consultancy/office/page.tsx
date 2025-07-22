'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaBriefcase, FaCheckCircle, FaStar, FaChartLine } from 'react-icons/fa';
import { GiCrystalBall, GiMagicSwirl } from 'react-icons/gi';
import Button from '@/components/Button';
import Link from 'next/link';

const OfficeConsultancyPage = () => {
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
    { icon: <FaBriefcase />, title: 'Workspace Analysis', desc: 'Complete office energy assessment' },
    { icon: <FaChartLine />, title: 'Productivity Enhancement', desc: 'Strategic layouts for success' },
    { icon: <GiCrystalBall />, title: 'Business Growth', desc: 'Cosmic alignment for prosperity' },
    { icon: <FaStar />, title: 'Team Harmony', desc: 'Collaborative workspace energy' }
  ];

  const benefits = [
    'Increased productivity and efficiency',
    'Enhanced business growth and profits',
    'Better team collaboration and harmony',
    'Improved decision-making abilities',
    'Reduced workplace stress and conflicts',
    'Stronger client relationships and deals'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-purple-600">
                  <FaBriefcase className="text-xl" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Office Consultancy</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Elevate Your Business to 
                  <span className="text-purple-600"> New Heights</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your office into a powerhouse of productivity, prosperity, and success through strategic Vastu alignment and cosmic energy optimization.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                    <div className="text-purple-600 text-xl mt-1">
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
                    Get Office Analysis
                  </Button>
                </Link>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern office space with positive energy"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-purple-600 text-white p-4 rounded-xl shadow-lg">
                  <FaChartLine className="text-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                  <GiMagicSwirl className="text-2xl" />
                </div>
              </div>
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-purple-200/30 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Business Transformation Results
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
            Our Office Transformation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Business Analysis</h3>
              <p className="text-gray-600 text-sm">Understanding your business goals and challenges</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Space Mapping</h3>
              <p className="text-gray-600 text-sm">Detailed measurement and directional analysis</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Energy Audit</h3>
              <p className="text-gray-600 text-sm">Complete Vastu and cosmic energy assessment</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Implementation</h3>
              <p className="text-gray-600 text-sm">Strategic remedies and layout optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Get a comprehensive office analysis and unlock your business potential
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Office Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="e.g., Mumbai, Maharashtra"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Office Area (Sq ft) *</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="e.g., 5000 sq ft"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Challenges (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Describe your current business challenges or goals..."
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Get Business Consultation
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeConsultancyPage;
