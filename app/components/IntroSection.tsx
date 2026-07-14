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
        className="w-full p-4 flex justify-between items-center bg-brand-bg text-brand-purple font-bold hover:bg-purple-200 transition-colors cursor-pointer"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 p-4 border-t border-purple-200' : 'max-h-0'}`}>
        <div className="text-gray-700 space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
      
      {/* 🖼️ Dynamic Real Pop-out Frame Setup */}
      <div className="flex justify-center relative pt-16 pb-4">
        
        {/* Animated outer background yellow glow element */}
        <div className="absolute bottom-4 bg-brand-yellow rounded-full w-56 h-56 -z-20 animate-spin-slow"></div>
        
        {/* Layer 1: The Circle Frame Backing (Shows the purple border shape behind you) */}
        <div className="absolute bottom-4 w-56 h-56 rounded-full border-4 border-brand-purple bg-gray-300 shadow-xl -z-10"></div>
        
        {/* Layer 2 & 3: Floating Frame Container (Masks the bottom border edge but leaves the top wide open) */}
        <div className="relative w-56 h-56 rounded-b-full overflow-hidden group">
          
          {/* Your avatar scales upwards and pops over the border without clipping */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[105%] h-[125%] origin-bottom transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/cailyn-profile.png" 
              alt="Cailyn Muljadi Profile" 
              fill 
              sizes="260px"
              priority 
              className="object-cover object-bottom" 
            />
          </div>
        </div>
      </div>

      {/* Info Deck Section */}
      <div className="md:col-span-2 text-center md:text-left">
        <h2 className="text-brand-purple font-black text-4xl uppercase tracking-tight mb-3">Hi, I'm Cailyn Muljadi</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          I am a <strong className="text-brand-purple">Front-End Engineering Student in SISTECH UI</strong> passionate about building responsive, modern user interfaces with smooth client-side interactions.
        </p>

        <DropdownSection title="Education Details">
          <div className="mb-2">
            <p className="font-bold text-brand-purple">SMAK 5 PENABUR Jakarta, Indonesia</p>
            <p className="text-sm">Specialized in Higher Maths, Physics, Chemistry, Biology, and Art.</p>          
          </div>
          <div>
            <p className="font-bold text-brand-purple">National Tsing Hua University, Taiwan</p>
            <p className="text-sm">Engineering Technology - Specializing in Industrial Engineering Management.</p>
          </div>
        </DropdownSection>
        
        <DropdownSection title="Highlights">
          <div className="flex flex-wrap gap-2 pt-1">
            {['High School Valedictorian', 'STEM Research & Competition Experience', 'Leadership Across School & Nonprofit Organizations'].map((str) => (
              <span key={str} className="bg-brand-cyan text-brand-purple text-xs font-bold px-3 py-1 rounded-full uppercase">
                ⭐ {str}
              </span>
            ))}
          </div>
        </DropdownSection>

        <DropdownSection title="Personal Strengths">
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