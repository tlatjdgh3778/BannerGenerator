import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SizingConsumer, SizingContext } from 'contexts/sizing';
import { InputConsumer, InputContext } from 'contexts/input';
import { StyleConsumer, StyleContext } from 'contexts/style';
import { useContext } from 'react';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    border: 1px solid blue;
    width: 300px;
    height: 300px;
`;
const Banner = () => {
    const { bgColor, fontColor, fontSize, fontStyle } = useContext(StyleContext).state;
    const { text } = useContext(InputContext).state;
    const { width, height } = useContext(SizingContext).state;

    const canvasRef = useRef(null);

    useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.font = `${fontSize}px ${fontStyle}`;
            const x = canvas.width / 2;
            const y = canvas.height / 2;

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);
            ctx.fill();

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = fontColor;
            ctx.fillText(text, x, y);
    }, [
        text,
        height,
        width,
        fontSize,
        fontStyle,
        fontColor,
        bgColor,
    ])
    return(
        <canvas
            ref={canvasRef}
            id='canvasBanner'
            width={width}
            height={height}
        ></canvas>
    );
}
export default Banner;