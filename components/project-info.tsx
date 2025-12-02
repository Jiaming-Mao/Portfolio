'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/dictionaries';
import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('top');

  // Derive sections from detailed data if available, otherwise fallback to legacy sections
  // We prepend a generic "Overview" item that scrolls to top
  const baseSections = project.details 
    ? [
        ...(project.details.phases?.map(phase => ({
            id: `phase-${phase.intro.phaseNumber}`,
            title: phase.intro.phaseLabel
        })) || []),
        { id: 'patterns', title: project.details.patterns.title }, 
        { id: 'reflection', title: project.details.reflection.title } 
      ]
    : project.sections.filter(s => s.id !== 'overview'); // Remove legacy "Overview" section to avoid duplicates

  const sections = [
    { id: 'top', title: t.nav.overview },
    ...baseSections
  ];

  useEffect(() => {
    const handleScroll = () => {
      // If we're near the top, force "top" as active
      if (window.scrollY < 100) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        // Only update from observer if we're not at the very top (to avoid fighting)
        // or if the entry is actually intersecting
        if (window.scrollY >= 100) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      // Skip observing 'top' since it's handled by scroll listener
      if (section.id === 'top') return;
      
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-12 md:top-24 flex flex-col gap-8 h-fit">
       {/* Logo or Back Home (Optional) */}
       <div className="mb-4">
        <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={200} 
            height={58}
            className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
       </div>

      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-medium text-white mb-2">{project.title}</h1>
        </motion.div>

        {/* Table of Contents */}
        {sections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left text-sm py-1 transition-colors ${
                  activeSection === section.id
                    ? 'text-white font-medium'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {section.title}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
