"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- TYPES & INTERFACES ---
interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  isTextArea?: boolean;
}

interface ProjectCardProps {
  name: string;
  driveLink: string;
  defaultImg: string;
  hoverImg: string;
}

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
}

interface Project {
  id: number;
  name: string;
  link: string;
}

// --- REUSABLE COMPONENTS ---

const InputField: React.FC<InputFieldProps> = ({ 
  label, type = 'text', name, value, onChange, placeholder, isTextArea = false 
}) => {
  const baseClasses = "w-full p-3 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-600 transition-colors bg-white text-gray-800";
  
  return (
    <div className="mb-4 text-left">
      <label className="block text-purple-900 font-bold mb-2 uppercase tracking-wide text-sm">{label}</label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={baseClasses}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
          required
        />
      )}
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, driveLink, defaultImg, hoverImg }) => {
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
      <div className={`w-32 h-32 relative transition-transform duration-200 ${isHovered ? 'animate-wiggle scale-110' : ''}`}>
        <Image 
          src={isHovered ? hoverImg : defaultImg} 
          alt={`${name} folder`} 
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>
      <span className="mt-2 text-purple-700 font-extrabold tracking-wider uppercase text-center group-hover:text-purple-900">
        {name}
      </span>
    </a>
  );
};

const DropdownSection: React.FC<DropdownSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-purple-400 rounded-xl mb-3 overflow-hidden bg-white shadow-sm">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center bg-purple-100 text-purple-900 font-bold hover:bg-purple-200 transition-colors"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 p-4 border-t border-purple-200' : 'max-h-0'}`}>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showLanding, setShowLanding] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // References to the files you put inside the public folder
  const FOLDER_CLOSED = "/folder-closed.png";
  const FOLDER_OPEN = "/folder-open.png";
  const PROFILE_PIC = "/cailyn-profile.jpg";

  const projects: Project[] = [
    { id: 1, name: 'NOMNOMBOOK', link: 'https://drive.google.com/drive/folders/your-link-1' },
    { id: 2, name: 'ALLEYBOOKCLUB', link: 'https://drive.google.com/drive/folders/your-link-2' },
    { id: 3, name: 'RETRAY', link: 'https://drive.google.com/drive/folders/your-link-3' },
    { id: 4, name: 'SISTECH CAFE', link: 'https://drive.google.com/drive/folders/your-link-4' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showLanding) {
    return (
      <div className="h-screen w-screen bg-purple-600 flex flex-col justify-center items-center overflow-hidden select-none">
        <h1 className="text-white font-black text-5xl md:text-7xl animate-bounce tracking-widest text-center">
          CAILYN MULJADI'S
        </h1>
        <p className="text-cyan-300 font-bold text-xl md:text-2xl mt-4 animate-pulse tracking-wide uppercase">
          Portfolio is Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-300">
      <header className="relative bg-purple-600 pt-16 pb-12 px-6 overflow-hidden text-center border-b-8 border-cyan-300">
        <div className="max-w-4xl mx-auto relative z-10 animate-fadeIn">
          <div className="inline-block bg-yellow-300 text-purple-900 font-black text-4xl md:text-6xl px-6 py-2 transform -rotate-2 shadow-lg uppercase">
            Cailyn Muljadi's
          </div>
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase mt-2 drop-shadow-md">
            Portfolio
          </h1>
          <div className="mt-4 inline-block bg-cyan-300 text-purple-900 font-extrabold px-4 py-1 rounded text-sm uppercase tracking-widest">
            Front-End Engineering Applicant
          </div>
        </div>
        
        <div className="w-full bg-purple-950 text-purple-200 py-2 mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-wider uppercase">
          <span>📧 cailynmuljadi@gmail.com</span>
          <span>🔗 linkedin.com/in/cailyn-muljadi/</span>
          <span>📍 Kelapa Gading, Jakarta</span>
        </div>
      </header>

      <section className="max-w-4xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-full w-56 h-56 -z-10 animate-spin-slow"></div>
          <div className="w-56 h-56 relative rounded-full overflow-hidden border-4 border-purple-600 shadow-xl">
            <Image 
              src={PROFILE_PIC} 
              alt="Cailyn Muljadi" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-purple-600 font-black text-3xl md:text-4xl uppercase tracking-tight mb-2">
            Hi, I'm Cailyn Muljadi
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a <strong className="text-purple-900">Front-End Engineering Student</strong> passionate about the intersection of design, technology, and problem-solving. Currently expanding my skills in React, Tailwind, and interactive UI engineering.
          </p>

          <DropdownSection title="🎓 Education Details">
            <p className="font-bold text-purple-900">SISTECH - Information Technology</p>
            <p className="text-sm">Specializing in Software & Front-End Architecture.</p>
          </DropdownSection>

          <DropdownSection title="🚀 Personal Strengths & Highlights">
            <div className="flex flex-wrap gap-2 pt-1">
              {['Design Thinking', 'Systems Thinking', 'Self Leadership', 'Effective Communication', 'Collaboration'].map((strength) => (
                <span key={strength} className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  ⭐ {strength}
                </span>
              ))}
            </div>
          </DropdownSection>
        </div>
      </section>

      <hr className="border-t-4 border-dashed border-purple-200 my-6 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-purple-600 font-black text-4xl uppercase tracking-wide mb-6">
          My Projects
        </h2>

        <div className="max-w-md mx-auto mb-10">
          <input 
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full border-2 border-purple-400 focus:outline-none focus:border-purple-600 bg-purple-5 shadow-inner text-gray-800 font-medium"
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                name={project.name}
                driveLink={project.link}
                defaultImg={FOLDER_CLOSED}
                hoverImg={FOLDER_OPEN}
              />
            ))}
          </div>
        ) : (
          <div className="bg-red-50 text-red-600 border border-red-200 p-6 rounded-xl font-bold inline-block mx-auto animate-pulse">
            🔍 No projects found matching "{searchTerm}"
          </div>
        )}
      </section>

      <section className="bg-purple-900 text-white py-16 px-6 border-t-8 border-yellow-300">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-yellow-300 font-black text-4xl uppercase tracking-wider mb-2">
            Contact Me
          </h2>
          <p className="text-purple-200 text-sm mb-8 uppercase tracking-widest font-semibold">Let's build something epic</p>

          {formSubmitted && (
            <div className="mb-6 p-4 bg-cyan-400 text-purple-950 font-black rounded-lg uppercase tracking-wide shadow-md animate-bounce">
              🎉 Message Sent Successfully!
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="bg-purple-800 p-6 rounded-2xl shadow-xl border border-purple-700">
            <InputField 
              label="Your Full Name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="e.g. Cailyn Muljadi" 
            />
            <InputField 
              label="Email Address" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="name@example.com" 
            />
            <InputField 
              label="Your Message" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              placeholder="Let's connect..." 
              isTextArea={true} 
            />

            <button 
              type="submit" 
              className="w-full mt-4 bg-yellow-300 hover:bg-yellow-400 text-purple-950 font-black py-4 px-6 rounded-xl uppercase tracking-widest transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}