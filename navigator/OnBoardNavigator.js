import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizApp from '../src/QuizPage';
import OnBoardingUI from '../src/OnBoardingUI';
import FirebaseLoginPage from '../src/FirebaseLoginPage';
import FirebaseSignUpPage from '../src/FirebaseSignUpPage';
import { GoogleSignin } from '@react-native-community/google-signin';


const Stack = createStackNavigator();
const OnBoardNavigator=()=>{
    useEffect(() => {
        // initialize the Google SDK
        GoogleSignin.configure({
          webClientId: "811909117803-e4qgiue18dbi8n74p071e8h23m6tg408.apps.googleusercontent.com",
        });
      }, []);
    return (
       
        <Stack.Navigator>

              <Stack.Screen name="Login" component={FirebaseLoginPage} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="SignUp" component={FirebaseSignUpPage} 
          options={{
              headerShown:false
          }}
          />
          {/* <Stack.Screen name="Home" component={OnBoardingUI} 
          options={{
              headerShown:false
          }}
          />
          <Stack.Screen name="Notifications" component={QuizApp} 
          options={{
            headerShown:false
        }}
        />
        */}
        </Stack.Navigator>
     
      );
}

export default OnBoardNavigator;
