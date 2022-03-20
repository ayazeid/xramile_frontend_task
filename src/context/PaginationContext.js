import React, { createContext, useState, useEffect ,useRef} from "react";
import {usePaginator} from '../hooks/usePaginator.js'
import data from '../data/db.json'

//1-createContext
export const PaginationContext = createContext();

//2-create ContextProvider component
export const PaginationContextProvider = ({ children }) => {
  //3- add state value to the provider children
  const [currentPage,updateCurrentPage] = useState(1);
  // const [pageProducts,updatePageProduct] = useState([]);
  
  // const products = usePaginator(currentPage);
  // useEffect(() => {
  //   updatePageProduct(()=>{return [...products]})
  // }, [currentPage]);
  const [pageProducts,setPageProducts]=useState([])
  const productsLimit= useRef(3).current
  useEffect(() => {
      setPageProducts(data['products'].splice(currentPage, productsLimit))   
  }, [currentPage]);
  return (
    <PaginationContext.Provider
      value={{currentPage,updateCurrentPage,pageProducts}}
    >
      {children}
    </PaginationContext.Provider>
  );
};
