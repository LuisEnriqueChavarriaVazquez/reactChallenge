import React, { createContext, useReducer, useEffect } from 'react';
import { fetchBanks } from '../services/bankService';

export const BankContext = createContext();

const initialState = {
  banks: [],
  isLoading: true,
  error: null
};

function bankReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        banks: action.payload,
        isLoading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        banks: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export const BankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);

  useEffect(() => {
    fetchBanks()
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  return (
    <BankContext.Provider value={{ state }}>
      {children}
    </BankContext.Provider>
  );
}
