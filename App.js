import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
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
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import PostsSportsScreen from './app/screens/PostsSportsScreen';
import PostsMusicScreen from './app/screens/PostsMusicScreen';
import PostsEDScreen from './app/screens/PostsEDScreen';
import PostsAccessoryScreen from './app/screens/PostsAccessoryScreen';
import PostsBooksScreen from './app/screens/PostsBooksScreen';
import ChatDisplayScreen from './app/screens/ChatDisplayScreen'

export default function App() {
  
  const [loaded] = useFonts({
    centurygothic: require('./app/assets/fonts/CenturyGothic.ttf'),
    centurygothic_bold: require('./app/assets/fonts/CenturyGothic-Bold.ttf'),
    
  });
  
  if (!loaded) {
    return null;
  }
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
    screen: MessageScreen,
  },
  Posts: {
    screen: PostsScreen
  },
  Chats: {
    screen: ChatScreen
  },
  ChatsDisplay: {
    screen: ChatDisplayScreen
  },
  NewPost: {
    screen: NewPostScreen
  },
  ListingItems: {
    screen: AppListingItems
  },
  ListingDetails: {
    screen: ListingDetailsScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  PostsSports: {
    screen: PostsSportsScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  PostsBooks: {
    screen: PostsBooksScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  PostsMusic: {
    screen: PostsMusicScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  PostsED: {
    screen: PostsEDScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  PostsAccessory: {
    screen: PostsAccessoryScreen,
    navigationOptions: {
      headerShown: false,
    }
  },

}, {
  initialRouteName: "Welcome"
});

const AppContainer = createAppContainer(AppNavigator);