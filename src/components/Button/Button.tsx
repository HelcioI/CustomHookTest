import { Text, TouchableOpacity } from "react-native";
import useButton from "./useButton";

interface ButtonProps {
  label: string;
  onPress: () => void;
  isDisable?: boolean;
  testID?: string;
}

const Button = ({label, onPress, testID, isDisable}: ButtonProps) => {
  const {styles} = useButton({isDisable})
  
  return (
    <TouchableOpacity disabled={isDisable} style={styles.button} {...{onPress, testID}}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button;