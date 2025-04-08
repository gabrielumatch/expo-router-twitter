import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="chat-page" options={{ headerShown: false }} />
    </Stack>
  );
}
