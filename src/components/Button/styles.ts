import { StyleSheet } from "react-native";

export const createStyles = ({isDisable}) => StyleSheet.create({
  button:{
    paddingHorizontal: 16,
    backgroundColor: isDisable ? '#868484' :'#170f62',
    margin: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonLabel: {
    color: isDisable ? '#e4dede' :'#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: 16,
  }
})