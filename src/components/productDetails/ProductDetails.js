import React from 'react'
import './ProductDetails.css'
import CloseIcon from '@mui/icons-material/Close';
import Carousel from '../carousel/Carousel.js'
import Ratings from '../productList/Ratings.js'
import AddToCartButton from '../cart/AddToCartButton.js'

function ProductDetails(props) {
    const {product,modal}=props
    const closeProductModal=()=>{
      if(modal.current){
        modal.current.style.display="none"
      } 
    }
  return (
   
    <div className="modal-content">
  
        <CloseIcon onClick={()=>closeProductModal()}/>
    
    <div className="modal-body container">
    <div className="product-info">
     <p><b>Name: </b>
      {product.name}
      </p>
      <p>
      <b>Price: </b>
        <b>{product.price}</b>$
      </p>
      <p><b>Description: </b>{product.description}</p>
      <Ratings rating={product.rate}/> 
      <AddToCartButton product={product}/>
    </div>
    
    </div>
    <div className="container">
    <Carousel images={product.photos}/>
    
    </div>
    </div>
   
  )
}

export default ProductDetails