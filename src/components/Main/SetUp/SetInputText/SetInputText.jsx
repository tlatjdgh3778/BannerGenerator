import React, { useContext } from 'react';
import { InputContext } from 'contexts/input';
import * as S from './SetInputText.style';

const SetInputText = () => {
    console.log('SetInputText Render');
    const { state, actions } = useContext(InputContext);
    
    return(
        <S.CutstomTextField 
            placeholder="Input Text Here"
            value={state.text}
            onChange={e => {
                actions.setText(e.target.value);
        }}>
        </S.CutstomTextField>
    );
}

export default SetInputText;