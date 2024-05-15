import {Day, DayProps} from '../Day';
import {Container} from './styles';

interface Props {
  data: DayProps[];
}

export function NextDays({data}: Props) {
  return (
    <Container>
      {data.map(day => (
        <Day key={day.day} data={day} />
      ))}
    </Container>
  );
}
