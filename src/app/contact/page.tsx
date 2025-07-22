'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen  text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-38 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 ">
            Contact Our Cosmic Team
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to unlock the mysteries of your destiny? Our experienced astrologers 
            are here to guide you on your spiritual journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl text-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="birth-chart" className="bg-gray-900">Birth Chart Reading</option>
                    <option value="love-compatibility" className="bg-gray-900">Love Compatibility</option>
                    <option value="tarot-reading" className="bg-gray-900">Tarot Reading</option>
                    <option value="career-guidance" className="bg-gray-900">Career Guidance</option>
                    <option value="spiritual-counseling" className="bg-gray-900">Spiritual Counseling</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your cosmic questions or concerns..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-pink-600 hover:from-gray-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  Send Message ✨
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-700">+1 (555) 123-STAR</p>
                      <p className="text-gray-700">+1 (555) 123-MOON</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-700">hello@astralvision.com</p>
                      <p className="text-gray-700">readings@astralvision.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-700">
                        123 Cosmic Avenue<br />
                        Mystical City, MC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaClock className="mr-3 text-gray-600" />
                  Reading Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 6:00 PM EST</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-600/20 rounded-xl border border-gray-500/30">
                  <p className="text-sm text-gray-800">
                    💫 <strong>Emergency Readings:</strong> Available 24/7 for urgent spiritual guidance
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaFacebook className="text-2xl text-blue-700 mb-2" />
                    <span className="text-sm text-gray-700">Facebook</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaInstagram className="text-2xl text-pink-500 mb-2" />
                    <span className="text-sm text-gray-700">Instagram</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaTwitter className="text-2xl text-blue-400 mb-2" />
                    <span className="text-sm text-gray-700">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Emergency Reading */}
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <div className="text-center">
                  <GiCrystalBall className="text-4xl text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Need Immediate Guidance?</h3>
                  <p className="text-gray-700 mb-4">
                    Our emergency reading service is available for urgent spiritual matters
                  </p>
                  <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    Emergency Reading
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
