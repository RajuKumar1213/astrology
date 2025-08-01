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
    <div className="min-h-screen bg-white/70 text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-38 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 ">
            Contact Mantu Thakur
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your space with ancient Vastu wisdom? Our experienced Vastu consultant 
            is here to guide you toward prosperity, harmony, and spiritual fulfillment.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 text-black sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form 
                action="https://formsubmit.co/mantokumarthakur@gmail.com" 
                method="POST" 

                className="space-y-6"
              >
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
                    className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl  focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300"
                  >
                    <option value="" className="">Select a service</option>
                    <option value="vastu-consultation" className="">Vastu Consultation</option>
                    <option value="residential-vastu" className="">Residential Vastu</option>
                    <option value="commercial-vastu" className="">Commercial Vastu</option>
                    <option value="industrial-vastu" className="">Industrial Vastu</option>
                    <option value="vastu-remedies" className="">Vastu Remedies</option>
                    <option value="astrology-guidance" className="">Astrology Guidance</option>
                    <option value="other" className="">Other</option>
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
                    className="w-full px-4 py-3 bg-white/10 border border-gray-500/30 rounded-xl  placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your Vastu concerns or space transformation needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-purple-600 hover:from-gray-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  Send Message ✨
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 text-black">
              {/* Contact Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold  mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className="text-black font-semibold">Phone</h4>
                      <p className="text-gray-700">
                        <a href="tel:+918603144344" className="hover:text-amber-600 transition-colors">
                          Call: 8603144344
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="https://wa.me/917763889772" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                          WhatsApp: 7763889772
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className=" font-semibold">Email</h4>
                      <p className="text-gray-700">
                        <a href="mailto:mantokumarthakur@gmail.com" className="hover:text-amber-600 transition-colors">
                          mantokumarthakur@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-gray-600 text-xl mt-1" />
                    <div>
                      <h4 className=" font-semibold">Address</h4>
                      <p className="text-gray-700">
                        Friends Colony, Pandra<br />
                        Near Ranchi Darbar Banquet Hall<br />
                        Ranchi - 835222
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold  mb-6 flex items-center">
                  <FaClock className="mr-3 text-gray-600" />
                  Consultation Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM IST</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-600/20 rounded-xl border border-gray-500/30">
                  <p className="text-sm text-gray-800">
                    🏠 <strong>Site Visits:</strong> Available by appointment for on-site Vastu consultations
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold  mb-6">Follow Our Journey</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaFacebook className="text-2xl text-blue-700 mb-2" />
                    <span className="text-sm text-gray-700">Facebook</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaInstagram className="text-2xl text-purple-500 mb-2" />
                    <span className="text-sm text-gray-700">Instagram</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-600/20 rounded-xl hover:bg-gray-600/30 transition-all duration-300">
                    <FaTwitter className="text-2xl text-blue-400 mb-2" />
                    <span className="text-sm text-gray-700">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Emergency Reading */}
              <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
                <div className="text-center">
                  <GiCrystalBall className="text-4xl text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">Need Immediate Vastu Guidance?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us directly for urgent Vastu consultations and space harmony solutions
                  </p>
                  <a href="https://wa.me/917763889772?text=Hi!%20I%20need%20urgent%20Vastu%20consultation.%20Please%20help%20me." target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                      WhatsApp Now
                    </button>
                  </a>
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
