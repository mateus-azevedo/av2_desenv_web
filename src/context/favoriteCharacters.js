import React, { useState, createContext } from "react";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [characters, setCharacters] = useState(null);

  return (
    <Context.Provider value={{ characters, setCharacters }}>
      {children}
    </Context.Provider>
  );
};
