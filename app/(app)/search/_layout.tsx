import { Stack } from 'expo-router';

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="search-page" options={{ headerShown: false }} />
    </Stack>
  );
}
