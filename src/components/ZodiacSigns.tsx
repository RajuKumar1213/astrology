'use client';

import React from 'react';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈', color: 'from-red-500 to-orange-500', emoji: '🐏' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉', color: 'from-green-500 to-emerald-500', emoji: '🐂' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊', color: 'from-yellow-500 to-orange-500', emoji: '👥' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', color: 'from-blue-500 to-cyan-500', emoji: '🦀' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌', color: 'from-yellow-500 to-orange-500', emoji: '🦁' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', color: 'from-green-500 to-blue-500', emoji: '👩' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎', color: 'from-pink-500 to-purple-500', emoji: '⚖️' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', color: 'from-red-600 to-purple-600', emoji: '🦂' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', color: 'from-purple-500 to-indigo-500', emoji: '🏹' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', color: 'from-gray-600 to-blue-600', emoji: '🐐' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', color: 'from-blue-500 to-purple-500', emoji: '🏺' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', color: 'from-teal-500 to-blue-500', emoji: '🐟' }
];

const ZodiacSigns = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Discover Your Zodiac Sign
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each zodiac sign carries unique cosmic energies and personality traits. 
            Click on your sign to unlock personalized insights and daily guidance.
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacSigns.map((sign, index) => (
            <div
              key={sign.name}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {/* Card */}
              <div className={`bg-gradient-to-br ${sign.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200`}>
                {/* Symbol and Emoji */}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{sign.emoji}</div>
                  <div className="text-5xl font-bold text-white mb-2">{sign.symbol}</div>
                </div>
                
                {/* Sign Info */}
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-1">{sign.name}</h3>
                  <p className="text-sm opacity-90">{sign.dates}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold bg-black/70 px-4 py-2 rounded-full">View Horoscope</span>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sign.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-purple-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want a Detailed Reading?
            </h3>
            <p className="text-gray-700 mb-6">
              Get a comprehensive birth chart analysis and personalized predictions
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Full Birth Chart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSigns;