import React from 'react';
import ResizingWidth from './ResizingWidth/ResizingWidth';
import ResizingHeight from './ResizingHeight/ResizingHeight';
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