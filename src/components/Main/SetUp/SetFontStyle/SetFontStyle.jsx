import React, { useContext } from 'react';
import { StyleContext } from 'contexts/style';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as S from './SetFontStyle.style';

const SetFontStyle = () => {
    console.log('SetFontStyle Render');
    const { fontStyle, fontSize } = useContext(StyleContext).state;
    const { setFontStyle, setFontSize } = useContext(StyleContext).actions;
    const fonts = ['Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Do Hyeon', 'Jua'];
    const fontSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    return(
        <S.StyleContainer>
                <>
                <FormControl>
                    <Select  
                    value={fontStyle}
                    onChange={e => setFontStyle(e.target.value)}>
                    {fonts.map((font) => {
                        return <MenuItem key={font} value={font}>{font}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select 
                    value={fontSize}
                    onChange={e => setFontSize(e.target.value)}>
                        {fontSizes.map((size) => {
                            return <MenuItem key={size} value={size}>{size}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </>
        </S.StyleContainer>
    );
}
export default SetFontStyle;