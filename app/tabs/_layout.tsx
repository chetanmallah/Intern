import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
      <Tabs.Screen name="notification" options={{ title: 'Notifications' }} />
      {/* <Tabs.Screen name="popup" options={{ title: 'Complete Profile', tabBarStyle: { display: 'none' } }} /> */}
    </Tabs>
  );
}
