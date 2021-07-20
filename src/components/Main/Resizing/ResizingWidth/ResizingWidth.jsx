import React, { useContext } from 'react';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';
import * as S from './ResizingWidth.style';

const ResizingWidth = () => {
    const { state, actions } = useContext(SizingContext);

    return(
        <StylesProvider injectFirst>
            <S.CutstomTextField 
            label="WIDTH"
            value={state.width}
            variant="outlined"
            onChange={e => {
                actions.setWidth(e.target.value);
            }}>
            </S.CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingWidth;