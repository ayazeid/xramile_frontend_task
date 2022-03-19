import React ,{useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartList from '../cart/CartList.js'
import { Link,useLocation } from "react-router-dom";
import {CartContext} from '../../context/CartContext.js'

function NavCartMenu() {
    const location =useLocation();
    const {count}= useContext(CartContext);

  return (
    <div className="dropdown">
      <button className={location.pathname === "/cart"?"active dropbtn":"dropbtn"}>
      <span>{count} </span>
      <ShoppingCartIcon  className="cartIcon"/>
      </button>
      <div className="dropdown-content">
      <CartList/>
      <Link to="/cart" >Checkout</Link>
      </div>
    </div> 
  )
}

export default NavCartMenu