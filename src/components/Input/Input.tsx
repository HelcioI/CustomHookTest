import { TextInput, TextInputProps, View } from "react-native";
import { forwardRef } from "react";
import { useInput } from "./useInput";
export interface InputProps extends Omit<TextInputProps, 'ref' & 'onFocus' & 'onBlur'> {
  error: string;
  validate: () => void;
  onRightIconPress?: () => void;
  onToggleShowPassword?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = ({
  error, 
  validate, 
  onRightIconPress,
  leftIcon,
  rightIcon,
  ...props
  }, ref) => {

  const {styles, onInputFocus, onInputBlur} = useInput({error, validate});

  return (
    <View style={styles.root}>
      {leftIcon}
      <TextInput ref={ref} style={styles.input} {...props} onFocus={onInputFocus} onBlur={onInputBlur}/>
      {rightIcon}
    </View>
  )
}

export default forwardRef(Input)