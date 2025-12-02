'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { GlassEffect } from './glass-effect';
import { GlassFilter } from './glass-filter';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // 'dark' means navbar is over dark content
  const { scrollY } = useScroll();
  const visibleSections = useRef(new Set<Element>());

  // Intersection Observer for Theme Switching
  useEffect(() => {
    // Small delay to ensure DOM is ready (workaround for client-side rendering race)
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.current.add(entry.target);
            } else {
              visibleSections.current.delete(entry.target);
            }
          });

          // Check if any visible section has theme="light"
          const hasLight = Array.from(visibleSections.current).some(
            (el) => (el as HTMLElement).dataset.navTheme === 'light'
          );

          setTheme(hasLight ? 'light' : 'dark');
        },
        {
          // Root margin to define the detection zone at the bottom of the viewport
          // We want to know what is under the navbar (which is at bottom: 32px, height ~60px)
          // So we look at the bottom ~10% (or specific pixel values)
          rootMargin: "-90% 0px 0px 0px", 
          threshold: 0,
        }
      );

      const sections = document.querySelectorAll('[data-nav-theme]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on route change

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Check if at the bottom (with a small buffer)
    const isBottom = latest >= maxScroll - 50;

    if (isBottom) {
        setHidden(false);
    } else if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isProjectPage = pathname?.startsWith('/work/');

  // Dynamic styles based on theme
  // If theme is 'light' (content is light), we want dark text
  // If theme is 'dark' (content is dark), we want white text
  const textColorClass = theme === 'light' ? 'text-black/60 hover:text-black hover:bg-black/10' : 'text-white/60 hover:text-white hover:bg-white/10';
  const dividerColorClass = theme === 'light' ? 'bg-black/10' : 'bg-white/10';

  // Navigation Items Logic
  const navItems = isProjectPage 
    ? [
        { id: 'home', label: t.nav.home, action: () => router.push('/') },
        { id: 'prev', label: t.nav.prev, action: () => handleProjectNav('prev') },
        { id: 'next', label: t.nav.next, action: () => handleProjectNav('next') },
      ]
    : [
        { id: 'work', label: t.nav.work, action: () => scrollToSection('work') },
        { id: 'about', label: t.nav.about, action: () => scrollToSection('about') },
        { id: 'contact', label: t.nav.contact, action: () => scrollToSection('contact') },
      ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectNav = (direction: 'prev' | 'next') => {
      const currentSlug = pathname?.split('/').pop();
      const projects = t.work.projects;
      const currentIndex = projects.findIndex(p => p.slug === currentSlug);
      
      if (currentIndex === -1) return;

      let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      
      if (nextIndex >= projects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      
      const nextSlug = projects[nextIndex].slug;
      router.push(`/work/${nextSlug}`);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <GlassFilter />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: hidden ? 150 : 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassEffect className="rounded-full p-2" theme={theme}>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${textColorClass}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className={`w-px h-6 mx-1 transition-colors duration-300 ${dividerColorClass}`} />
            
            <button
              onClick={toggleLocale}
              className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2 ${textColorClass}`}
            >
              <Globe size={14} />
              <span className="uppercase">{locale}</span>
            </button>
          </div>
        </GlassEffect>
      </motion.div>
    </div>
  );
}
