import {WeatherItem} from '../WeatherItem';
import {Container} from './styles';

export interface WeatherDetailsProps {
  temp_kf: string;
  humidity: string;
  feels_like: string;
  wind_speed: string;
  probability: string;
}

interface Props {
  data: WeatherDetailsProps;
}

export function WeatherDetails({data}: Props) {
  return (
    <Container>
      <WeatherItem
        icon={thermometer}
        title="Sensação térmica"
        value={data.feels_like}
      />

      <WeatherItem
        icon={rain}
        title="Probabilidade de chuva"
        value={data.probability}
      />

      <WeatherItem
        icon={wind}
        title="Velocidade do vento"
        value={data.wind_speed}
      />

      <WeatherItem
        icon={drop}
        title="Umidade do ar"
        value={data.humidity}
      />

      <WeatherItem
        icon={sun}
        title="Índice UV"
        value={data.temp_kf}
        isLast
      />
    </Container>
  );
}
