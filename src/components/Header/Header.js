import React from 'react';
import styled from 'styled-components';
import HeaderTitle from 'components/Header/HeaderTitle';

const HeaderContainer = styled.div`
    display: flex;
    border: 1px solid white;
    height: 5%;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: bold;
    justify-content: center;

    ${(props) => props.theme.device.Mobile} {
        font-size: ${(props) => props.theme.fontSize.xxl};
        height: 10%;
    }
`;
const Header = () => {
    return(
        <HeaderContainer>
            <HeaderTitle></HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;
