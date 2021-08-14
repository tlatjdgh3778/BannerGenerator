import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
:root {
    --main-color: #C2B7DA;
    --bg-color: #EFE6E6;
}
* {
    font-family:  'Do Hyeon', 'Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Jua', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    color: var(--main-color);
    background-color: var(--bg-color);
}

.MuiButtonBase-root {
    &.MuiButton-root {
        background-color: var(--main-color);
    }
    &.MuiIconButton-root {
        border-radius: 20%;
        padding: 0.4rem;
        margin: 1rem;
    }
}

.MuiSelect-select.MuiSelect-select {
    padding-right: 24px;
    width: 5rem;
}

.sketch-picker  {
    position: absolute;
    bottom: 5rem;
    right: -2rem;
    width: 9rem !important;
}

.MuiInputBase-input {
    font-family: 'Do Hyeon';
    text-align: center;
}

// WIDTH, HEIGT LABEL속성
.MuiFormLabel-root {
    color: var(--main-color)var(--main-color)
}
.MuiFormLabel-root.Mui-focused {
    color: var(--main-color)var(--main-color)
}

.MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
        border: 2px solid var(--main-color)var(--main-color)
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: var(--main-color);
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--main-color);
    }
}

.MuiInput-underline {
    border: none;  
}

`;

export default GlobalStyle;
