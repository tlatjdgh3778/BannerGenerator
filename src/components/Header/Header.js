import React from 'react';
import styled from 'styled-components';
import HeaderTitle from 'components/Header/HeaderTitle';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: bold;
    justify-content: center;
    padding: 1.5rem;
    border-bottom: 1px solid #C2B7DA;

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.xl};
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
