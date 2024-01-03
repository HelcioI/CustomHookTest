import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorValue, View } from 'react-native';
import { createStyles } from './styles';

interface LeftIconProps {
  name:typeof FontAwesome.prototype.props;
  color: ColorValue;
  size: number;
  testID?: string;
}

export const LeftIcon = ({name, color, size, testID}: LeftIconProps) => {
  const styles = createStyles();
  return (
    <View style={styles.leftIcon}>
      <FontAwesome {...{name, color, size, testID}} />
    </View>
  )
}