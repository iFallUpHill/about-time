import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Themes"
import  { useDarkMode } from "./styles/useDarkMode"

import ThemeSelector from "./components/ThemeSelector"

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = (theme) === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
          <p>
            some text
          </p>
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default App;
