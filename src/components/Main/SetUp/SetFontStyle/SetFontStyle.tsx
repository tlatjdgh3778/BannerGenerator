import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import * as S from "./SetFontStyle.style";
import { useSelector, useDispatch } from "react-redux";
import { changeFontStyle, changeFontSize } from "store/moduels/style";
import { RootState } from "store/index";

const SetFontStyle = () => {
    console.log("SetFontStyle Render");
    const dispatch = useDispatch();
    const fontStyle = useSelector((state: RootState) => state.style.fontStyle);
    const fontSize = useSelector((state: RootState) => state.style.fontSize);

    const fonts = [
        "Roboto",
        "Noto Sans KR",
        "Nanum Gothic",
        "Merriweather",
        "Hammersmith One",
        "Source Code Pro",
        "Anton",
        "Do Hyeon",
        "Jua",
    ];
    const fontSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const onChangeFontStyle = (e: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(changeFontStyle(e.target.value as string));
    };

    const onChangeFontSize = (e: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(changeFontSize(e.target.value as string));
    };

    return (
        <S.StyleContainer>
            <>
                <FormControl>
                    <Select value={fontStyle} onChange={onChangeFontStyle}>
                        {fonts.map((font, i) => {
                            return (
                                <MenuItem key={i} value={font}>
                                    {font}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select value={fontSize} onChange={onChangeFontSize}>
                        {fontSizes.map((size, i) => {
                            return (
                                <MenuItem key={i} value={size}>
                                    {size}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </>
        </S.StyleContainer>
    );
};

export default SetFontStyle;
