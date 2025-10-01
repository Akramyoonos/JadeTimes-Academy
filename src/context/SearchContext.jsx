import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
