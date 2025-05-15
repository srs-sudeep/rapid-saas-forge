
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TechStack } from '@/components/TechStack';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { OpenSource } from '@/components/OpenSource';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <OpenSource />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
