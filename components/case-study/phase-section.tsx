import { Move, PhaseData, PhaseIntro } from '@/lib/case-study-types';

function PhaseHeader({ intro }: { intro: PhaseIntro }) {
  return (
    <div className="mb-16 border-b border-white/10 pb-8">
      <div className="flex items-baseline gap-4">
        <span className="text-8xl font-bold text-white/5 font-mono">0{intro.phaseNumber}</span>
        <div>
          <span className="text-sm font-medium text-white/40 uppercase tracking-wider block mb-2">
            Phase {intro.phaseNumber} · {intro.phaseLabel}
          </span>
          <h2 className="text-3xl font-bold text-white">{intro.title}</h2>
        </div>
      </div>
    </div>
  );
}

function PlaceholderBox({ text, label }: { text: string; label?: string }) {
  return (
    <div className="w-full h-full min-h-[300px] bg-white/5 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center p-8 text-center relative">
      {label && (
        <span className="absolute top-4 left-4 text-sm font-mono text-white/30 uppercase border border-white/10 px-2 py-1 rounded">
          {label}
        </span>
      )}
      <p className="text-sm text-white/40 font-mono max-w-xs">{text}</p>
    </div>
  );
}

function PhaseIntroBlock({ intro }: { intro: PhaseIntro }) {
  return (
    <div className="mb-32">
      <div className="max-w-3xl mb-12">
        <span className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3 block">
          核心挑战
        </span>
        <h3 className="text-2xl font-bold text-white mb-4">{intro.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {intro.problems.map((problem, i) => (
          <div 
            key={i}
            className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-colors flex flex-col"
          >
             {/* Placeholder Image Area - simulating the lifecycle card style */}
             <div className="w-full relative border-b border-white/5 bg-[#0B0C10] aspect-[16/9] flex items-center justify-center">
                <span className="text-white/20 font-mono text-sm">Visual Placeholder</span>
             </div>

            <div className="p-8 pt-6 flex-1 flex flex-col relative">
               <h4 className="text-xl font-bold text-white mb-4">{problem.title}</h4>
               
               {/* First item as intro text */}
               {problem.content.length > 0 && (
                 <p className="text-white/70 leading-relaxed mb-3">
                   {problem.content[0]}
                 </p>
               )}

               {/* Remaining items as bullets */}
               {problem.content.length > 1 && (
                 <ul className="space-y-2 mb-3">
                   {problem.content.slice(1).map((text, j) => (
                     <li key={j} className="text-white/70 leading-relaxed flex gap-2 items-start">
                       <span className="text-white/30 mt-2.5 block w-1 h-1 rounded-full bg-current shrink-0" />
                       <span>{text}</span>
                     </li>
                   ))}
                 </ul>
               )}

               {problem.quote && (
                 <blockquote className="italic text-white/50 border-l-2 border-indigo-500/50 pl-4 py-1 text-sm mt-1">
                   "{problem.quote}"
                 </blockquote>
               )}
            </div>
          </div>
        ))}
      </div>
      
      {intro.userQuote && (
        <div className="p-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
          <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">
            {intro.conclusionLabel || 'Conclusion'}
          </h4>
          <p className="text-lg text-white/80 font-medium leading-relaxed">
            "{intro.userQuote}"
          </p>
        </div>
      )}
    </div>
  );
}

function MoveBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="text-sm font-bold text-white/30 uppercase tracking-wider mb-3">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-white/70 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MoveSection({ move }: { move: Move }) {
  // Merge all content into a single list for display
  const allContent = [
    ...move.whatINoticed,
    ...move.whatIDecided,
    ...move.howIDroveIt
  ];

  return (
    <div className="mb-32 scroll-mt-32" id={move.id}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Header + Content */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="mb-8">
            <span className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3 block">
              {move.eyebrow}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">{move.title}</h3>
          </div>

          <ul className="space-y-4">
            {allContent.map((item, i) => (
              <li key={i} className="text-white/70 leading-relaxed flex gap-3 items-start">
                 <span className="text-white/30 mt-2.5 block w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                 <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Sticky Image */}
        <div className="lg:col-span-7">
           <div className="sticky top-32">
             <PlaceholderBox text={move.visualPlaceholderText} label="Design Solution" />
           </div>
        </div>
      </div>
    </div>
  );
}

export function PhaseSection({ data }: { data: PhaseData }) {
  return (
    <section id={`phase-${data.intro.phaseNumber}`} className="mb-40 pt-20 border-t border-white/5 scroll-mt-32">
      <PhaseHeader intro={data.intro} />
      <PhaseIntroBlock intro={data.intro} />
      
      <div className="space-y-40">
        {data.moves.map((move) => (
          <MoveSection key={move.id} move={move} />
        ))}
      </div>
    </section>
  );
}


