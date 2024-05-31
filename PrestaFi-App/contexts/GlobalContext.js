import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [stellarWalletAddress, setStellarWalletAddress] = useState("");

  return (
    <GlobalContext.Provider value={{ stellarWalletAddress, setStellarWalletAddress }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
