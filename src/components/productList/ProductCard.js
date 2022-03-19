import React,{useContext} from 'react'
import Ratings from './Ratings.js'
import {CartContext} from '../../context/CartContext.js'
// products with images, title, price
// Add to cart button under each product
// On click on the product, open modal with more details
export default function ProductCard(props) {
    const {product}=props
    const {updateCart}= useContext(CartContext);
    const addToCartHandle=()=>{
        updateCart(prevList=>{return [...prevList,product]})    
    }
  return (
    // name-description-rate-price-reviewsCount-featuredProduct-featuredPhoto-photos
    <div className="product-card"><img className="products-img" src={product.featuredPhoto} alt="product"/>
    <p className="products-title">{product.name}</p>
    <div className="products-price-rating">
      <p>
        <b>{product.price}</b>$
      </p>
        <Ratings rating={product.rate}/> 
    </div>
    <button className="products-add-to-cart" onClick={()=>addToCartHandle(product)}>Add to cart</button>
    </div>
  )
}
