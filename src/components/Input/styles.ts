import { StyleSheet } from "react-native";

export const createStyles = () => StyleSheet.create({
  input: {
    borderWidth: 2, 
    borderColor: '#170f62',
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