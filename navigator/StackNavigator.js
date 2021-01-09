import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontQuizPage from '../src/FrontQuizPage';
import QuizApp from '../src/QuizPage';

const Stack = createStackNavigator();
const StackNavigator=()=>{
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FrontQuizPage} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="Notifications" component={QuizApp} 
          options={{
            headerShown:false
        }}
        />
       
        </Stack.Navigator>
      );
}

export default StackNavigator;
