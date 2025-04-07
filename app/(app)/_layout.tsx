import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="timeline" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="search" />
    </Tabs>
  );
}
