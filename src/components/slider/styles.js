import styled from "styled-components";
import Carousel from "react-multi-carousel";
export const SliderImage = styled.div`
  background: ${(props) => props.background && `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;


export const StyledCarousel = styled(Carousel)`
  display: none;
  @media screen and (min-width: 1100px){
    display: flex;
  }
`;