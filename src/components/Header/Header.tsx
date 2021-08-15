import React from 'react';
import * as S from './Header.style';

const Header = () => {
    console.log('Header Render');
    return(
        <S.HeaderContainer>
            <div>BannerGenerator</div>
        </S.HeaderContainer>
    );
}

export default Header;
