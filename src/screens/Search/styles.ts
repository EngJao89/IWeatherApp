import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_900};
  flex: 1;
  padding: 24px;
  padding-top: 48px;
  align-items: center;
`;

export const ImageCont = styled.Image`
  width: 186px;
  height: 32px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding-bottom: 56px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: center;
`;

export const TextB = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-weight: normal;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  text-align: center;
  margin-top: 4px;
  margin-bottom: 32px;
`;
