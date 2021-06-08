import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core';
import { SizingConsumer } from 'contexts/sizing';

const CutstomTextField = styled(TextField)`
    background-color: white;
`;

const ResizingHeight = () => {
    // const [height, setHeight] = useState(360);

    // const onHeightValue = e => {
    //     e.preventDefault();
    //     setHeight(Number(e.target.value));
    // };
    
    return(
        <SizingConsumer>
            {({ state, actions })=>(
                <StylesProvider injectFirst>
                <CutstomTextField 
                label="HEIGHT"
                value={state.height}
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
export default ResizingHeight;