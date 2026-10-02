import React from 'react';
import { Camera, Cpu, Compass, CheckCheck, ArrowRight, Smartphone, Eye, Sparkles, Activity } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Scan',
      tagline: 'Capture waste using your phone.',
      description: 'Point your smartphone camera at any item or upload an image. The intuitive viewfinder immediately locks onto packaging contours.',
      icon: Camera,
      badge: 'Zero manual input'
    },
    {
      step: '02',
      title: 'Identify',
      tagline: 'AI analyzes the image.',
      description: 'Our computer vision pipeline recognizes polymer classes, material density, and surface characteristics with high confidence scoring.',
      icon: Cpu,
      badge: 'Computer Vision'
    },
    {
      step: '03',
      title: 'Guide',
      tagline: 'Receive recycling/disposal instructions.',
      description: 'Get immediate, jargon-free directions explaining whether the item should be recycled, reused, composted, or handled as domestic hazardous.',
      icon: Compass,
      badge: 'Tailored for Indian streams'
    },
    {
      step: '04',
      title: 'Act & Track',
      tagline: 'Dispose responsibly and track activity.',
      description: 'Place the item in the matching bin stream and record your daily waste prevention footprint on your personal or campus impact log.',
      icon: CheckCheck,
      badge: 'Verified habits'
    }
  ];

  const journeyNodes = [
    { label: 'Discover', sub: 'Learn about tool', icon: Eye },
    { label: 'Open App', sub: 'Instant camera load', icon: Smartphone },
    { label: 'Scan Waste', sub: 'Point and snap', icon: Camera },
    { label: 'AI Detection', sub: 'CV inference in < 2s', icon: Sparkles },
    { label: 'Clear Guidance', sub: 'Recycle vs Compost', icon: Compass },
    { label: 'Take Action', sub: 'Sort into proper bin', icon: CheckCheck },
    { label: 'Track Activity', sub: 'Build daily streak', icon: Activity },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Seamless 4-Step Process</span>
            <span aria-hidden="true">·</span>
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            From confusion to correct sorting in four steps.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            No bar codes to find, no resin numbers to decipher. Turn waste segregation into a simple, positive habit with computer vision.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#fafaf9] rounded-2xl p-7 border border-neutral-200/80 flex flex-col justify-between group hover:border-emerald-300 transition-colors"
              >
                {/* Step index */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-neutral-300 font-mono">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-700 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 my-6">
                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-800">
                    {item.tagline}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 text-[11px] font-medium text-neutral-500">
                  {item.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer Journey Visual Flow Map */}
        <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mb-10">
            <span className="text-xs uppercase font-semibold tracking-wider text-emerald-400">
              The End-To-End Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
              The Complete Customer Journey
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Designed from the ground up for maximum friction reduction, ensuring high user retention across both households and college campuses.
            </p>
          </div>

          {/* Visual flow horizontal chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
            {journeyNodes.map((node, i) => {
              const NodeIcon = node.icon;
              return (
                <div
                  key={node.label}
                  className="bg-neutral-800/80 border border-neutral-700/70 rounded-xl p-4 flex flex-col items-center text-center relative group hover:border-emerald-400 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center text-emerald-400 mb-2 border border-neutral-700/50">
                    <NodeIcon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">{node.label}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5 leading-tight">{node.sub}</div>

                  {i < journeyNodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
            <div>
              <span className="text-emerald-400 font-semibold">Core Value Proposition: </span>
              “AI-powered waste identification with instant, simple recycling and disposal guidance for households and colleges.”
            </div>
            <div className="font-mono text-[11px] text-neutral-300">
              Average user flow time: ~12 seconds
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
