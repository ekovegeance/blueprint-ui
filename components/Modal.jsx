import React from 'react';
import Button from './Button';
import { HiXMark } from "react-icons/hi2";

export default function Modal({ isOpen, closeModal, title, description, illustration, children, footer }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-10 backdrop-blur-sm">
      <div className="absolute inset-x-0 bottom-0 w-full max-w-xl p-5 bg-white shadow-lg rounded-2xl h-1/2 sm:h-fit sm:inset-auto">
        <div className="mb-4">
            <div className="flex justify-end">
                <button className='px-2 py-2 text-gray-700 rounded-full hover:text-gray-900 hover:bg-gray-300' onClick={closeModal}><HiXMark className="w-6 h-6" /></button>
            </div>
          {illustration && (
            <div className="mb-4">
              <img src={illustration} alt="Illustration" className="w-full h-auto" />
            </div>
          )}
          {title && <h1 className="mb-2 text-lg font-bold text-neutral-900">{title}</h1>}
          {description && <p className="mb-4 text-gray-700">{description}</p>}
          {children}
        </div>
        <div className="flex justify-end space-x-2">
          <Button onClick={closeModal} variant='secondary'>Tutup</Button>
          {footer}
        </div>
      </div>
    </div>
  );
};
