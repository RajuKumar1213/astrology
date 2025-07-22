'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaStar, FaHeart } from 'react-icons/fa';
import { GiCrystalBall, GiMagicSwirl } from 'react-icons/gi';

const team = [
  {
    name: 'Luna Starweaver',
    title: 'Master Astrologer & Founder',
    experience: '15+ Years',
    specialties: ['Natal Charts', 'Predictive Astrology', 'Spiritual Guidance'],
    image: '🌙',
    bio: 'Luna has been practicing astrology for over 15 years and holds certifications from the International Society for Astrological Research. She founded AstralVision with a mission to make cosmic wisdom accessible to everyone.',
    achievements: ['Certified Professional Astrologer', '10,000+ Readings Completed', 'Featured in Cosmic Magazine']
  },
  {
    name: 'Celeste Moonchild',
    title: 'Senior Tarot Reader',
    experience: '12+ Years',
    specialties: ['Tarot Reading', 'Moon Phase Guidance', 'Love & Relationships'],
    image: '🔮',
    bio: 'Celeste combines traditional tarot wisdom with modern psychological insights. Her intuitive approach has helped thousands find clarity in love, career, and personal growth.',
    achievements: ['Master Tarot Practitioner', 'Reiki Master Level III', 'Published Tarot Author']
  },
  {
    name: 'Sage Crystalline',
    title: 'Crystal Healing Specialist',
    experience: '10+ Years',
    specialties: ['Crystal Healing', 'Chakra Balancing', 'Energy Work'],
    image: '💎',
    bio: 'Sage is a certified crystal healer who has studied with indigenous shamans and modern energy healers. She brings ancient wisdom into contemporary healing practices.',
    achievements: ['Certified Crystal Healer', 'Shamanic Practitioner', 'Energy Healing Master']
  },
  {
    name: 'Phoenix Starlight',
    title: 'Numerology Expert',
    experience: '8+ Years',
    specialties: ['Numerology', 'Life Path Analysis', 'Name Vibrations'],
    image: '🔢',
    bio: 'Phoenix discovered numerology during his own spiritual awakening and has since helped thousands understand the numerical patterns that shape their destiny.',
    achievements: ['Certified Numerologist', 'Mathematics Background', 'Spiritual Life Coach']
  }
];

const values = [
  {
    title: 'Authenticity',
    description: 'We provide genuine, honest readings without false promises or fear-based predictions.',
    icon: <FaHeart className="text-4xl text-pink-400" />
  },
  {
    title: 'Accuracy',
    description: 'Our readings are precise, detailed, and based on proven astrological principles.',
    icon: <FaStar className="text-4xl text-yellow-400" />
  },
  {
    title: 'Empowerment',
    description: 'We help you understand your cosmic blueprint to make empowered life decisions.',
    icon: <GiMagicSwirl className="text-4xl text-purple-400" />
  },
  {
    title: 'Compassion',
    description: 'Every reading is delivered with love, understanding, and non-judgmental support.',
    icon: <GiCrystalBall className="text-4xl text-blue-400" />
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            About AstralVision
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over a decade, we&apos;ve been illuminating life&apos;s mysteries through the ancient wisdom 
            of astrology, helping souls discover their cosmic purpose and navigate their spiritual journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Cosmic Journey</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  AstralVision was born from a simple yet profound belief: everyone deserves access 
                  to the transformative wisdom of the cosmos. Founded in 2015 by Master Astrologer 
                  Luna Starweaver, our mission has always been to bridge the gap between ancient 
                  astrological wisdom and modern spiritual seekers.
                </p>
                <p>
                  What started as a small practice in a cozy metaphysical shop has grown into a 
                  global community of over 25,000 souls who trust us with their spiritual guidance. 
                  We&apos;ve completed more than 50,000 readings, each one crafted with love, precision, 
                  and deep cosmic insight.
                </p>
                <p>
                  Our approach combines traditional astrological techniques with modern psychological 
                  understanding, creating readings that are not only accurate but also practical and 
                  empowering. We believe that astrology should inspire action, healing, and personal 
                  growth, not create fear or dependency.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To illuminate the path of every soul through cosmic wisdom, empowering individuals 
                  to understand their true purpose and create a life aligned with their highest potential.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  A world where everyone has access to spiritual guidance, where ancient wisdom meets 
                  modern understanding, and where cosmic consciousness becomes a tool for healing and transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Our Sacred Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every reading, every interaction, and every moment of our spiritual service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Meet Our Cosmic Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of certified astrologers, intuitive readers, and spiritual counselors 
              are here to guide you on your journey of self-discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{member.image}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{member.title}</p>
                    <p className="text-sm text-gray-400 mb-4">{member.experience} Experience</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement) => (
                          <li key={achievement} className="text-gray-300 text-sm flex items-center">
                            <FaStar className="text-yellow-400 mr-2 text-xs" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Cosmic Impact</h2>
              <p className="text-gray-300">The numbers that reflect our commitment to spiritual service</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  50,000+
                </div>
                <div className="text-gray-300">Readings Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  25,000+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  98%
                </div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                  10+
                </div>
                <div className="text-gray-300">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Cosmic Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of souls who have discovered their true path through our spiritual guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Your Free Reading
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
