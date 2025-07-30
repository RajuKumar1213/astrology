'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import ZodiacSigns from '@/components/ZodiacSigns';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import FormPopup from '@/components/FormPopup';
import WhatsAppButton from '@/components/WhatsAppButton';

// New Vastu Benefits Section
const VastuBenefits = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Space with
                <span className="block text-amber-600">Ancient Vastu Wisdom</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover how thousands of years of Vastu knowledge can bring harmony, prosperity, 
                and positive energy into your home and workplace. Our expert consultations help you 
                create spaces that support your well-being and success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Prosperity</h3>
                  <p className="text-gray-600">Proper Vastu alignment attracts wealth and financial stability to your home and business.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Health & Relationships</h3>
                  <p className="text-gray-600">Create harmonious environments that promote physical well-being and stronger family bonds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Productivity</h3>
                  <p className="text-gray-600">Optimize your workspace for enhanced focus, creativity, and professional success.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Vastu Analysis
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative ">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Beautiful Vastu-compliant home interior"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements inspired by Vastu directions */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60 vastu-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
            
            {/* Floating stats */}
            <div className="absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">5000+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            
            <div className="absolute bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <VastuBenefits />
      <Newsletter />
      <Footer />
      <FormPopup />
      <WhatsAppButton />
    </div>
  );
}
