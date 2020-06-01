import styled from "styled-components";

export const SliderImage = styled.div`
  background: ${(props) => props.background && `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;
