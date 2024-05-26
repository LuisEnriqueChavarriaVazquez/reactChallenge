import React, { createContext, useState, useEffect } from 'react';
import { fetchBanks } from '../services/bankService';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetchBanks().then(setBanks);
  }, []);

  return (
    <BankContext.Provider value={{ banks }}>
      {children}
    </BankContext.Provider>
  );
}
