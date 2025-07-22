"use client";

import React from "react";
import { FaStar, FaMoon, FaSun } from "react-icons/fa";
import { GiCrystalBall, GiMagicSwirl } from "react-icons/gi";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pb-8 pt-30 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Simple Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10">
          <FaStar className="text-gray-300 text-2xl opacity-30" />
        </div>
        <div className="absolute top-40 right-20">
          <FaMoon className="text-gray-400 text-3xl opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20">
          <FaSun className="text-gray-300 text-2xl opacity-20" />
        </div>
        <div className="absolute top-60 left-1/3">
          <GiMagicSwirl className="text-gray-300 text-4xl opacity-15" />
        </div>
        <div className="absolute bottom-20 right-1/4">
          <GiCrystalBall className="text-gray-300 text-3xl opacity-20" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-5xl font-bold text-white">
            Unlock Your
            <span className="block text-6xl md:text-6xl mt-2">
              Cosmic Destiny
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-md md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover the secrets of the universe through personalized astrology
            readings, horoscopes, and spiritual guidance tailored just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           <Link href={"/contact"}>
            <Button className="">Get Free Reading</Button></Link>
            <Link href="/services">
              <Button className=" bg-none border-2 border-purple-600 text-purple-600! hover:bg-purple-50 transition-all text duration-300">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/90 backdrop-blur-3xl rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <GiCrystalBall className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Personalized Readings
              </h3>
              <p className="text-gray-600">
                Get detailed insights based on your birth chart and cosmic
                alignment
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <GiMagicSwirl className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Daily Horoscopes
              </h3>
              <p className="text-gray-600">
                Stay aligned with cosmic energies through daily guidance
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <FaStar className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Astrologers
              </h3>
              <p className="text-gray-600">
                Connect with certified astrologers for professional guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
