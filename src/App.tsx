import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

import { useTheme } from './hooks/theme';

import { GlobalStyle } from './styles/global'

const App:React.FC = () => {

  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Home /> 
    </ThemeProvider>
      
  )
}

export default App;
