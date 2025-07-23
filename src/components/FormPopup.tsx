'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes, FaStar, FaGift } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';

const FormPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    gender: '',
    mobile: '',
    interest: ''
  });
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
        // Show popup after 10 seconds of scrolling
        setTimeout(() => {
          setIsVisible(true);
        }, 10000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsVisible(false);
    // You can add API call here to submit the data
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500/50 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="relative p-8 text-center">
          {/* Background Elements */}
          <div className="absolute top-4 left-4 animate-pulse opacity-30">
            <FaStar className="text-yellow-300 text-2xl" />
          </div>
          <div className="absolute bottom-4 right-4 animate-bounce opacity-40">
            <GiCrystalBall className="text-pink-300 text-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-6xl mb-4">🏠</div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Transform Your Life with Vastu!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Get a FREE personalized Vastu consultation 
            </p>
            
            {/* Special Offer Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              <FaGift />
              <span>LIMITED TIME: 100% FREE Vastu Analysis</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              placeholder="+91 12345 67890"
            />
          </div>

          {/* Birth Date and Time Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Birth Date *
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Birth Time *
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Birth Place and Gender Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Birth Place *
              </label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                placeholder="City, State, Country"
              />
            </div>
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              >
                <option value="" className="bg-purple-900">Select Gender</option>
                <option value="male" className="bg-purple-900">Male</option>
                <option value="female" className="bg-purple-900">Female</option>
                <option value="other" className="bg-purple-900">Other</option>
              </select>
            </div>
          </div>

          {/* Interest */}
          <div>
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              What interests you most?
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            >
              <option value="" className="bg-purple-900">Choose your focus</option>
              <option value="home-vastu" className="bg-purple-900">Home Vastu Consultation</option>
              <option value="office-vastu" className="bg-purple-900">Office Vastu Consultation</option>
              <option value="factory-vastu" className="bg-purple-900">Factory Vastu Consultation</option>
              <option value="commercial-vastu" className="bg-purple-900">Commercial Vastu Consultation</option>
              <option value="vastu-visit" className="bg-purple-900">Vastu Site Visit</option>
              <option value="career" className="bg-purple-900">Career & Money Guidance</option>
              <option value="spiritual" className="bg-purple-900">Spiritual Growth</option>
              <option value="health" className="bg-purple-900">Health & Wellness</option>
            </select>
          </div>

          {/* Benefits List */}
          <div className="bg-white/5 rounded-xl p-4 border border-purple-500/30">
            <h3 className="text-white font-semibold mb-3">Your FREE consultation includes:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Complete Vastu analysis of your space</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Personalized Vastu remedies & solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Direction-wise room placement guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Prosperity & health enhancement tips</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Birth chart insights (astrology bonus)</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Submit, We will connect you shortly. 🏠
          </button>

          {/* Trust Elements */}
          <div className="text-center text-xs text-gray-400 space-y-2">
            <p>🔒 Your information is 100% secure and private</p>
            <p>⚡ Instant access - no waiting time</p>
            <p>💯 Satisfaction guaranteed or your money back</p>
          </div>
        </form>

        {/* Decorative Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
      </div>
    </div>
  );
};

export default FormPopup;
