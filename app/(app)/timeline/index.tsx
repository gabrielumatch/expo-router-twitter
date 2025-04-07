import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Timeline() {
  return (
    <>
      <View>
        <Text>Timeline</Text>

        <Link href={{ pathname: '/(app)/timeline/[id]/post', params: { id: '1' } }}>Post 1</Link>
        <Link href={{ pathname: '/(app)/timeline/[id]/post', params: { id: '2' } }}>Post 2</Link>
      </View>
    </>
  );
}
