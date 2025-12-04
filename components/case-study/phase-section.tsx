import { Move, PhaseData, PhaseIntro, StrategyData, OutcomeBlock, MetricResult } from '@/lib/case-study-types';
import Image from 'next/image';

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
        <h3 className="text-2xl font-bold text-white mb-4">{intro.challengeTitle || intro.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {intro.problems.map((problem, i) => (
          <div 
            key={i}
            className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-colors flex flex-col"
          >
             <div className="w-full relative border-b border-white/5 bg-[#0B0C10] aspect-[16/9] flex items-center justify-center overflow-hidden">
                {problem.image ? (
                  <Image
                    src={problem.image}
                    alt={problem.imageAlt || problem.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white/20 font-mono text-sm">Visual Placeholder</span>
                )}
             </div>

            <div className="p-8 pt-6 flex-1 flex flex-col relative">
               <h4 className="text-xl font-bold text-white mb-4">{problem.title}</h4>
               
              {/* Problem content as bullets */}
              <ul className="space-y-2 mb-3">
                {problem.content.map((text, j) => (
                  <li key={j} className="text-white/70 leading-relaxed flex gap-2 items-start">
                    <span className="text-white/30 mt-2.5 block w-1 h-1 rounded-full bg-current shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

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

function StrategyBlock({ strategy }: { strategy: StrategyData }) {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Left: Header + Insight */}
         <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3 block">
                {strategy.title}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{strategy.subtitle}</h3>
            </div>
            
            <div className="h-full flex flex-col justify-start">
               <p className="text-white/70 leading-relaxed">
                 {strategy.userInsight.content}
               </p>
               {strategy.userInsight.highlight && (
                 <p className="text-xl text-white font-medium leading-relaxed text-indigo-300 mt-4">
                   {strategy.userInsight.highlight}
                 </p>
               )}
            </div>
         </div>

         {/* Right: Strategies */}
         <div className="lg:col-span-7">
            <div className="grid gap-4">
              {strategy.strategies.map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-sm shrink-0">
                     {i + 1}
                   </span>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.content}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}

function OutcomeCard({
  block,
  accent,
  className = '',
}: {
  block: OutcomeBlock;
  accent: 'indigo' | 'emerald' | 'neutral';
  className?: string;
}) {
  const accentClasses =
    accent === 'indigo'
      ? 'border-indigo-500/20 bg-indigo-500/5'
      : accent === 'emerald'
      ? 'border-emerald-500/20 bg-emerald-500/5'
      : 'border-white/10 bg-white/5';

  return (
    <div className={`p-8 rounded-2xl border ${accentClasses} backdrop-blur-sm ${className}`}>
      <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">
        {block.title}
      </h4>
      <ul className="space-y-3 text-white/80 leading-relaxed">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetricCard({ metric }: { metric: MetricResult }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <p className="text-sm text-white/60 mb-2">{metric.label}</p>
      <p className="text-3xl font-bold text-white mb-3">{metric.value}</p>
      <p className="text-sm text-white/50 leading-relaxed">{metric.description}</p>
    </div>
  );
}

function MoveVisual({ move }: { move: Move }) {
  if (!move.visual) {
    return <PlaceholderBox text={move.visualPlaceholderText} label="Design Solution" />;
  }

  if (move.visual.type === 'video') {
    return (
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/60">
        <video
          src={move.visual.src}
          poster={move.visual.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B0C10]">
      <Image
        src={move.visual.src}
        alt={move.visual.alt || move.title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function MoveSection({ move }: { move: Move }) {
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
            {move.bullets.map((item, i) => {
              const isIndented =
                typeof item === 'string' &&
                (item.startsWith('改版前') || item.startsWith('改版后'));

              return (
                <li
                  key={i}
                  className={`text-white/70 leading-relaxed flex gap-3 items-start ${
                    isIndented ? 'ml-6' : ''
                  }`}
                >
                  <span className="text-white/30 mt-2.5 block w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  <span className="flex-1">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Sticky Image */}
        <div className="lg:col-span-7">
           <div className="sticky top-32">
             <MoveVisual move={move} />
           </div>
        </div>
      </div>
    </div>
  );
}

export function PhaseSection({ data }: { data: PhaseData }) {
  return (
    <section id={`phase-${data.intro.phaseNumber}`} className="mb-40 pb-20 border-b border-white/5 scroll-mt-32">
      <PhaseHeader intro={data.intro} />
      <PhaseIntroBlock intro={data.intro} />
      
      {data.strategy && <StrategyBlock strategy={data.strategy} />}

      <div className="space-y-40">
        {data.moves.map((move) => (
          <MoveSection key={move.id} move={move} />
        ))}
      </div>

      {(data.resultMetrics || data.contributions) && (
        <div className="mt-24">
          <span className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3 block">
            结果与贡献
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {data.resultMetrics && (
              <div className="lg:col-span-4 flex flex-col gap-4 h-full">
                {data.resultMetrics.map((metric, i) => (
                  <MetricCard key={metric.label + i} metric={metric} />
                ))}
              </div>
            )}

            {data.contributions && (
              <div className={`${data.resultMetrics ? 'lg:col-span-8' : 'lg:col-span-12'} h-full`}>
                <OutcomeCard block={data.contributions} accent="neutral" className="h-full" />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


