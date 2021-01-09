import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import FolderNavigator from './FolderNavigator';
import BoatingStack from './BoatingStack';
import Icon from 'react-native-vector-icons/AntDesign';
import Stack2 from './Stack2';
import Stack1 from './Stack1';

const Tab = createBottomTabNavigator();

const BottomTab=()=> {

    return (
        <Tab.Navigator>
        <Tab.Screen name="HomeNavigation" component={Stack2}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={24} color="black" />
            ),
          }} />
        <Tab.Screen name="SettingNavigation" component={Stack1} 
        options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name="setting" size={24} color="black" />
            ),
          }} />
      </Tab.Navigator>
    );
  }
export default BottomTab;
