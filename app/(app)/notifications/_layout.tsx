import CustomHeader from '@/components/custom-header';
import { Stack } from 'expo-router';

export default function NotificationLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="notifications-page"
        options={{ headerShown: true, header: () => <CustomHeader /> }}
      />
    </Stack>
  );
}
