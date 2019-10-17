import React from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions, View} from 'react-native';
import Home from './components/Home';
import Messages from './components/Messages';
import Search from './components/Search';
import Notifications from './components/Notifications';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


const tabNav = createBottomTabNavigator({
  Home: Home,
  Messages: Messages,
  Search: Search,
  Notifications: Notifications,
});

export default createAppContainer(tabNav);


