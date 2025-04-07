import { Stack } from 'expo-router';

export default function TimelineLayout() {
  return (
    <Stack>
      <Stack.Screen name="timeline" options={{ headerShown: false }} />
      <Stack.Screen name="[id]/post" options={{ headerShown: false }} />
    </Stack>
  );
}
