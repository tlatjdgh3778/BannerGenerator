import React from 'react';
import Banner from 'components/Main/Banner/Banner';
import Resizing from 'components/Main/Resizing/Resizing';
import SetUp from 'components/Main/SetUp/SetUp';
import { SizingProvider } from 'contexts/sizing';
import { InputProvider } from 'contexts/input';
import { StyleProvider } from 'contexts/style';
import * as S from 'components/Main/Main.style';

const Main = () => {
    return(
        <StyleProvider>
        <InputProvider>
        <SizingProvider>
            <S.MainContainer>
                <Resizing></Resizing>
                <Banner></Banner>
                <SetUp></SetUp>
            </S.MainContainer>
        </SizingProvider>
        </InputProvider>
        </StyleProvider>   
    )
}
export default Main;
