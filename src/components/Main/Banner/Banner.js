import React from 'react';
import styled from 'styled-components';
import { SizingConsumer } from 'contexts/sizing';
import { InputConsumer } from 'contexts/input';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    border: 1px solid blue;
    width: 300px;
    height: 300px;
`;
const Banner = () => {
    return(
        <BannerContainer>
            <InputConsumer>
                {({ state }) => (
                    <>
                    <div>{state.text}</div>
                    </>
                )}
            </InputConsumer>
            <SizingConsumer>
                {({ state }) => (
                    <>
                    <div>WIDTH : {state.width}</div>
                    <div>HEIGHT : {state.height}</div>
                    </>
                )}
            </SizingConsumer>
        </BannerContainer>
    );
}
export default Banner;