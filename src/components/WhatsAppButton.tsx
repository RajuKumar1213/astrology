'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "919876543210"; // Example: Indian number format
    const message = "Hi! I'm interested in astrology consultation. Please help me get started.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
      
      {/* Optional tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
