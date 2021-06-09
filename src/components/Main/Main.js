import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from 'components/Main/Banner/Banner';
import Resizing from 'components/Main/Resizing/Resizing';
import SetUp from 'components/Main/SetUp/SetUp';
import { SizingProvider } from 'contexts/sizing';
import { InputProvider } from 'contexts/input';
import { StyleProvider } from 'contexts/style';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    height: 100%;
`;

const Main = () => {

    return(
        <StyleProvider>
        <InputProvider>
        <SizingProvider>
            <MainContainer>
                <Resizing></Resizing>
                <Banner></Banner>
                <SetUp></SetUp>
            </MainContainer>
        </SizingProvider>
        </InputProvider>
        </StyleProvider>   
    )
}
export default Main;
