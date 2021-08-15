import React from "react";
import { StylesProvider } from "@material-ui/core";
import * as S from "./ResizingHeight.style";
import { useSelector, useDispatch } from "react-redux";
import { resizeHeight } from "store/moduels/sizing";
import { RootState } from "store/index";

const ResizingHeight = () => {
    console.log("ResizingHeight Render");
    const dispatch = useDispatch();
    const height = useSelector((state: RootState) => state.sizing.height);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resizeHeight(Number(e.currentTarget.value)));
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
