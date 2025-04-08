import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          height: 50,
          paddingBottom: 4,
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: '#536471',
      }}
    >
      <Tabs.Screen
        name="timeline"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
    </Tabs>
  );
}
