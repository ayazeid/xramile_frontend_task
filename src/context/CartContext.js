import React, { createContext, useState, useEffect } from "react";

//1-createContext
export const CartContext = createContext();

//2-create ContextProvider component
export const CartContextProvider = ({ children }) => {
  //3- add state value to the provider children
 
  const [cartProducts,updateCart] = useState([]);
  const [count,updateCount] = useState(0);
  useEffect(() => {  
      updateCount(cartProducts.length)
  }, [cartProducts]);
  return (
    <CartContext.Provider
      value={{ count,updateCount,cartProducts,updateCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

