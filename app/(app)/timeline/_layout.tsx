import CustomHeader from '@/components/custom-header';
import { Stack } from 'expo-router';

export default function TimelineLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="timeline-page"
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen name="[id]/post" options={{ headerShown: false }} />
    </Stack>
  );
}
