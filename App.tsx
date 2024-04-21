import React from 'react';
import {ThemeProvider} from 'styled-components';

import defaultTheme from './src/theme/defaultTheme';
import {Dashboard} from './src/screens/Dashboard';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
