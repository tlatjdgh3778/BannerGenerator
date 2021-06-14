import React from 'react';
import ResizingWidth from 'components/Main/Resizing/ResizingWidth';
import ResizingHeight from 'components/Main/Resizing/ResizingHeight';
import * as S from './Resizing.style';

const Resizing = () => {
    return(
        <S.ResizingContainer>
            <ResizingWidth></ResizingWidth>
            <ResizingHeight></ResizingHeight>
        </S.ResizingContainer>
    );
}

export default Resizing;