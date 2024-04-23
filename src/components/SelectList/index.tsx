import {Container, Options, Title} from './styles';

type Props = {
  placeholder?: string;
};

export function SelectList(props: Props) {
  return (
    <Container>
      <Options>
        <Title>Brasilia-DF</Title>
        <Title>Anápolis-GO</Title>
        <Title>Florianópolis-SC</Title>
      </Options>
    </Container>
  );
}
