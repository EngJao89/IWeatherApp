import {styled} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BorderBottom = styled.View`
  border-width: 1;
  border-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  margin-left: 12px;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;
