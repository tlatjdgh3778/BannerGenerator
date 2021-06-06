import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    border: 1px solid blue;
    width: 300px;
    height: 300px;
`;
const Banner = () => {
    return(
        <BannerContainer>This is Banner</BannerContainer>
    );
}
export default Banner;