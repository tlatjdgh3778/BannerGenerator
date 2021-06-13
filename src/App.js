import GlobalStyle from 'style/global';
import styled, { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from 'style/theme';
import React, { useState } from "react";
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
  const [isDark, setIsDark ] = useState(true);

  return (
    <>
    <ThemeProvider theme={isDark? darkMode : lightMode}>
      <GlobalStyle/>
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