import TabBar from '@/components/tab-bar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
    >
      <Tabs.Screen name="timeline" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
