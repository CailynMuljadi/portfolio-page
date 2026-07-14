"use client";

import React, { useState, useEffect } from 'react';

interface FlowerParticle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function LandingSection() {
  const [isFontHovered, setIsFontHovered] = useState(false);
  const [flowers, setFlowers] = useState<FlowerParticle[]>([]);
  
  const colors = ['#9600ff', '#ef767a', '#ffe347', '#23f0c7'];

  // Captures pointer coordinates to place background flower particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.2) return; // Controls trail density
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newFlower: FlowerParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY + window.scrollY,
        color: randomColor,
      };

      setFlowers((prev) => [...prev.slice(-25), newFlower]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-purple via-brand-bg to-brand-white border-b-8 border-brand-cyan select-none">
      
      {/* 🌸 Flower Trail Graphic Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {flowers.map((flower) => (
          <svg
            key={flower.id}
            style={{ top: flower.y, left: flower.x }}
            className="absolute w-8 h-8 pointer-events-none transform animate-flower"
            viewBox="0 0 24 24"
            fill={flower.color}
          >
            {/* Smooth 8-Petal Flower shape blueprint */}
            <path d="M12 0C13.5 4 15.5 4 17 5.5C18.5 7 18 9 22 9.5C18 10 18.5 12 17 13.5C15.5 15 13.5 15 12 19C10.5 15 8.5 15 7 13.5C5.5 12 6 10 2 9.5C6 9 5.5 7 7 5.5C8.5 4 10.5 4 12 0Z"/>
            <path d="M12 0C13.5 4 15.5 4 17 5.5C18.5 7 18 9 22 9.5C18 10 18.5 12 17 13.5C15.5 15 13.5 15 12 19C10.5 15 8.5 15 7 13.5C5.5 12 6 10 2 9.5C6 9 5.5 7 7 5.5C8.5 4 10.5 4 12 0Z" transform="rotate(45 12 12)"/>
          </svg>
        ))}
      </div>

      <div></div>

      {/* Main Centerpieces */}
      <div className="w-full text-center px-6 relative z-10 flex flex-col items-center mt-12">
        {/* Custom Banner Badge */}
        <div className="inline-block bg-brand-cyan px-6 py-2 transform -rotate-2 shadow-lg font-black text-3xl md:text-5xl uppercase tracking-wider">
          <span className="text-brand-purple">Cailyn Muljadi</span>
          <span className="text-white">'s</span>
        </div>
        
        {/* Title with red broken/wavy underline */}
        <h1 className="text-white text-7xl md:text-9xl font-black tracking-tighter uppercase mt-4 drop-shadow-md underline decoration-brand-pink decoration-wavy decoration-3 underline-offset-8">
          Portfolio
        </h1>

        {/* 🎛️ Interactive Font Control Module Box */}
        <div className="relative mt-12 bg-white border border-gray-200 shadow-xl rounded-xl p-2.5 flex items-center space-x-4 text-gray-700 font-sans text-sm md:text-base">
          
          {/* Item 1: Interactive Hover Trigger */}
          <div 
            onMouseEnter={() => setIsFontHovered(true)}
            onMouseLeave={() => setIsFontHovered(false)}
            className={`px-4 py-1.5 rounded-lg border border-gray-300 font-medium transition-colors cursor-pointer select-none ${isFontHovered ? 'bg-gray-200 text-gray-900' : 'bg-gray-50'}`}
          >
            Inter ▾
          </div>

          {/* Item 2: Stepper Component */}
          <div className="flex items-center space-x-2 border border-gray-300 bg-white px-2 py-1.5 rounded-lg font-mono text-xs">
            <span className="cursor-pointer font-bold px-1 hover:bg-gray-100 rounded">-</span>
            <span className="px-2 border-x border-gray-200">12</span>
            <span className="cursor-pointer font-bold px-1 hover:bg-gray-100 rounded">+</span>
          </div>

          {/* Item 3: Typography Style Actions */}
          <div className="flex items-center space-x-3.5 pl-2 font-serif font-medium">
            <span className="relative cursor-pointer hover:text-brand-purple font-sans font-bold">
              A
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-brand-purple"></span>
            </span>
            <span className="cursor-pointer font-sans font-black hover:text-gray-900">B</span>
            <span className="cursor-pointer font-serif font-black italic hover:text-gray-900">I</span>
            <span className="cursor-pointer font-sans font-semibold underline underline-offset-2 hover:text-gray-900">U</span>
          </div>

          {/* Floating Popup Dynamic Label Box */}
          {isFontHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-brand-cyan text-white border border-brand-cyan font-black px-4 py-2 rounded-lg text-xs md:text-sm tracking-wider shadow-xl whitespace-nowrap z-50 animate-bounce">
              Front End Engineering Applicant
            </div>
          )}
        </div>
      </div>

      {/* 🔁 Infinite Seamless Contacts Loop Banner */}
      <div className="w-full bg-brand-purple overflow-hidden relative z-10 py-3.5 flex border-t-4 border-brand-yellow">
        <div className="flex whitespace-nowrap animate-marquee uppercase font-black tracking-widest text-brand-white text-xs md:text-sm">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 mx-4">
              <span>📧 cailynmuljadi@gmail.com</span>
              <span className="text-brand-cyan">✦</span>
              <span>🔗 linkedin.com/in/cailyn-muljadi/</span>
              <span className="text-brand-yellow">✦</span>
              <span>📍 Kelapa Gading, Jakarta</span>
              <span className="text-brand-pink">✦</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}