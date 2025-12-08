'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-24 pb-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
        {/* Left Column - Title */}
        <div className="md:col-span-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-medium text-white"
          >
            {t.contact.title}
          </motion.h2>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-4">
          <div className="flex flex-col gap-6">
            <motion.a 
              href={`mailto:${t.contact.emailAddress}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors w-fit"
            >
              <Mail size={20} />
              <span>{t.contact.email}</span>
              <span className="text-sm opacity-70">{t.contact.emailAddress}</span>
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-medium backdrop-blur-sm border border-white/10 w-fit"
            >
              <MessageCircle size={20} />
              <span>{t.contact.wechat}</span>
              <span className="text-sm opacity-70">{t.contact.wechatId}</span>
            </motion.div>
            
            <motion.a 
              href={t.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 w-fit"
            >
              <Linkedin size={20} />
              {t.contact.linkedin}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

