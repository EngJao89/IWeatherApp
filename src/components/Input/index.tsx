import {ActivityIndicator, TextInputProps} from 'react-native';
import {Container, TextInput} from './styles';
import {useTheme} from 'styled-components';

type Props = TextInputProps & {
  isLoading?: boolean;
};

export function Input({isLoading = false, ...rest}: Props) {
  const theme = useTheme();

  return (
    <Container>
      <TextInput placeholderTextColor={theme.COLORS.GRAY_400} {...rest} />
      {isLoading && <ActivityIndicator color={theme.COLORS.BLUE_LIGHT} />}
    </Container>
  );
}
