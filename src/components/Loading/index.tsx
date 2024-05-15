import {ActivityIndicator} from 'react-native';

import {Container} from './styles';
import {useTheme} from 'styled-components';

export function Loading() {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator color={theme.COLORS.BLUE_LIGHT} />
    </Container>
  );
}
