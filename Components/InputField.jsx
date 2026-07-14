import React, { useState } from 'react';

// 1. Reusable Input Field for the Contact Form
export const InputField = ({ label, type = 'text', name, value, onChange, placeholder, isTextArea = false }) => {
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
          rows="4"
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
