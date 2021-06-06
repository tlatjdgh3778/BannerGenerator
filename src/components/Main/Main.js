import React from 'react';
import styled from 'styled-components';
import Banner from './Banner/Banner';
import Resizing from './Resizing/Resizing';
import SetUp from './SetUp/SetUp';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    height: 100%;
`;

const Main = () => {
    return(
        <MainContainer>
            <Resizing></Resizing>
            <Banner></Banner>
            <SetUp></SetUp>
        </MainContainer>
    )
}
export default Main;
