import React, { useContext } from 'react';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';
import * as S from './ResizingWidth.style';

const ResizingWidth = () => {
    console.log('ResizingWidth Render');
    const { width } = useContext(SizingContext).state;
    const { setWidth } = useContext(SizingContext).actions;

    const resizeWidth = width => {
        setWidth(width);
    };

    return(
        <StylesProvider injectFirst>
            <S.CutstomTextField 
            label="WIDTH"
            value={width}
            variant="outlined"
            onChange={e => resizeWidth(e.target.value)}>
            </S.CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingWidth;