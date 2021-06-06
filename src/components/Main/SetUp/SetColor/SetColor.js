import React from 'react';
import styled from 'styled-components';

const ColorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SetColor = () => {
    return(
        <ColorContainer>
            <div>fontcolor</div>
            <div>bgcolor</div>
        </ColorContainer>
    );
}
export default SetColor;