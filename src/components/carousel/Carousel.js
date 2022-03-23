import React, { useState } from "react";
import "./Carousel.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useValueWithinRange } from "../../hooks/useValueWithinRange";
function Carousel(props) {
  const { images } = props;
  const [view, setView] = useState(0);
  const checkValue = useValueWithinRange();

  const sliderHandle = (index) => {
    const max_index = images.length - 1;
    const slide_index = checkValue.valueWithinRange(index, 0, max_index);
    setView(slide_index);
  };

  return (
    <>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            className={index === view ? "slides show fade" : "slides fade"}
            key={index}
          >
            <div className="numbertext">
              {index + 1}/{images.length}
            </div>
            <div>
              <NavigateBeforeIcon onClick={() => sliderHandle(index - 1)} />
              <NavigateNextIcon onClick={() => sliderHandle(index + 1)} />
            </div>
            <img className="slider-image" src={image} alt="product" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
