'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-8"
        >
          {t.about.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-white/70 leading-relaxed font-light"
        >
          {t.about.description}
        </motion.p>
      </div>
    </section>
  );
}

