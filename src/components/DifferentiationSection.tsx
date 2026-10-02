import React from 'react';
import { Target, Zap, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export const DifferentiationSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Accurate AI Waste Identification',
      description: 'Trained on actual consumer packaging found in Indian households and college canteens—not generic stock imagery.',
      icon: Target,
      highlight: 'Tailored training datasets'
    },
    {
      title: 'Simple and Fast User Experience',
      description: 'Under 2-second visual inference with zero typing, complex submenus, or confusing resin code dictionaries.',
      icon: Zap,
      highlight: 'Frictionless point-and-sort'
    },
    {
      title: 'Local Recycling Guidance and Support',
      description: 'Aligned with Indian municipal 3-way segregation rules (Wet Green, Dry Blue, Domestic Hazardous Red) and local scrap markets.',
      icon: MapPin,
      highlight: 'Local context & practical bins'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Competitive Advantage</span>
            <span aria-hidden="true">·</span>
            <span>Why We Are Different</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Simple technology. Practical impact.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            We are not building generic international waste databases. We focus relentlessly on closing the gap between complex domestic packaging and everyday household disposal habits in India.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="bg-[#fafaf9] rounded-2xl p-8 border border-neutral-200/80 shadow-2xs hover:border-emerald-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-700 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    {d.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {d.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-emerald-800">
                  {d.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Unfair Advantage Callout */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 border border-neutral-900 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Venture Unfair Advantage</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              “AI-based local waste classification combined with simple recycling guidance tailored to Indian users.”
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed pt-2 font-normal">
              Most solutions either serve industrial scrap aggregators or offer generic global guidelines. By combining lightweight computer vision with local municipal bin standards, we make sustainable segregation effortless for Indian families and campus communities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
