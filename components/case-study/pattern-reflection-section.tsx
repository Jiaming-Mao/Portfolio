import { PatternLibraryData, ReflectionData } from '@/lib/case-study-types';

export function PatternLibrarySection({ data }: { data: PatternLibraryData }) {
  return (
    <section id="patterns" className="mb-40 pb-20 border-b border-white/5 scroll-mt-32">
      <h2 className="text-2xl font-bold text-white mb-6">{data.title}</h2>
      {data.intro && <p className="text-lg text-white/60 mb-12 max-w-2xl">{data.intro}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.patterns.map((pattern, i) => (
          <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-lg font-bold text-white mb-3">{pattern.title}</h3>
            <p className="text-sm text-white/60 mb-6 min-h-[40px]">{pattern.description}</p>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm text-white/30 uppercase tracking-wider mb-1">My Role</p>
              <p className="text-sm text-white/80">{pattern.myRole}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ReflectionSection({ data }: { data: ReflectionData }) {
  return (
    <section id="reflection" className="mb-32 pb-20 border-b border-white/5 scroll-mt-32">
      <h2 className="text-2xl font-bold text-white mb-12">{data.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            What I Learned
          </h3>
          <ul className="space-y-4">
            {data.learnings.map((item, i) => (
              <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                <span className="text-white/20 font-mono">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            How I Grew
          </h3>
          <ul className="space-y-4">
            {data.growth.map((item, i) => (
              <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                <span className="text-white/20 font-mono">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


