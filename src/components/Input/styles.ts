import {styled} from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 40px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.COLORS.WHITE};
`;
