import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorValue, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';

interface RightIconProps {
  name:typeof FontAwesome.prototype.props,
  color: ColorValue,
  size: number,
  onPress: () => void;
  testID?: string;
  iconTestID?: string;
}

export const RightIcon = ({name, color, size, onPress, testID, iconTestID}: RightIconProps) => {
  const styles = createStyles();
  return (
    <TouchableOpacity {...{onPress, testID}} style={styles.rightIcon}>
      <FontAwesome testID={iconTestID} {...{name, color, size}} />
    </TouchableOpacity>
  )
}