import React, { useEffect, useState, useContext } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard.js";
import { PaginationContext } from "../../context/PaginationContext.js";

function ProductList(props) {
  const { pagesProducts } = props;
  const { currentPage } = useContext(PaginationContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const pages_number = Object.keys(pagesProducts).length;
    if (pages_number) {
      setProducts(() => {
        return [...pagesProducts[currentPage]];
      });
    }
  }, [currentPage, pagesProducts]);
  return (
    <>
      <div id="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
