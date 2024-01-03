import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(main)/index" />
        <Stack.Screen name="Login/Login" />
      </Stack>
    </SafeAreaProvider>
  );
}