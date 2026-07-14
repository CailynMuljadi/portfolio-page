"use client";

import React, { useState } from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  isTextArea?: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputProps> = ({ label, name, value, type = 'text', isTextArea = false, placeholder, onChange }) => {
  const inputClass = "w-full p-3 rounded-lg border-2 border-brand-bg focus:outline-none focus:border-brand-cyan transition-colors bg-brand-white text-gray-800";
  return (
    <div className="mb-4 text-left">
      <label className="block text-brand-yellow font-bold mb-2 uppercase tracking-wide text-xs">{label}</label>
      {isTextArea ? (
        <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={4} className={inputClass} required />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={inputClass} required />
      )}
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-brand-purple text-brand-white py-20 px-6 border-t-8 border-brand-yellow">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-brand-yellow font-black text-4xl uppercase tracking-wider mb-2">Contact Me</h2>
        <p className="text-brand-bg text-xs mb-8 uppercase tracking-widest font-semibold">Let's build something epic together</p>

        {submitted && (
          <div className="mb-6 p-4 bg-brand-cyan text-brand-purple font-black rounded-lg uppercase tracking-wide shadow-md animate-bounce">
            🎉 Message Sent Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black/20 p-6 rounded-2xl shadow-xl border border-white/10">
          <InputField label="Name" name="name" value={formData.name} placeholder="Your Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <InputField label="Email" name="email" type="email" value={formData.email} placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <InputField label="Message" name="message" isTextArea value={formData.message} placeholder="Message" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <button type="submit" className="w-full mt-4 bg-brand-yellow hover:bg-amber-300 text-brand-purple font-black py-4 px-6 rounded-xl uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}