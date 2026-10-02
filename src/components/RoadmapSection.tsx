import React from 'react';
import { ROADMAP_PHASES } from '../data/mockData';
import { CheckCircle2, Clock, Calendar, Users, Wallet, Cpu, Activity } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Execution Timeline</span>
            <span aria-hidden="true">·</span>
            <span>12-Month Venture Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            A disciplined, milestone-driven rollout.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            From our initial digital prototype to 1,000+ active subscribers and college partnerships, every phase has concrete deliverables, resource allocations, and verification goals.
          </p>
        </div>

        {/* 12-Month Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={phase.phase}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                  isFirst
                    ? 'bg-white border-emerald-300 ring-2 ring-emerald-500/10 shadow-sm'
                    : 'bg-white border-neutral-200/80 shadow-2xs'
                }`}
              >
                <div>
                  {/* Phase header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono text-neutral-900">
                      {phase.phase}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      phase.status === 'In Progress'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {phase.goal}
                  </h3>

                  {/* Resource badges */}
                  <div className="my-4 pt-3 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{phase.team}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Budget: <strong className="text-neutral-800 font-mono">{phase.funds}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{phase.resources}</span>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Deliverables:
                    </div>
                    {phase.milestones.map((ms, i) => (
                      <div key={i} className="text-xs text-neutral-600 flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400 font-mono">
                  {phase.timeline}
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Key Performance Indicators Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Measurement Architecture
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 font-display">
              Venture KPIs & Tracking Metrics
            </h3>
            <p className="text-xs text-neutral-500 font-normal">
              Planned governance indicators to measure user acquisition, AI precision, and verified environmental diversion (monitored in production).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Classification Accuracy', sub: 'Target &ge; 95% on primary packaging' },
              { label: 'Active Users (MAU)', sub: 'Household & campus daily scans' },
              { label: 'Total Waste Scans', sub: 'Cumulative images processed' },
              { label: 'Customer Acq. Cost (CAC)', sub: 'Organic college green club referral' },
              { label: 'Subscription Retention', sub: 'Annual renewal rate for ₹500 tier' },
              { label: 'Verified Recycling Actions', sub: 'Items logged to proper bin stream' },
              { label: 'Conversion Rate', sub: 'Free trial to annual subscriber' },
              { label: 'Campus Adoption Rate', sub: 'Student body participation' },
              { label: 'Dry Waste Diversion', sub: 'Estimated weight saved from landfills' },
              { label: 'Inference Latency', sub: 'Camera frame to guidance under 2s' },
            ].map((kpi) => (
              <div key={kpi.label} className="p-3.5 rounded-xl bg-[#fafaf9] border border-neutral-200/70">
                <div className="text-xs font-bold text-neutral-900">{kpi.label}</div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-tight">{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
