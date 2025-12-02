'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 container mx-auto px-6 mb-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          {t.contact.title}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            {t.contact.email}
          </motion.a>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
          >
            <Linkedin size={20} />
            {t.contact.linkedin}
          </motion.a>
        </div>
      </div>
    </section>
  );
}

