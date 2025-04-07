import { Slot, router } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    // For now, hardcoding to timeline route
    // Later you'll replace this with your auth logic
    router.replace('/(app)/timeline');
  }, []);

  return <Slot />;
}
