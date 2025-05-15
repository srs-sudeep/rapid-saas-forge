
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TechStack } from '@/components/TechStack';
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
        <OpenSource />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
