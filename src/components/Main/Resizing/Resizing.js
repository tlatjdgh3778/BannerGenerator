import React, { useState } from 'react';
import styled from 'styled-components';
import ResizingWidth from 'components/Main/Resizing/ResizingWidth';
import ResizingHeight from 'components/Main/Resizing/ResizingHeight';

const ResizingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
    border: 1px solid blue;
    padding: 1rem 0;

    ${(props) => props.theme.device.Tablet} {
        width: 480px;
    }

    ${(props) => props.theme.device.Mobile} {
        width: 320px;
    }
`;

const Resizing = () => {

    return(
        <ResizingContainer>
            <ResizingWidth></ResizingWidth>
            <ResizingHeight></ResizingHeight>
        </ResizingContainer>
    );
}

export default Resizing;