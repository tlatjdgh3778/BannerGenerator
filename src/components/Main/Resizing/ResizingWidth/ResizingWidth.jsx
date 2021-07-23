import React from 'react';
import { StylesProvider } from '@material-ui/core';
import * as S from './ResizingWidth.style';
import { connect } from 'react-redux';
import { resizeWidth } from 'redux/index';

const ResizingWidth = (props) => {
    console.log('ResizingWidth Render');

    return(
        <StylesProvider injectFirst>
            <S.CutstomTextField 
            label="WIDTH"
            value={props.width}
            variant="outlined"
            onChange={e => props.resizeWidth(e.target.value)}>
            </S.CutstomTextField>
        </StylesProvider>
    );
}

const mapStateToProps = state => {
    return {
        width: state.sizing.width
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