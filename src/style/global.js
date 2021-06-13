import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    /* font-family: 'Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Do Hyeon', 'Jua', sans-serif; */
    font-family: 'Do Hyeon', 'Roboto' sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    color: #C2B7DA;
    background-color: white;
}

.sketch-picker {
    position: absolute;
    bottom: 3rem;
    right: -5rem;
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