import React from 'react';
import * as S from './SetInputText.style';
import { connect } from 'react-redux';
import { addInputText } from 'store/moduels/input';


const SetInputText = ({ text, addInputText }) => {
    console.log('SetInputText Render');
    
    return(
        <>
        <S.CutstomTextField 
            placeholder="Input Text Here"
            value={text}
            onChange={e => {
                addInputText(e.target.value);
        }}>
        </S.CutstomTextField>
        </>
    );
}

const mapStateToProps = ({ input }) => {
    return {
        text: input.text
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