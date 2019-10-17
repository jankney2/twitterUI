import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

export default Tweet=(props)=>{
    return(
        <View style={styles.tweetContain}>
            <Image
            style={styles.img}
            source={{uri:props.photoUrl}}/>
            <View>
                <Text>{`${props.accName} ${props.handle}`}</Text>
                <Text>{props.tweetContent}</Text>
                <View><Text>Icons</Text></View>
                </View>    
        </View>
    )
}

const styles=StyleSheet.create({
    tweetContain: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'flex-start'
    }, 
    img: {
      height:25, 
      width:25, 
      borderRadius:25  
    }
})