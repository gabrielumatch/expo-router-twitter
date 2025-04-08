import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TweetCard from './TweetCard';

interface Tweet {
  user: {
    avatar: string;
    name: string;
  };
  text: string;
}

const TweetList: React.FC<{ tweets: Tweet[] }> = ({ tweets }) => {
  return (
    <View style={styles.container}>
      <LegendList
        data={tweets}
        renderItem={({ item }: LegendListRenderItemProps<Tweet>) => <TweetCard tweet={item} />}
        keyExtractor={(item: Tweet, index: number) => index.toString()}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default TweetList;
