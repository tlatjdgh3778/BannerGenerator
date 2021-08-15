import styled from "styled-components";
import FormatColorFillOutlinedIcon from "@material-ui/icons/FormatColorFillOutlined";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const ColorContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const PickerBox = styled.div`
    position: relative;
`;

const FontPickerIcon = styled(BorderColorOutlinedIcon)``;

const BgPickerIcon = styled(FormatColorFillOutlinedIcon)``;

export { ColorContainer, PickerBox, BgPickerIcon, FontPickerIcon };
