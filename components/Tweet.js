import React, {useState} from 'react';

import {Text, View, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';


export default Tweet = props => {
  let [heartStatus, toggleHeart]=useState(false)
  let [retweetStatus, toggleRetweet]=useState(false)
  
  const heart = <Icon name="heart-o" size={20} color={heartStatus?'red':'#fff'} />;
  const retweet = <Icon name="retweet" size={20} color={retweetStatus?'#39ff14':"#fff"} />;
  const comment = <Icon name="comment-o" size={20} color="#fff" />;
  const share = <Icon name="share" size={20} color={'#fff'} />;

  return (
    <View style={{
      borderBottomColor:'rgba(110, 118, 125, 0.3)', 
borderBottomWidth:.5,
margin:5, 
padding:5
    }}>


    <View style={styles.tweetContain}>
      
<Image style={styles.leftCol}
source={{uri: props.photoUrl}}
/>


      <View style={styles.rightCol}>
        <Text style={styles.text}>{`${props.accName} ${props.handle}`}</Text>
        <Text style={styles.text}>{props.tweetContent}</Text>
       
      </View>
    </View>
    <View style={styles.iconHolder}>
          <TouchableOpacity onPress={()=>{
            toggleHeart(!heartStatus)
          }}>
          {heart}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{
            toggleRetweet(!retweetStatus)
          }}>
          {retweet}

          </TouchableOpacity>
          <TouchableOpacity>
          {comment}

          </TouchableOpacity>
          
          <TouchableOpacity>
          {share}
          </TouchableOpacity>
          

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContain: {
    // padding:5,
    backgroundColor: '#141d26',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('screen').width * 0.05,
    width: Dimensions.get('screen').width * 0.9,
  },

  iconHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    //   flex:1, 
    //   borderWidth:4, 
    //   borderColor:'red', 
      padding:25,
      borderRadius:25,

  }
});
