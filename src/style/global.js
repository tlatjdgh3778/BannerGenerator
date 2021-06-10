import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', 'Noto Sans KR', 'Nanum Gothic', 'Merriweather', 'Hammersmith One', 'Source Code Pro', 'Anton', 'Do Hyeon', 'Jua' sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    color: #C2B7DA;
    background-color: white;
}

/* .MuiInputLabel-root {
    background-color: white;
} */

`;

export default GlobalStyle;