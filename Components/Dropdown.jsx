import React, { useState } from 'react';

// 3. Reusable Dropdown for the About/Introduction Section
export const DropdownSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-purple-400 rounded-xl mb-3 overflow-hidden bg-white shadow-sm">
      <button 
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