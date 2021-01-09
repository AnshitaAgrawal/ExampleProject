import React, { createContext, useState } from 'react';
import { View,AsyncStorage } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({})
  

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userData,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          // Get the users ID token
          try{
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const data = await auth().signInWithCredential(googleCredential)
            console.log("google credentials=====", data.additionalUserInfo.profile)
            await AsyncStorage.setItem('Profile',  JSON.stringify(data.additionalUserInfo.profile))
            //setUserData(data.additionalUserInfo.profile)
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          }
         catch(error){
           console.log({error});
         }
{console.log("userdata in auth===",userData)}
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};