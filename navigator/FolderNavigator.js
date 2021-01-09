import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FolderPage from '../src/FolderPage';
import FolderScreen from '../src/FolderScreen';


const Stack = createStackNavigator();
const FolderNavigator=()=>{
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FolderPage} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="Notifications" component={FolderScreen} 
          options={{
            headerShown:false
        }}
        />
       
        </Stack.Navigator>
      );
}

export default FolderNavigator;
