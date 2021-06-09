import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { StyleConsumer } from 'contexts/style';

const StyleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SetFontStyle = () => {
    const [fontStyle, setFontStyle] = useState("roboto");
    const [fontSize, setFontSize] = useState(14);

    const fontStyleChange = e => {
        setFontStyle(e.target.value);
    }
    const fontSizeChange = e => {
        setFontSize(e.target.value);
    }
    return(
        <StyleContainer>
            <StyleConsumer>
                {({ state, actions })=>(
                <>
                <FormControl>
                    <Select 
                    value={state.fontStyle}
                    onChange={e => actions.setFontStyle(e.target.value)}>
                        <MenuItem value="roboto">roboto</MenuItem>
                        <MenuItem value="noto sans">noto sans</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <Select 
                    value={state.fontSize}
                    onChange={e => actions.setFontSize(e.target.value)}>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                    </Select>
                </FormControl>
                </>
                )}
            </StyleConsumer>
        </StyleContainer>
        
    );
}
export default SetFontStyle;