import React from 'react';
import {ThemeProvider} from 'styled-components';

import defaultTheme from './src/theme/defaultTheme';
// import {Dashboard} from './src/screens/Dashboard';
import {Search} from './src/screens/Search';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>
        <Search />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
