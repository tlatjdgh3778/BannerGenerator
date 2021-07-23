import React, { useRef, useEffect, useContext } from 'react';
import { StyleContext } from 'contexts/style';
import { connect } from 'react-redux';

const Banner = ({ text, width, height}) => {
    console.log('Banner Render');
    
    const { bgColor, fontColor, fontSize, fontStyle } = useContext(StyleContext).state;

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

const mapStateToProps = ({ input, sizing }) => {
    return {
        text: input.text,
        width: sizing.width,
        height: sizing.height
    }
}

export default connect(
    mapStateToProps,
)(Banner);