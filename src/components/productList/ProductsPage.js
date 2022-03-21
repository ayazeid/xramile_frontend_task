import React, { useEffect, useState, useContext } from "react";
import ProductList from "./ProductList.js";
import Paginator from "../paginator/Paginator.js";
import { LoadingContext } from "../../context/LoadingContext.js";
function ProductsPage() {
  const [pagesProducts, setPagesProducts] = useState({});
  const [pagesNumber, setPagesNumber] = useState(0);
  const { is_loading, setLoading } = useContext(LoadingContext);

  const paginationHandler = (list, limit) => {
    let pages_lists = {};
    let page = 1;
    while (list.length) {
      const pageList = list.splice(0, limit);
      pages_lists[page] = pageList;
      page++;
    }
    return pages_lists;
  };

  useEffect(() => {
    setLoading(true);
    fetch("./data/db.json")
      .then((res) => res.json())
      .then((data) => {
        let paginate_data = paginationHandler(data.products, 3);
        setPagesProducts(paginate_data);
      })
      .catch(() => console.log("Error in fetching data"));
  }, []);
  useEffect(() => {
    setPagesNumber(Object.keys(pagesProducts).length);
    if (Object.keys(pagesProducts).length !== 0) {
      setLoading(false);
    }
  }, [pagesProducts]);

  if (is_loading) {
    return <div>Loading......</div>;
  }
  return (
    <>
      <ProductList pagesProducts={pagesProducts} />
      <Paginator pages={pagesNumber} />
    </>
  );
}

export default ProductsPage;
