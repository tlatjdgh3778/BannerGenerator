import React from 'react';
import SetInputText from './SetInputText/SetInputText';
import SetColor from './SetColor/SetColor';
import SetFontStyle from './SetFontStyle/SetFontStyle';
import DownloadBtn from './DownloadBtn/DownloadBtn';
import * as S from './SetUp.style';

const SetUp = () => {
    console.log('SetUp Render');
    return(
        <S.SetUpContainer>
            <SetInputText></SetInputText>
            <SetColor></SetColor>
            <SetFontStyle></SetFontStyle>
            <DownloadBtn></DownloadBtn>
        </S.SetUpContainer>
    );
}
export default SetUp;