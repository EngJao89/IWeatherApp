import {styled} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const Options = styled.View`
  overflow: hidden;
  position: absolute;
  border-radius: 8px;
  top: 64px;
  left: 0;
  right: 0;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_600};
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;
