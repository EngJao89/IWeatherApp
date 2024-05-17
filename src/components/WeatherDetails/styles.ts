import {styled} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_800};
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 16px;
`;
