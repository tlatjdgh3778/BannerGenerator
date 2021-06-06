import React from 'react';
import styled from 'styled-components';
import SetInputText from './SetInputText/SetInputText';
import SetColor from './SetColor/SetColor';
import SetFontStyle from './SetFontStyle/SetFontStyle';
import DownloadBtn from './BannerDownload/DownloadBtn';

const SetUpContainer = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

const SetUp = () => {
    return(
        <SetUpContainer>
            <SetInputText></SetInputText>
            <SetColor></SetColor>
            <SetFontStyle></SetFontStyle>
            <DownloadBtn></DownloadBtn>
        </SetUpContainer>
    );
}
export default SetUp;