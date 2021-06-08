import React from 'react';
import styled from 'styled-components';
import SetInputText from 'components/Main/SetUp/SetInputText';
import SetColor from 'components/Main/SetUp/SetColor';
import SetFontStyle from 'components/Main/SetUp/SetFontStyle';
import DownloadBtn from 'components/Main/SetUp/DownloadBtn';

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