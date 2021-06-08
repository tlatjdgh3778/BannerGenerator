import React from 'react';
import styled from 'styled-components';
import { InputConsumer } from 'contexts/input';

const SetInputText = () => {
    return(
        <InputConsumer>
            {({ state, actions })=>(
                <input 
                type="text"
                value={state.text}
                onChange={e => {
                    actions.setText(e.target.value);
                }}>
                </input>
            )}
        </InputConsumer>
    );
}

export default SetInputText;