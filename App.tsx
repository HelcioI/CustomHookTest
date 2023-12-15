import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Login } from './src/screen';

const App = (): JSX.Element => (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView/>
      <Login/>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;