import React from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions, View} from 'react-native';
import Home from './components/Home';
import Messages from './components/Messages';
import Search from './components/Search';
import Notifications from './components/Notifications';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome'




const tabNav = createBottomTabNavigator(
  {
    Home:{
      screen:Home,
      navigationOptions:({tintColor})=>({
        tabBarIcon:<Icon name='home'
        color={tintColor}
        size={24}
        />
      })      
    },  
    Search:{
      screen:Search,
      navigationOptions:()=>({
        // tabBarIcon:icon
      })      
    },  
    Notifications:{
      screen:Notifications,
      navigationOptions:()=>({
        // tabBarIcon:icon
      })      
    },  
    Messages:{
      screen:Messages,
      navigationOptions:()=>({
        // tabBarIcon:icon
      })      
    },  
      
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'black',
      inactiveBackgroundColor: 'black',
      style:{
        
              backgroundColor:'black', 
              // borderWidth: 4,
              // borderColor:'red'

      }
    },


      
  },
);

const Container = createAppContainer(tabNav);

export default App = () => {
  return (
    <SafeAreaView style={{
      backgroundColor: 'black', 
      flex:1, 
      }}>
      <Container />
    </SafeAreaView>
  );
};
