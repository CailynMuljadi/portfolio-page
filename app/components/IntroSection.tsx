"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

// Custom 100% self-contained React Atom Shape SVG component for the background block
const LargeReactLogoBackground = () => (
  <svg 
    viewBox="-11.5 -10.23174 23 20.46348" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    stroke="#ffe347" 
    strokeWidth="0.75" 
    className="w-full h-full opacity-85"
  >
    <circle cx="0" cy="0" r="2.05" fill="#ffe347"/>
    <g>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

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
      
      {/* 🖼️ Clean Unclipped Image Box with Big Yellow React Shape Backdrop */}
      <div className="flex justify-center items-center relative min-h-[320px] w-full group">
        
        {/* Layer 1: The Large Yellow React Logo Shape (Slowly Spinning) */}
        <div className="absolute w-72 h-72 z-0 animate-spin-slow pointer-events-none flex items-center justify-center">
          <LargeReactLogoBackground />
        </div>
        
        {/* Layer 2: The Portrait PNG Image (Completely loose and unclipped) */}
        <div className="relative w-64 h-80 z-10 transition-transform duration-300 group-hover:scale-105">
          <Image 
            src="/cailyn-profile.png" 
            alt="Cailyn Muljadi Portfolio Portrait" 
            fill 
            sizes="256px"
            priority 
            className="object-contain object-center" 
          />
        </div>
      </div>

      {/* Info Section Columns */}
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