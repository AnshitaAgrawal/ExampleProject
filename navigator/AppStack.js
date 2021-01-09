import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import OnBoardNavigator from '../navigator/OnBoardNavigator';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import StackNavigator from './StackNavigator';
import { AuthContext } from './AuthProvider';


const AppStack = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

      if (initializing) return null;
   
    return (
        <NavigationContainer>
            {user ? <StackNavigator/> : <OnBoardNavigator />}
        </NavigationContainer>


    )
}

export default AppStack;