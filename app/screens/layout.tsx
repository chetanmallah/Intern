

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="policy" />
      <Stack.Screen name="popup" />
      <Stack.Screen name="terms" />
    </Stack>
  );
}
