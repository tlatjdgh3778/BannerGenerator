import React, { useRef, useEffect, useContext } from 'react';
import { SizingContext } from 'contexts/sizing';
import { StyleContext } from 'contexts/style';
import { connect } from 'react-redux';

const Banner = (props) => {
    console.log('Banner Render');
    
    const { bgColor, fontColor, fontSize, fontStyle } = useContext(StyleContext).state;
    const { width, height } = useContext(SizingContext).state;

    const canvasRef = useRef(null);

    useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.font = `${fontSize}px ${fontStyle}`;
            const x = canvas.width / 2;
            const y = canvas.height / 2;

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, props.width, height);
            ctx.fill();

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = fontColor;
            ctx.fillText(props.text, x, y);
    }, [
        props.text,
        height,
        props.width,
        fontSize,
        fontStyle,
        fontColor,
        bgColor,
    ])
    return(
        <canvas
            ref={canvasRef}
            id='canvasBanner'
            width={props.width}
            height={height}
        ></canvas>
    );
}

const mapStateToProps = state => {
    return {
        text: state.input.text,
        width: state.sizing.width
    }
}

export default connect(
    mapStateToProps,
)(Banner);