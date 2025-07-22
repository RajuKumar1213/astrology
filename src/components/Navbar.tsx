"use client";

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaBars,
  FaTimes,
  FaHeart,
  FaGem,
} from "react-icons/fa";
import { IoMdPlanet } from "react-icons/io";
import { GiCrystalBall, GiMagicSwirl } from "react-icons/gi";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              <IoMdPlanet className="h-10 w-10 text-black" />
              <span className="ml-3 text-2xl font-bold tracking-tight text-black">
                Astral<span className="text-gray-600">Vision</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/services"
              className="text-black hover:text-gray-600 transition-colors flex items-center font-medium">
              <GiCrystalBall className="mr-2 text-sm" /> Services
            </a>
            <a
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors font-medium">
              Contact
            </a>

            <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              Get Reading
            </button>
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
        } bg-black/95 backdrop-blur-md`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a
            href="#horoscopes"
            className="flex items-center px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300">
            <FaStar className="mr-3" /> Horoscopes
          </a>
          <a
            href="#services"
            className="flex items-center px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300">
            <GiCrystalBall className="mr-3" /> Services
          </a>
          <a
            href="#compatibility"
            className="flex items-center px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300">
            <FaHeart className="mr-3" /> Compatibility
          </a>
          <a
            href="#tarot"
            className="flex items-center px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300">
            <GiMagicSwirl className="mr-3" /> Tarot
          </a>
          <a
            href="#crystals"
            className="flex items-center px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300">
            <FaGem className="mr-3" /> Crystals
          </a>
          <a
            href="#blog"
            className="px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300 block">
            Blog
          </a>
          <a
            href="#contact"
            className="px-4 py-3 rounded-xl text-white hover:bg-purple-600/30 transition-all duration-300 block">
            Contact
          </a>
          <div className="pt-4">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              Get Reading
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
