import { StyleSheet } from "react-native";

export const createStyles = (isFocus = false, error?: string) =>  StyleSheet.create({
  input: {
    borderWidth: 2, 
    borderColor: isFocus ? '#170f62' : error ? 'red' : '#868484',
    padding: 16,
    paddingLeft: 42,
    borderRadius: 8,
  },
  root: {
    margin: 16,
  },
  leftIcon: {
    position: 'absolute', 
    top: 16, 
    left: 16
  },
  rightIcon: {
    position: 'absolute', 
    right: 16, 
    top: 16
  }
})