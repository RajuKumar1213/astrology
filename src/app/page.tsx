'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import ZodiacSigns from '@/components/ZodiacSigns';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import FormPopup from '@/components/FormPopup';
import WhatsAppButton from '@/components/WhatsAppButton';


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      {/* <ZodiacSigns /> */}
      <Services />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Newsletter />
      <Footer />
      <FormPopup />
      <WhatsAppButton />
    </div>
  );
}
