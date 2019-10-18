import React from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions, View} from 'react-native';
import Home from './components/Home';
import Messages from './components/Messages';
import Search from './components/Search';
import Notifications from './components/Notifications';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

const homeIcon = <Icon name="home" color={'white'} size={24} />;




const tabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={24} />
        ),
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {

        tabBarIcon: ({tintColor}) => (
          <Icon name="bell-o" color={tintColor} size={24} />
        ),
      },
    },
    Messages: {
      screen: Messages,
      navigationOptions: {

        tabBarIcon: ({tintColor}) => (
          <Icon name="commenting-o" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor:'#1da1f2',
      inactiveTintColor: 'rgba(110, 118, 125, 0.3)',
      activeBackgroundColor: '#141d26',
      inactiveBackgroundColor: '#141d26',
      showIcon: true,
      showLabel:false,
      style: {
        backgroundColor: '#141d26',

        // borderWidth: 4,
        // borderColor:'red'
      },
    },
  },
);

const Container = createAppContainer(tabNav);

export default App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#141d26',
        flex: 1,
      }}>
      <Container />
    </SafeAreaView>
  );
};
