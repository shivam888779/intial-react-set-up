import React from 'react';
import Navigation from './navigation';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/global_theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Navigation/>
    </ThemeProvider>
  );
}

export default App;
