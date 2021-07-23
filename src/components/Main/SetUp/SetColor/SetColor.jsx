import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { IconButton } from "@material-ui/core";
import * as S from './SetColor.style';
import { connect } from 'react-redux';
import { changeFontColor, changeBgColor } from 'redux/index';

const SetColor = ({ fontColor, bgColor, changeFontColor, changeBgColor }) => {
    console.log('SetColor Render');

    const [showFontPicker, setShowFontPicker] = useState(false);
    const [showBgPicker, setShowBgPicker] = useState(false);

    return(
        <>
            <S.ColorContainer>
                <S.PickerBox>
                    <IconButton 
                    onClick={() => setShowFontPicker(showFontPicker => !showFontPicker)}
                    >
                        <S.BorderColorOutlinedIcon 
                        style={{ color: `${fontColor}`,
                        outline:'solid', fontSize: '3rem' }}
                        />
                    </IconButton>
                    {showFontPicker && (
                        <SketchPicker
                            color={fontColor}
                            onChange={updateColor => changeFontColor(updateColor.hex)}
                        />
                    )}
                </S.PickerBox>
                <S.PickerBox>
                    <IconButton onClick={() => setShowBgPicker(showBgPicker => !showBgPicker)}>
                        <S.FormatColorFillOutlinedIcon 
                        style={{ color: `${bgColor}`,
                    outline:'solid', fontSize: '3rem' }}
                        />
                    </IconButton>
                    {showBgPicker && (
                        <SketchPicker
                            color={bgColor}
                            onChange={updateColor => changeBgColor(updateColor.hex)}
                        />
                    )}
                </S.PickerBox>
            </S.ColorContainer>
        </>
    );
}

const mapStateToProps = ({ style }) => {
    return {
        fontColor: style.fontColor,
        bgColor: style.bgColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFontColor: (color) => dispatch(changeFontColor(color)),
        changeBgColor: (color) => dispatch(changeBgColor(color))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetColor);