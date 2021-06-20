import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AccountScreen from './app/screens/AccountScreen';
import MessageScreen from './app/screens/MessageScreen';
import PostsScreen from './app/screens/PostsScreen';
import ChatScreen from './app/screens/ChatScreen';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default function App() {
  return <AppContainer />
}

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
    screen: MessageScreen
  },
  Posts: {
    screen: PostsScreen
  },
  Chats: {
    screen: ChatScreen
  }

}, {
  initialRouteName: "Welcome"
});

const AppContainer = createAppContainer(AppNavigator);