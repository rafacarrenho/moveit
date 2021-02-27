import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeController from "../components/ThemeController";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(false);
  return (
    <>
      <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
        <div onClick={() => setCurrentTheme(!currentTheme)}>
          <ThemeController />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
