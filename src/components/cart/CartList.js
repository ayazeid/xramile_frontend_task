import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import Message from "../message/Message.js";
import CartItem from "./CartItem.js";
function CartList() {
  const { count, cartProducts } = useContext(CartContext);
  if (!count) {
    return <Message content="Cart is empty!" />;
  }
  return (
    <div>
      {cartProducts.map((product, index) => (
        <CartItem key={index} item={product} />
      ))}
    </div>
  );
}

export default CartList;
