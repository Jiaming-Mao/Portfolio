'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="pt-24 pb-24 w-full">
      <div className="space-y-32">
        {t.work.projects.map((project, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const videoRef = useRef<HTMLVideoElement>(null);

          return (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group w-full"
            onMouseEnter={() => {
              if (videoRef.current) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                  playPromise.catch((error) => {
                    if (error.name !== 'AbortError') {
                      console.error('Video playback failed:', error);
                    }
                  });
                }
              }
            }}
            onMouseLeave={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }}
          >
            <Link href={`/work/${project.slug}`} className="block cursor-pointer">
              <div 
                className="relative aspect-[16/10] bg-white/5 rounded-lg overflow-hidden mb-6 border border-white/10 transition-all duration-500 group-hover:border-white/20"
                data-nav-theme={project.slug === 'subscription-redesign-zoom' ? 'light' : undefined}
              >
                 {project.image ? (
                   <>
                     <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                     />
                     {project.video && (
                       <video
                         ref={videoRef}
                         src={project.video}
                         muted
                         loop
                         playsInline
                         className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       />
                     )}
                   </>
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
                     <div className="absolute inset-0 flex items-center justify-center text-white/20">
                       <span className="text-4xl font-thin opacity-20">PROJECT {index + 1}</span>
                     </div>
                   </>
                 )}
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">{project.title}</h3>
                <p className="text-base text-white/60 max-w-xl">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        )})} 
      </div>
    </section>
  );
}
