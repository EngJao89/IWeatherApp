import {styled} from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: 14px;
`;

export const MaxTemp = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: 14px;
`;

export const MinTemp = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_400};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: 14px;
`;
