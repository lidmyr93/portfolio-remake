import styled, { keyframes } from "styled-components";

const slideInTop = keyframes`
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutBottom = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d( 0, 100%,0);
    transform: translate3d( 0, 100%,0);
  }
`;

const Page = styled.div``;

// apply the correct animation based on the transition state class name.
export const TransitionWrapper = styled(Page)`
  height: 100%;
  width: 100%;
  &.page-enter {
    animation: ${slideInTop} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.2s forwards;
  }
`;
