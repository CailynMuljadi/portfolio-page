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
      
      {/* 🖼️ Pop-out Avatar Framing Container */}
      <div className="flex justify-center relative pt-8">
        {/* Animated outer background yellow glow element */}
        <div className="absolute top-8 bg-brand-yellow rounded-full w-56 h-56 -z-10 animate-spin-slow"></div>
        
        {/* The Base Frame Box (Acts as the solid visible background and bottom/side border masking layer) */}
        <div className="relative w-56 h-56 rounded-full border-x-4 border-b-4 border-t-0 border-brand-purple bg-gray-300 shadow-xl group">
          
          {/* Inner circle mask background helper */}
          <div className="absolute inset-0 bg-gray-300 rounded-full border-t-4 border-brand-purple opacity-20 -z-10"></div>
          
          {/* Absolute floating overlapping frame image block */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[105%] h-[120%] origin-bottom transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/cailyn-profile.png" 
              alt="Cailyn Muljadi" 
              fill 
              sizes="240px"
              priority 
              className="object-cover object-bottom rounded-b-full" 
            />
          </div>
        </div>
      </div>

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