import { StyleSheet } from "react-native";

export const createStyles = () => StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#cfc0c0'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#170f62',
    marginHorizontal: 16,
    marginVertical: 48,
    alignSelf: 'center',
  },
  leftIcon: {
    position: 'absolute', 
    top: 16, 
    left: 16
  },
  rightIcon: {
    position: 'absolute',
    right: 16, 
    top: 16,
  }
})