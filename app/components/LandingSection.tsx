"use client";

import React, { useState, useEffect } from 'react';

interface FlowerParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

export default function LandingSection() {
  const [isFontHovered, setIsFontHovered] = useState(false);
  const [flowers, setFlowers] = useState<FlowerParticle[]>([]);
  
  const colors = ['#9600ff', '#ef767a', '#ffe347', '#23f0c7'];

  // Track mouse coordinates to produce flower particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.15) return; // Throttles production slightly for performance
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomSize = Math.floor(Math.random() * 20) + 16;
      
      const newFlower: FlowerParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY + window.scrollY,
        color: randomColor,
        size: randomSize
      };

      setFlowers((prev) => [...prev.slice(-20), newFlower]); // Keeps maximum active items capped at 20
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Clean old flower nodes periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowers((prev) => prev.slice(1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-purple via-brand-bg to-brand-white border-b-8 border-brand-cyan select-none">
      
      {/* 🌸 Interactive Flower Particle Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {flowers.map((flower) => (
          <svg
            key={flower.id}
            style={{ top: flower.y, left: flower.x, width: flower.size, height: flower.size }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-ping duration-1000 opacity-80"
            viewBox="0 0 24 24"
            fill={flower.color}
          >
            {/* 6-pointed curved custom star flower graphic */}
            <path d="M12 0C12 5 15 8 20 8C15 8 12 11 12 16C12 11 9 8 4 8C9 8 12 5 12 0Z" />
            <path d="M12 4C12 8 8 12 4 12C8 12 12 16 12 20C12 16 16 12 20 12C16 12 12 8 12 4Z" transform="rotate(45 12 12)" />
          </svg>
        ))}
      </div>

      {/* Spacing alignment helper block */}
      <div></div>

      {/* Main Centerpieces */}
      <div className="w-full text-center px-6 relative z-10 flex flex-col items-center">
        <div className="inline-block bg-brand-yellow text-brand-purple font-black text-4xl md:text-6xl px-8 py-3 transform -rotate-2 shadow-2xl uppercase tracking-wider">
          Cailyn Muljadi's
        </div>
        
        <h1 className="text-brand-white text-7xl md:text-9xl font-black tracking-tighter uppercase mt-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
          Portfolio
        </h1>

        {/* 🎛️ Hoverable Interactive Font Bar Display Box */}
        <div 
          onMouseEnter={() => setIsFontHovered(true)}
          onMouseLeave={() => setIsFontHovered(false)}
          className={`mt-10 max-w-lg w-full px-6 py-4 rounded-xl border-4 border-brand-purple transition-all duration-300 cursor-pointer text-center font-bold uppercase tracking-widest shadow-md
            ${isFontHovered ? 'bg-brand-purple text-brand-cyan scale-105' : 'bg-brand-white text-brand-purple'}`}
        >
          {isFontHovered ? "🚀 Front-End Engineering Applicant" : "Font Family: Inter (Hover Me)"}
        </div>
      </div>

      {/* 🔁 Infinite Seamless Contact Marquee Loop Component */}
      <div className="w-full bg-brand-purple border-t-4 border-brand-yellow overflow-hidden relative z-10 py-4 flex">
        <div className="flex whitespace-nowrap animate-marquee uppercase font-black tracking-widest text-brand-white text-sm md:text-base">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-12 mx-6">
              <span>📧 CAILYNMULJADI@GMAIL.COM</span>
              <span className="text-brand-yellow">★</span>
              <span>🔗 LINKEDIN.COM/IN/CAILYN-MULJADI/</span>
              <span className="text-brand-cyan">★</span>
              <span>📍 KELAPA GADING, JAKARTA</span>
              <span className="text-brand-pink">★</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}