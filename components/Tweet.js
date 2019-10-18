import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const heart = <Icon name="heart-o" size={20} color="#fff" />;
const retweet = <Icon name="retweet" size={20} color="#fff" />;
const comment = <Icon name="comment-o" size={20} color="#fff" />;
const share = <Icon name="share" size={20} color="#fff" />;

export default Tweet = props => {
  return (
    <View style={styles.tweetContain}>
      
<ImageBackground style={styles.leftCol}
source={{uri: props.photoUrl}}
/>


      <View style={styles.rightCol}>
        <Text style={styles.text}>{`${props.accName} ${props.handle}`}</Text>
        <Text style={styles.text}>{props.tweetContent}</Text>
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
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('screen').width * 0.05,
    width: Dimensions.get('screen').width * 0.9,
borderBottomColor:'white', 
borderBottomWidth:3,
margin:5, 
padding:5
  },

  iconHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom:'3%',
  },
  text: {
    color: 'white',
    margin:5,
  },
  rightCol: {
      flex:9, 
    padding:5
  }, 
  leftCol: {
      flex:1, 
      borderWidth:4, 
      borderColor:'red', 
      padding:50,
      borderRadius:15,

  }
});
