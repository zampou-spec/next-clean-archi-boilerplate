import React from "react";

export type ModalProviderProps = {
  children: React.ReactNode;
};

type State = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const ModalContext = React.createContext<State | undefined>(undefined);

export const ModalProvider = ({
  children,
}: ModalProviderProps): JSX.Element => {
  const state = React.useState(false);

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};
