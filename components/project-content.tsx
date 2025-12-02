'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/dictionaries';

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="flex flex-col gap-24 pt-24 pb-32">
       {/* Hero Image */}
       <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10"
       >
          {/* Placeholder for main project image */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
             <span className="text-lg uppercase tracking-widest">Project Hero Image</span>
          </div>
       </motion.div>

       {/* Sections */}
      {project.sections.map((section) => (
        <motion.section 
          key={section.id} 
          id={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             {/* Section Content - Mixed Grid Layout */}
             <div className="lg:col-span-12">
                <h2 className="text-2xl font-semibold text-white mb-6">{section.title}</h2>
             </div>
             
             <div className="lg:col-span-7">
                <p className="text-lg text-white/70 leading-relaxed">
                   {section.content}
                   <br/><br/>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
             </div>
             
             {/* Section specific imagery (Placeholder) */}
             <div className="lg:col-span-5">
                 <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white/10">
                    <span className="text-sm">Visual Asset</span>
                 </div>
             </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

