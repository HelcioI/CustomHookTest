import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(main)/index" />
          <Stack.Screen name="Login/Login" />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}