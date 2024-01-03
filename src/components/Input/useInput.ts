import { useState } from "react";
import { createStyles } from "./styles";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

interface UseInputProps {
  error: string;
  validate: () => void;
}

export const useInput = ({error, validate}: UseInputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const styles = createStyles(isFocus, error);

  const onInputFocus = (_e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
  }

  const onInputBlur = (_e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    validate();
    setIsFocus(false);
  }
  
  return {
    styles,
    onInputFocus,
    onInputBlur,
  };
}