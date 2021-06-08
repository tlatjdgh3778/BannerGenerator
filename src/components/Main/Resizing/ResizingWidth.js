import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core';
import { SizingConsumer } from 'contexts/sizing';

const CutstomTextField = styled(TextField)`
    background-color: white;
`;

const ResizingWidth = () => {
    // const [width, setWidth] = useState(700);

    // const onWidthValue = e => {
    //     e.preventDefault();
    //     setWidth(Number(e.target.value));
    // };
    return(
        <SizingConsumer>
        {({ state, actions })=>(
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
        )}
    </SizingConsumer>
    );
}
export default ResizingWidth;