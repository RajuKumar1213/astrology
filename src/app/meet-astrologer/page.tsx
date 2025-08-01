'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaStar, FaCheckCircle, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { GiCrystalBall, GiMagicSwirl } from 'react-icons/gi';
import Button from '@/components/Button';
import Link from 'next/link';

const MeetAstrologerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    consultationType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const expertise = [
    { icon: <GiCrystalBall />, title: 'Vedic Astrology', desc: 'Traditional Indian astrological wisdom' },
    { icon: <FaStar />, title: 'Birth Chart Analysis', desc: 'Detailed natal chart interpretation' },
    { icon: <GiMagicSwirl />, title: 'Vastu Consultation', desc: 'Sacred geometry and space harmony' },
    { icon: <FaUser />, title: 'Life Guidance', desc: 'Career, relationships, and spiritual growth' }
  ];

  const qualifications = [
    'Master\'\s in Vedic Astrology and Vastu Shastra from Sanskrit University',
    '15+ years of professional Vastu and astrological practice',
    'Certified Vastu Shastra consultant and remedial expert',
    'Specialist in residential and commercial space harmonization',
    '500+ successful Vastu and astrology consultations worldwide',
    'Renowned consultant featured on regional TV channels and publications'
  ];

  const consultationTypes = [
    { value: '', label: 'Select consultation type' },
    { value: 'general', label: 'General Life Reading' },
    { value: 'career', label: 'Career & Business Guidance' },
    { value: 'relationship', label: 'Love & Relationship' },
    { value: 'health', label: 'Health & Wellness' },
    { value: 'vastu', label: 'Vastu Consultation' },
    { value: 'urgent', label: 'Urgent Consultation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600">
                  <FaStar className="text-xl" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Master Astrologer</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Meet 
                  <span className="text-orange-600"> Manto Kumar Thakur</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 15 years of experience in Vedic astrology and Vastu Shastra, Manto Kumar Thakur has guided thousands of souls toward their destined path of prosperity, love, and spiritual fulfillment through ancient wisdom and cosmic insights.
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="grid md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                    <div className="text-orange-600 text-xl mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="border border-orange-600 text-orange-600 hover:bg-orange-50">
                    Book Consultation
                  </Button>
                </Link>


              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/owner.jpg"
                  alt="Manto Kumar Thakur - Expert Vastu & Astrology Consultant"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
                  <GiCrystalBall className="text-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                  <FaStar className="text-2xl" />
                </div>
              </div>
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-200/30 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Credentials & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{qualification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            How the Consultation Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Book Session</h3>
              <p className="text-gray-600 text-sm">Fill the form with your birth details</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Chart Analysis</h3>
              <p className="text-gray-600 text-sm">Detailed preparation of your birth chart</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Consultation</h3>
              <p className="text-gray-600 text-sm">60-minute detailed reading session</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Guidance</h3>
              <p className="text-gray-600 text-sm">Personalized remedies and future guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Personal Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step toward understanding your cosmic destiny
            </p>
          </div>

          <form 
            action="https://formsubmit.co/mantokumarthakur@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit} 
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time of Birth *</label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="City, State"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type *</label>
              <select
                name="consultationType"
                value={formData.consultationType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              >
                {consultationTypes.map((type, index) => (
                  <option key={index} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Questions (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Share any specific questions or areas of concern..."
              />
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Consultation Details:</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Duration: 60 minutes</li>
                <li>• Format: Video call or In-person</li>
                <li>• Includes: Birth chart, remedies, and guidance</li>
                <li>• Follow-up: 15-minute call within 7 days</li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full  transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation with Manto Kumar Thakur
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetAstrologerPage;
