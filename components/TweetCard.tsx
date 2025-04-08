import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Tweet {
  user: {
    avatar: string;
    name: string;
  };
  text: string;
}

const TweetCard: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.text}>{tweet.text}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="heart-o" size={20} color="#555" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="retweet" size={20} color="#555" />
            <Text style={styles.actionText}>Retweet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="comment-o" size={20} color="#555" />
            <Text style={styles.actionText}>Reply</Text>
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
  name: {
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    marginVertical: 5,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: '#555',
  },
});

export default TweetCard;
