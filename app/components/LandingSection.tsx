"use client";

import React, { useState, useEffect } from 'react';
import { FaStarOfLife } from "react-icons/fa";

interface FlowerParticle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function LandingSection() {
  const [isFontHovered, setIsFontHovered] = useState(false);
  const [flowers, setFlowers] = useState<FlowerParticle[]>([]);
  
  // Real active state tracking for the stepper number value
  const [fontSize, setFontSize] = useState<number>(12);
  
  const colors = ['#9600ff', '#ef767a', '#ffe347', '#23f0c7'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.25) return;
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newFlower: FlowerParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY + window.scrollY,
        color: randomColor,
      };

      setFlowers((prev) => [...prev.slice(-20), newFlower]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Increment and decrement handlers
  const handleIncrement = () => setFontSize((prev) => prev + 1);
  const handleDecrement = () => setFontSize((prev) => Math.max(1, prev - 1)); // Prevents going below 1

  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-purple via-brand-bg to-brand-white border-b-8 border-brand-cyan select-none">
      
      {/* 🌸 Dynamic Icon Particle Trail Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            style={{ 
              top: flower.y, 
              left: flower.x, 
              color: flower.color 
            }}
            className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-flower text-2xl"
          >
            <FaStarOfLife />
          </div>
        ))}
      </div>

      <div></div>

      {/* Main Centerpieces */}
      <div className="w-full text-center px-6 relative z-10 flex flex-col items-center mt-12">
        
        {/* Name block badge with hover wiggle */}
        <div className="inline-block bg-brand-cyan px-6 py-2 transform -rotate-2 shadow-lg font-black text-3xl md:text-5xl uppercase tracking-wider transition-transform duration-200 hover:animate-wiggle cursor-default">
          <span className="text-brand-purple">Cailyn Muljadi</span>
          <span className="text-white">'s</span>
        </div>
        
        {/* Portfolio text heading with red wavy underline */}
        <h1 className="text-black text-7xl md:text-9xl font-black tracking-tighter uppercase mt-4 drop-shadow-sm underline decoration-brand-pink decoration-wavy decoration-3 underline-offset-8">
          Portfolio
        </h1>

        {/* Custom Text Editor Layout Element Component */}
        <div className="relative mt-12 bg-white border border-gray-200 shadow-xl rounded-xl p-2.5 flex items-center space-x-4 text-gray-700 font-sans text-sm md:text-base">
          
          {/* Interactive Item Element trigger container */}
          <div 
            onMouseEnter={() => setIsFontHovered(true)}
            onMouseLeave={() => setIsFontHovered(false)}
            className={`px-4 py-1.5 rounded-lg border border-gray-300 font-medium transition-colors cursor-pointer select-none ${isFontHovered ? 'bg-gray-200 text-gray-900' : 'bg-gray-50'}`}
          >
            Inter ▾
          </div>

          {/* Stepper block connected to React interactive State hooks */}
          <div className="flex items-center space-x-2 border border-gray-300 bg-white px-2 py-1.5 rounded-lg font-mono text-xs">
            <button 
              type="button"
              onClick={handleDecrement}
              className="cursor-pointer font-bold px-1.5 py-0.5 hover:bg-gray-100 rounded focus:outline-none transition-colors"
            >
              -
            </button>
            <span className="px-2 border-x border-gray-200 font-bold min-w-[20px] text-center">
              {fontSize}
            </span>
            <button 
              type="button"
              onClick={handleIncrement}
              className="cursor-pointer font-bold px-1.5 py-0.5 hover:bg-gray-100 rounded focus:outline-none transition-colors"
            >
              +
            </button>
          </div>

          {/* Context operations menu styles panel */}
          <div className="flex items-center space-x-3.5 pl-2 font-serif font-medium">
            <span className="relative cursor-pointer hover:text-brand-purple font-sans font-bold">
              A
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-brand-purple"></span>
            </span>
            <span className="cursor-pointer font-sans font-black hover:text-gray-900">B</span>
            <span className="cursor-pointer font-serif font-black italic hover:text-gray-900">I</span>
            <span className="cursor-pointer font-sans font-semibold underline underline-offset-2 hover:text-gray-900">U</span>
          </div>

          {/* Dynamic Popup tooltip */}
          {isFontHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-brand-yellow text-brand-purple font-black px-4 py-2 rounded-lg text-xs md:text-sm tracking-wider shadow-xl whitespace-nowrap z-50 animate-bounce">
              Front End Engineering Applicant
            </div>
          )}
        </div>
      </div>

      {/* 🔁 Slower Marquee banner loop container */}
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