import {TouchableOpacity} from 'react-native';
import {Input} from '../Input';
import {CityProps} from '../../services/getCityByNameService';
import {Container, Options, Title} from './styles';

type Props = {
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
  data: CityProps[];
  onChange: (value: string) => void;
  onPress: (value: CityProps) => void;
};

export function SelectList(props: Props) {
  return (
    <Container>
      <Input
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        isLoading={props.isLoading}
        value={props.value}
      />
      <Options>
        {props.data.map(item => (
          <TouchableOpacity
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => props.onPress(item)}>
            <Title>{item.name}</Title>
          </TouchableOpacity>
        ))}
      </Options>
    </Container>
  );
}
