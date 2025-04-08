import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileHeader from '../../../components/ProfileHeader';
import TweetList from '../../../components/TweetList';

const mockUser = {
  avatar: 'https://avatars.githubusercontent.com/u/165733458?v=4',
  name: 'John Doe',
  bio: 'Software Developer at XYZ',
};

const mockTweets = [
  {
    user: mockUser,
    text: 'This is a mock tweet!',
  },
  {
    user: mockUser,
    text: 'Another mock tweet!',
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
