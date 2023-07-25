import React from 'react';
import Navigation from './navigation';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/global_theme';
import { AuthProvider } from '../global_context';

function App() {
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
       <Navigation/>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
