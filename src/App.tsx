import GlobalStyle from "style/global-style";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "style/theme";
import React from "react";
import Main from "components/Main/Main";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
`;

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div className="App">
                    <AppContainer>
                        <Header></Header>
                        <Main></Main>
                        <Footer></Footer>
                    </AppContainer>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
