import React, { useContext } from 'react';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';
import * as S from './ResizingHeight.style';

const ResizingHeight = () => {
    const { state, actions } = useContext(SizingContext);

    return(
        <StylesProvider injectFirst>
        <S.CutstomTextField 
        label="HEIGHT"
        value={state.height}
        variant="outlined"
        onChange={e => {
            actions.setHeight(e.target.value);
        }}>
        </S.CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingHeight;