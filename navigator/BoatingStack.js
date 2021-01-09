import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FolderScreen from '../src/FolderScreen';
import BoatingFlatList from '../src/BoatingFlatList';
import UrbanDirectry from '../src/UrbanDirectry';
import TrashScreen from '../src/TrashScreen';
import ImageScreen from '../src/shivam/ImageScreen';
import MainImageScreen from '../src/shivam/MainImageScreen';


const Stack = createStackNavigator();
const BoatingStack=()=>{
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="main" component={MainImageScreen} 
             options={{
              headerShown:false
          }}/>
            <Stack.Screen name="imageScreen" component={ImageScreen}
              options={{1
              headerShown:false
          }}/> */}
           <Stack.Screen name="Urban" component={UrbanDirectry}/> 
          <Stack.Screen name="Home" component={FolderScreen} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="Trash" component={TrashScreen}/>
          <Stack.Screen name="Notifications" component={BoatingFlatList} 
          options={{
            headerShown:false
        }}
        />
       
        </Stack.Navigator>
      );
}

export default BoatingStack;
