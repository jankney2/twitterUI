

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import Home from './components/Home'

import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

const height=Dimensions.get('window').height
const width=Dimensions.get('window').width


const tabNav=createBottomTabNavigator({
  Home:Home
})

export default createAppContainer(tabNav)

const App= ()=> {
  return (

<SafeAreaView style={styles.container}>

</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    height:height, 
    width: width
  }
});

