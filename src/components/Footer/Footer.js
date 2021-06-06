import React from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid white;
    height: 5%;
`;

const Footer = () => {
    return(
        <FooterContainer>Made by SeongHo Shim</FooterContainer>
    )
}

export default Footer;
