import React, { useRef } from "react";
import Ratings from "./Ratings.js";
import ProductDetails from "../productDetails/ProductDetails.js";
import AddToCartButton from "../cart/AddToCartButton.js";

export default function ProductCard(props) {
  const { product } = props;
  const modal = useRef();

  const openProductModal = (product) => {
    modal.current.style.display = "block";
  };
  return (
    <>
      <div className="product-card">
        <img
          className="products-img"
          src={product.featuredPhoto}
          alt="product"
        />
        <p className="products-title" onClick={() => openProductModal(product)}>
          {product.name}
        </p>
        <div className="products-price-rating">
          <p>
            <b>{product.price}</b>$
          </p>
          <Ratings rating={product.rate} />
        </div>
        <AddToCartButton product={product} />
      </div>
      <div className="modal" ref={modal}>
        <ProductDetails product={product} modal={modal} />
      </div>
    </>
  );
}
