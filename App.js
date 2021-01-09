
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {AuthProvider} from './navigator/AuthProvider';
import AppStack from './navigator/AppStack';
import PracticeTT from './src/PracticeTT';
import ContextProvider from './src/ContextProvider';
import ExpensesAppPage from './src/ExpensesAppPage';
import Victoryy from './src/SwipeToDelete';
import SwipeToDelete from './src/SwipeToDelete';
//  import StackNavigator from './navigator/StackNavigator';
// import CustomSearchBar from './components/Newscomponents/CustomSearchBar';
// import NewsAppScreen from './src/NewsAppScreen';
// import { createStackNavigator } from '@react-navigation/stack';

// import BlockCard from './components/Newscomponents/BlockCard';
// import Home from './src/CustomHome';
// import ContextFile from './src/ContextFile';
// import CreateContext from './src/CreateContext';
// import ContextProvider from './src/ContextProvider';
// import OnBoardingUI from './src/OnBoardingUI';
import { NavigationContainer } from '@react-navigation/native';
//  import OnBoardNavigator from './navigator/OnBoardNavigator';
import ExpamdLandscape from './src/ExpandLandscape';
import FolderPage from './src/FolderPage';
import FolderNavigator from './navigator/FolderNavigator';
import CustomSketch from './src/CustomSketch';
import FolderScreen from './src/FolderScreen';
import ChangePasswordScreen from './src/ChangePasswordScreen';
import ConatctUs from './src/ConatctUs';
import MyProfile from './src/MyProfile';
import ZoomImage from './src/ZoomImage';
import FlatListPage from './src/FlatListPage';
import BoatingScreen from './src/BoatingScreen';
import TransformStyle from './src/TransformStyle';
import TrueCircleLogin from './src/TrueCircleLogin';
import BoatingFlatList from './src/BoatingFlatList';
import BoatingStack from './navigator/BoatingStack';
import ImageFlatlist from './src/ImageFlatList';
import CustomCircularpie from './src/CustomCircularpie';
import MainImageScreen from './src/shivam/MainImageScreen';
import ImageScreen from './src/shivam/ImageScreen';
import BottomTab from './navigator/BottomTab';

const App=()=>{
  
  return (
    //<TrueCircleLogin/>
    //<TransformStyle/>
    //<BoatingFlatList/>
    //<BoatingScreen/>
    //<FlatListPage/>
     //<MyProfile/>
     //<ConatctUs/>
   //<ChangePasswordScreen/>
     //<FolderScreen/>
    //<ZoomImage/>
    //<ImageFlatlist/>
    //<CustomCircularpie/>
  
       <NavigationContainer>
        <BottomTab/>
       </NavigationContainer>
    // <ExpamdLandscape/>
    //  <SwipeToDelete/>
  //  <ExpensesAppPage/>
    //  <AuthProvider>
    //    <ContextProvider/>
    //  </AuthProvider>
  );
}
 




export default App;
