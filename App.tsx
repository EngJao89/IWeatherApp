import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import defaultTheme from './src/theme/defaultTheme';

import {Routes} from './src/routes';
import {CityProvider} from './src/contexts/CityContext';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>
        <CityProvider>
          <Routes />
        </CityProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
