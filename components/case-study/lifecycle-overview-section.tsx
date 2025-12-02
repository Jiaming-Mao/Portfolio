import { LifecycleOverviewData } from '@/lib/case-study-types';
import Image from 'next/image';

export function LifecycleOverviewSection({ data }: { data: LifecycleOverviewData }) {
  return (
    <section className="mb-32">
      <h2 className="text-2xl font-bold text-white mb-12">{data.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.phases.map((phase) => (
          <div 
            key={phase.phaseNumber}
            className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-colors flex flex-col"
          >
            {/* Image Block */}
            {phase.image && (
              <div className="w-full relative border-b border-white/5 bg-[#0B0C10]">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            )}

            <div className="p-8 pt-6 flex-1 flex flex-col relative">
               <div className="absolute top-4 right-4 opacity-10 font-bold text-6xl leading-none select-none pointer-events-none">
                  {phase.phaseNumber}
               </div>
               
               <h3 className="text-xl font-bold text-white mb-3 mt-2">{phase.title}</h3>
               <p className="text-white/60 leading-relaxed">
                 {phase.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


