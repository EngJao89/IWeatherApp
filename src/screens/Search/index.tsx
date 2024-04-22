import logo from '../../assets/Logo.png';
import {Container, Content, ImageCont, SubTitle, TextB, Title} from './styles';

export function Search() {
  return (
    <Container>
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
