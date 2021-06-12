import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid white;
    height: 5%;
    border-top: 1px solid #C2B7DA;
`;

const Footer = () => {
    return(
        <FooterContainer>Made by SeongHo Shim</FooterContainer>
    )
}

export default Footer;
