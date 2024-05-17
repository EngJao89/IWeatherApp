import {SvgProps} from 'react-native-svg';
import {BorderBottom, Container, Title, Value} from './styles';

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
  value: string;
  isLast?: boolean;
};

export function WeatherItem({icon: Icon, title, value, isLast = false}: Props) {
  return (
    <>
      {isLast ? (
        <Container>
          <Icon width={24} height={24} />
          <Title>{title}</Title>
          <Value>{value}</Value>
        </Container>
      ) : (
        <BorderBottom>
          <Icon width={24} height={24} />
          <Title>{title}</Title>
          <Value>{value}</Value>
        </BorderBottom>
      )}
    </>
  );
}
