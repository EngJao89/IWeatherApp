import logo from '../../assets/Logo.png';
import bg from '../../assets/background.png';
import {Container, Content, ImageCont, SubTitle, TextB, Title} from './styles';

export function Search() {
  return (
    <Container source={bg} resizeMode="cover">
      <ImageCont source={logo} resizeMode="cover" />

      <Content>
        <Title>
          Boas vindas ao <TextB>IWeather</TextB>
        </Title>
        <SubTitle>Escolha um local para ver a previsão do tempo</SubTitle>
      </Content>
    </Container>
  );
}
