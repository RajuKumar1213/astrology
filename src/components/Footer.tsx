'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { GiCrystalBall, GiStaryu } from 'react-icons/gi';
import { IoMdPlanet } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-yellow-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-amber-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <IoMdPlanet className="h-10 w-10 text-amber-400 mr-3 sacred-rotate-slow" />
                <FaStar className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Neelam<span className="from-yellow-400 to-orange-400"> Astrovastu</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted Vastu companion for over a decade. We bring harmony to your spaces 
              through ancient Vastu wisdom and sacred architectural principles.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebook className="text-lg" />, color: 'hover:bg-blue-600' },
                { icon: <FaTwitter className="text-lg" />, color: 'hover:bg-sky-500' },
                { icon: <FaInstagram className="text-lg" />, color: 'hover:bg-gradient-to-tr from-amber-600 to-orange-600' },
                { icon: <FaYoutube className="text-lg" />, color: 'hover:bg-red-600' },
                { icon: <FaTiktok className="text-lg" />, color: 'hover:bg-black' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className={`bg-gray-700 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 ${social.color} flex items-center justify-center`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GiStaryu className="text-amber-400 mr-2" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Vastu Services
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home Vastu', icon: <GiCrystalBall className="mr-2" /> },
                { name: 'Office Vastu', icon: <IoMdPlanet className="mr-2" /> },
                { name: 'Vastu Remedies', icon: <FaStar className="mr-2 text-yellow-400" /> }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-amber-300 transition-colors flex items-center group"
                  >
                    {link.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GiStaryu className="text-amber-400 mr-2" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-amber-900/30 rounded-full group-hover:bg-amber-600 transition-colors">
                  <FaPhone className="text-amber-400 group-hover:text-white" />
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  <div>
                    <a href="tel:+918603144344" className="hover:text-amber-300 transition-colors">
                      Call: 8603144344
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/917763889772" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                      WhatsApp: 7763889772
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-amber-900/30 rounded-full group-hover:bg-amber-600 transition-colors">
                  <FaEnvelope className="text-amber-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">mantokumarthakur@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-amber-900/30 rounded-full group-hover:bg-amber-600 transition-colors mt-1">
                  <FaMapMarkerAlt className="text-amber-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Antu chowk, Tetartoli, Morabadi<br />
                  Ranchi, Jharkhand 834008
                </span>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-8">
              <h4 className="font-semibold text-amber-300 mb-3 flex items-center">
                <FaStar className="text-yellow-300 mr-2 text-xs" />
                Consultation Hours
              </h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9 AM - 9 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10 AM - 8 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12 PM - 6 PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Neelamastrovastu. All cosmic rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;