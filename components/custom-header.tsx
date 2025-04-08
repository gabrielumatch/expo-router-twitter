import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomHeader() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Left: Avatar */}
      <TouchableOpacity onPress={() => {}} style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.avatar}
          contentFit="cover"
        />
      </TouchableOpacity>

      {/* Middle: Logo/Title */}
      <Text style={styles.title}>Clone</Text>

      {/* Right: Settings */}
      <TouchableOpacity onPress={() => {}} style={styles.settingsButton}>
        <Ionicons name="settings-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 4,
  },
});
