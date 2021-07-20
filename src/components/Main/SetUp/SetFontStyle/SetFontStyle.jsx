import React, { useContext } from 'react';
import { StyleContext } from 'contexts/style';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as S from './SetFontStyle.style';

const SetFontStyle = () => {
    console.log('SetFontStyle Render');
    const { state, actions } = useContext(StyleContext);
    const fonts = ['Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Do Hyeon', 'Jua'];
    const fontSize = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    return(
        <S.StyleContainer>
                <>
                <FormControl>
                    <Select  
                    value={state.fontStyle}
                    onChange={e => {
                        actions.setFontStyle(e.target.value);}}>
                        {fonts.map((font, idx) => {
                            return <MenuItem key={idx} value={font}>{font}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select 
                    value={state.fontSize}
                    onChange={e => actions.setFontSize(e.target.value)}>
                        {fontSize.map((size, idx) => {
                            return <MenuItem key={idx} value={size}>{size}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </>
        </S.StyleContainer>
    );
}
export default SetFontStyle;