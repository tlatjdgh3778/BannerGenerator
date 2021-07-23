import React from 'react';
import Banner from 'components/Main/Banner/Banner';
import Resizing from 'components/Main/Resizing/Resizing';
import SetUp from 'components/Main/SetUp/SetUp';
import * as S from 'components/Main/Main.style';

const Main = () => {
    console.log('Main Render');
    return(
        <S.MainContainer>
            <Resizing></Resizing>
            <Banner></Banner>
            <SetUp></SetUp>
        </S.MainContainer>  
    )
}
export default Main;
