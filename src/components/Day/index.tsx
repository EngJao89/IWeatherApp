import {SvgProps} from 'react-native-svg';
import {Container, MaxTemp, MinTemp, Text} from './styles';

export type DayProps = {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
};

type Props = {
  data: DayProps;
};

export function Day({data}: Props) {
  const {icon: Icon} = data;

  return (
    <Container>
      <Text>Quarta feira</Text>
      <Icon width={56} height={56} />
      <MaxTemp>{data.max}</MaxTemp>
      <MinTemp>{data.min}</MinTemp>
    </Container>
  );
}
