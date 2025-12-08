'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Work } from '@/components/work';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-white/20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
        {/* Left Column - Fixed/Sticky info */}
        <div className="md:col-span-1">
          <Hero />
        </div>

        {/* Right Column - Scrollable content */}
        <div className="md:col-span-5">
          <Work />
          <About />
          <Contact />
        </div>
      </div>
      
      <Navbar />
      </main>
  );
}
