'use client';
import { useContext } from 'react';
import { DrawerContext } from './DrawerContext';

const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawerContext should be called within a DrawerProvider');
  }

  return context;
};

export { useDrawerContext };
