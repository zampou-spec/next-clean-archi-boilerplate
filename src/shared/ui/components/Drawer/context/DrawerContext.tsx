'use client';
import React, { Dispatch, ReactNode, createContext, SetStateAction } from 'react';

export type DrawerProviderProps = {
  children: ReactNode;
};

type State = [boolean, Dispatch<SetStateAction<boolean>>];

export const DrawerContext = createContext<State | undefined>(undefined);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const state = React.useState(false);

  return <DrawerContext.Provider value={state}>{children}</DrawerContext.Provider>;
};
