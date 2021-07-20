import React, { useState, useContext } from 'react';
import { SketchPicker } from 'react-color';
import { StyleContext } from 'contexts/style';
import { IconButton } from "@material-ui/core";
import * as S from './SetColor.style';

const SetColor = () => {
    console.log('SetColor Render');
    const { fontColor, bgColor } = useContext(StyleContext).state;
    const { setFontColor, setBgColor } = useContext(StyleContext).actions;

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
                            onChange={updateColor => setFontColor(updateColor.hex)}
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
                            onChange={updateColor => {setBgColor(updateColor.hex)}}
                        />
                    )}
                </S.PickerBox>
            </S.ColorContainer>
        </>
    );
}


export default SetColor;