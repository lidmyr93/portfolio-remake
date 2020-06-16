import styled from "styled-components";

export const ModalWrapper = styled.div`
  color: white;
  background: ${(props) => props.theme.cardBackground};
  opacity: 1;
  z-index: 100000000;
  max-height: 80vh;
  width: 90vw;
  position: relative;
  border-radius: 10px;

  @media screen and (min-width: 600px){
    width: 60vw;
  }

  @media screen and (min-width: 1100px){
    width: 50%;
    max-width: 800px;
  }
`;

export const CloseModalButton = styled.div`
  position: absolute;
  background: transparent;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  right: 5px;
  top: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 1100px){
    top: 10px;
    right: 10px;
  }
`;

export const ModalImage = styled.div`
  background: ${(props) => props.background && `url(${props.background})`};
  height: 300px;
  width: 100%;
  background-position: top center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.linearGradient};
  border-bottom: 5px solid ${(props) => props.theme.menuText};
  font-size: 0.8rem;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 0 5px 5px;
  @media screen and (min-width: 1100px){
    padding: 10px 0 10px 10px;
  }
`;

export const TextWrapper = styled.div`
  padding-bottom: 20px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
  letter-spacing: .03em;
  @media screen and (min-width: 1100px){
    width: 60%;
  }
`;
export const StyledExternalLink = styled.a`
  color: black;
  font-size: 2rem;
  background: ${(props) => props.theme.menuText};
  border-radius: 5px;
  min-width: 100px;
  cursor: ${props => props.cursor ? "pointer" : "not-allowed"};
  text-align: center;
  margin-bottom: 5px;

  &:hover {
    color: ${(props) => props.theme.menuText};
    background: ${(props) => props.theme.backgroundLight};
    transform: scale(1.2);
  }
`;

export const LowerProjectWrapper = styled.div`
  padding: 20px 10px;

  @media screen and (min-width: 1100px){
    padding: 30px 20px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LinkWrapper = styled.div`
    width: 50%;
    display:flex;
    justify-content: space-evenly;
    @media screen and (min-width: 1100px){
      flex-direction: column;
  }
`;
