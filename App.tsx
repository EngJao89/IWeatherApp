import React from 'react';
import {ThemeProvider} from 'styled-components';

import defaultTheme from './src/theme/defaultTheme';
// import {Dashboard} from './src/screens/Dashboard';
import {Search} from './src/screens/Search';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Search />
    </ThemeProvider>
  );
}

export default App;
