import React from "react";
import { StylesProvider } from "@material-ui/core";
import * as S from "./ResizingWidth.style";
import { useSelector, useDispatch } from "react-redux";
import { resizeWidth } from "store/moduels/sizing";

const ResizingWidth = () => {
    console.log("ResizingWidth Render");
    const dispatch = useDispatch();
    const width = useSelector(({ sizing }) => sizing.width);

    const onChange = (e) => {
        dispatch(resizeWidth(e.target.value));
    };

    return (
        <StylesProvider injectFirst>
            <S.CutstomTextField
                label="WIDTH"
                value={width}
                variant="outlined"
                onChange={onChange}
            ></S.CutstomTextField>
        </StylesProvider>
    );
};

export default ResizingWidth;
