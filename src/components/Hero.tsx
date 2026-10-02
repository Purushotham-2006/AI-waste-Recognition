import React, { useState } from 'react';
import { ArrowRight, Scan, Sparkles, CheckCircle2, ChevronRight, Recycle } from 'lucide-react';

interface HeroProps {
  onOpenScanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScanner }) => {
  const [activeTab, setActiveTab] = useState<'bottle' | 'cardboard' | 'apple'>('bottle');

  const demoItems = {
    bottle: {
      name: 'Plastic Water Bottle',
      category: 'Recyclable Dry Waste',
      confidence: '96% confidence',
      stream: 'Blue Bin · Dry Recyclable',
      action: 'Empty leftover liquid, flatten bottle, and place in dry recyclables.',
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    cardboard: {
      name: 'Shipping Cardboard Box',
      category: 'Recyclable Paper Stream',
      confidence: '94% confidence',
      stream: 'Blue Bin · Paper & Pulp',
      action: 'Remove packaging tape, flatten clean carton, keep completely dry.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    apple: {
      name: 'Fruit Peels & Kitchen Waste',
      category: 'Organic Wet Waste',
      confidence: '98% confidence',
      stream: 'Green Bin · Compostable',
      action: 'Separate from plastic bags. Deposit in organic compost or wet waste bin.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    }
  };

  const current = demoItems[activeTab];

  return (
    <section className="relative pt-30 pb-20 md:pt-38 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f5f5f4]/80 via-[#fafaf9] to-[#fafaf9]">
      {/* Subtle organic ambient gradient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-200/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Context line with clean typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              <span>AI Environmental Technology</span>
              <span aria-hidden="true">·</span>
              <span>Household & Campus Solution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.08] text-balance font-display">
              Scan Waste.<br />
              <span className="text-emerald-700">Sort Right.</span><br />
              Save the Planet.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-normal">
              AI-powered waste recognition that helps households and colleges identify, segregate, recycle, and dispose of waste correctly in seconds.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenScanner}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-md group whitespace-nowrap cursor-pointer"
              >
                <span>Try AI Waste Recognition</span>
                <ArrowRight className="ml-2 w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors whitespace-nowrap shadow-2xs cursor-pointer"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Microcopy & Trust signal */}
            <div className="pt-4 border-t border-neutral-200/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero extra hardware needed</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Works on any smartphone camera</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tailored for Indian segregation rules</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual - Smartphone Scanner Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer phone frame */}
              <div className="relative bg-neutral-950 rounded-[44px] p-3 shadow-2xl ring-1 ring-neutral-900/10">
                {/* Speaker & camera notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 mr-2" />
                  <div className="w-10 h-1 bg-neutral-800 rounded-full" />
                </div>

                {/* Phone screen container */}
                <div className="relative bg-neutral-900 rounded-[36px] overflow-hidden text-white aspect-[9/18.5] flex flex-col justify-between p-5 pt-10">
                  
                  {/* Top app bar */}
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-semibold text-white tracking-wide">AI SCANNER</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Feed
                    </span>
                  </div>

                  {/* Camera Viewfinder View */}
                  <div className="relative flex-1 my-3 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 overflow-hidden flex flex-col items-center justify-center p-4">
                    {/* Viewfinder corner brackets */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

                    {/* Laser scan line animation */}
                    <div className="absolute inset-x-4 top-1/3 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399] animate-pulse" />

                    {/* Central item graphic representation */}
                    <div className="relative flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-28 rounded-xl bg-neutral-900/60 border border-neutral-600/40 flex items-center justify-center mb-2 shadow-inner">
                        {activeTab === 'bottle' && (
                          <svg className="w-12 h-20 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="9" y="2" width="6" height="3" rx="1" />
                            <path d="M8 5h8l1 3v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l1-3z" />
                            <line x1="8" y1="12" x2="16" y2="12" strokeDasharray="2 2" />
                            <line x1="8" y1="16" x2="16" y2="16" strokeDasharray="2 2" />
                          </svg>
                        )}
                        {activeTab === 'cardboard' && (
                          <svg className="w-16 h-16 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                            <path d="m3.3 7 8.7 5 8.7-5" />
                            <path d="M12 22V12" />
                          </svg>
                        )}
                        {activeTab === 'apple' && (
                          <svg className="w-14 h-14 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 4c.3 0 1.2-.4 1.5-1.5" />
                            <path d="M12 4c-3.5 0-7 2.5-7 7.5 0 5 3.5 8.5 7 8.5s7-3.5 7-8.5c0-5-3.5-7.5-7-7.5Z" />
                            <path d="M12 4v4" />
                          </svg>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-300 font-mono tracking-tight bg-neutral-900/80 px-2 py-0.5 rounded">
                        Scanning: Bounding Box 88%
                      </span>
                    </div>

                    {/* Interactive item switcher tabs */}
                    <div className="absolute bottom-2 flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-lg border border-neutral-700/50">
                      <button
                        onClick={() => setActiveTab('bottle')}
                        className={`text-[10px] px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                          activeTab === 'bottle' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Bottle
                      </button>
                      <button
                        onClick={() => setActiveTab('cardboard')}
                        className={`text-[10px] px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                          activeTab === 'cardboard' ? 'bg-amber-600 text-white' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Cardboard
                      </button>
                      <button
                        onClick={() => setActiveTab('apple')}
                        className={`text-[10px] px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                          activeTab === 'apple' ? 'bg-emerald-600 text-white' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Organic
                      </button>
                    </div>
                  </div>

                  {/* Recognition Result Card */}
                  <div className="bg-neutral-800 rounded-2xl p-3.5 border border-neutral-700/80 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Identified</span>
                        </div>
                        <h4 className="text-sm font-bold text-white leading-tight">{current.name}</h4>
                      </div>
                      <span className="text-[10px] text-neutral-400 font-mono">{current.confidence}</span>
                    </div>

                    <div className="text-xs text-neutral-300 border-t border-neutral-700/50 pt-1.5 space-y-1">
                      <div className="text-emerald-300 font-medium text-[11px] flex items-center gap-1">
                        <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Stream: {current.stream}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {current.action}
                      </p>
                    </div>

                    <button
                      onClick={onOpenScanner}
                      className="w-full mt-1 py-1.5 text-center text-xs font-semibold text-neutral-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Open Full Interactive Demo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Decorative side accent note */}
              <div className="hidden sm:block absolute -bottom-5 -right-6 bg-white p-3 rounded-xl border border-neutral-200 shadow-lg max-w-[190px]">
                <div className="text-[11px] font-semibold text-neutral-900">Instant AI Inference</div>
                <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                  Identifies waste category & tells you the exact bin stream in under 2 seconds.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
