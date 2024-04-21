import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_900};
  flex: 1;
  padding: 120px;
  padding-bottom: 0;
  gap: 8px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;
