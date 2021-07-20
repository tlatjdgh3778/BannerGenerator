import React, { useContext } from 'react';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';
import * as S from './ResizingHeight.style';

const ResizingHeight = () => {
    console.log('ResizingHeight Render');
    const { height } = useContext(SizingContext).state;
    const { setHeight } = useContext(SizingContext).actions;

    const resizeHeight = height => {
        setHeight(height);
    };

    return(
        <StylesProvider injectFirst>
        <S.CutstomTextField 
        label="HEIGHT"
        value={height}
        variant="outlined"
        onChange={e => resizeHeight(e.target.value)}>
        </S.CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingHeight;