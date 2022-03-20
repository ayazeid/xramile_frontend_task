import React,{useContext} from 'react'
import {CartContext} from '../../context/CartContext.js'

function AddToCartButton(props) {
    const {product}=props
    const {updateCart}= useContext(CartContext);

    const addToCartHandle=()=>{
        updateCart(prevList=>{return [...prevList,product]})    
    }
  return (
    <button className="products-add-to-cart" onClick={()=>addToCartHandle(product)}>Add to cart</button>
  )
}

export default AddToCartButton