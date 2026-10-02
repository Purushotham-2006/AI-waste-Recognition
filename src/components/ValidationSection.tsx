import React from 'react';
import { Users, ThumbsUp, HelpCircle, Check, ArrowUpRight, MessageSquareQuote } from 'lucide-react';

export const ValidationSection: React.FC = () => {
  return (
    <section id="validation" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Early Prototype Validation</span>
            <span aria-hidden="true">·</span>
            <span>Real User Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Built with users, not assumptions.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Before writing production code, we tested our digital Figma app prototype directly with 10 real users across households and colleges. Honest feedback guides our development roadmap.
          </p>
        </div>

        {/* 3 Prominent Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-mono tabular-nums">
              10
            </div>
            <div className="text-sm font-bold text-neutral-800">
              Users Engaged
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Direct, hands-on user walkthroughs with working professionals, homemakers, and college students.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-emerald-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-4">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 font-mono tabular-nums">
              8
            </div>
            <div className="text-sm font-bold text-neutral-800">
              Positive Responses
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              8 out of 10 users validated that instant camera scanning immediately cleared their daily waste segregation doubt.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-mono tabular-nums">
              2
            </div>
            <div className="text-sm font-bold text-neutral-800">
              Neutral / Improvement Responses
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              Constructive feedback highlighting the need for wider packaging coverage, offline support, and local centers.
            </p>
          </div>
        </div>

        {/* Detailed Feedback Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* What users liked */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Key Strengths Validated
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1 font-display">
                What Early Users Appreciated
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Simple Interface',
                  desc: 'Clean, distraction-free screens that don’t overwhelm non-technical users.'
                },
                {
                  title: 'Quick Waste Identification',
                  desc: 'Fast detection that saves time compared to manual research or guessing.'
                },
                {
                  title: 'Clear Recycling Guidance',
                  desc: 'Unambiguous instructions explaining whether to rinse, flatten, or segregate.'
                },
                {
                  title: 'Easy Scanning',
                  desc: 'Point-and-snap smartphone interaction natural for everyday kitchen and desk use.'
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User requested improvements */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                User-Driven Roadmap
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1 font-display">
                Improvements Requested By Users
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Higher AI Accuracy',
                  action: 'Expanding dataset with multi-angle shots of deformed, crushed, and faded packaging.',
                  status: 'Active in Q1/Q2 roadmap'
                },
                {
                  title: 'More Waste Categories',
                  action: 'Adding e-waste variants, sanitary waste isolation, and regional multi-layered pouches.',
                  status: 'Dataset expansion scheduled'
                },
                {
                  title: 'Offline Access Mode',
                  action: 'Exploring quantized lightweight on-device models (TensorFlow Lite) for low-connectivity zones.',
                  status: 'Architectural evaluation'
                },
                {
                  title: 'Local Recycling Center Information',
                  action: 'Planning directory integrations for municipal dry resource collection centers and scrap dealers.',
                  status: 'Phase 4 partnership goal'
                }
              ].map((item) => (
                <div key={item.title} className="p-3.5 rounded-xl bg-[#fafaf9] border border-neutral-200/70 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-neutral-900">{item.title}</h4>
                    <span className="text-[10px] font-mono text-emerald-800">{item.status}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
