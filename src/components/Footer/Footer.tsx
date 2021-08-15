import React from 'react';
import { IconButton } from '@material-ui/core';
import * as S from './Footer.style';

const Footer = () => {
    console.log('Footer Render');
    
    return(
        <S.FooterContainer>
            <>
            <div>Made by SeongHo Shim</div>
            <IconButton 
            href="https://github.com/tlatjdgh3778/BannerGenerator" 
            target="_blank"
            style={{ color: '#C2B7DA' }}>
                <S.GitHubIcon />
            </IconButton>
            </>
        </S.FooterContainer>
    );
}

export default Footer;
