import { StyleSheet } from "react-native";

export const createStyles = (isFocus = false, error?: string) =>  StyleSheet.create({
  root: {
    borderWidth: 2, 
    borderColor: isFocus ? '#170f62' : error ? 'red' : '#868484',
    borderRadius: 8,
    margin: 16,
  },
  input: {
    padding: 16,
    paddingHorizontal: 42,
  },
})