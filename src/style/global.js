import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family:  'Do Hyeon', 'Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Jua', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    color: #C2B7DA;
    background-color: #EFE6E6;
}

.MuiButtonBase-root {
    &.MuiButton-root {
        background-color: #C2B7DA;
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
    color: #C2B7DA;
}
.MuiFormLabel-root.Mui-focused {
    color: #C2B7DA;
}

.MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
        border: 2px solid #C2B7DA;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #C2B7DA;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #C2B7DA;
    }
}

.MuiInput-underline {
    border: none;  
}

`;

export default GlobalStyle;