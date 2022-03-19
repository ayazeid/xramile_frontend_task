import React ,{useEffect,useState}from 'react'
import './ProductList.css'
import data from '../../data/db.json'
import ProductCard from './ProductCard.js'
// Products list
// List of some products with images, title, price
// Pagination
// Client side pagination to move between the products

function ProductList() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        setProducts(data['products'])    
    }, []);
  return (
    <div id="products-grid">{products.map((product,index)=><ProductCard key={index} product={product}/>)}</div>
  )
}

export default ProductList