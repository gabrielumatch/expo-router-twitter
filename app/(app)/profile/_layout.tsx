import CustomHeader from '@/components/custom-header';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="profile-page"
        options={{ headerShown: true, header: () => <CustomHeader /> }}
      />
    </Stack>
  );
}
