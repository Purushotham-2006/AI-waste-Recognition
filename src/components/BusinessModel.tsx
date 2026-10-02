import React, { useState } from 'react';
import { Check, ShieldCheck, HelpCircle, TrendingUp, DollarSign, Building2, User, ArrowRight } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const [financialScenario, setFinancialScenario] = useState<'venture' | 'planningTool'>('venture');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Sustainable Monetization</span>
            <span aria-hidden="true">·</span>
            <span>Business Model & Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Accessible pricing for homes. Scalable SaaS for campuses.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            A simple, transparent subscription model engineered to keep individual household costs at less than ₹42 per month while providing educational institutions with robust campus waste segregation tooling.
          </p>
        </div>

        {/* Pricing Cards: B2C vs B2B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* B2C Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-2xs flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>Household B2C Tier</span>
                </span>
                <span className="text-xs font-medium text-emerald-800">
                  Primary Customer Segment
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                Annual Household Subscription
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                Designed for urban and semi-urban households managing daily domestic waste, online packaging, and kitchen segregation.
              </p>

              <div className="my-6 pt-6 border-t border-neutral-100 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-display">
                  ₹500
                </span>
                <span className="text-sm font-medium text-neutral-500">
                  / year
                </span>
                <span className="text-xs text-emerald-700 ml-2 font-medium">
                  (~₹42 / month)
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Unlimited smartphone camera waste scanning',
                  'Instant dry, wet, and hazardous stream identification',
                  'Practical cleaning, rinsing, and flattening tips',
                  'Personal waste diversion tracker & family streak log',
                  'Regular model updates for newly released brand packaging',
                  'Zero annoying pop-up advertisements',
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a
                href="#scanner-demo"
                className="w-full py-3 px-4 rounded-xl bg-neutral-900 text-white font-semibold text-xs text-center block hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
              >
                Try Interactive Demo First
              </a>
              <div className="text-[11px] text-center text-neutral-400 mt-2">
                Distribution planned via Google Play, App Store & Web
              </div>
            </div>
          </div>

          {/* B2B College Tier Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200/90 shadow-2xs flex flex-col justify-between relative ring-1 ring-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>College & Institutional B2B</span>
                </span>
                <span className="text-xs font-semibold text-emerald-800">
                  Campus SaaS Model
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                Campus Sustainability License
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                Structured for engineering colleges, universities, and school complexes aiming to build clean, student-driven zero-waste campuses.
              </p>

              <div className="my-6 pt-6 border-t border-neutral-100 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-display">
                  ₹10,000
                </span>
                <span className="text-sm font-medium text-neutral-500">
                  / year per college
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Campus-wide student & faculty mobile scanner access',
                  'Dedicated canteen, hostel & lab waste segregation modules',
                  'Administrative dashboard with aggregate campus diversion analytics',
                  'Student green club & NSS chapter orientation workshop materials',
                  'Customized signage assets for campus waste disposal stations',
                  'Periodic campus environmental impact reports',
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a
                href="#partnerships"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-xs text-center block hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
              >
                Inquire About Campus Partnership
              </a>
              <div className="text-[11px] text-center text-neutral-400 mt-2">
                Pilot partnerships currently onboarding for 2026 academic term
              </div>
            </div>
          </div>

        </div>

        {/* Growth Outlook & Financial Planning Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-6">
            <div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Financial Planning & Projections
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1 font-display">
                Growth Outlook & Financial Scenarios
              </h3>
              <p className="text-xs text-neutral-500 mt-1 font-normal">
                Assumptions: Currency in INR · Unit: ₹500/yr subscription · Initial monthly subs: 100 · Monthly sales growth: 10%
              </p>
            </div>

            {/* Scenario toggle */}
            <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg shrink-0">
              <button
                onClick={() => setFinancialScenario('venture')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  financialScenario === 'venture'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Venture Projection Assumptions
              </button>
              <button
                onClick={() => setFinancialScenario('planningTool')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  financialScenario === 'planningTool'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Financial Planning Tool Scenario
              </button>
            </div>
          </div>

          {financialScenario === 'venture' ? (
            /* Venture Projection Assumptions: 3-Year Outlook */
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                <span>Venture Projection Assumptions (3-Year Phased Horizon)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    year: 'Year 1',
                    revenue: '₹6,00,000',
                    expenses: '₹4,25,000',
                    profit: '₹1,75,000',
                    margin: '29.2% Net Margin',
                    focus: 'Prototype refinement, 100 monthly base, initial 5 college partnerships'
                  },
                  {
                    year: 'Year 2',
                    revenue: '₹9,00,000',
                    expenses: '₹5,52,500',
                    profit: '₹3,47,500',
                    margin: '38.6% Net Margin',
                    focus: 'Regional expansion across Andhra Pradesh, dataset expansion, app store traction'
                  },
                  {
                    year: 'Year 3',
                    revenue: '₹14,40,000',
                    expenses: '₹7,73,500',
                    profit: '₹6,66,500',
                    margin: '46.3% Net Margin',
                    focus: 'Multi-city college adoption, municipal data integrations, team scaling'
                  }
                ].map((item) => (
                  <div key={item.year} className="bg-[#fafaf9] rounded-2xl p-6 border border-neutral-200/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-neutral-900 font-display">{item.year}</span>
                      <span className="text-[11px] font-semibold text-emerald-800">{item.margin}</span>
                    </div>

                    <div className="space-y-2 text-xs border-y border-neutral-200/60 py-3">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Projected Revenue:</span>
                        <span className="font-bold text-neutral-900 font-mono tabular-nums">{item.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Projected Expenses:</span>
                        <span className="font-mono text-neutral-600 tabular-nums">{item.expenses}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-neutral-100">
                        <span className="font-semibold text-emerald-900">Projected Profit:</span>
                        <span className="font-bold text-emerald-700 font-mono tabular-nums">{item.profit}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-neutral-500 leading-tight">
                      {item.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Financial Planning Tool Scenario */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                <span className="font-bold">Scenario Note: </span>
                These figures represent our venture planning-tool simulation scenario (incorporating full-capacity conversion assumptions), kept distinct from our baseline venture projection assumptions above.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#fafaf9] p-5 rounded-2xl border border-neutral-200">
                  <div className="text-xs text-neutral-500">Projected Year 1 Revenue</div>
                  <div className="text-2xl font-extrabold text-neutral-900 font-mono tabular-nums mt-1">
                    ₹10,28,209
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Simulation Run</div>
                </div>

                <div className="bg-[#fafaf9] p-5 rounded-2xl border border-neutral-200">
                  <div className="text-xs text-neutral-500">Expected Gross Profit</div>
                  <div className="text-2xl font-extrabold text-neutral-900 font-mono tabular-nums mt-1">
                    ₹9,23,784
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">89.8% Gross Margin</div>
                </div>

                <div className="bg-[#fafaf9] p-5 rounded-2xl border border-neutral-200">
                  <div className="text-xs text-neutral-500">Projected Net Profit</div>
                  <div className="text-2xl font-extrabold text-emerald-700 font-mono tabular-nums mt-1">
                    ₹3,82,786
                  </div>
                  <div className="text-[11px] text-emerald-600 mt-1">37.2% Net Margin</div>
                </div>

                <div className="bg-[#fafaf9] p-5 rounded-2xl border border-neutral-200">
                  <div className="text-xs text-neutral-500">Expected Break-Even</div>
                  <div className="text-2xl font-extrabold text-neutral-900 font-display mt-1">
                    Month 1
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Low fixed capital model</div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 text-[11px] text-neutral-400 text-center font-normal">
            * All figures are projected estimates for planning and venture evaluation purposes based on initial prototype unit economics.
          </div>
        </div>

      </div>
    </section>
  );
};
