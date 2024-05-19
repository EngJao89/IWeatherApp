import {useEffect, useState} from 'react';
import {useCity} from '../../hooks/useCity';
import {getWeatherByCityService, WeatherResponseProps} from '../../services/getWeatherByCityService';
import {
  CityProps,
  getCityByNameService,
} from '../../services/getCityByNameService';
import {Container, Title} from './styles';
import { Loading } from '../../components/Loading';

export function Dashboard() {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [isWeatherLoading, setWeatherIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResponseProps>(
    {} as WeatherResponseProps,
  );

  const {city, handleChanceCity, cityIsLoading} = useCity();

  function handleSelect(value: CityProps) {
    handleChanceCity(value);
    setSearch('');
    setCities([]);
  }

  async function getWeatherDetails() {
    if (!city) {
      return;
    }

    setWeatherIsLoading(true);

    const {latitude, longitude} = city;
    const response = await getWeatherByCityService({latitude, longitude});

    setWeather(response);
    setWeatherIsLoading(false);
  }

  async function getCities(city: string) {
    setIsSearching(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsSearching(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    getCities(search)
    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    getWeatherDetails();
  }, [city]);

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />;
  }
  return (
    <Container>
      <Title>IWeather APP</Title>
    </Container>
  );
}
