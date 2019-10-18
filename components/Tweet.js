import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const heart = <Icon name="heart-o" size={20} color="#000" />;
const retweet = <Icon name="retweet" size={20} color="#000" />;
const comment = <Icon name="comment-o" size={20} color="#000" />;
const share = <Icon name="share" size={20} color="#000" />;

export default Tweet = props => {
  return (
    <View style={styles.tweetContain}>
      <Image style={styles.img} source={{uri: props.photoUrl}} />
      <View>
        <Text>{`${props.accName} ${props.handle}`}</Text>
        <Text>{props.tweetContent}</Text>
        <View style={styles.iconHolder}>
          {heart}
          {share}
          {comment}
          {retweet}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContain: {
    // padding:5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('screen').width * 0.05,
    width: Dimensions.get('screen').width * 0.9,
    marginBottom: 5,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  iconHolder: {
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-evenly', 
      alignItems:'center'
  }
});
