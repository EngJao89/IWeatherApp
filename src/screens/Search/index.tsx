import {useEffect, useState} from 'react';
import logo from '../../assets/Logo.png';
import bg from '../../assets/background.png';
import {SelectList} from '../../components/SelectList';
import {useCity} from '../../hooks/useCity';
import {
  CityProps,
  getCityByNameService,
} from '../../services/getCityByNameService';
import {Container, Content, ImageCont, SubTitle, TextB, Title} from './styles';

export function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const {handleChanceCity} = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <Container source={bg} resizeMode="cover">
      <ImageCont source={logo} resizeMode="cover" />

      <Content>
        <Title>
          Boas vindas ao <TextB>IWeather</TextB>
        </Title>
        <SubTitle>Escolha um local para ver a previsão do tempo</SubTitle>

        <SelectList
          data={cities}
          onChange={setSearch}
          isLoading={isLoading}
          onPress={handleChanceCity}
          placeholder="Buscar local"
        />
      </Content>
    </Container>
  );
}
