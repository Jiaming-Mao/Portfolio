'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { UnifiedProject } from '@/lib/case-study-types';

function ProjectItem({ project, index }: { project: UnifiedProject; index: number }) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isComingSoon = project.comingSoon;

  const projectContent = (
    <>
      <div 
        className={`relative aspect-[16/10] bg-white/5 rounded-lg overflow-hidden mb-6 border border-white/10 transition-all duration-500 ${isComingSoon ? '' : 'group-hover:border-white/20'}`}
        data-nav-theme={project.slug === 'subscription-redesign-zoom' ? 'light' : undefined}
      >
         {project.image ? (
           <>
             <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className={`object-cover transition-opacity duration-500 ${isComingSoon ? '' : 'group-hover:opacity-0'}`}
             />
             {!isComingSoon && project.video && (
               <video
                 ref={videoRef}
                 src={project.video}
                 muted
                 loop
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               />
             )}
             {isComingSoon && (
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                   {t.nav.comingSoon}
                 </span>
               </div>
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
        <h3 className={`text-xl font-medium text-white ${isComingSoon ? '' : 'group-hover:text-white/90'} transition-colors`}>{project.title}</h3>
        <p className="text-base text-white/60 max-w-xl">{project.description}</p>
      </div>
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group w-full ${isComingSoon ? 'opacity-75' : ''}`}
      onMouseEnter={() => {
        if (!isComingSoon && videoRef.current) {
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
        if (!isComingSoon && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {isComingSoon ? (
        <div className="block cursor-default">
          {projectContent}
        </div>
      ) : (
        <Link href={`/work/${project.slug}`} className="block cursor-pointer">
          {projectContent}
        </Link>
      )}
    </motion.div>
  );
}

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="pt-24 pb-24 w-full">
      <div className="space-y-32">
        {t.work.projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))} 
      </div>
    </section>
  );
}
