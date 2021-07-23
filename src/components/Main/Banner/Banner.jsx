import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

const Banner = ({ text, width, height, fontColor, bgColor, fontStyle, fontSize }) => {
    console.log('Banner Render');

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

const mapStateToProps = ({ input, sizing, style }) => {
    return {
        text: input.text,
        width: sizing.width,
        height: sizing.height,
        fontColor: style.fontColor,
        bgColor: style.bgColor,
        fontStyle: style.fontStyle,
        fontSize: style.fontSize
    }
}

export default connect(
    mapStateToProps,
)(Banner);