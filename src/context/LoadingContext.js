import React, { createContext, useState } from "react";

//1-createContext
export const LoadingContext = createContext();

//2-create ContextProvider component
export const LoadingContextProvider = ({ children }) => {
  //3- add state value to the provider children
  const [is_loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ is_loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
