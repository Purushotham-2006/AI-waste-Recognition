import React from 'react';
import { School, BookOpen, Users, BarChart2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section id="partnerships" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Institutional Collaboration</span>
            <span aria-hidden="true">·</span>
            <span>For Colleges & Organizations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Empower your campus community with AI waste literacy.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            College campuses are micro-cities generating massive quantities of food packaging, beverage containers, and stationery. We partner with academic leadership, student green clubs, and NSS units to transform campus waste segregation.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Student Environmental Awareness',
              desc: 'Replace passive posters with interactive smartphone scanning that students actually use during canteen meals and hostel living.',
              icon: BookOpen,
              metric: 'Active digital habit building'
            },
            {
              title: 'Waste-Management Education',
              desc: 'Hands-on curriculum support for environmental engineering and sustainability student projects with real campus data.',
              icon: School,
              metric: 'Practical student learning'
            },
            {
              title: 'Digital Engagement & Gamification',
              desc: 'Inter-hostel and inter-department recycling challenges that boost participation through transparent digital impact logs.',
              icon: Users,
              metric: 'Community participation'
            },
            {
              title: 'Institutional Sustainability Reporting',
              desc: 'Verified metrics on campus waste diversion to bolster university NAAC, NIRF green audit, and ESG compliance scores.',
              icon: BarChart2,
              metric: 'Green campus accreditation'
            }
          ].map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] font-semibold text-emerald-800">
                  {benefit.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Call To Action Banner */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-emerald-400">
              Campus Pilot Inquiries Open
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Ready to pilot AI Waste Recognition at your institution?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              We provide turnkey onboarding, printable bin QR codes, and student orientation toolkits for college campuses across India.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-sm hover:bg-emerald-400 transition-colors whitespace-nowrap shadow-md flex items-center gap-2 shrink-0"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
