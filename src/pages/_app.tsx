import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeController from "../components/ThemeController";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(false);
  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div onClick={() => setCurrentTheme(!currentTheme)}>
        <ThemeController />
      </div>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
