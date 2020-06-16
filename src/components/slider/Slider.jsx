import React from "react";
import "react-multi-carousel/lib/styles.css";
import  {StyledCarousel} from "./styles"
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 0,
    },
    items: 1,
  },
};
const Slider = ({ children }) => {
  return (
    <StyledCarousel
      additionalTransfrom={0}
      autoPlay={true}
      autoPlaySpeed={5000}
      arrows={false}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </StyledCarousel>
  );
};
export default Slider;
