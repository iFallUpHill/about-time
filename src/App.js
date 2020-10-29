import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/themes"
import  { useDarkMode } from "./styles/useDarkMode"

import ThemeSelector from "./components/ThemeSelector"
import WordClock from "./components/WordClock"

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = (theme) === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <>
        <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
        <br />
        <br />
        <WordClock />
      </>
    </ThemeProvider>
    
  );
};

export default App;
