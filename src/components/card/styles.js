import styled, {keyframes} from "styled-components";

const MoveOnHover = keyframes`
    from {
        transform: scale(1.0);
    }

    to {
        transform: scale(1.1);
    }
`;

export const CardImage = styled.div`
    background: url("https://www.fillmurray.com/640/360");
    width: 100%;
    height: 40%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const CardTitle = styled.div`
    background: ${props => props.theme.linearGradient};
    width: 100%;
    height: 20%;
    border-bottom: 5px solid ${props => props.theme.menuText};
    display: flex;
    align-items: center;
`;
export const CardText = styled.div`
    width: 100%;
    height: 80%;
    
`;

export const CardWrapper = styled.div`
    height: 400px;
    width: 400px;
    margin: 10px;
    color: ${props => props.theme.color};
    background: ${props => props.theme.cardBackground};
    overflow: hidden;
    &:hover{
        transform: scale(1.05);
        ${CardImage}{
            animation: ${MoveOnHover} 40s forwards;
        }
    }
    cursor: pointer;
`;
