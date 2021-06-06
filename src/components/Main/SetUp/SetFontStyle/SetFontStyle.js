import React from 'react';
import styled from 'styled-components';

const StyleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SetFontStyle = () => {
    return(
        <StyleContainer>
            <div>roboto</div>
            <div>24px</div>
        </StyleContainer>
    );
}
export default SetFontStyle;