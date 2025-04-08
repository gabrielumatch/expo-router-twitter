import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TweetCard from '../../../components/TweetCard';

// Define types
interface TweetUser {
  avatar: string;
  name: string;
  username: string;
}

interface Tweet {
  id: string;
  user: TweetUser;
  text: string;
  timestamp: string;
  stats: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

// Mock data for demonstration
const mockTweets: Record<string, Tweet> = {
  'tweet-1': {
    id: 'tweet-1',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/165733458?v=4',
      name: 'John Doe',
      username: 'johndoe',
    },
    text: 'Just deployed our new feature! Check it out and let me know what you think. #webdevelopment #react',
    timestamp: '2h',
    stats: {
      likes: 42,
      retweets: 12,
      replies: 8,
    },
  },
  'tweet-2': {
    id: 'tweet-2',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/165733458?v=4',
      name: 'John Doe',
      username: 'johndoe',
    },
    text: 'Working on a new project with React Native and Expo. The developer experience is amazing!',
    timestamp: '5h',
    stats: {
      likes: 78,
      retweets: 25,
      replies: 15,
    },
  },
};

// Mock replies
const mockReplies: Record<string, Tweet[]> = {
  'tweet-1': [
    {
      id: 'reply-1',
      user: {
        avatar: 'https://placehold.co/100x100/4CAF50/ffffff',
        name: 'Jane Smith',
        username: 'janesmith',
      },
      text: "This looks great! Can't wait to try it out.",
      timestamp: '1h',
      stats: {
        likes: 5,
        retweets: 0,
        replies: 1,
      },
    },
    {
      id: 'reply-2',
      user: {
        avatar: 'https://placehold.co/100x100/FF9800/ffffff',
        name: 'Mike Johnson',
        username: 'mikej',
      },
      text: 'Is it compatible with the latest version?',
      timestamp: '30m',
      stats: {
        likes: 2,
        retweets: 0,
        replies: 0,
      },
    },
  ],
  'tweet-2': [
    {
      id: 'reply-3',
      user: {
        avatar: 'https://placehold.co/100x100/9C27B0/ffffff',
        name: 'Sarah Williams',
        username: 'sarahw',
      },
      text: "I've been using it too! Absolute game changer.",
      timestamp: '3h',
      stats: {
        likes: 10,
        retweets: 2,
        replies: 0,
      },
    },
  ],
};

export default function TweetDetailScreen() {
  const { id } = useLocalSearchParams();
  const tweetId = typeof id === 'string' ? id : 'tweet-1';

  // Get the tweet or use a default if not found
  const tweet = mockTweets[tweetId] || mockTweets['tweet-1'];

  // Get replies for this tweet
  const replies = mockReplies[tweetId] || [];

  return (
    <>
      <ScrollView style={styles.container}>
        <TweetCard tweet={tweet} disableNavigation />

        {replies.length > 0 ? (
          <>
            <View style={styles.repliesDivider} />
            <Text style={styles.repliesHeader}>Replies</Text>
            {replies.map(reply => (
              <TweetCard key={reply.id} tweet={reply} disableNavigation />
            ))}
          </>
        ) : (
          <View style={styles.noReplies}>
            <Text style={styles.noRepliesText}>No replies yet</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  repliesDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  repliesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
    color: '#333',
  },
  noReplies: {
    padding: 20,
    alignItems: 'center',
  },
  noRepliesText: {
    color: '#666',
    fontSize: 16,
  },
});
