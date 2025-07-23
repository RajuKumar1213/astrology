"use client";

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaBars,
  FaTimes,
  FaHeart,
  FaGem,
} from "react-icons/fa";
import { IoIosContacts, IoMdPlanet } from "react-icons/io";
import { GiCrystalBall, GiMagicSwirl } from "react-icons/gi";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isConsultancyOpen, setIsConsultancyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center">
              <IoMdPlanet className="h-10 w-10 text-purple-600" />
              <span className="ml-3 text-2xl font-bold tracking-tight text-purple-700">
                Neelam<span className="text-purple-600">astrovastu</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Consultancy Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsConsultancyOpen(true)}
              onMouseLeave={() => setIsConsultancyOpen(false)}
            >
              <a
                href="/services"
                className="text-black hover:text-gray-600 transition-colors flex items-center font-medium">
                <IoIosContacts className="mr-2 text-md" /> Consultancy
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isConsultancyOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                isConsultancyOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <a 
                  href="/consultancy/home" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Home</span>
                  </div>
                  <span className="text-xs text-gray-500">Residential consultancy</span>
                </a>
                <a 
                  href="/consultancy/office" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Office</span>
                  </div>
                  <span className="text-xs text-gray-500">Corporate consultancy</span>
                </a>
                <a 
                  href="/consultancy/factory" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Factory</span>
                  </div>
                  <span className="text-xs text-gray-500">Industrial consultancy</span>
                </a>
                <a 
                  href="/consultancy/commercial" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Commercial</span>
                  </div>
                  <span className="text-xs text-gray-500">Business consultancy</span>
                </a>
                <hr className="my-2 border-gray-200" />
                <a 
                  href="/meet-astrologer" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Meet the Astrologer</span>
                  </div>
                  <span className="text-xs text-gray-500">Connect with our expert</span>
                </a>
              </div>
            </div>
            
            <a
              href="/services"
              className="text-black hover:text-gray-600 transition-colors flex items-center font-medium">
              <GiCrystalBall className="mr-2 text-md" /> Services
            </a>
            <a
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors font-medium">
              Contact
            </a>

            <Link href="tel:+15551234567">
              <Button className=" font-medium transition-all duration-300">
                Call Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-black hover:bg-gray-100 transition-all duration-300"
              aria-expanded="false">
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white/95 backdrop-blur-md shadow-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {/* Consultancy with expandable submenu */}
          <div className="space-y-1">
            <div className="flex items-center px-4 py-3 rounded-xl text-gray-700 font-medium">
              <IoIosContacts className="mr-3" /> Consultancy
            </div>
            <div className="ml-4 space-y-1">
              <a
                href="/consultancy/home"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                Home
              </a>
              <a
                href="/consultancy/office"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                Office
              </a>
              <a
                href="/consultancy/factory"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                Factory
              </a>
              <a
                href="/consultancy/commercial"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                Commercial
              </a>
              <a
                href="/meet-astrologer"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                Meet the Astrologer
              </a>
            </div>
          </div>
          
          <a
            href="/services"
            className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 font-medium">
            <GiCrystalBall className="mr-3" /> Services
          </a>
          
          <a
            href="/contact"
            className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
