import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Banner = () => {
    console.log("Banner Render");
    const text = useSelector(({ input }) => input.text);
    const width = useSelector(({ sizing }) => sizing.width);
    const height = useSelector(({ sizing }) => sizing.height);
    const fontColor = useSelector(({ style }) => style.fontColor);
    const bgColor = useSelector(({ style }) => style.bgColor);
    const fontStyle = useSelector(({ style }) => style.fontStyle);
    const fontSize = useSelector(({ style }) => style.fontSize);

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

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
    }, [text, height, width, fontSize, fontStyle, fontColor, bgColor]);
    return <canvas ref={canvasRef} id="canvasBanner" width={width} height={height}></canvas>;
};

export default Banner;
