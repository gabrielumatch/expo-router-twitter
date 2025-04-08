import ProfileHeader from '@/components/ProfileHeader';
import TweetList from '@/components/TweetList';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const mockUser = {
  avatar: 'https://avatars.githubusercontent.com/u/165733458?v=4',
  coverImage: 'https://placehold.co/2000x600/1DA1F2/ffffff',
  name: 'John Doe',
  username: 'johndoe',
  bio: 'Software Developer at XYZ',
  tweetsCount: 1234,
  followingCount: 567,
  followersCount: 890,
  likesCount: 234,
  location: 'San Francisco, CA',
  website: 'https://johndoe.com',
  joinDate: 'January 2020',
};

const mockTweets = [
  {
    id: 'tweet-1',
    user: mockUser,
    text: 'Just deployed our new feature! Check it out and let me know what you think. #webdevelopment #react',
    timestamp: '2h',
    stats: {
      likes: 42,
      retweets: 12,
      replies: 8,
    },
  },
  {
    id: 'tweet-2',
    user: mockUser,
    text: 'Working on a new project with React Native and Expo. The developer experience is amazing!',
    timestamp: '5h',
    stats: {
      likes: 78,
      retweets: 25,
      replies: 15,
    },
  },
  {
    id: 'tweet-3',
    user: mockUser,
    text: 'Just deployed our new feature! Check it out and let me know what you think. #webdevelopment #react',
    timestamp: '2h',
    stats: {
      likes: 42,
      retweets: 12,
      replies: 8,
    },
  },
  {
    id: 'tweet-4',
    user: mockUser,
    text: 'Working on a new project with React Native and Expo. The developer experience is amazing!',
    timestamp: '5h',
    stats: {
      likes: 78,
      retweets: 25,
      replies: 15,
    },
  },
];

const ProfilePage: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ProfileHeader user={mockUser} />
      <TweetList tweets={mockTweets} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default ProfilePage;
