import React from 'react';
import { Image, StyleSheet, TextInput, Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import AppScreen from "../components/AppScreen";
import AppListInfo from "../components/lists/AppListInfo";
import ListItemSeparator from "../components/lists/ItemSeparatorComponent";
import colors from "../config/colors";
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function AccountScreen(props) {

  const { userData } = require("../constants/constants.js");
  var index;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].userName == props.navigation.state.params.username) {
      index = i;
      break;
    }
  }

  console.log(index);
  return (
    <AppScreen style={{ backgroundColor: colors.light }}>
      <View style={styles.container}>
        <AppListInfo
          image={require("../assets/profile-photo.png")}
          title={userData[index].firstName + " " + userData[index].lastName}
          subTitle={userData[index].userName}
          style={{ borderRadius: 25 }}
          disabled={true}
        />
      </View>
      {/*<View style={styles.myBorrowed}>
        <AppListInfo
          image={require("../assets/profile-photo.png")}
          title="Shane"
          style={{ borderRadius: 25, height: 250, marginBottom: 90, alignItems: "flex-start" }}
          disabled={true}
        />
  </View>
      <View style={[styles.container, { justifyContent: "flex-end" }]}>
        <AppListInfo
          title="My History"
          iconType="logout"
          iconBackground="#ffe66d"
          iconColor={colors.white}
          //onPress={handleLogout}
          style={{ borderRadius: 35 }}
          touchable={true}
        />
      </View>*/}
      <View style={[styles.container, { justifyContent: "flex-end" }]}>
        <AppListInfo
          title="Logout"
          iconType="logout"
          iconBackground="#ffe66d"
          iconColor={colors.white}
          onPress={() => { props.navigation.navigate('Login') }}
          style={{ borderRadius: 35 }}
          touchable={true}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    shadowColor: colors.light,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    fontFamily: 'centurygothic',
  },
  myBorrowed: {
    padding: 10,
    shadowColor: colors.light,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  }
})

export default AccountScreen;