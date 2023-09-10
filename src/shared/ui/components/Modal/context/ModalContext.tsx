'use client';
import React, { Dispatch, ReactNode, createContext, SetStateAction } from 'react';

export type ModalProviderProps = {
  children: ReactNode;
};

type State = [boolean, Dispatch<SetStateAction<boolean>>];

export const ModalContext = createContext<State | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const state = React.useState(false);

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>;
};
