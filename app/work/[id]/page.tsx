'use client';

import { useLanguage } from '@/lib/i18n';
import { ProjectInfo } from '@/components/project-info';
import { ProjectContent } from '@/components/project-content';
import { Navbar } from '@/components/navbar';
import { useParams } from 'next/navigation';
import { HeroSection } from '@/components/case-study/hero-section';
import { MetricsStrip } from '@/components/case-study/metrics-strip';
import { ContextSection } from '@/components/case-study/context-section';
import { LifecycleOverviewSection } from '@/components/case-study/lifecycle-overview-section';
import { PhaseSection } from '@/components/case-study/phase-section';
import { PatternLibrarySection, ReflectionSection } from '@/components/case-study/pattern-reflection-section';

export default function ProjectPage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const id = params?.id as string;
  
  // Find project by slug
  const project = t.work.projects.find((p) => p.slug === id);

  // Check if this is the Zoom project (or uses the template)
  // For demo purposes, we'll use the new template if the slug matches 'subscription-redesign-zoom' (or any you prefer)
  // In a real app, you might have a field in the project data like `template: 'zoom-case-study'`
  const isCaseStudyTemplate = id === 'subscription-redesign-zoom' && project?.details;
  const caseStudyData = project?.details;

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-white/50">Project not found</div>;
  }

  // Handle coming soon projects
  if (project.comingSoon) {
    return (
      <main className="min-h-screen relative selection:bg-white/20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
          {/* Left Column - Sticky Info */}
          <div className="md:col-span-1">
            <ProjectInfo project={project} />
          </div>

          {/* Right Column - Coming Soon Message */}
          <div className="md:col-span-5 pt-24 pb-32 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-md">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                {t.nav.comingSoon}
              </div>
              <h1 className="text-4xl font-medium text-white">{project.title}</h1>
              <p className="text-lg text-white/60">{project.description}</p>
            </div>
          </div>
        </div>
        
        <Navbar />
      </main>
    );
  }

  return (
    <main className="min-h-screen relative selection:bg-white/20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
        {/* Left Column - Sticky Info & TOC */}
        <div className="md:col-span-1">
          <ProjectInfo project={project} />
        </div>

        {/* Right Column - Content Feed */}
        <div className="md:col-span-5 pt-24 pb-32">
          {isCaseStudyTemplate && caseStudyData ? (
             <div className="flex flex-col gap-12">
                <HeroSection data={caseStudyData.hero} />
                <MetricsStrip data={caseStudyData.metrics} />
                <LifecycleOverviewSection data={caseStudyData.lifecycle} />
                
                {caseStudyData.phases.map((phase: any, i: number) => (
                  <PhaseSection key={i} data={phase} />
                ))}
                
                <PatternLibrarySection data={caseStudyData.patterns} />
                <ReflectionSection data={caseStudyData.reflection} />
             </div>
          ) : (
             <ProjectContent project={project} />
          )}
        </div>
      </div>
      
      <Navbar />
    </main>
  );
}
