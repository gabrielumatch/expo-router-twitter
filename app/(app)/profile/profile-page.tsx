import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileHeader from '../../../components/ProfileHeader';
import TweetList from '../../../components/TweetList';

const mockUser = {
  avatar: 'https://avatars.githubusercontent.com/u/165733458?v=4',
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
    <View style={styles.container}>
      <ProfileHeader user={mockUser} />
      <TweetList tweets={mockTweets} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProfilePage;
