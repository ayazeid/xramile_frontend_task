import React, { createContext, useState } from "react";

//1-createContext
export const PaginationContext = createContext();

//2-create ContextProvider component
export const PaginationContextProvider = ({ children }) => {
  //3- add state value to the provider children
  const [currentPage, updateCurrentPage] = useState(1);
  return (
    <PaginationContext.Provider value={{ currentPage, updateCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
