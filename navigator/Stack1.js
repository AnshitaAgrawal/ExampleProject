import React from 'react';
import { View, Text ,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const setting=({navigation,route})=>{

    let arr=route.params.get
    console.log("arrr-=====",arr)
    return(
        <View>
            <Text>setting screen {arr}</Text>
            <Button
             title="go to setting screen 2"
             onPress={()=>navigation.navigate("Setting1")}
             />
        </View>
    )
}
const setting1=()=>{
    return(
        <View>
            <Text>setting screen 1</Text>
        </View>
    )
}
const Stack1 =()=> {

    return (
        <Stack.Navigator>
          <Stack.Screen name="Setting" component={setting} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="Setting1" component={setting1} 
          options={{
            headerShown:false
        }}
        />
       
        </Stack.Navigator>
    );
  }
export default Stack1;
