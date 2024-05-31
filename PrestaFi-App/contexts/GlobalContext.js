import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [stellarWalletAddress, setStellarWalletAddress] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <GlobalContext.Provider value={{ stellarWalletAddress, setStellarWalletAddress, showConfetti, setShowConfetti }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
