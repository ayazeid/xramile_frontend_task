import React ,{useEffect,useState,useContext}from 'react'
import './ProductList.css'
import data from '../../data/db.json'
import ProductCard from './ProductCard.js'
import {usePaginator} from '../../hooks/usePaginator.js'
import Paginator from '../paginator/Paginator.js'
import {PaginationContext} from '../../context/PaginationContext.js'
// Products list
// List of some products with images, title, price
// Pagination
// Client side pagination to move between the products

function ProductList(props) {
  const {currentPage,pageProducts}=useContext(PaginationContext)
  // const [products,setProducts]=useState([])
    // useEffect(() => {
    //     setProducts(data['products'])    
    // }, []);
    // const pageProducts = usePaginator(currentPage)
    // useEffect(() => {
    //   setProducts(pageProducts)
    // }, [currentPage]);
    // console.log(currentPage)
    
  return (
    <>
    <div id="products-grid">{pageProducts.map((product,index)=><ProductCard key={index} product={product}/>)}</div>
    <Paginator pages={4}/>
    </>
  )
}

export default ProductList