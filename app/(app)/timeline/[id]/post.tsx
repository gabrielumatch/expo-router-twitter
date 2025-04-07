import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Post() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <View>
        <Text>Post {id}</Text>
      </View>
    </>
  );
}
