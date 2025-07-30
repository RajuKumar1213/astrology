'use client';

import React from 'react';
import { FaHome, FaBriefcase, FaLeaf, FaGem } from 'react-icons/fa';
import { GiCompass, GiCrystalBall } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io';

const VastuInformation = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6">
            Why Choose Vastu Shastra?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient science of architecture that creates harmony between your living space 
            and the natural elements, bringing prosperity, health, and happiness to your life.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Key Principles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Vastu Principles</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <GiCompass className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Directional Energy</h4>
                  <p className="text-gray-600">Each direction has specific energy properties. Proper alignment with cardinal directions enhances positive vibrations in your space.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaLeaf className="text-2xl text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Five Elements Balance</h4>
                  <p className="text-gray-600">Earth, Water, Fire, Air, and Space elements must be balanced to create harmony and positive energy flow.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IoIosConstruct className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Sacred Geometry</h4>
                  <p className="text-gray-600">Mathematical proportions and geometric patterns create spaces that resonate with cosmic energy and natural laws.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Benefits</h3>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Improved Family Harmony</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">Increased Prosperity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                  <div className="text-sm text-gray-600">Better Health</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600">Enhanced Focus</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">Reduces stress and anxiety in living spaces</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">Attracts positive energy and opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">Improves sleep quality and mental clarity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">Enhances business growth and financial stability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <FaHome className="text-2xl text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Residential</h4>
              <p className="text-gray-600 text-sm">Homes, apartments, and living spaces</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <FaBriefcase className="text-2xl text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Commercial</h4>
              <p className="text-gray-600 text-sm">Offices, shops, and business spaces</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <IoIosConstruct className="text-2xl text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industrial</h4>
              <p className="text-gray-600 text-sm">Factories and manufacturing units</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <GiCrystalBall className="text-2xl text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Spiritual</h4>
              <p className="text-gray-600 text-sm">Temples and meditation spaces</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default VastuInformation;