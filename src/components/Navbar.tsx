import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenScanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Validation', href: '#validation' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 flex items-center gap-2 group font-display"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block transition-transform group-hover:scale-125" />
          <span>AI Waste Recognition</span>
        </a>

        {/* Zone 2: 4-6 nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenScanner}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>Try Scanner</span>
            <ArrowUpRight className="ml-1.5 w-4 h-4 text-emerald-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-emerald-700 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScanner();
              }}
              className="w-full py-2.5 px-4 text-center font-medium text-white bg-neutral-900 rounded-lg text-sm cursor-pointer hover:bg-neutral-800 transition-colors"
            >
              Try AI Waste Scanner
            </button>
            <a
              href="#partnerships"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-sm transition-colors cursor-pointer"
            >
              College Partnerships
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
