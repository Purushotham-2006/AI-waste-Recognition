import React from 'react';
import { 
  Sparkles, 
  Camera, 
  Layers, 
  Zap, 
  Lightbulb, 
  HelpCircle, 
  BarChart3, 
  Layout 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'AI Waste Identification',
      description: 'Employs deep computer vision models to identify items from packaging shapes, logos, textures, and materials.',
      icon: Sparkles,
      editorialNum: '01',
      tag: 'Core ML Engine'
    },
    {
      title: 'Camera Scanning',
      description: 'Point and shoot directly from your mobile browser or app. Low latency capture optimized for real-world lighting.',
      icon: Camera,
      editorialNum: '02',
      tag: 'Mobile First'
    },
    {
      title: 'Smart Classification',
      description: 'Categorizes items into Dry Recyclable, Wet Organic, Domestic Hazardous, and General Waste streams.',
      icon: Layers,
      editorialNum: '03',
      tag: 'Indian Municipal Standards'
    },
    {
      title: 'Instant Guidance',
      description: 'Immediate advice in plain language on whether the item should be recycled, reused, composted, or disposed of.',
      icon: Zap,
      editorialNum: '04',
      tag: 'Real-Time Clarity'
    },
    {
      title: 'Recycling Tips',
      description: 'Actionable prep steps like rinsing milk cartons, flattening boxes, and removing caps to prevent contamination.',
      icon: Lightbulb,
      editorialNum: '05',
      tag: 'Contamination Prevention'
    },
    {
      title: 'Disposal Recommendations',
      description: 'Precise bin assignments (Blue, Green, Red, Gray) matching local segregation mandates and scrap collectors.',
      icon: HelpCircle,
      editorialNum: '06',
      tag: 'Correct Destination'
    },
    {
      title: 'Activity Tracking',
      description: 'Monitor your weekly and monthly scanning history, items diverted from landfills, and build family eco-streaks.',
      icon: BarChart3,
      editorialNum: '07',
      tag: 'Impact Record'
    },
    {
      title: 'Simple Interface',
      description: 'A distraction-free, beginner-friendly UI engineered for anyone from young students to busy working parents.',
      icon: Layout,
      editorialNum: '08',
      tag: 'Accessible to All'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Product Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Key Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Built for clarity, speed, and practical household utility.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Every feature is engineered to remove friction from daily waste segregation, replacing confusion with positive action.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {feat.editorialNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 text-[11px] font-medium text-emerald-800">
                  {feat.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Microcopy Quote Banner */}
        <div className="p-6 rounded-xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-semibold text-emerald-300">Our Design Standard</span>
            <div className="text-lg font-bold font-display mt-0.5">“Turn confusion into action. Scan it. Understand it. Sort it.”</div>
          </div>
          <a
            href="#scanner-demo"
            className="px-5 py-2.5 rounded-lg bg-emerald-400 text-neutral-950 font-bold text-xs hover:bg-emerald-300 transition-colors whitespace-nowrap"
          >
            Launch Interactive Demo
          </a>
        </div>

      </div>
    </section>
  );
};
