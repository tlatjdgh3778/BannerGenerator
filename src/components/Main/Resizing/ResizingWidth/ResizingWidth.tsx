import React from "react";
import { StylesProvider } from "@material-ui/core";
import * as S from "./ResizingWidth.style";
import { useSelector, useDispatch } from "react-redux";
import { resizeWidth } from "store/moduels/sizing";
import { RootState } from "store/index";

const ResizingWidth = () => {
    console.log("ResizingWidth Render");
    const dispatch = useDispatch();
    const width = useSelector((state: RootState) => state.sizing.width);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resizeWidth(Number(e.currentTarget.value)));
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
