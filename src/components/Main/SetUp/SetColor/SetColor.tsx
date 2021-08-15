import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { IconButton } from "@material-ui/core";
import * as S from "./SetColor.style";
import { useSelector, useDispatch } from "react-redux";
import { changeFontColor, changeBgColor } from "store/moduels/style";
import { RootState } from "store/index";

const SetColor = () => {
    console.log("SetColor Render");
    const dispatch = useDispatch();
    const fontColor = useSelector((state: RootState) => state.style.fontColor);
    const bgColor = useSelector((state: RootState) => state.style.bgColor);

    const [showFontPicker, setShowFontPicker] = useState(false);
    const [showBgPicker, setShowBgPicker] = useState(false);

    const toggleFontPicker = () => {
        setShowFontPicker((showFontPicker) => !showFontPicker);
    };

    const toggleBgPicker = () => {
        setShowBgPicker((showBgPicker) => !showBgPicker);
    };

    // string으로 하면 hex를 못 찾네
    const onChangeFontColor = (updateColor: any) => {
        dispatch(changeFontColor(updateColor.hex));
    };

    const onChangeBgColor = (updateColor: any) => {
        dispatch(changeBgColor(updateColor.hex));
    };

    const fontColorStyle = {
        color: `${fontColor}`,
        fontSize: "3rem",
    };

    const bgColorStyle = {
        color: `${bgColor}`,
        fontSize: "3rem",
    };

    return (
        <>
            <S.ColorContainer>
                <S.PickerBox>
                    <IconButton onClick={toggleFontPicker}>
                        <S.FontPickerIcon style={fontColorStyle} />
                    </IconButton>
                    {showFontPicker && (
                        <SketchPicker color={fontColor} onChange={onChangeFontColor} />
                    )}
                </S.PickerBox>
                <S.PickerBox>
                    <IconButton onClick={toggleBgPicker}>
                        <S.BgPickerIcon style={bgColorStyle} />
                    </IconButton>
                    {showBgPicker && <SketchPicker color={bgColor} onChange={onChangeBgColor} />}
                </S.PickerBox>
            </S.ColorContainer>
        </>
    );
};

export default SetColor;
