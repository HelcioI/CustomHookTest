import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorValue, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';

interface RightIconProps {
  name:typeof FontAwesome.prototype.props,
  color: ColorValue,
  size: number,
  onPress: () => void;
}

export const RightIcon = ({name, color, size, onPress}: RightIconProps) => {
  const styles = createStyles();
  return (
    <TouchableOpacity {...{onPress}} style={styles.rightIcon}>
      <FontAwesome {...{name, color, size}} />
    </TouchableOpacity>
  )
}