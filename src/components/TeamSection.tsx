import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { GraduationCap, Award, Compass, Code, BrainCircuit, Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>The Builders Behind The Venture</span>
            <span aria-hidden="true">·</span>
            <span>Founding Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Pragati Engineering College student innovators.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Three dedicated undergraduate builders combining Artificial Intelligence, full-stack software development, UI/UX, and grassroots market research to make waste segregation effortless.
          </p>
        </div>

        {/* 3 Team Member Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-[#fafaf9] rounded-3xl p-8 border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Monogram Avatar Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white font-display font-extrabold text-xl flex items-center justify-center shadow-md">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">
                      {member.name}
                    </h3>
                    <div className="text-xs text-neutral-500 flex items-center gap-1.5 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{member.college}</span>
                    </div>
                  </div>
                </div>

                {/* Major & Role */}
                <div className="space-y-1.5 border-t border-neutral-200/60 pt-4">
                  <div className="text-xs font-semibold text-emerald-800">
                    Major: {member.major}
                  </div>
                  <div className="text-xs font-bold text-neutral-900">
                    {member.role}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="space-y-2 pt-2 border-t border-neutral-200/60">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/60 text-[11px] text-emerald-800 font-medium flex items-center gap-1">
                <span>Active Founder & Venture Builder</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-950">
          <div>
            <span className="font-bold text-emerald-900">Long-Term Venture Commitment: </span>
            All three founders are actively building and expanding AI Waste Recognition beyond campus competitions into a viable environmental technology venture.
          </div>
          <div className="font-semibold text-emerald-800 whitespace-nowrap">
            Pragati Engineering College, AP
          </div>
        </div>

      </div>
    </section>
  );
};
