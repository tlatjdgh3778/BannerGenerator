import React from "react";
import { StylesProvider } from "@material-ui/core";
import * as S from "./ResizingHeight.style";
import { useSelector, useDispatch } from "react-redux";
import { resizeHeight } from "store/moduels/sizing";

const ResizingHeight = () => {
    console.log("ResizingHeight Render");
    const dispatch = useDispatch();
    const height = useSelector(({ sizing }) => sizing.height);

    const onChange = (e) => {
        dispatch(resizeHeight(e.target.value));
    };

    return (
        <StylesProvider injectFirst>
            <S.CutstomTextField
                label="HEIGHT"
                value={height}
                variant="outlined"
                onChange={onChange}
            ></S.CutstomTextField>
        </StylesProvider>
    );
};

export default ResizingHeight;
