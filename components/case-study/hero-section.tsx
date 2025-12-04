import { HeroData } from '@/lib/case-study-types';
import { motion } from 'framer-motion';

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
              {data.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {data.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {data.meta.map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-white/40 mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-0 overflow-hidden relative ${data.heroVideo ? 'w-full' : 'aspect-[4/3]'}`}
          >
            {data.heroVideo ? (
              <video
                src={data.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            ) : (
              <p className="text-white/30 text-center font-mono text-sm p-8">
                {data.heroVisualPlaceholder}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


