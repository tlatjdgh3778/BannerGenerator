import React from 'react';
import SetInputText from 'components/Main/SetUp/SetInputText';
import SetColor from 'components/Main/SetUp/SetColor';
import SetFontStyle from 'components/Main/SetUp/SetFontStyle';
import DownloadBtn from 'components/Main/SetUp/DownloadBtn';
import * as S from './SetUp.style';

const SetUp = () => {
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