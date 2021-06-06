import React from 'react';
import styled from 'styled-components';
import ResizingWidth from './ResizingWidth/ResizingWidth';
import ResizingHeight from './ResizingHeight/ResizingHeight';

const ResizingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15rem;
    border: 1px solid blue;
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