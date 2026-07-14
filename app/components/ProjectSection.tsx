"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  driveLink: string;
  defaultImg: string;
  hoverImg: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, driveLink, defaultImg, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a 
      href={driveLink} target="_blank" rel="noopener noreferrer"
      className="flex flex-col items-center group cursor-pointer m-4 focus:outline-none"
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-32 h-32 relative transition-transform duration-200 ${isHovered ? 'animate-wiggle scale-110' : ''}`}>
        <Image src={isHovered ? hoverImg : defaultImg} alt={name} fill sizes="128px" className="object-contain" />
      </div>
      <span className="mt-2 text-brand-purple font-extrabold tracking-wider uppercase text-center group-hover:text-brand-pink">
        {name}
      </span>
    </a>
  );
};

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const projects = [
    { id: 1, name: 'NOMNOMBOOK', link: 'https://drive.google.com/file/d/1hD79dtx9IXsjO_9XyLGZTRfreYuvLtVK/view?usp=drive_link' },
    { id: 2, name: 'ALLEYBOOKCLUB', link: 'https://drive.google.com/file/d/1dRo1NosihqmQurtxalOiQU-YDKogPZPh/view?usp=drive_link' },
    { id: 3, name: 'RETRAY', link: 'https://drive.google.com/file/d/1Vao-nqj6eKfGznlyQypmhMpvVFYfdX4M/view?usp=drive_link' },
    { id: 4, name: 'SISTECH CAFE', link: 'https://drive.google.com/file/d/1Xap5mrarOSv4Tmt6TPTdMLXwhcitdRrX/view?usp=drive_link' },
  ];

  const filtered = projects.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 className="text-brand-purple font-black text-4xl uppercase tracking-wide mb-6">My Projects</h2>
      <input 
        type="text" placeholder="Search projects..." value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md w-full px-5 py-3 mb-12 rounded-full border-2 border-brand-purple focus:outline-none bg-brand-white text-gray-800 shadow-inner font-medium"
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          {filtered.map(p => (
            <ProjectCard key={p.id} name={p.name} driveLink={p.link} defaultImg="/folder-closed.png" hoverImg="/folder-open.png" />
          ))}
        </div>
      ) : (
        <div className="bg-brand-pink/10 text-brand-pink border border-brand-pink p-6 rounded-xl font-bold inline-block mx-auto animate-pulse">
          🔍 No projects found matching "{searchTerm}"
        </div>
      )}
    </section>
  );
}