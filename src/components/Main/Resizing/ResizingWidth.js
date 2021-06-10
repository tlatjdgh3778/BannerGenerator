import React, { useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';

const CutstomTextField = styled(TextField)`
    background-color: white;
`;

const ResizingWidth = () => {
    const { state, actions } = useContext(SizingContext);

    return(
        <StylesProvider injectFirst>
            <CutstomTextField 
            label="WIDTH"
            value={state.width}
            variant="outlined"
            onChange={e => {
                actions.setWidth(e.target.value);
            }}>
            </CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingWidth;