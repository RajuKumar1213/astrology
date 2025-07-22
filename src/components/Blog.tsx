'use client';

import React from 'react';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import { GiCrystalBall, GiMagicSwirl } from 'react-icons/gi';

const blogPosts = [
  {
    title: 'Mercury Retrograde 2025: What to Expect and How to Navigate',
    excerpt: 'Learn how to thrive during Mercury retrograde periods with practical tips and cosmic insights for clear communication and smooth travels.',
    author: 'Luna Starweaver',
    readTime: '5 min read',
    date: 'July 15, 2025',
    category: 'Planetary Transits',
    image: '🪐',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Full Moon in Capricorn: Time for Manifestation and Release',
    excerpt: 'Discover the powerful energy of this months full moon and learn ritual practices to manifest your dreams and release what no longer serves.',
    author: 'Celeste Moonchild',
    readTime: '7 min read',
    date: 'July 12, 2025',
    category: 'Moon Phases',
    image: '🌕',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Crystal Healing for Each Zodiac Sign: Your Perfect Match',
    excerpt: 'Explore the most powerful crystals for your zodiac sign and learn how to harness their energy for healing, protection, and manifestation.',
    author: 'Ruby Crystalline',
    readTime: '8 min read',
    date: 'July 10, 2025',
    category: 'Crystal Healing',
    image: '💎',
    gradient: 'from-emerald-500 to-cyan-500'
  },
  {
    title: 'Love Compatibility: Venus Signs and Romantic Chemistry',
    excerpt: 'Understand how Venus signs influence your love style and discover the secret to lasting romantic compatibility through astrology.',
    author: 'Aphrodite Lovewing',
    readTime: '6 min read',
    date: 'July 8, 2025',
    category: 'Love & Relationships',
    image: '💕',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    title: 'Tarot Card of the Month: The Star - Hope and Renewal',
    excerpt: 'Dive deep into the symbolism and meaning of The Star tarot card and learn how its message of hope can guide your spiritual journey.',
    author: 'Mystic Cardreader',
    readTime: '4 min read',
    date: 'July 5, 2025',
    category: 'Tarot Insights',
    image: '🌟',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Numerology 2025: Your Personal Year Number Guide',
    excerpt: 'Calculate your personal year number for 2025 and discover what the universe has in store for your personal growth and opportunities.',
    author: 'Pythagoras Numbers',
    readTime: '9 min read',
    date: 'July 3, 2025',
    category: 'Numerology',
    image: '🔢',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const categories = [
  { name: 'All Posts', icon: <GiMagicSwirl /> },
  { name: 'Planetary Transits', icon: <GiMagicSwirl /> },
  { name: 'Moon Phases', icon: <GiCrystalBall /> },
  { name: 'Crystal Healing', icon: <GiCrystalBall /> },
  { name: 'Love & Relationships', icon: <GiMagicSwirl /> },
  { name: 'Tarot Insights', icon: <GiCrystalBall /> },
  { name: 'Numerology', icon: <GiMagicSwirl /> }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Cosmic Wisdom Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the mysteries of the universe with our expert insights, 
            celestial guidance, and spiritual wisdom for your cosmic journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className={`absolute inset-0 bg-gradient-to-r ${blogPosts[0].gradient} opacity-20`}></div>
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl">{blogPosts[0].image}</span>
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <FaUser />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                      <span>Read More</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{blogPosts[0].image}</div>
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${blogPosts[0].gradient}`}>
                    {blogPosts[0].category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer transform hover:scale-105"
            >
              {/* Image/Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <div className="text-6xl">{post.image}</div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
                    <span>Read</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
