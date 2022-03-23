import React, { useState, useEffect, useContext } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Paginator.css";
import { PaginationContext } from "../../context/PaginationContext.js";
import { useValueWithinRange } from "../../hooks/useValueWithinRange";

function Paginator(props) {
  const { pages } = props;
  const { updateCurrentPage } = useContext(PaginationContext);
  const [pageNumber, setPageNumber] = useState(1);
  const checkValue = useValueWithinRange();

  useEffect(() => {
    updateCurrentPage(pageNumber);
  }, [pageNumber, updateCurrentPage]);

  const setPageHandle = (page) => {
    setPageNumber(page);
  };
  const prevPageHandle = () => {
    const count = pageNumber - 1;
    const page_number = checkValue.valueWithinRange(count, 1, pages);
    setPageNumber(page_number);
  };
  const nextPageHandle = () => {
    const count = pageNumber + 1;
    const page_number = checkValue.valueWithinRange(count, 1, pages);
    setPageNumber(page_number);
  };

  return (
    <div className="pagination">
      <span>
        <NavigateBeforeIcon
          onClick={() => prevPageHandle()}
          className={pageNumber === 1 ? "hide" : ""}
        />
      </span>

      {[...Array(pages)].map((el, index) => (
        <span
          key={index}
          className={index + 1 === pageNumber ? "active" : ""}
          onClick={() => setPageHandle(index + 1)}
        >
          {index + 1}
        </span>
      ))}
      <span>
        <NavigateNextIcon
          onClick={() => nextPageHandle()}
          className={pageNumber === pages ? "hide" : ""}
        />
      </span>
    </div>
  );
}

export default Paginator;
