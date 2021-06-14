import React from 'react';
import HeaderTitle from 'components/Header/HeaderTitle';
import * as S from './Header.style';

const Header = () => {
    return(
        <S.HeaderContainer>
            <HeaderTitle></HeaderTitle>
        </S.HeaderContainer>
    )
}

export default Header;
