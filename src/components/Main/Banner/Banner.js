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

            ctx.font = "30px Arial";
            const x = canvas.width / 2;
            const y = canvas.height / 2;

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);
            ctx.fill();

            ctx.textAlign = "center";
            ctx.fillStyle = fontColor;
            ctx.fillText(text, x, y);
    }, [
        text,
        height,
        width,
        fontColor,
        bgColor,
    ])
    return(
        <canvas
            ref={canvasRef}
            className='canvasBanner'
            width={width}
            height={height}
        ></canvas>
    );
}
export default Banner;
{/* <InputConsumer>
                {({ state }) => (
                    <>
                    <div>{state.text}</div>
                    </>
                )}
            </InputConsumer>
            <SizingConsumer>
                {({ state }) => (
                    <>
                    <div>WIDTH : {state.width}</div>
                    <div>HEIGHT : {state.height}</div>
                    </>
                )}
            </SizingConsumer>
            <StyleConsumer>
                {({ state }) => (
                    <>
                    <div>fontColor : {state.fontColor}</div>
                    <div>bgColor : {state.bgColor}</div>
                    <div>fontStyle : {state.fontStyle}</div>
                    <div>fontSize : {state.fontSize}</div>
                    </>
                )}
            </StyleConsumer> */}