import { router, Stack } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function TweetLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Tweet Details',
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'generic',
          headerBackButtonMenuEnabled: true,
          headerLeft: () => (
            <>
              <TouchableOpacity onPress={() => router.back()}>
                <Text>Back</Text>
              </TouchableOpacity>
            </>
          ),
        }}
      />
    </Stack>
  );
}
