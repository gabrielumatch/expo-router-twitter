import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface User {
  avatar: string;
  coverImage?: string;
  name: string;
  username?: string;
  bio: string;
  tweetsCount: number;
  followingCount: number;
  followersCount: number;
  likesCount: number;
  location: string;
  website: string;
  joinDate: string;
}

const ProfileHeader: React.FC<{ user: User }> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.coverImage || 'https://placehold.co/600x200/1DA1F2/ffffff' }}
        style={styles.coverImage}
      />
      <View style={styles.profileInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username || 'username'}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.tweetsCount}</Text>
            <Text style={styles.statLabel}>Tweets</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.followingCount}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.followersCount}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.likesCount}</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <Text style={styles.detail}>Location: {user.location}</Text>
        <Text style={styles.detail}>Website: {user.website}</Text>
        <Text style={styles.detail}>Joined: {user.joinDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  coverImage: {
    width: '100%',
    height: 150,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    color: '#536471',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
});

export default ProfileHeader;
