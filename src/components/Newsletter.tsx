'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaStar } from 'react-icons/fa';
import { GiGalaxy, GiMoonBats } from 'react-icons/gi';
import { IoPlanetOutline } from 'react-icons/io5';

const CosmicNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Floating Cosmic Elements */}
        <div className="relative">
          <div className="absolute -top-10 left-10 text-purple-300 animate-float opacity-70">
            <IoPlanetOutline className="text-5xl rotate-12" />
          </div>
          <div className="absolute top-5 right-20 text-yellow-300 animate-float-delay opacity-60">
            <FaStar className="text-3xl" />
          </div>
          <div className="absolute bottom-10 left-1/4 text-blue-300 animate-float-delay-2 opacity-50">
            <GiMoonBats className="text-4xl -rotate-12" />
          </div>
          
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-10">
            {/* Gradient Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full">
                    <GiGalaxy className="text-4xl text-purple-600" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Cosmic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Insights</span> Await
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Subscribe to receive celestial guidance, exclusive horoscopes, and mystical wisdom straight from the cosmos.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: '✨',
                    title: 'Personalized Horoscopes',
                    desc: 'Tailored to your unique birth chart'
                  },
                  {
                    icon: '🌕',
                    title: 'Moon Phase Alerts',
                    desc: 'Harness lunar energy effectively'
                  },
                  {
                    icon: '🔮',
                    title: 'Exclusive Forecasts',
                    desc: 'VIP access to special predictions'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your cosmic email address..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaStar className="animate-pulse" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isSubscribed
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg'
                    }`}
                  >
                    {isSubscribed ? (
                      '✓ Subscribed!'
                    ) : (
                      <>
                        <span>Join Now</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure & private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 text-purple-800 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float 8s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default CosmicNewsletter;