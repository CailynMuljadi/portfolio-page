import React, { useState } from 'react';

// 2. Reusable Project Card with Hover Effects & Google Drive Links
export const ProjectCard = ({ name, driveLink, defaultImg, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={driveLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center group cursor-pointer m-4 focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-32 h-32 flex items-center justify-center transition-transform duration-200 
        ${isHovered ? 'animate-wiggle scale-110' : ''}`}
      >
        {/* Toggles between two images on hover */}
        <img 
          src={isHovered ? hoverImg : defaultImg} 
          alt={`${name} folder`} 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="mt-2 text-purple-700 font-extrabold tracking-wider uppercase text-center group-hover:text-purple-900">
        {name}
      </span>
    </a>
  );
};
