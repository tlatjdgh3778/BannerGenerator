import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        <FooterContainer>
            <>
            <div>Made by SeongHo Shim</div>
            <IconButton 
            href="https://github.com/tlatjdgh3778/BannerGenerator" 
            target="_blank"
            style={{ color: '#C2B7DA' }}>
                <GitHubIcon />
            </IconButton>
            </>
        </FooterContainer>
    )
}

export default Footer;
