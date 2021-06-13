import React, { useContext } from 'react';
import styled from 'styled-components';
import { InputContext } from 'contexts/input';
import TextField from '@material-ui/core/TextField';

const CutstomTextField = styled(TextField)`
    background-color: white;
    margin: 1rem 0;
`;

const SetInputText = () => {
    const { state, actions } = useContext(InputContext);
    
    return(
        <CutstomTextField 
            placeholder="Input Text Here"
            value={state.text}
            onChange={e => {
                actions.setText(e.target.value);
        }}>
        </CutstomTextField>
    );
}

export default SetInputText;