import React from "react";
import * as S from "./SetInputText.style";
import { useSelector, useDispatch } from "react-redux";
import { addInputText } from "store/moduels/input";
import { RootState } from "store/index";

const SetInputText = () => {
    console.log("SetInputText Render");
    const dispatch = useDispatch();
    const text = useSelector((state: RootState) => state.input.text);

    const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addInputText(e.target.value));
    };

    return (
        <>
            <S.CutstomTextField
                placeholder="Input Text Here"
                value={text}
                onChange={changeInputText}
            ></S.CutstomTextField>
        </>
    );
};

export default SetInputText;
