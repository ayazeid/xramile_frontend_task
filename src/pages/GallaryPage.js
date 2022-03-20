import React from 'react'
import ProductList from '../components/productList/ProductList.js'
import Paginator from '../components/paginator/Paginator.js'
import {PaginationContextProvider} from '../context/PaginationContext.js'
function GallaryPage() {
  return (
    <PaginationContextProvider>
    <ProductList/>
    </PaginationContextProvider>
  )
}

export default GallaryPage