'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import InputField from './InputField';

const SomeComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Test Modal</Button>
      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        title="Pakai Promo"
        footer={
          <div>
            <Button>Pakai</Button>
          </div>
        }
      >
        <p>Pakai promo dan dapatkan diskon 10%</p>
        <InputField></InputField>

        
      </Modal>
    </div>
  );
};

export default SomeComponent;