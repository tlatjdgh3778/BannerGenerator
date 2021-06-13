import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { StyleConsumer } from 'contexts/style';
import { IconButton } from "@material-ui/core";
import FormatColorFillOutlinedIcon from '@material-ui/icons/FormatColorFillOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

const ColorContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SetColor = () => {
    const [fontColor, setFontColor] = useState('#000');
    const [bgColor, setBgColor] = useState('#C2B7DA');
    const [showFontPicker, setShowFontPicker] = useState(false);
    const [showBgPicker, setShowBgPicker] = useState(false);

    return(
        <StyleConsumer>
            {({ state, actions })=>(
                <ColorContainer>
                <div style={{ position: 'relative' }}>
                    <IconButton 
                    onClick={() => setShowFontPicker(showFontPicker => !showFontPicker)}
                    >
                        <BorderColorOutlinedIcon 
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
                        <FormatColorFillOutlinedIcon 
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
                </ColorContainer>
            )}
        </StyleConsumer>
    );
}


export default SetColor;