import { MetricsData } from '@/lib/case-study-types';

export function MetricsStrip({ data }: { data: MetricsData }) {
  return (
    <section className="mb-24">
      <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-8">
        {data.title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.metrics.map((metric, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-sm text-white/60 mb-2">{metric.label}</p>
            <p className="text-3xl font-bold text-white mb-3">{metric.value}</p>
            <p className="text-sm text-white/50 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


