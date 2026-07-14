"use client";

import LandingSection from './components/LandingSection';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-white font-sans text-gray-900 antialiased selection:bg-brand-cyan selection:text-brand-purple">
      {/* Area 1: Animated Landing View */}
      <LandingSection />

      {/* Area 2: About / Introduction Info Dropdowns */}
      <IntroSection />
      
      <hr className="border-t-4 border-dashed border-brand-bg my-4 max-w-4xl mx-auto" />

      {/* Area 3: Live Query Mapped Projects Box Showcase */}
      <ProjectsSection />

      {/* Area 4: Form Input Module */}
      <ContactSection />
    </div>
  );
}