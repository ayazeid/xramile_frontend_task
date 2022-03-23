import React, { useEffect, useState, useContext } from "react";
import ProductList from "./ProductList.js";
import Paginator from "../paginator/Paginator.js";
import { LoadingContext } from "../../context/LoadingContext.js";
import { usePagination } from "../../hooks/usePagination";
import Message from "../message/Message.js";
function ProductsPage() {
  const [pagesProducts, setPagesProducts] = useState({});
  const [pagesNumber, setPagesNumber] = useState(0);
  const { is_loading, setLoading } = useContext(LoadingContext);
  const paginate = usePagination();

  useEffect(() => {
    setLoading(true);
    fetch("./data/db.json")
      .then((res) => res.json())
      .then((data) => {
        let paginate_data = paginate.paginationHandler(data.products, 3);
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
    return <Message content="Loading........." />;
  }
  return (
    <>
      <ProductList pagesProducts={pagesProducts} />
      <Paginator pages={pagesNumber} />
    </>
  );
}

export default ProductsPage;
