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
max-width: 100%;
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto 10px auto;
  box-shadow: -1px 1px 7px 2px rgba(0,0,0,0.75);
  @media screen and (min-width: 600px){
    float: left;
    margin: 0 15px 0 0;
  }
`;
export const SliderWrapper = styled.div`
  display: none;
    @media screen and (min-width: 1000px){
      display: initial;
    }
  `;


export const Paper = styled.div`
  max-width: 800px;
  width: 90%;
  height: auto;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
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
  height: 170px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: inline-block;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.randomstyle && props.randomstyle.color };

  transform: ${props => props.randomstyle && `rotate(${props.randomstyle.rotate}deg )`};
  &:hover {
    transform: scale(1.05);
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
