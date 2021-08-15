import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";

const Banner = () => {
    console.log("Banner Render");
    const text = useSelector((state: RootState) => state.input.text);
    const width = useSelector((state: RootState) => state.sizing.width);
    const height = useSelector((state: RootState) => state.sizing.height);
    const fontColor = useSelector((state: RootState) => state.style.fontColor);
    const bgColor = useSelector((state: RootState) => state.style.bgColor);
    const fontStyle = useSelector((state: RootState) => state.style.fontStyle);
    const fontSize = useSelector((state: RootState) => state.style.fontSize);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        }
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
