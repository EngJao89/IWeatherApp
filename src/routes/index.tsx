import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {useCity} from '../hooks/useCity';
import {Dashboard} from '../screens/Dashboard';
import {AppRoutes} from './app.routes';

// import {useTheme} from 'styled-components';

export function Routes() {
  // const theme = useTheme();
  const {city} = useCity();
  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
      <NavigationContainer>
        {city ? <Dashboard /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}
