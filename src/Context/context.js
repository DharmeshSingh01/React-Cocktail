import React, { useState, useContext, useEffect, createContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTearm, setSearchTearm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTearm}`);
      const data = await response.json();
      //console.log(data.drinks);
      const { drinks } = data;
      if (drinks) {
        // console.log(drinks);
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchTearm]);
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTearm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
