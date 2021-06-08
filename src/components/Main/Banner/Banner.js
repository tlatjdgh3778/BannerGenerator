import React from 'react';
import styled from 'styled-components';
import { SizingConsumer } from 'contexts/sizing';

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
            <SizingConsumer>
                {({ state }) => (
                    <>
                    <div>{state.width}</div>
                    <div>{state.height}</div>
                    </>
                )}
            </SizingConsumer>
        </BannerContainer>
    );
}
export default Banner;