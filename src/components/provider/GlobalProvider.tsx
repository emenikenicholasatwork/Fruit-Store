"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  isAuthOpen: boolean;
  changeAuthVisibility: () => void;
}

interface GlobalProviderType {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderType> = ({ children }) => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  function changeAuthVisibility() {
    setIsAuthOpen((pre) => !pre);
  }
  return (
    <GlobalContext.Provider
      value={{
        isAuthOpen,
        changeAuthVisibility,
      }}
      >
        {children}
    </GlobalContext.Provider>
  );
};

export function useGlobal(): GlobalContextType {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}
