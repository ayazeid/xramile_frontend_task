import React ,{ useContext} from 'react'
import {CartContext} from '../context/CartContext.js'
import CartList from '../components/cart/CartList.js'
import {usePriceSum} from '../hooks/usePriceSum.js'
import CheckoutSummery from '../components/cart/CheckoutSummery.js'
function CartPage() {
  const {cartProducts}= useContext(CartContext);
  const total_price = usePriceSum(cartProducts)
  return (
    <div className="container">
    <h3>Order</h3>
    <CartList/> 
    <CheckoutSummery total={total_price}/>
    </div>

 )
}

export default CartPage