import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as S from './SetFontStyle.style';
import { connect } from 'react-redux';
import { changeFontStyle, changeFontSize } from 'store/moduels/style';

const SetFontStyle = ({ fontStyle, fontSize, changeFontStyle, changeFontSize }) => {
    console.log('SetFontStyle Render');

    const fonts = ['Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Do Hyeon', 'Jua'];
    const fontSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    return(
        <S.StyleContainer>
                <>
                <FormControl>
                    <Select  
                    value={fontStyle}
                    onChange={e => changeFontStyle(e.target.value)}>
                    {fonts.map((font) => {
                        return <MenuItem key={font} value={font}>{font}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select 
                    value={fontSize}
                    onChange={e => changeFontSize(e.target.value)}>
                        {fontSizes.map((size) => {
                            return <MenuItem key={size} value={size}>{size}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </>
        </S.StyleContainer>
    );
}

const mapStateToProps = ({ style }) => {
    return {
        fontStyle: style.fontStyle,
        fontSize: style.fontSize,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFontStyle: (style) => dispatch(changeFontStyle(style)),
        changeFontSize: (size) => dispatch(changeFontSize(size)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetFontStyle);