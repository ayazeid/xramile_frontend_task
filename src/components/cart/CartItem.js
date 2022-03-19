import React from 'react'
import './Cart.css'
function CartItem(props) {
    const {item}=props
  return (
    <div className="menu"><ul><li className="flex"><img src={item.featuredPhoto} alt="product" className="cartItem-img"/><p>{item.name}</p><p>{item.price}$</p></li></ul></div>
  )
}

export default CartItem