import React, { useState, useContext, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='Hello'>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
