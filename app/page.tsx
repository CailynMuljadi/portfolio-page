"use client";

import LandingSection from './components/LandingSection';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-white font-sans text-gray-900 antialiased selection:bg-brand-cyan selection:text-brand-purple">
      {/* Area 1: Animated & Responsive Design Heading Module */}
      <LandingSection />

      {/* Area 2: Main Personal Bios Container Profile */}
      <IntroSection />
      
      <hr className="border-t-4 border-dashed border-brand-bg my-4 max-w-4xl mx-auto" />

      {/* Area 3: Live Mapping Search & Filter Projects Deck */}
      <ProjectsSection />

      {/* Area 4: Form Input Module */}
      <ContactSection />
    </div>
  );
}