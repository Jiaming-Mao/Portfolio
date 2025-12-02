'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="flex flex-col items-start pt-12 md:pt-24 sticky top-0 h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={200} 
          height={58} 
          className=""
        />
      </motion.div>
      
      <div className="space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg font-medium text-white"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-white/60 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
