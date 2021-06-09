import React, { useState } from 'react';
import styled from 'styled-components';
import { ChromePicker, SketchPicker } from 'react-color';
import { StyleConsumer } from 'contexts/style';

const ColorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MyButton = styled.button`
    padding: '5px';
    background: '#fff';
    border-radius: '1px';
    box-shadow: '0 0 0 1px rgba(0,0,0,.1)';
    display: 'inline-block';
    cursor: 'pointer';
`;

const SetColor = () => {
    const [fontColor, setFontColor] = useState('#fff');
    const [bgColor, setBgColor] = useState('#fff');
    const [showFontPicker, setShowFontPicker] = useState(false);
    const [showBgPicker, setShowBgPicker] = useState(false);

    return(
        <StyleConsumer>
            {({ state, actions })=>(
                <ColorContainer>
                <div>
                    <button onClick={() => setShowFontPicker(showFontPicker => !showFontPicker)}>
                        FontColor
                    </button>
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
                <div>
                    <button onClick={() => setShowBgPicker(showBgPicker => !showBgPicker)}>
                        BgColor
                    </button>
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