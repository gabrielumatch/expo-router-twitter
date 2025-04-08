import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Tweet {
  user: {
    avatar: string;
    name: string;
    username?: string;
  };
  text: string;
  timestamp: string;
  stats?: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

const TweetCard: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username || 'username'}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.timestamp}>{tweet.timestamp}</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Feather name="more-horizontal" size={16} color="#555" />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>{tweet.text}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="comment-o" size={18} color="#555" />
            {tweet.stats && <Text style={styles.actionCount}>{tweet.stats.replies}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="retweet" size={18} color="#555" />
            {tweet.stats && <Text style={styles.actionCount}>{tweet.stats.retweets}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="heart-o" size={18} color="#555" />
            {tweet.stats && <Text style={styles.actionCount}>{tweet.stats.likes}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Feather name="share" size={18} color="#555" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  username: {
    color: '#536471',
    marginRight: 5,
  },
  dot: {
    color: '#536471',
    marginRight: 5,
  },
  timestamp: {
    color: '#536471',
  },
  moreButton: {
    padding: 5,
  },
  text: {
    marginVertical: 5,
    color: '#0f1419',
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  actionText: {
    marginLeft: 5,
    color: '#555',
  },
  actionCount: {
    marginLeft: 5,
    color: '#536471',
    fontSize: 12,
  },
});

export default TweetCard;
