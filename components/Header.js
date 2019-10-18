import React from 'react'
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
const gear= <Icon name='gears' color='#fff' size={20} />




export default Header=(props)=>{
    return(
        <View style={{
            borderBottomColor:'rgba(110, 118, 125, 0.3)', 
            borderBottomWidth:1,
            marginBottom:2
        }}>


<View style={styles.contain}>
    <Image source={{uri:'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}
    style={styles.image}
    />
    <Text style={{color:'white'}}>{props.activeRoute}</Text>
<Text>{gear}</Text>
</View>
</View>
    )
}

const styles=StyleSheet.create({
    contain:{
        width: '95%', 
        marginLeft:'2.5%',
        padding:10,
display:'flex', 
flexDirection:'row', 
alignItems:'center', 
justifyContent:'space-between', 

    },
    image:{
        height:50, 
        width:50, 
        borderRadius:50,
    }
})