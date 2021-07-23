import React from 'react';
import { StylesProvider } from '@material-ui/core';
import * as S from './ResizingHeight.style';
import { connect } from 'react-redux';
import { resizeHeight } from 'redux/index';

const ResizingHeight = ({ height, resizeHeight }) => {
    console.log('ResizingHeight Render');

    return(
        <StylesProvider injectFirst>
        <S.CutstomTextField 
        label="HEIGHT"
        value={height}
        variant="outlined"
        onChange={e => resizeHeight(e.target.value)}>
        </S.CutstomTextField>
        </StylesProvider>
    );
}

const mapStateToProps = ({ sizing }) => {
    return {
        height: sizing.height
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resizeHeight: (height) => dispatch(resizeHeight(height))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResizingHeight);