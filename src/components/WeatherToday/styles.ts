import {styled} from 'styled-components/native';

export const Container = styled.ImageBackground`
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  padding: 20px;
  border-radius: 8px;
  justify-content: space-between;
  overflow: hidden;
  resize: cover;
`;

export const City = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
`;

export const Day = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.XS};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Details = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Temperature = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XXL};
`;

export const MinMax = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
`;

export const Weather = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  text-transform: capitalize;
`;
