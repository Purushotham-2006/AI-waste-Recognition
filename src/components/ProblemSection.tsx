import React, { useState } from 'react';
import { 
  HelpCircle, 
  Trash2, 
  FileWarning, 
  TrendingDown, 
  ArrowRight, 
  UserCheck, 
  Compass, 
  Heart, 
  Share2,
  AlertTriangle
} from 'lucide-react';
import { PRIMARY_PERSONA } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  const [activePersonaTab, setActivePersonaTab] = useState<'profile' | 'jobs' | 'alternatives'>('profile');

  const problemCards = [
    {
      title: 'Not sure which bin?',
      description: 'Every product packaging features different polymers, symbols, and labels. Consumers are left guessing whether an item is recyclable dry waste or landfill trash.',
      icon: HelpCircle,
      impact: '70% of households report packaging confusion'
    },
    {
      title: 'Recyclables get mixed.',
      description: 'Without clean separation at the source, valuable dry materials get contaminated with wet food residues, ruining their recyclability before collection.',
      icon: Trash2,
      impact: 'Contamination spoils clean recycling batches'
    },
    {
      title: 'Disposal guidance is unclear.',
      description: 'Standard recycling codes (numbers 1 through 7) are cryptic for families and students. People lack immediate, plain-language disposal directions.',
      icon: FileWarning,
      impact: 'Lack of accessible instructions at the point of disposal'
    },
    {
      title: 'Valuable materials are lost.',
      description: 'Clean plastics, aluminum, cardboard, and metals end up overflowing into municipal landfills rather than feeding back into the circular manufacturing loop.',
      icon: TrendingDown,
      impact: 'Thousands of tons of raw materials wasted daily'
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>The Core Challenge</span>
            <span aria-hidden="true">·</span>
            <span>Why Current Segregation Fails</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Waste segregation shouldn't be confusing.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Households and colleges generate diverse types of waste every day. People genuinely want to segregate responsibly, but complex packaging labels, conflicting rules, and lack of clear guidance create hesitation.
          </p>
        </div>

        {/* 4 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 font-display">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-medium text-neutral-500">
                  {card.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner */}
        <div className="relative rounded-2xl bg-neutral-900 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-emerald-400">
              The Startup Solution
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display">
              “We're making the answer as simple as taking a photo.”
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              Instead of reading dense manuals or guessing codes, users simply point their smartphone camera. AI Waste Recognition provides instant clarity: is it recyclable, compostable, hazardous, or general waste, and what exact steps are needed.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { label: 'Simple', desc: 'Zero learning curve' },
                { label: 'Fast', desc: '< 2 second detection' },
                { label: 'Convenient', desc: 'Always in your pocket' },
                { label: 'Understandable', desc: 'Plain language tips' },
                { label: 'Smartphone', desc: 'No special hardware' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
                  <div className="text-sm font-semibold text-emerald-400">{item.label}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Empathy & Ground Research Spotlight */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-6">
            <div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Ground Research & Customer Persona
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1 font-display">
                Understanding Who We Build For
              </h3>
            </div>
            
            {/* Segmented control for tabs */}
            <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg">
              <button
                onClick={() => setActivePersonaTab('profile')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activePersonaTab === 'profile'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Primary Persona
              </button>
              <button
                onClick={() => setActivePersonaTab('jobs')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activePersonaTab === 'jobs'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Jobs-To-Be-Done
              </button>
              <button
                onClick={() => setActivePersonaTab('alternatives')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activePersonaTab === 'alternatives'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Current Alternatives
              </button>
            </div>
          </div>

          {/* Tab 1: Persona Details */}
          {activePersonaTab === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-[#fafaf9] rounded-xl p-6 border border-neutral-200/70 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 font-bold text-lg flex items-center justify-center border border-emerald-200">
                    KS
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900">{PRIMARY_PERSONA.name}</h4>
                    <p className="text-xs text-neutral-500">{PRIMARY_PERSONA.age} years old · {PRIMARY_PERSONA.location}</p>
                    <p className="text-xs font-medium text-emerald-800 mt-0.5">{PRIMARY_PERSONA.occupation}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-neutral-600 border-t border-neutral-200/60 pt-3">
                  <div>
                    <span className="font-semibold text-neutral-900">Education: </span>
                    <span>{PRIMARY_PERSONA.education}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Tech Comfort: </span>
                    <span>{PRIMARY_PERSONA.techComfort}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Interests: </span>
                    <span>{PRIMARY_PERSONA.interests.join(' · ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Platforms: </span>
                    <span>{PRIMARY_PERSONA.socialPlatforms.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-5">
                  <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                    Real Customer Interview Insight
                  </span>
                  <p className="text-neutral-800 text-base italic mt-1 font-serif">
                    {PRIMARY_PERSONA.keyQuote}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl border border-neutral-200/70 bg-[#fafaf9]">
                    <div className="font-semibold text-neutral-900 mb-1">Primary Segment (B2C)</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Urban and semi-urban households (ages 25–50) managing daily domestic cooking, delivery packaging, and plastic waste.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-200/70 bg-[#fafaf9]">
                    <div className="font-semibold text-neutral-900 mb-1">Secondary Segment (B2B)</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Schools, engineering colleges, and universities seeking structured campus segregation programs and student environmental awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Jobs To Be Done */}
          {activePersonaTab === 'jobs' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-neutral-200 bg-[#fafaf9] space-y-3">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Compass className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-bold text-neutral-900">Functional Needs</h4>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Properly separate household waste into compliant streams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Reduce dry waste accumulation and clutter in the home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Recycle reusable materials like boxes, jars, and bottles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Maintain a hygienic, odor-free living space</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-[#fafaf9] space-y-3">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Heart className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-bold text-neutral-900">Emotional Needs</h4>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Feel confident about making correct segregation choices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Reduce personal guilt related to plastic and landfill pollution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Feel proud of responsible family stewardship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Stay consistently motivated through visible impact progress</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-[#fafaf9] space-y-3">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Share2 className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-bold text-neutral-900">Social Needs</h4>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Be recognized as an environmentally responsible citizen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Set an inspiring example for children and neighbors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Encourage friends and campus peers to recycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Build a positive eco-friendly lifestyle identity</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Current Alternatives & Shortcomings */}
          {activePersonaTab === 'alternatives' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">The Reality of Current Alternatives: </span>
                  Users currently rely on manual bin guessing, informal scrap dealers, or manual web searches. These solutions are inconvenient, inconsistent, time-consuming, and fail to provide real-time guidance when standing in front of a bin.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                {[
                  { name: 'Manual Bin Guessing', issue: 'High error rate; mixed waste contaminates clean paper and plastics.' },
                  { name: 'Searching Online Articles', issue: 'Too slow and inconvenient during busy domestic chores or meal prep.' },
                  { name: 'Informal Scrap Dealers', issue: 'Only accept bulk clean metals/newspapers; ignore multi-layer packaging.' },
                  { name: 'Generic Municipal Bins', issue: 'No signage guidance; people dump everything into a single bag.' },
                  { name: 'Complex Recycling Symbols', issue: 'Resin codes (#1-#7) provide no actionable local disposal rules.' },
                  { name: 'AI Waste Recognition', issue: 'Instant camera scan -> exact bin -> simple preparation steps in < 2s.', highlight: true },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-xl border ${
                      item.highlight
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs'
                        : 'bg-white border-neutral-200 text-neutral-700'
                    }`}
                  >
                    <div className={`font-bold text-sm ${item.highlight ? 'text-emerald-800' : 'text-neutral-900'}`}>
                      {item.name}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed opacity-90">{item.issue}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
