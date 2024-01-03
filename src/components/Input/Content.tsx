import { TextInput, TextInputProps } from "react-native";
import { forwardRef } from "react";
import { useInput } from "./useInput";

export interface InputProps extends Omit<TextInputProps, 'ref' & 'onFocus' & 'onBlur'> {
  error: string;
  validate: () => void;
}

const Content: React.ForwardRefRenderFunction<TextInput, InputProps> =  ({error, validate,...props}, ref) => {
  const {styles, onInputFocus, onInputBlur} = useInput({error, validate});
  return (
    <TextInput ref={ref} style={styles.input} {...props} onFocus={onInputFocus} onBlur={onInputBlur}/>
  )
}

export default forwardRef(Content)