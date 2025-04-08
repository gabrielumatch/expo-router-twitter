import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function TweetLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: 'Tweet',
          headerLeft: () => <FontAwesome name="arrow-left" size={20} color="#1DA1F2" />,
        }}
      />
    </Stack>
  );
}
