import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AccountScreen from './app/screens/AccountScreen';
<<<<<<< Updated upstream
import MessageScreen from './app/screens/MessageScreen';


export default function App() {
  return <MessageScreen />
=======
import PostsScreen from './app/screens/PostsScreen';


export default function App() {
  return <PostsScreen />
>>>>>>> Stashed changes
}

