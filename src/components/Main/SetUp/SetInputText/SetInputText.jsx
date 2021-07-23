import React from 'react';
import * as S from './SetInputText.style';
import { connect } from 'react-redux';
import { addInputText } from 'redux/index';


const SetInputText = (props) => {
    console.log('SetInputText Render');
    
    return(
        <>
        <S.CutstomTextField 
            placeholder="Input Text Here"
            value={props.text}
            onChange={e => {
                props.addInputText(e.target.value);
        }}>
        </S.CutstomTextField>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInputText: (value) => dispatch(addInputText(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetInputText);