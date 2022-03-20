import React from 'react'
import ProductList from '../components/productList/ProductList.js'
import Paginator from '../components/paginator/Paginator.js'
function GallaryPage() {
  return (
    <div>
    <ProductList/>
    <Paginator pages={10}/>
    </div>
  )
}

export default GallaryPage