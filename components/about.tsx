'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-24 pb-24 w-full">
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
            {t.about.title}
          </motion.h2>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-4 space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-white/90 font-medium"
          >
            {t.about.intro}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-white/60 leading-relaxed"
          >
            {t.about.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {t.about.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-white/40 font-medium text-base flex-shrink-0">
                  {step.number}.
                </span>
                <p className="text-base text-white/60 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-base font-medium text-white/90">
              {t.about.challenges.title}
            </h4>
            <div className="space-y-4">
              {t.about.challenges.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-white/40 font-medium text-base flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-base text-white/60 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

