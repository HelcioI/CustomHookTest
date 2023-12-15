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
  input: {
    borderWidth: 2, 
    borderColor: '#170f62',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  }
})