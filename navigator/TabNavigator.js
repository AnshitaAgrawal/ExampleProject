import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuizApp from '../src/QuizPage';
import FrontQuizPage from '../src/FrontQuizPage';

const Tab = createBottomTabNavigator();

const TabNavigator=()=> {
  
 return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={FrontQuizPage}
          />
        <Tab.Screen name="Settings" component={QuizApp} />
      </Tab.Navigator>
    );
  }
export default TabNavigator;
