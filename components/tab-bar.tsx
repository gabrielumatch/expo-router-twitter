import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabBar({ state, navigation }: BottomTabBarProps) {
  const tabs = [
    {
      name: 'timeline',
      icon: 'home-outline' as const,
      activeIcon: 'home' as const,
    },
    {
      name: 'search',
      icon: 'search-outline' as const,
      activeIcon: 'search' as const,
    },
    {
      name: 'notifications',
      icon: 'notifications-outline' as const,
      activeIcon: 'notifications' as const,
    },
    {
      name: 'chat',
      icon: 'mail-outline' as const,
      activeIcon: 'mail' as const,
    },
    {
      name: 'profile',
      icon: 'person-outline' as const,
      activeIcon: 'person' as const,
    },
  ] as const;

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = state.index === index;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={24}
              color={isActive ? '#1DA1F2' : '#536471'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    height: 50,
    paddingBottom: 4,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
