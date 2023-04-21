import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen/MainScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};


export default HomeScreen;
