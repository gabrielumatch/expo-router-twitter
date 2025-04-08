import CustomHeader from '@/components/custom-header';
import { Stack } from 'expo-router';

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="search-page"
        options={{ headerShown: true, header: () => <CustomHeader /> }}
      />
    </Stack>
  );
}
