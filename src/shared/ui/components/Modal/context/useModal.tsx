'use client';
import { useContext } from 'react';
import { ModalContext } from './ModalContext';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext should be called within a ModalProvider');
  }

  return context;
};

export { useModalContext };
