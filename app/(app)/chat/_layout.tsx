import CustomHeader from '@/components/custom-header';
import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="chat-page"
        options={{ headerShown: true, header: () => <CustomHeader /> }}
      />
    </Stack>
  );
}
