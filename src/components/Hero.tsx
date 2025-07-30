"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaMoon, FaSun } from "react-icons/fa";
import { GiCrystalBall, GiMagicSwirl } from "react-icons/gi";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of carousel slides with Vastu-related images and text
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Harmony in Design",
      subtitle: "Craft serene spaces with Vastu principles for peace and prosperity.",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Prosperity Flows",
      subtitle: "Align your home's energy to attract wealth and success.",
    },
    {
      image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Sacred Spaces",
      subtitle: "Transform your environment with ancient Vastu wisdom.",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual slide navigation
  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative pb-8 pt-30 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* Warm overlay with Vastu-inspired colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-orange-900/50"></div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-amber-500" : "bg-white/50"
            } hover:bg-amber-400 transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Vastu-inspired directional elements representing the 5 elements */}
      <div className="absolute inset-0 z-5">
        {/* North - Green for prosperity (Kubera) */}
        <div className="absolute top-20 left-10">
          <div className="w-8 h-8 bg-green-500/20 rounded-full vastu-pulse"></div>
        </div>
        {/* East - Orange for energy (Indra) */}
        <div className="absolute top-40 right-20">
          <div className="w-12 h-12 bg-orange-400/20 rounded-full vastu-pulse"></div>
        </div>
        {/* West - Blue for balance (Varuna) */}
        <div className="absolute bottom-40 left-20">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full vastu-pulse"></div>
        </div>
        {/* South - Red for power (Yama) */}
        <div className="absolute top-60 left-1/3">
          <div className="w-16 h-16 bg-red-500/20 rounded-full vastu-pulse"></div>
        </div>
        {/* Center - Gold for divine connection (Brahma) */}
        <div className="absolute bottom-20 right-1/4">
          <div className="w-14 h-14 bg-yellow-500/20 rounded-full vastu-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Carousel Text */}
          <div className="transition-all duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {slides[currentSlide].title}
              <span className="block text-5xl md:text-6xl mt-2 text-amber-400">
                with Ancient Vastu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mt-4">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-none">Get Free Vastu Analysis</Button>
            </Link>
            <Link href="/services">
              <Button className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300">
                Explore Vastu Services
              </Button>
            </Link>
          </div>

          {/* Features - Emphasizing Vastu over Astrology */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 hover:bg-white/95 transition-all duration-300 group">
              <div className="text-4xl text-amber-600 mx-auto mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Residential Vastu
              </h3>
              <p className="text-gray-600">
                Create harmonious homes that promote health, happiness, and prosperity for your family
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-green-200/30 hover:bg-white/95 transition-all duration-300 group">
              <div className="text-4xl text-green-600 mx-auto mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">🏢</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Commercial Vastu
              </h3>
              <p className="text-gray-600">
                Optimize your business spaces for increased sales, productivity, and financial growth
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30 hover:bg-white/95 transition-all duration-300 group">
              <div className="text-4xl text-purple-600 mx-auto mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">🔮</div>
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