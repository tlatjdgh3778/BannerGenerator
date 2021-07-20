import React, { useContext } from 'react';
import { InputContext } from 'contexts/input';
import * as S from './SetInputText.style';

const SetInputText = () => {
    console.log('SetInputText Render');
    const { text } = useContext(InputContext).state;
    const { setText } = useContext(InputContext).actions;
    
    return(
        <S.CutstomTextField 
            placeholder="Input Text Here"
            value={text}
            onChange={e => {
                setText(e.target.value);
        }}>
        </S.CutstomTextField>
    );
}

export default SetInputText;