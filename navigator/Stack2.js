import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home=({navigation})=>{
    return(
        <View>
            <Text>Home screen</Text>
            <Button 
            title="go to next screen"
            onPress={()=>navigation.navigate("Home1")}
            />
        </View>
    )
}
// navigation.navigate('Root', {
//     screen: 'Settings',
//     params: { user: 'jane' },
//   });

const Home1=({navigation})=>{
    const [get , setGet]=useState("Anshita")
    return(
        <View>
            <Text>Home screen 1</Text>
            <Text>{get}</Text>
            <Button
            title="go to setting2 screen"
            onPress={()=>navigation.navigate('SettingNavigation',
            {screen : 'Setting' , params :{ get:get}}
            )}
            />
        </View>
    )
}
const Stack2 =()=> {

    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Home1" component={Home1} 
        options={{
          headerShown:false
      }}
      />
     
      </Stack.Navigator>
    );
  }
export default Stack2;
