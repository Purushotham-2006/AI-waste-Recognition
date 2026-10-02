import React from 'react';
import { COMPETITORS } from '../data/mockData';

export const CompetitiveLandscape: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Market Context</span>
            <span aria-hidden="true">·</span>
            <span>Competitive Landscape</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            A balanced look at current market solutions.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Waste technology is evolving rapidly across diverse sectors. Here is an objective comparison of existing platforms and where AI Waste Recognition fits within the ecosystem.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-50/90 border-b border-neutral-200 text-neutral-600 font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6 text-xs">Solution</th>
                  <th className="py-4 px-6 text-xs">Market Type</th>
                  <th className="py-4 px-6 text-xs">Core Strength</th>
                  <th className="py-4 px-6 text-xs">Key Limitation / Focus Area</th>
                  <th className="py-4 px-6 text-xs">Strategic Positioning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {COMPETITORS.map((comp) => {
                  const isOurApp = comp.name === 'AI Waste Recognition';
                  return (
                    <tr
                      key={comp.name}
                      className={isOurApp ? 'bg-emerald-50/50 font-medium' : 'hover:bg-neutral-50/60 transition-colors'}
                    >
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                          {isOurApp && (
                            <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                          )}
                          <span>{comp.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-neutral-600">
                        <span className="text-xs">
                          {comp.type} Solution
                        </span>
                      </td>
                      <td className="py-4 px-6 text-neutral-700 min-w-[200px]">
                        {comp.strength}
                      </td>
                      <td className="py-4 px-6 text-neutral-500 min-w-[220px]">
                        {comp.limitation}
                      </td>
                      <td className="py-4 px-6 text-neutral-800 min-w-[240px]">
                        {comp.differentiator}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Objective conclusion note */}
        <div className="p-5 rounded-xl bg-white border border-neutral-200/80 text-xs text-neutral-600 leading-relaxed">
          <strong className="text-neutral-900">Summary Takeaway: </strong>
          While industrial aggregators and hardware automated bins address B2B waste streams, everyday households and colleges still lack an accessible, smartphone-native guide tailored for local Indian segregation. That is the exact gap AI Waste Recognition addresses.
        </div>

      </div>
    </section>
  );
};
