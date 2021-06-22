import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../components/styles/MessageStyles';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Messages } from '../constants/constants';

const MessageScreen = (props) => {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => {props.navigation.navigate('Chats', { userName: item.userName })}}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});