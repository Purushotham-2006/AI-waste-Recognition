import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xl font-bold font-display text-white">AI Waste Recognition</span>
            </div>
            <p className="text-sm text-neutral-400 font-medium">
              “Scan Waste. Sort Right. Save the Planet.”
            </p>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed font-normal">
              An AI-powered environmental technology venture founded by engineering students at Pragati Engineering College, dedicated to simplifying waste segregation for households and campuses across India.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-3">
              <div className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">
                Product
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#scanner-demo" className="hover:text-white transition-colors">AI Scanner Demo</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">
                Venture
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#problem" className="hover:text-white transition-colors">Core Problem</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
                <li><a href="#validation" className="hover:text-white transition-colors">User Validation</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">12-Month Roadmap</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">
                Connect
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#team" className="hover:text-white transition-colors">Founding Team</a></li>
                <li><a href="#partnerships" className="hover:text-white transition-colors">College Partnerships</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; 2026 AI Waste Recognition. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pragati Engineering College Innovation</span>
            <span>·</span>
            <span>Sustainable Environmental Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
