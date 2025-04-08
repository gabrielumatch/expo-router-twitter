import { Stack } from 'expo-router';

export default function NotificationLayout() {
  return (
    <Stack>
      <Stack.Screen name="notifications-page" options={{ headerShown: false }} />
    </Stack>
  );
}
