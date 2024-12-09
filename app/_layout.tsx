// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="Auth" options={{ headerShown: false }} />
//       <Stack.Screen name="tabs" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


import { Stack } from "expo-router";
import { TabProvider } from "../context/TabContext";

export default function RootLayout() {
  return (
    <TabProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth/index" />
        <Stack.Screen name="tabs" />
        <Stack.Screen name="screens/popup" />
      </Stack>
    </TabProvider>
  );
}

