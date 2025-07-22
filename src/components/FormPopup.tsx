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
    zodiacSign: '',
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
            <div className="text-6xl mb-4">🔮</div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Unlock Your Cosmic Destiny!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Get a FREE personalized astrology reading tailored just for you
            </p>
            
            {/* Special Offer Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              <FaGift />
              <span>LIMITED TIME: 100% FREE Reading</span>
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
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
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
                Birth Time (Optional)
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Zodiac Sign */}
          <div>
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              Zodiac Sign
            </label>
            <select
              name="zodiacSign"
              value={formData.zodiacSign}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            >
              <option value="" className="bg-purple-900">Select your sign</option>
              <option value="aries" className="bg-purple-900">Aries ♈</option>
              <option value="taurus" className="bg-purple-900">Taurus ♉</option>
              <option value="gemini" className="bg-purple-900">Gemini ♊</option>
              <option value="cancer" className="bg-purple-900">Cancer ♋</option>
              <option value="leo" className="bg-purple-900">Leo ♌</option>
              <option value="virgo" className="bg-purple-900">Virgo ♍</option>
              <option value="libra" className="bg-purple-900">Libra ♎</option>
              <option value="scorpio" className="bg-purple-900">Scorpio ♏</option>
              <option value="sagittarius" className="bg-purple-900">Sagittarius ♐</option>
              <option value="capricorn" className="bg-purple-900">Capricorn ♑</option>
              <option value="aquarius" className="bg-purple-900">Aquarius ♒</option>
              <option value="pisces" className="bg-purple-900">Pisces ♓</option>
            </select>
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
              <option value="love" className="bg-purple-900">Love & Relationships</option>
              <option value="career" className="bg-purple-900">Career & Money</option>
              <option value="spiritual" className="bg-purple-900">Spiritual Growth</option>
              <option value="health" className="bg-purple-900">Health & Wellness</option>
              <option value="family" className="bg-purple-900">Family & Friends</option>
              <option value="future" className="bg-purple-900">Future Predictions</option>
            </select>
          </div>

          {/* Benefits List */}
          <div className="bg-white/5 rounded-xl p-4 border border-purple-500/30">
            <h3 className="text-white font-semibold mb-3">Your FREE reading includes:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Personalized birth chart analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Love compatibility insights</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Career and life path guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Lucky numbers and colors</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Get My FREE Reading Now! 🔮
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
