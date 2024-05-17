import {View} from 'react-native';
import dayjs from 'dayjs';

import {
  City,
  Container,
  Day,
  Details,
  Footer,
  MinMax,
  Temperature,
  Weather,
} from './styles';

export type WeatherTodayProps = {
  temp: string;
  temp_min: string;
  temp_max: string;
  description: string;
  details: typeof weatherIcons.Clouds;
};

type Props = {
  city: string;
  weather: WeatherTodayProps;
};

export function WeatherToday({weather, city}: Props) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY');
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const Icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;
  return (
    <Container source={bgImg}>
      <View>
        <City>{city}</City>
        <Day>{today}</Day>
      </View>

      <Footer>
        <Details>
          <Temperature>{weather.temp}</Temperature>

          <MinMax>
            {weather.temp_min} / {weather.temp_max}
          </MinMax>

          <Weather>{weather.description}</Weather>
        </Details>

        <Icon width={160} height={160} />
      </Footer>
    </Container>
  );
}
