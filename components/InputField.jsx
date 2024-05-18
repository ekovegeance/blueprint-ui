import React from 'react';

export default function InputField({ label, placeholder, prefix, suffix, type="text"}) {
  return (
    <div className={`flex flex-col`}>
      <label className="mb-2 text-neutral-700">{label}</label>
      <div className="flex items-center h-12 p-2 border border-gray-300 rounded-md bg-slate-50 focus-within:ring-2 focus-within:ring-primary-500">
        {prefix && <span className="mr-2 text-gray-500">{prefix}</span>}
        <input
          type={type}
          className="flex-1 p-2 overflow-hidden outline-none focus:ring-0 bg-slate-50 whitespace-nowrap" 
          placeholder={placeholder} 
        />
        {suffix && <span className="ml-2 text-gray-500">{suffix}</span>}
      </div>
    </div>
  );
}
