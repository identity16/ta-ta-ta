import { createContext, useState } from 'react';

const initialState = {
  shown: false,
  setShownFlag: () => {},
};

export const SplashContext = createContext(initialState);

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SplashProvider = ({ children }: ProviderProps): JSX.Element => {
  const [shown, setShown] = useState<boolean>(initialState.shown);
  const setShownFlag = (): void => {
    setShown(true);
  };

  return (
    <SplashContext.Provider
      value={{
        shown,
        setShownFlag,
      }}
    >
      {children}
    </SplashContext.Provider>
  );
};
