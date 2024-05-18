'use client'

import React, { useState } from 'react';

export default function Select({ label, placeholder, value, option }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mb-4 ">
      <label htmlFor="select" className="block text-sm font-medium text-neutral-700">{label ? label : 'Pilih Opsi'}</label>
      <select
        id="select"
        value={selectedOption}
        onChange={handleChange}
        className="w-full h-12 p-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring focus:ring-primary-100 bg-slate-50"
      >
        <option value="">{placeholder ? placeholder : 'Silakan Pilih'}</option>
        <option value={value ? value : 'opsi1'}>{option ? option : 'Opsi 1'}</option>
        <option value={value ? value : 'opsi2'}>{option ? option : 'Opsi 2'}</option>
        <option value={value ? value : 'opsi3'}>{option ? option : 'Opsi 3'}</option>
      </select>
    </div>
  );
}

