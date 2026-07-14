"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const DropdownSection: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 border-brand-purple rounded-xl mb-3 overflow-hidden bg-brand-white shadow-sm">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center bg-brand-bg text-brand-purple font-bold hover:bg-purple-200 transition-colors"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 p-4 border-t border-purple-200' : 'max-h-0'}`}>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
      <div className="flex justify-center relative">
        <div className="absolute inset-0 bg-brand-yellow rounded-full w-56 h-56 -z-10 animate-spin-slow"></div>
        <div className="w-56 h-56 relative rounded-full overflow-hidden border-4 border-brand-purple shadow-xl bg-gray-200">
          <Image 
            src="/cailyn-profile.jpg" 
            alt="Cailyn Muljadi Profile Pic" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
      </div>

      <div className="md:col-span-2 text-center md:text-left">
        <h2 className="text-brand-purple font-black text-4xl uppercase tracking-tight mb-3">Hi, I'm Cailyn Muljadi</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          I am a <strong className="text-brand-purple">Front-End Engineering Student</strong> passionate about building responsive, modern user interfaces with smooth client-side interactions.
        </p>

        <DropdownSection title="🎓 Education Details">
          <p className="font-bold text-brand-purple">SISTECH - Information Technology</p>
          <p className="text-sm">Specializing in Software & Front-End UI Architecture.</p>
        </DropdownSection>

        <DropdownSection title="🚀 Personal Strengths & Highlights">
          <div className="flex flex-wrap gap-2 pt-1">
            {['Design Thinking', 'Systems Thinking', 'Self Leadership', 'Collaboration'].map((str) => (
              <span key={str} className="bg-brand-pink text-brand-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                ⭐ {str}
              </span>
            ))}
          </div>
        </DropdownSection>
      </div>
    </section>
  );
}