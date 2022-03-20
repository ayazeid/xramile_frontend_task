import React,{useRef} from 'react'
import Ratings from './Ratings.js'
import ProductDetails from '../productDetails/ProductDetails.js'
import AddToCartButton from '../cart/AddToCartButton.js'
// products with images, title, price
// Add to cart button under each product
// On click on the product, open modal with more details
export default function ProductCard(props) {
    const {product}=props
    const modal=useRef();

    
    const openProductModal=(product)=>{
      modal.current.style.display="block"
    }
  return (
    // name-description-rate-price-reviewsCount-featuredProduct-featuredPhoto-photos
    <>
    <div className="product-card"><img className="products-img" src={product.featuredPhoto} alt="product" />
    <p className="products-title" onClick={()=>openProductModal(product)}>{product.name}</p>
    <div className="products-price-rating">
      <p>
        <b>{product.price}</b>$
      </p>
        <Ratings rating={product.rate}/> 
    </div>
   <AddToCartButton product={product} />
    </div>
    <div className="modal" ref={modal}>
    <ProductDetails product={product} modal={modal}/>
    </div>
    </>
  )
}
