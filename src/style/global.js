import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
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