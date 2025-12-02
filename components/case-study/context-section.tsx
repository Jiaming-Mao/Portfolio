import { ContextData } from '@/lib/case-study-types';

function ContextSummaryCard({ summary }: { summary: ContextData['summary'] }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-8">
      <div>
        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3">Scope</h4>
        <ul className="space-y-2">
          {summary.scopeItems.map((item, i) => (
            <li key={i} className="text-sm text-white/80 flex items-start gap-2">
              <span className="text-white/30 mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3">Team</h4>
        <ul className="space-y-2">
          {summary.teamItems.map((item, i) => (
            <li key={i} className="text-sm text-white/80 flex items-start gap-2">
              <span className="text-white/30 mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3">Constraints</h4>
        <ul className="space-y-2">
          {summary.constraintItems.map((item, i) => (
            <li key={i} className="text-sm text-white/80 flex items-start gap-2">
              <span className="text-white/30 mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ContextSection({ data }: { data: ContextData }) {
  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-bold text-white mb-8">{data.title}</h2>
          <div className="space-y-6">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-white/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <ContextSummaryCard summary={data.summary} />
        </div>
      </div>
    </section>
  );
}


