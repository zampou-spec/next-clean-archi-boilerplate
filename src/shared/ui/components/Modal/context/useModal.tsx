import React from 'react';

import { ModalContext } from './ModalContext';

function useModalContext() {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext should be called within a ModalProvider');
  }

  return context;
}

export { useModalContext };
