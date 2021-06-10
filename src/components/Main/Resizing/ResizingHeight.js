import React, { useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core';
import { SizingContext } from 'contexts/sizing';

const CutstomTextField = styled(TextField)`
    background-color: white;
`;

const ResizingHeight = () => {
    const { state, actions } = useContext(SizingContext);

    return(
        <StylesProvider injectFirst>
        <CutstomTextField 
        label="HEIGHT"
        value={state.height}
        variant="outlined"
        onChange={e => {
            actions.setHeight(e.target.value);
        }}>
        </CutstomTextField>
        </StylesProvider>
    );
}
export default ResizingHeight;