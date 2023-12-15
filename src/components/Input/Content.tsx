import { TextInput, TextInputProps } from "react-native";
import { createStyles } from "./styles";

export const Content = ({...props}: TextInputProps) => {
  const styles = createStyles()
  return (
    <TextInput style={styles.input} {...props} />
  )
}