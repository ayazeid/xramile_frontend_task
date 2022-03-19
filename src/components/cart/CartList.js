import React ,{ useContext} from 'react'
import {CartContext} from '../../context/CartContext.js'
import CartItem from './CartItem.js'
function CartList() {
    const {count,cartProducts}= useContext(CartContext);
    if(!count){
      return <div className="cart-message">Cart is empty!</div>
    }
    return (
      <div>{cartProducts.map((product,index)=><CartItem key={index} item={product}/>)}</div>
    )
}

export default CartList