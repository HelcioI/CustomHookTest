import { Text, TouchableOpacity } from "react-native";
import useButton from "./useButton";

interface ButtonProps {
  label: string;
  onPress: () => void;
  isDisable: boolean
}

const Button = ({label, onPress, isDisable}: ButtonProps) => {
  const {styles} = useButton({isDisable})
  
  return (
    <TouchableOpacity disabled={isDisable} style={styles.button} {...{onPress}}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button;