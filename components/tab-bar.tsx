import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type TabIconName =
  | 'home-outline'
  | 'home'
  | 'search-outline'
  | 'search'
  | 'notifications-outline'
  | 'notifications'
  | 'mail-outline'
  | 'mail';

export default function TabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      name: 'Home',
      path: '/(app)/timeline/timeline-page' as const,
      icon: 'home-outline' as const,
      activeIcon: 'home' as const,
    },
    {
      name: 'Search',
      path: '/(app)/search' as const,
      icon: 'search-outline' as const,
      activeIcon: 'search' as const,
    },
    {
      name: 'Notifications',
      path: '/(app)/notifications' as const,
      icon: 'notifications-outline' as const,
      activeIcon: 'notifications' as const,
    },
    {
      name: 'Messages',
      path: '/(app)/messages' as const,
      icon: 'mail-outline' as const,
      activeIcon: 'mail' as const,
    },
  ] as const;

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = pathname === tab.path;
        return (
          <Link href={tab.path as any} key={tab.name} asChild>
            <TouchableOpacity style={styles.tab}>
              <Ionicons
                name={isActive ? tab.activeIcon : tab.icon}
                size={24}
                color={isActive ? '#1DA1F2' : '#536471'}
              />
            </TouchableOpacity>
          </Link>
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
