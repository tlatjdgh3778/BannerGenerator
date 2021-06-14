import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { StyleConsumer } from 'contexts/style';
import { IconButton } from "@material-ui/core";
import * as S from './SetColor.style';

const SetColor = () => {
    const [fontColor, setFontColor] = useState('#000');
    const [bgColor, setBgColor] = useState('#C2B7DA');
    const [showFontPicker, setShowFontPicker] = useState(false);
    const [showBgPicker, setShowBgPicker] = useState(false);

    return(
        <StyleConsumer>
            {({ state, actions })=>(
                <S.ColorContainer>
                <div style={{ position: 'relative' }}>
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
                            onChange={updateColor => {
                                actions.setFontColor(updateColor.hex);
                                setFontColor(updateColor.hex);
                            }
                            }
                        />
                    )}
                </div>
                <div style={{ position: 'relative' }}>
                    <IconButton onClick={() => setShowBgPicker(showBgPicker => !showBgPicker)}>
                        <S.FormatColorFillOutlinedIcon 
                        style={{ color: `${bgColor}`,
                    outline:'solid', fontSize: '3rem' }}
                        />
                    </IconButton>
                    {showBgPicker && (
                        <SketchPicker
                            color={bgColor}
                            onChange={updateColor => {
                                actions.setBgColor(updateColor.hex);
                                setBgColor(updateColor.hex);
                            }
                            }
                        />
                    )}
                </div>
                </S.ColorContainer>
            )}
        </StyleConsumer>
    );
}


export default SetColor;