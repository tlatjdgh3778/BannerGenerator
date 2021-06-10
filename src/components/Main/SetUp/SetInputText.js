import React, { useContext } from 'react';
import styled from 'styled-components';
import { InputContext } from 'contexts/input';

const SetInputText = () => {
    const { state, actions } = useContext(InputContext);
    
    return(
        <input 
        type="text"
        value={state.text}
        onChange={e => {
            actions.setText(e.target.value);
        }}>
        </input>
    );
}

export default SetInputText;