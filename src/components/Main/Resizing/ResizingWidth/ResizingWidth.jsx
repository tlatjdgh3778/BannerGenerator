import React from 'react';
import { StylesProvider } from '@material-ui/core';
import * as S from './ResizingWidth.style';
import { connect } from 'react-redux';
import { resizeWidth } from 'redux/index';

const ResizingWidth = ({ width, resizeWidth }) => {
    console.log('ResizingWidth Render');

    return(
        <StylesProvider injectFirst>
            <S.CutstomTextField 
            label="WIDTH"
            value={width}
            variant="outlined"
            onChange={e => resizeWidth(e.target.value)}>
            </S.CutstomTextField>
        </StylesProvider>
    );
}

const mapStateToProps = ({ sizing }) => {
    return {
        width: sizing.width
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resizeWidth: (width) => dispatch(resizeWidth(width))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResizingWidth);