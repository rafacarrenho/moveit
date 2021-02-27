import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeController from "../components/ThemeController";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import * as S from "../styles/pages/defaultstyle";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(false);
  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <S.Wapper>
        <Component {...pageProps}></Component>
        <div onClick={() => setCurrentTheme(!currentTheme)}>
          <ThemeController />
        </div>
      </S.Wapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
