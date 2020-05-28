import styled from "styled-components";
import { Link } from "react-router-dom";
export const MenuWrapper = styled.div`
    width: 100%;
    background: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

export const StyledLink = styled(Link)`
    margin: 5px;
`

export const Social = styled.div`
    display: flex;
`