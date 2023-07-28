import Navigation from './navigation';
import { ThemeProvider } from '@mui/material';
import theme from './global_theme';
import { ReduxProvider } from './global_context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
         <Navigation/>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
