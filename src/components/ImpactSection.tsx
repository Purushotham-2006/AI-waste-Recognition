import React from 'react';
import { Leaf, Users, Coins, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mission Statement Box */}
        <div className="relative rounded-3xl bg-neutral-900 text-white p-8 sm:p-14 overflow-hidden shadow-xl">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Startup Mission</span>
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight text-white">
              “Our mission is to make waste segregation simple and accessible through AI-powered technology, helping households and communities recycle better, reduce pollution, and build cleaner, more sustainable environments.”
            </blockquote>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl">
              We believe lasting environmental progress happens when responsible action is made delightfully easy, fast, and understandable right in everyday living spaces.
            </p>
          </div>
        </div>

        {/* 3 Impact Pillars */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              <span>Three Dimensions of Value</span>
              <span aria-hidden="true">·</span>
              <span>Our Impact Pillars</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-display">
              Measurable change across environment, society, and economics.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Environmental */}
            <div className="bg-[#fafaf9] rounded-2xl p-8 border border-neutral-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Leaf className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-neutral-900 font-display">
                  Environmental Impact
                </h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Protecting local ecosystems and conserving virgin natural resources.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-200/60 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Drastic reduction in mixed municipal landfill waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Preventing dry recyclable contamination from food waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Diverting compostable organic scraps from methane-producing dumps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Safe domestic isolation of batteries and hazardous e-waste</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="bg-[#fafaf9] rounded-2xl p-8 border border-neutral-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-neutral-900 font-display">
                  Social Impact
                </h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Empowering households and students with habit-building clarity.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-200/60 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Increased grassroots awareness and proactive community pride</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Easier daily waste segregation without family disputes or doubt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>High educational value and environmental leadership for students</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Safer handling conditions for municipal frontline sanitation workers</span>
                </li>
              </ul>
            </div>

            {/* Economic */}
            <div className="bg-[#fafaf9] rounded-2xl p-8 border border-neutral-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Coins className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-neutral-900 font-display">
                  Economic Impact
                </h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Reinforcing the circular economy and secondary material recovery.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-200/60 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Higher yield recovery of clean polymers, aluminum, and fibre</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Strengthening informal scrap collector livelihoods with clean batches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Lowering municipal landfill hauling and remediation expenditure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Unlocking digital efficiency in urban Indian waste management</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
