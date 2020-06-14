import styled from "styled-components";

export const MarkdownList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const FloatingHeader = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: ${(props) => props.theme.color};
`;

export const StyledFigure = styled.div`
  padding-top: 6px;
  padding-left: 56px;
  padding-right: 16px;
`;
export const Portrait = styled.img`
  width: 200px;
  height: auto;
  align-self: flex-start;
  float: left;
  margin: 0 10px 0 0;
  box-shadow: -1px 1px 7px 2px rgba(0,0,0,0.75);
`;

export const Paper = styled.div`
  width: 600px;
  height: auto;
  position: relative;
  margin: 20px auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #fefabc linear-gradient(150deg,#efec88 0%,#fefabc 100%);
  box-shadow: 0px 0px 5px 0px #888;

  &::before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 40px;
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

export const Pattern = styled.div`
  height: 100%;
  background-image: repeating-linear-gradient(rgba(0,0,0,0) 0px, rgba(0,0,0,0) 24px, teal 25px);
`;
export const PaperContent = styled.div`
  
  line-height: 25px;
  font-family: "Dancing Script", cursive;
  font-size: 19px;
  letter-spacing: 1px;
  word-spacing: 5px;
  color: black;
`;

export const PostIt = styled.div`
  margin: 0.5rem;
  width: 170px;
  height: 150px;
  padding: 25px 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  transition: all 0.3s ease;

  background: ${props => props.randomstyle && props.randomstyle.color };
  ${props => console.log(props.randomstyle)}

  transform: ${props => props.randomstyle && `rotate(${props.randomstyle.rotate}deg )`};
  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.00);
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0;
    height: 40px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -4px;
    width: 100%;
    height: 140px;
    background-image: linear-gradient(173deg,
      rgba(0, 0, 0, 0) 92%,
      rgba(0, 0, 0, 0.4) 100%
    ); 
    transform: rotate(6deg);
    z-index: -1;
    filter: blur(2px);
  }

   h1, p {
  font-family: 'Indie Flower', cursive;
  font-size: 1.5em;
  text-align:center;
  margin: 0.5em 0 0;
  line-height:1.2em;
  font-weight:bold;
  color:#036;
}
p{
  font-size:1.1em;
  margin: 0rem 0;
}
`;
