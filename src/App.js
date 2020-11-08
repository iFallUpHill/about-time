import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/themes"
import  { useDarkMode } from "./styles/useDarkMode"

import ThemeSelector from "./components/ThemeSelector"
import WordClock from "./components/WordClock"
import FullScreen from "./components/FullScreen"

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = (theme) === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <>
        <div>
          <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
        </div>
        <FullScreen>
          <WordClock />
          <WordClock rounding='rough' shortDate />
        </FullScreen>
      </>
    </ThemeProvider>
    
  );
};

export default App;
