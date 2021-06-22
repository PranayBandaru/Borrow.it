import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AccountScreen from './app/screens/AccountScreen';
import MessageScreen from './app/screens/MessageScreen';
import PostsScreen from './app/screens/PostsScreen';
import ChatScreen from './app/screens/ChatScreen';
import NewPostScreen from './app/screens/NewPostScreen';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { UserName } from './app/components/styles/MessageStyles';
import AppListingItems from './app/components/lists/AppListingItems';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';

export default function App() {
  //return <NewPostScreen />
  return <AppContainer />
}

const fetchFonts = () => {
  return Font.loadAsync({
  'centurygothic': require('./app/assets/fonts/CenturyGothic.ttf'),
  'centurygothic-bold': require('./app/assets/fonts/CenturyGothic-Bold.ttf'),
  });
  };

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Signup: {
    screen: SignUpScreen
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Account: {
    screen: AccountScreen
  },
  Messages: {
    screen: MessageScreen,
/*     navigationOptions: props => ({
      userName: props.navigation.state.params.userName,
    }),   
 */  },
  Posts: {
    screen: PostsScreen
  },
  Chats: {
    screen: ChatScreen
  },
  NewPost: {
    screen: NewPostScreen
  },
  ListingItems: {
    screen: AppListingItems
  },
  ListingDetails: {
    screen: ListingDetailsScreen
  },

}, {
  initialRouteName: "Welcome"
});

const AppContainer = createAppContainer(AppNavigator);