import React from 'react'
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native'



export default Header=(props)=>{
    return(
<View style={styles.contain}>
    <Image source={{uri:'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}
    style={styles.image}
    />
    <Text>{props.activeRoute}</Text>
<Text>Icon placeholder</Text>
</View>
    )
}

const styles=StyleSheet.create({
    contain:{
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