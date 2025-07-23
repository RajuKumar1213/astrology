"use client";

import React from "react";
import { FaStar, FaMoon, FaSun } from "react-icons/fa";
import { GiCrystalBall, GiMagicSwirl } from "react-icons/gi";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pb-8 pt-30 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Beautiful Vastu-compliant home */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      >
        {/* Warm overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-purple-900/40"></div>
      </div>

      {/* Vastu-inspired background elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10">
          <div className="w-8 h-8 bg-purple-400/20 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20">
          <div className="w-10 h-10 bg-green-400/20 rounded-full"></div>
        </div>
        <div className="absolute top-60 left-1/3">
          <div className="w-16 h-16 bg-red-400/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-1/4">
          <div className="w-14 h-14 bg-blue-400/20 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Transform Your Space
            <span className="block text-5xl md:text-6xl mt-2 text-purple-400">
              with Ancient Vastu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Bring harmony, prosperity, and positive energy into your home and workspace with expert Vastu consultations. 
            Create spaces that support your success and well-being.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           <Link href={"/contact"}>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Free Vastu Analysis</Button></Link>
            <Link href="/services">
              <Button className=" bg-none border-2 border-purple-400 text-purple-400! hover:bg-purple-50 transition-all text duration-300">
                Explore Vastu Services
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="text-4xl text-purple-600 mx-auto mb-4 flex justify-center">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Residential Vastu
              </h3>
              <p className="text-gray-600">
                Create harmonious homes that promote health, happiness, and prosperity for your family
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="text-4xl text-green-600 mx-auto mb-4 flex justify-center">🏢</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Commercial Vastu
              </h3>
              <p className="text-gray-600">
                Optimize your business spaces for increased sales, productivity, and financial growth
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="text-4xl text-purple-600 mx-auto mb-4 flex justify-center">🔮</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Astrology Guidance
              </h3>
              <p className="text-gray-600">
                Personal birth chart analysis and cosmic guidance for important life decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
