import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesSection } from './components/FeaturesSection';
import { ScannerDemo } from './components/ScannerDemo';
import { ValidationSection } from './components/ValidationSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { CompetitiveLandscape } from './components/CompetitiveLandscape';
import { TechnologyStack } from './components/TechnologyStack';
import { BusinessModel } from './components/BusinessModel';
import { ImpactSection } from './components/ImpactSection';
import { RoadmapSection } from './components/RoadmapSection';
import { TeamSection } from './components/TeamSection';
import { PartnershipSection } from './components/PartnershipSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleOpenScanner = () => {
    const scannerElement = document.getElementById('scanner-demo');
    if (scannerElement) {
      scannerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 selection:bg-emerald-600 selection:text-white flex flex-col">
      {/* Sticky Navigation Top Bar */}
      <Navbar onOpenScanner={handleOpenScanner} />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenScanner={handleOpenScanner} />

        {/* Section 2: Core Problem & Customer Empathy */}
        <ProblemSection />

        {/* Section 3: How It Works & Customer Journey */}
        <HowItWorks />

        {/* Section 4: Key Product Features */}
        <FeaturesSection />

        {/* Section 5: The Interactive AI Waste Scanner (Centerpiece) */}
        <ScannerDemo />

        {/* Section 6: Early User Validation (10 users, 8 positive, 2 neutral) */}
        <ValidationSection />

        {/* Section 7: Differentiation & Unfair Advantage */}
        <DifferentiationSection />

        {/* Section 8: Competitive Landscape (Neutral Comparison) */}
        <CompetitiveLandscape />

        {/* Section 9: Planned Technology Stack */}
        <TechnologyStack />

        {/* Section 10: Business Model & Financial Outlook */}
        <BusinessModel />

        {/* Section 11: Startup Mission & Impact Pillars */}
        <ImpactSection />

        {/* Section 12: 12-Month Horizon Roadmap & KPIs */}
        <RoadmapSection />

        {/* Section 13: The Pragati Engineering College Founding Team */}
        <TeamSection />

        {/* Section 14: College & Institutional Partnerships */}
        <PartnershipSection />

        {/* Section 15: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 16: Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
